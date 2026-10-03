import os
import sys
import math
import subprocess
import cv2
import numpy as np

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

FFMPEG_EXE = r'C:\Users\omkar\AppData\Local\uv\cache\archive-v0\1OGPQ28jC_EbwJWZ\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'

WIDTH = 1280
HEIGHT = 720
FPS = 24

GEN_CONFIGS = {
    1: {
        "title": "GEN-01 // व्हॅक्यूम ट्यूब्स व ENIAC (1940 – 1956)",
        "audio": "assets/audio/gen1_mr.mp3",
        "images": [
            ("assets/images/babbage_engine.jpg", 0.0, 0.45),
            ("assets/images/eniac_1946.jpg", 0.40, 1.0)
        ],
        "hud_code": "VACUUM-TUBE // 18,000 UNITS // 150 kW",
        "accent_color": (255, 185, 70)  # Amber gold
    },
    2: {
        "title": "GEN-02 // ट्रान्झिस्टर क्रांती व IBM 1401 (1956 – 1963)",
        "audio": "assets/audio/gen2_mr.mp3",
        "images": [
            ("assets/images/transistor_1947.jpg", 0.0, 0.50),
            ("assets/images/hero_museum.jpg", 0.45, 1.0)
        ],
        "hud_code": "TRANSISTOR // BELL LABS // FORTRAN & COBOL",
        "accent_color": (240, 200, 90)  # Golden yellow
    },
    3: {
        "title": "GEN-03 // इंटिग्रेटेड सर्किट्स व अपोलो ११ (1964 – 1971)",
        "audio": "assets/audio/gen3_mr.mp3",
        "images": [
            ("assets/images/integrated_circuits_1964.jpg", 0.0, 0.52),
            ("assets/images/history_timeline_bg.jpg", 0.48, 1.0)
        ],
        "hud_code": "IC-MICROCHIP // SILICON PLANAR // APOLLO 11",
        "accent_color": (120, 210, 255)  # Cyan blue
    },
    4: {
        "title": "GEN-04 // मायक्रोप्रोसेसर व PC क्रांती (1971 – आज)",
        "audio": "assets/audio/gen4_mr.mp3",
        "images": [
            ("assets/images/pc_revolution.jpg", 0.0, 0.52),
            ("assets/images/global_computing_bg.jpg", 0.48, 1.0)
        ],
        "hud_code": "MICROPROCESSOR // INTEL 4004 // PERSONAL PC",
        "accent_color": (255, 130, 90)  # Electric orange
    },
    5: {
        "title": "GEN-05 // कृत्रिम बुद्धिमत्ता (AI) व क्वांटम (भविष्य)",
        "audio": "assets/audio/gen5_mr.mp3",
        "images": [
            ("assets/images/cloud_ai_datacenter.jpg", 0.0, 0.50),
            ("assets/images/india_tifrac_param.jpg", 0.45, 1.0)
        ],
        "hud_code": "NEURAL-AI // PARAM SUPERCLUSTER // QUANTUM QUBIT",
        "accent_color": (190, 110, 255)  # Purple neon
    }
}

def get_audio_duration(audio_path):
    cmd = [FFMPEG_EXE, '-i', audio_path]
    res = subprocess.run(cmd, stderr=subprocess.PIPE, text=True)
    for line in res.stderr.splitlines():
        if 'Duration:' in line:
            parts = line.split('Duration:')[1].split(',')[0].strip().split(':')
            hours = float(parts[0])
            minutes = float(parts[1])
            seconds = float(parts[2])
            return hours * 3600 + minutes * 60 + seconds
    return 55.0

def load_and_prep_image(path):
    if not os.path.exists(path):
        return np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)
    img = cv2.imread(path)
    return img

