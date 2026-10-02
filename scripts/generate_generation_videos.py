"""
Generates 5 High-Definition MP4 Videos (one for each computer generation)
with cinematic Ken Burns zoom/pan, HUD glassmorphic telemetry overlays,
animated audio visualizer bars, and bilingual (Marathi + English) typography.
"""
import os
import math
import numpy as np
import cv2
from PIL import Image, ImageDraw, ImageFont

def get_font(size, bold=False):
    font_paths = [
        "C:\\Windows\\Fonts\\segoeuib.ttf" if bold else "C:\\Windows\\Fonts\\segoeui.ttf",
        "C:\\Windows\\Fonts\\arialbd.ttf" if bold else "C:\\Windows\\Fonts\\arial.ttf",
        "C:\\Windows\\Fonts\\tahoma.ttf",
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

def create_generation_video(config, output_path, width=1280, height=720, fps=25, duration_sec=6):
    total_frames = fps * duration_sec
    base_img_path = config["image_path"]
    
    if not os.path.exists(base_img_path):
        print(f"Image not found: {base_img_path}")
        return False
        
    src_img = Image.open(base_img_path).convert("RGB")
    src_w, src_h = src_img.size
    
    # Pre-scale image to at least 1.25x of target dimensions to allow smooth zoom
    target_aspect = width / height
    src_aspect = src_w / src_h
    
    if src_aspect > target_aspect:
        new_h = int(height * 1.25)
        new_w = int(new_h * src_aspect)
    else:
        new_w = int(width * 1.25)
        new_h = int(new_w / src_aspect)
        
    scaled_base = src_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Fonts
    font_badge = get_font(18, bold=True)
    font_title_en = get_font(34, bold=True)
    font_title_mr = get_font(26, bold=False)
    font_desc = get_font(19, bold=False)
    font_hud_tag = get_font(14, bold=True)
    font_hud_val = get_font(16, bold=True)
    font_timer = get_font(15, bold=True)
    
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    for frame_idx in range(total_frames):
        t = frame_idx / total_frames
        
        # Ken Burns zoom & subtle pan
        zoom = 1.0 + 0.12 * math.sin(t * math.pi)
        curr_crop_w = int(width / zoom)
        curr_crop_h = int(height / zoom)
        
        # Pan offset (slight drift to right and down)
        max_pan_x = max(0, new_w - curr_crop_w)
        max_pan_y = max(0, new_h - curr_crop_h)
        pan_x = int(max_pan_x * (0.2 + 0.6 * t))
        pan_y = int(max_pan_y * (0.3 + 0.4 * math.sin(t * math.pi)))
        
        cropped = scaled_base.crop((pan_x, pan_y, pan_x + curr_crop_w, pan_y + curr_crop_h))
        frame_canvas = cropped.resize((width, height), Image.Resampling.BILINEAR)
        
        # Overlay Layer
        overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        draw = ImageDraw.Draw(overlay)
        
        # Vignette / gradient overlays
        # Top gradient banner
        for y in range(160):
            alpha = int(220 * (1.0 - (y / 160.0)**1.5))
            draw.line([(0, y), (width, y)], fill=(15, 23, 42, alpha))
            
        # Bottom gradient banner
        for y in range(height - 220, height):
            progress = (y - (height - 220)) / 220.0
            alpha = int(245 * (progress**1.2))
            draw.line([(0, y), (width, y)], fill=(15, 23, 42, alpha))
            
        # Top Glassmorphic Badge: Era & Generation
        badge_x, badge_y = 50, 40
        badge_text = f"GEN 0{config['gen_num']}  •  {config['era']}  •  HISTORICAL ARCHIVE"
        draw.rounded_rectangle([badge_x, badge_y, badge_x + 380, badge_y + 36], radius=8, fill=(79, 70, 229, 210), outline=(199, 210, 254, 230))
        draw.text((badge_x + 18, badge_y + 8), badge_text, fill=(255, 255, 255), font=font_badge)
        
        # Live / Playing indicator
        rec_x = width - 180
        draw.ellipse([rec_x, badge_y + 10, rec_x + 14, badge_y + 24], fill=(239, 68, 68, 255))
        draw.text((rec_x + 22, badge_y + 8), "PLAYING REEL", fill=(255, 255, 255), font=font_timer)
        
        # Main Title (English & Marathi transliteration)
        draw.text((50, badge_y + 46), config["title_en"], fill=(255, 255, 255), font=font_title_en)
        draw.text((50, badge_y + 90), config["title_mr"], fill=(254, 215, 170), font=font_title_mr)
        
        # Bottom Glassmorphic Telemetry HUD Card
        hud_x, hud_y = 50, height - 165
        hud_w, hud_h = width - 100, 115
        draw.rounded_rectangle([hud_x, hud_y, hud_x + hud_w, hud_y + hud_h], radius=16, fill=(15, 23, 42, 210), outline=(255, 255, 255, 45))
        
        # HUD Columns: 4 Key Specifications
        specs = config["specs"]
        col_w = (hud_w - 60) // 4
        for idx, (label, val) in enumerate(specs):
            cx = hud_x + 24 + idx * col_w
            draw.text((cx, hud_y + 18), label.upper(), fill=(148, 163, 184), font=font_hud_tag)
            draw.text((cx, hud_y + 38), val, fill=(255, 255, 255), font=font_hud_val)
            
        # Audio Frequency Visualizer animation
        vis_x = hud_x + 24
        vis_y = hud_y + 78
        num_bars = 48
        bar_w = 4
        bar_gap = 4
        for b in range(num_bars):
            freq = math.sin(t * 12.0 + b * 0.4) * 0.5 + 0.5
            bar_h = int(6 + freq * 18 + 5 * math.sin(t * 24.0 + b * 0.8))
            bx = vis_x + b * (bar_w + bar_gap)
            color_blend = (
                int(99 + 150 * (b / num_bars)),
                int(102 + 50 * math.sin(b * 0.2)),
                241,
                240
            )
            draw.rounded_rectangle([bx, vis_y + (24 - bar_h), bx + bar_w, vis_y + 24], radius=2, fill=color_blend)
            
        # Description text next to visualizer
        desc_text = config["caption"]
        draw.text((vis_x + num_bars * (bar_w + bar_gap) + 24, vis_y + 4), desc_text, fill=(226, 232, 240), font=font_desc)
        
        # Progress Bar at bottom of HUD
        prog_y = hud_y + hud_h - 10
        draw.line([(hud_x + 16, prog_y), (hud_x + hud_w - 16, prog_y)], fill=(51, 65, 85, 255), width=4)
        draw.line([(hud_x + 16, prog_y), (hud_x + 16 + int((hud_w - 32) * t), prog_y)], fill=(249, 115, 22, 255), width=4)
        
        # Composite frame
        frame_canvas.paste(overlay, (0, 0), overlay)
        
        # Convert RGB PIL to BGR OpenCV
        cv_frame = cv2.cvtColor(np.array(frame_canvas), cv2.COLOR_RGB2BGR)
        out.write(cv_frame)
        
    out.release()
    print(f"Generated: {output_path}")
    return True

def main():
    target_dir = os.path.abspath("assets/videos")
    os.makedirs(target_dir, exist_ok=True)
    
    generations = [
        {
            "gen_num": 1,
            "era": "1940 – 1956",
            "title_en": "First Generation: Vacuum Tubes & ENIAC",
            "title_mr": "१ली पिढी: व्हॅक्यूम ट्यूब्स व प्रचंड संगणक",
            "image_path": "assets/images/eniac_1946.jpg",
            "caption": "18,000+ व्हॅक्यूम ट्यूब्स • खोलीएवढा आकार • मॅन्युअल पंच कार्ड इनपुट",
            "specs": [
                ("मूळ घटक (Core)", "व्हॅक्यूम ट्यूब्स (Vacuum Tubes)"),
                ("वेग (Speed)", "५,००० बेरीज/सेकंद (Addition/sec)"),
                ("मेमरी (Memory)", "मॅग्नेटिक ड्रम्स (Magnetic Drums)"),
                ("प्रसिद्ध मशीन (Example)", "ENIAC, UNIVAC, EDVAC")
            ]
        },
        {
            "gen_num": 2,
            "era": "1956 – 1963",
            "title_en": "Second Generation: Transistors Revolution",
            "title_mr": "२री पिढी: ट्रान्झिस्टर क्रांती व IBM 1401",
            "image_path": "assets/images/transistor_1947.jpg",
            "caption": "कमी उष्णता • अतिवेगवान कार्यक्षमता • असेंब्ली, FORTRAN व COBOL भाषा",
            "specs": [
                ("मूळ घटक (Core)", "ट्रान्झिस्टर (Transistors)"),
                ("वेग (Speed)", "मायक्रोसेकंद (Microseconds)"),
                ("मेमरी (Memory)", "मॅग्नेटिक कोर (Magnetic Core)"),
                ("प्रसिद्ध मशीन (Example)", "IBM 1401, CDC 1604")
            ]
        },
        {
            "gen_num": 3,
            "era": "1964 – 1971",
            "title_en": "Third Generation: Integrated Circuits (ICs)",
            "title_mr": "३री पिढी: इंटिग्रेटेड सर्किट्स व सिलिकॉन चिप्स",
            "image_path": "assets/images/integrated_circuits_1964.jpg",
            "caption": "एकाच सिलिकॉन चिपवर हजारो घटक • कीबोर्ड व मॉनिटरचे आगमन • मल्टिप्रोग्रामिंग",
            "specs": [
                ("मूळ घटक (Core)", "इंटिग्रेटेड सर्किट (IC Chips)"),
                ("वेग (Speed)", "नॅनोसेकंद (Nanoseconds)"),
                ("इंटरफेस (Interface)", "मॉनिटर व कीबोर्ड (Keyboard/OS)"),
                ("प्रसिद्ध मशीन (Example)", "IBM System/360, PDP-8")
            ]
        },
        {
            "gen_num": 4,
            "era": "1971 – Present",
            "title_en": "Fourth Generation: Microprocessors & PCs",
            "title_mr": "४थी पिढी: मायक्रोप्रोसेसर व पर्सनल कॉम्प्युटर",
            "image_path": "assets/images/pc_revolution.jpg",
            "caption": "Intel 4004 • VLSI/ULSI तंत्रज्ञान • लॅपटॉप, स्मार्टफोन व इंटरनेट क्रांती",
            "specs": [
                ("मूळ घटक (Core)", "मायक्रोप्रोसेसर (VLSI / ULSI)"),
                ("वेग (Speed)", "गीगाहर्ट्झ (Billions ops/sec)"),
                ("मेमरी (Memory)", "Semiconductor RAM / SSD"),
                ("प्रसिद्ध मशीन (Example)", "Apple II, IBM PC, Modern Laptops")
            ]
        },
        {
            "gen_num": 5,
            "era": "Present & Beyond",
            "title_en": "Fifth Generation: Artificial Intelligence & Quantum",
            "title_mr": "५वी पिढी: कृत्रिम बुद्धिमत्ता (AI) व सुपरकॉम्प्युटिंग",
            "image_path": "assets/images/cloud_ai_datacenter.jpg",
            "caption": "न्यूरल नेटवर्क्स • नॅचरल लँग्वेज प्रोसेसिंग • क्लाऊड सुपरक्लस्टर्स व क्वांटम संगणक",
            "specs": [
                ("मूळ घटक (Core)", "AI, GPU Tensornets, Quantum Qubits"),
                ("वेग (Speed)", "Exaflops (क्विंटिलियन गणित/सेकंद)"),
                ("मेमरी (Memory)", "High-Bandwidth HBM3e / Cloud Dist"),
                ("प्रसिद्ध तंत्रज्ञान (Example)", "ChatGPT, DeepMind, PARAM, Quantum")
            ]
        }
    ]
    
    for gen in generations:
        out_file = os.path.join(target_dir, f"gen{gen['gen_num']}_video.mp4")
        print(f"Creating video for Gen {gen['gen_num']}...")
        create_generation_video(gen, out_file)
        
    print("All 5 videos generated successfully!")

if __name__ == "__main__":
    main()
