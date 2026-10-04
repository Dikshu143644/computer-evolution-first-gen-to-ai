"""
Render the 5-Minute (300.0s / 30 Clips x 10s) Master Cinematic Video for Generation 1
faithfully following the 30 OmniFlash 1.1 prompt specifications and Style Bible.
"""

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
TOTAL_DURATION = 300.0  # 5 minutes
TOTAL_FRAMES = int(TOTAL_DURATION * FPS)  # 7200 frames

# 30 Clips Image and Theme Mapping
# Each clip lasts exactly 10.0 seconds (240 frames)
CLIP_THEMES = [
    # 00:00 - 00:50: Lab, Humans as Computers, Trajectory, Mauchly & Eckert, Relays
    {"id": "G1-C01", "img": "assets/images/g1_vacuum_tube_macro.jpg", "title": "WELCOME TO GEN 1 // 1940-1956", "cam": "push_in"},
    {"id": "G1-C02", "img": "assets/images/g1_human_computers_1940s.jpg", "title": "HUMANS WERE THE COMPUTERS", "cam": "dolly_right"},
    {"id": "G1-C03", "img": "assets/images/g1_human_computers_1940s.jpg", "title": "ARTILLERY TRAJECTORY PROBLEM", "cam": "pan_left"},
    {"id": "G1-C04", "img": "assets/images/g1_vacuum_tube_macro.jpg", "title": "MAUCHLY & ECKERT // MOORE SCHOOL", "cam": "orbit"},
    {"id": "G1-C05", "img": "assets/images/g1_vacuum_tube_macro.jpg", "title": "THE SWITCH: RELAY VS VACUUM TUBE", "cam": "push_in"},

    # 00:50 - 02:00: Physics, Edison Effect, Fleming Diode, Triode, Thermionic Emission, Grid, Speed, Decimal vs Binary
    {"id": "G1-C06", "img": "assets/images/g1_triode_physics_diagram.jpg", "title": "THE EDISON EFFECT // 1883", "cam": "dolly_right"},
    {"id": "G1-C07", "img": "assets/images/g1_triode_physics_diagram.jpg", "title": "FLEMING'S DIODE // 1904 // ONE-WAY", "cam": "push_in"},
    {"id": "G1-C08", "img": "assets/images/g1_triode_physics_diagram.jpg", "title": "DE FOREST'S TRIODE // 1906 // GRID", "cam": "pan_left"},
    {"id": "G1-C09", "img": "assets/images/g1_triode_physics_diagram.jpg", "title": "THERMIONIC EMISSION // ELECTRONS", "cam": "orbit"},
    {"id": "G1-C10", "img": "assets/images/g1_triode_physics_diagram.jpg", "title": "THE GRID ON/OFF ELECTRONIC SWITCH", "cam": "push_in"},
    {"id": "G1-C11", "img": "assets/images/g1_triode_physics_diagram.jpg", "title": "SPEED ADVANTAGE: NO MOVING PARTS", "cam": "dolly_right"},
    {"id": "G1-C12", "img": "assets/images/eniac_1946.jpg", "title": "BINARY VS DECIMAL // RING COUNTERS", "cam": "pan_left"},

    # 02:00 - 02:50: ENIAC Unveiled, Stats, Hall Walkthrough, Accumulators, 5000 Adds/sec
    {"id": "G1-C13", "img": "assets/images/eniac_1946.jpg", "title": "ENIAC UNVEILED // FEBRUARY 1946", "cam": "push_in"},
    {"id": "G1-C14", "img": "assets/images/eniac_1946.jpg", "title": "ENIAC: 30 TONS // 1,800 SQ FT // 17.5K TUBES", "cam": "orbit"},
    {"id": "G1-C15", "img": "assets/images/eniac_1946.jpg", "title": "WALK THROUGH ENIAC HALL // 150 kW POWER", "cam": "dolly_right"},
    {"id": "G1-C16", "img": "assets/images/g1_eniac_programmers_panel.jpg", "title": "20 ACCUMULATORS // 10-DIGIT NUMBERS", "cam": "pan_left"},
    {"id": "G1-C17", "img": "assets/images/g1_eniac_programmers_panel.jpg", "title": "5,000 ADDITIONS / SEC // 20 HRS TO 30 SEC", "cam": "push_in"},

    # 02:50 - 03:20: Patch Cables, 6 Women Programmers, Punch Cards
    {"id": "G1-C18", "img": "assets/images/g1_eniac_programmers_panel.jpg", "title": "PROGRAMMING WITH CABLES & SWITCHES", "cam": "dolly_right"},
    {"id": "G1-C19", "img": "assets/images/g1_eniac_programmers_panel.jpg", "title": "THE SIX WOMEN PROGRAMMERS OF ENIAC", "cam": "orbit"},
    {"id": "G1-C20", "img": "assets/images/g1_punch_cards_memory_tech.jpg", "title": "PUNCH CARDS // PERFORATED I/O", "cam": "push_in"},

    # 03:20 - 04:10: Stored Program, Memory Grid, Mercury Delay Line, Magnetic Drum, UNIVAC I
    {"id": "G1-C21", "img": "assets/images/g1_punch_cards_memory_tech.jpg", "title": "LIMITATION: NO STORED PROGRAM // VON NEUMANN", "cam": "pan_left"},
    {"id": "G1-C22", "img": "assets/images/g1_punch_cards_memory_tech.jpg", "title": "STORED PROGRAM: INSTRUCTIONS & DATA IN MEMORY", "cam": "push_in"},
    {"id": "G1-C23", "img": "assets/images/g1_punch_cards_memory_tech.jpg", "title": "MERCURY DELAY LINE // ACOUSTIC BITS", "cam": "dolly_right"},
    {"id": "G1-C24", "img": "assets/images/g1_punch_cards_memory_tech.jpg", "title": "MAGNETIC DRUM MEMORY // IBM 650", "cam": "orbit"},
    {"id": "G1-C25", "img": "assets/images/g1_punch_cards_memory_tech.jpg", "title": "UNIVAC I // 1951 // MAGNETIC TAPE STORAGE", "cam": "push_in"},

    # 04:10 - 05:00: Machine Language, Heat Problem, Tube Burnout, Recap, Bridge to Transistor
    {"id": "G1-C26", "img": "assets/images/g1_vacuum_tube_macro.jpg", "title": "MACHINE LANGUAGE // 1s AND 0s // RAW CODE", "cam": "pan_left"},
    {"id": "G1-C27", "img": "assets/images/eniac_1946.jpg", "title": "THE HEAT PROBLEM // INDUSTRIAL BLOWERS", "cam": "dolly_right"},
    {"id": "G1-C28", "img": "assets/images/g1_vacuum_tube_macro.jpg", "title": "TUBE BURNOUT // 1 EVERY 2 DAYS // 15 MIN LOCATE", "cam": "push_in"},
    {"id": "G1-C29", "img": "assets/images/g1_vacuum_tube_macro.jpg", "title": "GEN 1 RECAP // MASSIVE, COSTLY, DIGITAL FOUNDATION", "cam": "orbit"},
    {"id": "G1-C30", "img": "assets/images/g1_bridge_to_transistor.jpg", "title": "QUIZ & BRIDGE // TRANSISTOR EMERGES", "cam": "push_in"}
]

