"""
Concatenate all 30 Generation 1 Marathi clip audios into an exact 300.0s (5-minute) master track,
with each clip aligned to its 10-second window (0.5s - 9.5s speaking).
Also generates the complete synchronized WebVTT subtitle track.
"""

import os
import sys
import json
import subprocess

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

FFMPEG_EXE = r'C:\Users\omkar\AppData\Local\uv\cache\archive-v0\1OGPQ28jC_EbwJWZ\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'

def format_vtt_timestamp(total_seconds):
    hours = int(total_seconds // 3600)
    minutes = int((total_seconds % 3600) // 60)
    seconds = int(total_seconds % 60)
    millis = int(round((total_seconds - int(total_seconds)) * 1000))
    return f"{hours:02d}:{minutes:02d}:{seconds:02d}.{millis:03d}"

def build_5min_track():
    json_path = os.path.join('prompts', 'GENERATION_1_30_CLIPS_OMNIFLASH.json')
    with open(json_path, 'r', encoding='utf-8') as f:
        clips = json.load(f)

    # 1. Generate WebVTT
    vtt_path = os.path.join('assets', 'audio', 'gen1_mr_full_5min.vtt')
    with open(vtt_path, 'w', encoding='utf-8') as f:
        f.write("WEBVTT - Generation 1: 5-Minute Full Documentary Narration (30 Clips x 10s)\n\n")
        for i, clip in enumerate(clips):
            start_sec = i * 10.0 + 0.5
            end_sec = i * 10.0 + 9.5
            start_str = format_vtt_timestamp(start_sec)
            end_str = format_vtt_timestamp(end_sec)
            f.write(f"{i + 1}\n")
            f.write(f"{start_str} --> {end_str}\n")
            f.write(f"[{clip['prompt_id']}: {clip['title_marathi']}] {clip['audio']['narration_mr']}\n\n")
    print(f"✅ Generated 30-clip WebVTT subtitle file at {vtt_path}")

    # 2. Build 10-second padded chunks using ffmpeg
    temp_dir = os.path.join('assets', 'audio', 'gen1_temp_10s')
    os.makedirs(temp_dir, exist_ok=True)
    
    padded_list = []
    print("⏳ Processing 30 clips into exact 10.0s timeboxes...")
    for i, clip in enumerate(clips):
        cid = clip['prompt_id'].lower().replace('-', '_')
        in_file = os.path.join('assets', 'audio', 'gen1_clips', f"{cid}.mp3")
        padded_file = os.path.join(temp_dir, f"{cid}_10s.mp3")
        
        # Pad with silence to exactly 10 seconds: apad=whole_dur=10.0
        cmd = [
            FFMPEG_EXE, '-y',
            '-i', in_file,
            '-filter_complex', 'apad=whole_dur=10.0',
            '-t', '10.0',
            '-c:a', 'libmp3lame',
            '-b:a', '128k',
            padded_file
        ]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        padded_list.append(padded_file)

    # 3. Concatenate using ffmpeg concat demuxer
    concat_txt = os.path.join(temp_dir, 'concat.txt')
    with open(concat_txt, 'w', encoding='utf-8') as f:
        for p in padded_list:
            abs_p = os.path.abspath(p).replace('\\', '/')
            f.write(f"file '{abs_p}'\n")

    out_master = os.path.join('assets', 'audio', 'gen1_mr_full_5min.mp3')
    print(f"🔗 Concatenating into master 5-minute track: {out_master}...")
    cmd_concat = [
        FFMPEG_EXE, '-y',
        '-f', 'concat',
        '-safe', '0',
        '-i', concat_txt,
        '-c', 'copy',
        out_master
    ]
    subprocess.run(cmd_concat, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    # Cleanup temp
    for p in padded_list:
        try: os.remove(p)
        except: pass
    try: os.remove(concat_txt)
    except: pass
    try: os.rmdir(temp_dir)
    except: pass

    print(f"🎉 Master 5-Minute Marathi Track successfully created at {out_master}!")

if __name__ == '__main__':
    build_5min_track()
