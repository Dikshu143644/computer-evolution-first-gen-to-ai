import os
import sys
import subprocess

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

FFMPEG_EXE = r'C:\Users\omkar\AppData\Local\uv\cache\archive-v0\1OGPQ28jC_EbwJWZ\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'

# Video configurations:
# Pure, pristine documentary archival footage with smooth Ken Burns motion
# NO baked-in text or raster badges — all typography is rendered cleanly in the web DOM
GEN_CONFIGS = {
    1: {
        "title": "पहिली पिढी: व्हॅक्यूम ट्यूब्स व ENIAC (1940 – 1956)",
        "audio": "assets/audio/gen1_mr.mp3",
        "bgImage": "assets/images/eniac_1946.jpg",
        "output": "assets/videos/gen1_video.mp4"
    },
    2: {
        "title": "दुसरी पिढी: ट्रान्झिस्टर्स व IBM 1401 (1956 – 1963)",
        "audio": "assets/audio/gen2_mr.mp3",
        "bgImage": "assets/images/transistor_1947.jpg",
        "output": "assets/videos/gen2_video.mp4"
    },
    3: {
        "title": "तिसरी पिढी: इंटिग्रेटेड सर्किट व अपोलो ११ (1964 – 1971)",
        "audio": "assets/audio/gen3_mr.mp3",
        "bgImage": "assets/images/integrated_circuits_1964.jpg",
        "output": "assets/videos/gen3_video.mp4"
    },
    4: {
        "title": "चौथी पिढी: मायक्रोप्रोसेसर व PC क्रांती (1971 – आज)",
        "audio": "assets/audio/gen4_mr.mp3",
        "bgImage": "assets/images/pc_revolution.jpg",
        "output": "assets/videos/gen4_video.mp4"
    },
    5: {
        "title": "पाचवी पिढी: AI व क्वांटम महासंगणक (वर्तमान व भविष्य)",
        "audio": "assets/audio/gen5_mr.mp3",
        "bgImage": "assets/images/cloud_ai_datacenter.jpg",
        "output": "assets/videos/gen5_video.mp4"
    }
}

def render_cinematic_documentary_video(gen_id):
    cfg = GEN_CONFIGS[gen_id]
    audio_path = cfg["audio"]
    image_path = cfg["bgImage"]
    output_path = cfg["output"]
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    print(f"\n=======================================================")
    print(f"🎬 Rendering Clean Documentary Reel {gen_id}: {cfg['title']}")
    print(f"  • Source Image: {image_path}")
    print(f"  • Voiceover Track: {audio_path}")
    print(f"  • Output: {output_path}")
    print(f"=======================================================")

    # High-quality Ken Burns zoompan filter:
    # Smooth subtle zoom from 1.0 to 1.10 centered on the archival photo, 24fps 1280x720 HD
    vf_filter = "scale=1920:1080,zoompan=z='min(zoom+0.0003,1.10)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=1280x720:fps=24"

    cmd = [
        FFMPEG_EXE, '-y',
        '-loop', '1',
        '-i', image_path,
        '-i', audio_path,
        '-vf', vf_filter,
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-crf', '20',
        '-c:a', 'aac',
        '-b:a', '192k',
        '-pix_fmt', 'yuv420p',
        '-shortest',
        output_path
    ]

    subprocess.run(cmd, check=True)
    size_mb = os.path.getsize(output_path) / (1024 * 1024)
    print(f"✅ Generated {output_path} ({size_mb:.2f} MB)")

if __name__ == "__main__":
    for g in range(1, 6):
        render_cinematic_documentary_video(g)
    print("\n🎉 All 5 Clean Cinematic Documentary Reels successfully generated!")