def render_gen1_movie():
    audio_path = "assets/audio/gen1_mr_full_5min.mp3"
    output_path = "assets/videos/gen1_video.mp4"

    print(f"\n=======================================================")
    print(f"🎬 RENDERING 5-MINUTE MASTER MOVIE FOR GENERATION 1")
    print(f"  • Total Duration: {TOTAL_DURATION}s ({TOTAL_FRAMES} frames @ {FPS}fps)")
    print(f"  • Total Clips: {len(CLIP_THEMES)} x 10s")
    print(f"  • Audio: {audio_path}")
    print(f"  • Target Video: {output_path}")
    print(f"=======================================================\n")

    # Pre-cache unique images in memory
    unique_paths = list(set(c["img"] for c in CLIP_THEMES))
    img_cache = {}
    for p in unique_paths:
        if os.path.exists(p):
            img_cache[p] = cv2.imread(p)
            print(f"Loaded image: {p} ({img_cache[p].shape})")
        else:
            print(f"Warning: {p} missing, creating blank")
            img_cache[p] = np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)

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
        '-crf', '22',
        '-c:a', 'aac',
        '-b:a', '192k',
        '-pix_fmt', 'yuv420p',
        '-shortest',
        output_path
    ]

    proc = subprocess.Popen(ffmpeg_cmd, stdin=subprocess.PIPE)

    # Particle system initialized for thermionic dust motes
    np.random.seed(7741209)  # Using official prompt seed!
    num_particles = 45
    px = np.random.uniform(0, WIDTH, num_particles)
    py = np.random.uniform(40, HEIGHT - 80, num_particles)
    pspeed_x = np.random.uniform(0.8, 2.4, num_particles)
    pspeed_y = np.random.uniform(-0.5, 0.5, num_particles)

    amber_bgr = (11, 158, 245)   # #F59E0B Warm Amber in BGR
    cyan_bgr = (212, 182, 6)     # #06B6D4 Electric Cyan in BGR
    gold_bgr = (40, 200, 255)

    clip_len = 10.0  # seconds per clip

    # Precompute vignette LUT once outside loop for ultra-fast rendering
    raw_mask = np.zeros((HEIGHT, WIDTH), dtype=np.float32)
    cv2.circle(raw_mask, (WIDTH // 2, HEIGHT // 2), int(WIDTH * 0.65), 1.0, -1)
    vignette_blur = cv2.GaussianBlur(raw_mask, (101, 101), 0)
    vignette_lut = (0.60 + 0.40 * vignette_blur[:, :, None]).astype(np.float32)

    for f_idx in range(TOTAL_FRAMES):
        t = f_idx / FPS
        clip_idx = min(int(t // clip_len), len(CLIP_THEMES) - 1)
        rel_t = (t % clip_len) / clip_len  # 0.0 to 1.0 within current clip
        clip_info = CLIP_THEMES[clip_idx]

        # 1. Base Image with Smooth Ken-Burns
        img = img_cache.get(clip_info["img"])
        ih, iw = img.shape[:2]
        cam = clip_info["cam"]

        if cam == "push_in":
            zoom = 1.0 + 0.12 * rel_t
            cx = int(iw * 0.5)
            cy = int(ih * 0.5)
        elif cam == "dolly_right":
            zoom = 1.06
            cx = int(iw * (0.42 + 0.16 * rel_t))
            cy = int(ih * 0.5)
        elif cam == "pan_left":
            zoom = 1.06
            cx = int(iw * (0.58 - 0.16 * rel_t))
            cy = int(ih * 0.5)
        else:  # orbit
            zoom = 1.03 + 0.05 * math.sin(rel_t * math.pi)
            cx = int(iw * (0.5 + 0.05 * math.sin(rel_t * 2.0)))
            cy = int(ih * (0.5 + 0.03 * math.cos(rel_t * 2.0)))

        crop_w = int(iw / zoom)
        crop_h = int(ih / zoom)
        x1 = max(0, min(iw - crop_w, cx - crop_w // 2))
        y1 = max(0, min(ih - crop_h, cy - crop_h // 2))
        canvas = cv2.resize(img[y1:y1 + crop_h, x1:x1 + crop_w], (WIDTH, HEIGHT))

        # Cross-dissolve transition at clip boundaries (last 0.8s of clip)
        if rel_t > 0.92 and clip_idx < len(CLIP_THEMES) - 1:
            next_info = CLIP_THEMES[clip_idx + 1]
            next_img = img_cache.get(next_info["img"])
            nih, niw = next_img.shape[:2]
            n_crop = cv2.resize(next_img[0:nih, 0:niw], (WIDTH, HEIGHT))
            blend_w = (rel_t - 0.92) / 0.08
            canvas = cv2.addWeighted(canvas, 1.0 - blend_w, n_crop, blend_w, 0)

        # 2. Cinematic Sepia & Volumetric Vignette (Using precomputed LUT)
        canvas = (canvas * vignette_lut).astype(np.uint8)

        # 3. Floating Thermionic Dust Motes & Sparks
        px += pspeed_x
        py += pspeed_y
        for i in range(num_particles):
            if px[i] > WIDTH: px[i] = 0
            if py[i] > HEIGHT - 50: py[i] = 40
            if py[i] < 40: py[i] = HEIGHT - 50
            pt_x = int(px[i])
            pt_y = int(py[i])
            alpha = 0.4 + 0.5 * math.sin(t * 3.0 + i)
            p_color = amber_bgr if i % 4 != 0 else cyan_bgr
            cv2.circle(canvas, (pt_x, pt_y), 2 if i % 5 == 0 else 1, p_color, -1)

        # 4. Minimalist Cinema Telemetry HUD (Non-intrusive)
        # Top Header Bar (Sleek Glassmorphic Bar)
        top_bar_y = 38
        cv2.rectangle(canvas, (32, 16), (WIDTH - 32, 52), (15, 23, 42), -1)
        cv2.rectangle(canvas, (32, 16), (WIDTH - 32, 52), (80, 100, 130), 1)

        clip_str = f"{clip_info['id']} // {clip_idx + 1:02d} OF 30 // {clip_info['title']}"
        cv2.putText(canvas, clip_str, (48, 38), cv2.FONT_HERSHEY_SIMPLEX, 0.54, (245, 245, 245), 1, cv2.LINE_AA)

        # Top Right Timer
        mins = int(t // 60)
        secs = int(t % 60)
        time_str = f"{mins:02d}:{secs:02d} / 05:00"
        cv2.putText(canvas, time_str, (WIDTH - 180, 38), cv2.FONT_HERSHEY_SIMPLEX, 0.54, amber_bgr, 1, cv2.LINE_AA)

        # Slim Progress Bar along bottom of top bar
        prog_w = int((WIDTH - 64) * (t / TOTAL_DURATION))
        if prog_w > 0:
            cv2.line(canvas, (32, 52), (32 + prog_w, 52), amber_bgr, 2)

        # 5. Live Audio Waveform Visualizer at Bottom Left (Subtle & Sleek)
        wave_base_y = HEIGHT - 24
        wave_start_x = 40
        num_bars = 48
        for b in range(num_bars):
            bx = wave_start_x + b * 6
            amp = (math.sin(t * 9.0 + b * 0.4) * math.cos(t * 5.0 + b * 0.3) + 1.0) * 0.5
            b_height = int(3 + amp * 18)
            col = cyan_bgr if b % 6 == 0 else amber_bgr
            cv2.line(canvas, (bx, wave_base_y), (bx, wave_base_y - b_height), col, 2)

        # Bottom Right Generation Tag
        cv2.putText(canvas, "FIRST GEN // 1940-1956", (WIDTH - 230, HEIGHT - 20),
                    cv2.FONT_HERSHEY_SIMPLEX, 0.45, (180, 190, 205), 1, cv2.LINE_AA)

        proc.stdin.write(canvas.tobytes())

        if f_idx % 300 == 0:
            pct = (f_idx / TOTAL_FRAMES) * 100
            print(f"  Rendering frame {f_idx}/{TOTAL_FRAMES} ({pct:.1f}%) | Clip {clip_idx + 1}/30 [{time_str}]")

    proc.stdin.close()
    proc.wait()

    print(f"\n🎉 5-Minute Master Movie Successfully Rendered to {output_path}!")

if __name__ == '__main__':
    render_gen1_movie()