def render_motion_graphics_reel(gen_id):
    cfg = GEN_CONFIGS[gen_id]
    audio_path = cfg["audio"]
    output_path = f"assets/videos/gen{gen_id}_video.mp4"
    total_duration = get_audio_duration(audio_path)
    total_frames = int(total_duration * FPS)

    print(f"\n=======================================================")
    print(f"🎬 Rendering High-VFX Motion Graphics Reel {gen_id}: {cfg['title']}")
    print(f"  • Duration: {total_duration:.1f}s ({total_frames} frames @ {FPS}fps)")
    print(f"  • Audio: {audio_path}")
    print(f"  • Output: {output_path}")
    print(f"=======================================================")

    # Preload and resize images
    loaded_images = []
    for img_path, start_frac, end_frac in cfg["images"]:
        img = load_and_prep_image(img_path)
        loaded_images.append((img, start_frac, end_frac))

    ffmpeg_cmd = [
        FFMPEG_EXE, '-y',
        '-f', 'rawvideo',
        '-vcodec', 'rawvideo',
        '-s', f'{WIDTH}x{HEIGHT}',
        '-pix_fmt', 'bgr24',
        '-r', str(FPS),
        '-i', '-',
        '-i', audio_path,
        '-c:v', 'libx264',
        '-preset', 'ultrafast',
        '-crf', '21',
        '-c:a', 'aac',
        '-b:a', '192k',
        '-pix_fmt', 'yuv420p',
        '-shortest',
        output_path
    ]

    proc = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

    # Particle system initialized
    np.random.seed(42 + gen_id)
    num_particles = 35
    particle_x = np.random.uniform(0, WIDTH, num_particles)
    particle_y = np.random.uniform(50, HEIGHT - 100, num_particles)
    particle_speed_x = np.random.uniform(1.2, 3.0, num_particles)
    particle_speed_y = np.random.uniform(-0.8, 0.8, num_particles)

    accent_bgr = cfg["accent_color"]

    # Precompute radar center
    rcx, rcy = WIDTH - 95, 95
    r_rad = 52

    # Perspective grid horizon
    horizon_y = int(HEIGHT * 0.74)
    vanish_x = WIDTH // 2

    # Pre-render radial lines for grid
    grid_base = np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)
    for angle in range(-80, 81, 14):
        rad = math.radians(angle)
        end_x = int(vanish_x + math.tan(rad) * (HEIGHT - horizon_y))
        cv2.line(grid_base, (vanish_x, horizon_y), (end_x, HEIGHT), accent_bgr, 1)

    for f_idx in range(total_frames):
        t = f_idx / FPS
        progress = f_idx / total_frames

        # 1. Base Multi-Image Ken-Burns
        # Pick current active image
        canvas = None
        img1, s1, e1 = loaded_images[0]
        img2, s2, e2 = loaded_images[1]

        def get_kb_crop(img, rel_t):
            ih, iw = img.shape[:2]
            zoom = 1.02 + 0.08 * math.sin(rel_t * math.pi)
            crop_w = int(iw / zoom)
            crop_h = int(ih / zoom)
            cx = int(iw * (0.5 + 0.04 * math.sin(rel_t * 2.0)))
            cy = int(ih * (0.5 + 0.03 * math.cos(rel_t * 1.5)))
            x1 = max(0, min(iw - crop_w, cx - crop_w // 2))
            y1 = max(0, min(ih - crop_h, cy - crop_h // 2))
            return cv2.resize(img[y1:y1 + crop_h, x1:x1 + crop_w], (WIDTH, HEIGHT))

        if progress < s2:
            rel_t = progress / e1
            canvas = get_kb_crop(img1, rel_t)
        elif progress > e1:
            rel_t = (progress - s2) / (1.0 - s2)
            canvas = get_kb_crop(img2, rel_t)
        else:
            # Crossfade region
            blend_w = (progress - s2) / (e1 - s2)
            frame1 = get_kb_crop(img1, progress / e1)
            frame2 = get_kb_crop(img2, (progress - s2) / (1.0 - s2))
            canvas = cv2.addWeighted(frame1, 1.0 - blend_w, frame2, blend_w, 0)

        # Tone down brightness slightly for technical HUD readability
        canvas = cv2.convertScaleAbs(canvas, alpha=0.80, beta=8)

        # 2. Add Cyber Perspective Grid
        grid_frame = grid_base.copy()
        grid_offset = (t * 40) % 24
        for y_step in range(horizon_y, HEIGHT, 16):
            cur_y = int(y_step + grid_offset)
            if cur_y < HEIGHT:
                cv2.line(grid_frame, (0, cur_y), (WIDTH, cur_y), accent_bgr, 1)

        canvas = cv2.addWeighted(canvas, 1.0, grid_frame, 0.26, 0)

        # 3. Dynamic Animated Waveform & Equalizer Bars (Vectorized loop)
        wave_overlay = np.zeros_like(canvas)
        base_wave_y = HEIGHT - 78
        
        # Audio frequency visualizer bars
        xs = np.arange(0, WIDTH, 12)
        w1 = np.sin(xs * 0.015 + t * 4.5)
        w2 = np.cos(xs * 0.035 - t * 3.0)
        amps = np.abs(w1 * w2) * (22 + 14 * math.sin(t * 2.2))
        
        for idx, x in enumerate(xs):
            amp = int(amps[idx])
            bar_h = int(amp * 1.3)
            cv2.line(wave_overlay, (int(x), HEIGHT - 32), (int(x), HEIGHT - 32 - bar_h), accent_bgr, 2)
            if idx > 0:
                prev_x = int(xs[idx - 1])
                prev_y = int(base_wave_y - amps[idx - 1])
                cur_y = int(base_wave_y - amp)
                cv2.line(wave_overlay, (prev_x, prev_y), (int(x), cur_y), (255, 255, 255), 2)

        canvas = cv2.addWeighted(canvas, 1.0, wave_overlay, 0.55, 0)

        # 4. Animated Rotating Telemetry Radar HUD (Top Right)
        radar_overlay = np.zeros_like(canvas)
        cv2.circle(radar_overlay, (rcx, rcy), r_rad, accent_bgr, 1)
        cv2.circle(radar_overlay, (rcx, rcy), r_rad - 18, (180, 180, 180), 1)
        cv2.circle(radar_overlay, (rcx, rcy), 4, (255, 255, 255), -1)

        # Radar sweep line
        sweep_ang = t * 2.8
        sweep_x = int(rcx + r_rad * math.cos(sweep_ang))
        sweep_y = int(rcy + r_rad * math.sin(sweep_ang))
        cv2.line(radar_overlay, (rcx, rcy), (sweep_x, sweep_y), (255, 255, 255), 2)

        # Radar blips
        for b_i in range(3):
            ang = b_i * 2.09 + 0.3
            dist = 22 + b_i * 12
            bx = int(rcx + dist * math.cos(ang))
            by = int(rcy + dist * math.sin(ang))
            cv2.circle(radar_overlay, (bx, by), 3, (255, 255, 255), -1)

        canvas = cv2.addWeighted(canvas, 1.0, radar_overlay, 0.75, 0)

        # 5. Animated Energy Particles & Constellation
        particle_overlay = np.zeros_like(canvas)
        particle_x = (particle_x + particle_speed_x) % WIDTH
        particle_y = particle_y + particle_speed_y
        particle_y[particle_y < 50] = HEIGHT - 110
        particle_y[particle_y > HEIGHT - 90] = 60

        for p_i in range(num_particles):
            px = int(particle_x[p_i])
            py = int(particle_y[p_i])
            cv2.circle(particle_overlay, (px, py), 2, accent_bgr, -1)

        canvas = cv2.addWeighted(canvas, 1.0, particle_overlay, 0.40, 0)

        # 6. Tech HUD Header Bar with Live Timecode & Scanline
        hud_top = np.zeros_like(canvas)
        timecode_str = f"TC {int(t//60):02d}:{int(t%60):02d}:{int((t*FPS)%FPS):02d} // {cfg['hud_code']}"
        cv2.putText(hud_top, timecode_str, (35, 42), cv2.FONT_HERSHEY_SIMPLEX, 0.50, (240, 240, 240), 1, cv2.LINE_AA)
        
        # Moving laser scanline
        scan_y = int((t * 85) % HEIGHT)
        cv2.line(hud_top, (0, scan_y), (WIDTH, scan_y), accent_bgr, 1)

        canvas = cv2.addWeighted(canvas, 1.0, hud_top, 0.70, 0)

        # 7. Letterbox Borders (Top & Bottom)
        cv2.rectangle(canvas, (0, 0), (WIDTH, 24), (0, 0, 0), -1)
        cv2.rectangle(canvas, (0, HEIGHT - 24), (WIDTH, HEIGHT), (0, 0, 0), -1)

        proc.stdin.write(canvas.tobytes())

        if f_idx % (FPS * 10) == 0:
            print(f"  Gen {gen_id}: {f_idx}/{total_frames} frames ({progress*100:.0f}%)")

    proc.stdin.close()
    proc.wait()
    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print(f"✅ Generated Motion Graphics Reel {gen_id}: {output_path} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    for g in range(1, 6):
        render_motion_graphics_reel(g)
    print("\n🎉 All 5 Dynamic Motion Graphics Video Reels successfully rendered!")
