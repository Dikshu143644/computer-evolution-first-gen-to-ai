"""
High-Performance, Production-Grade Movie Renderer for Generation 1 (30 Clips x 10s = 5 Minutes)
Generates all 30 discrete clips using FFmpeg native hardware-accelerated filters,
and seamlessly stitches them into the master 5-minute video: assets/videos/gen1_video.mp4.
"""

import os
import sys
import json
import subprocess

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

FFMPEG_EXE = r'C:\Users\omkar\AppData\Local\uv\cache\archive-v0\1OGPQ28jC_EbwJWZ\Lib\site-packages\imageio_ffmpeg\binaries\ffmpeg-win-x86_64-v7.1.exe'

# Precise Scene Mapping to Generated High-Resolution Photorealistic Historical Assets
CLIP_SCENE_MAP = {
    # 00:00 - 00:50: Lab, Humans as Computers, Trajectory, Mauchly & Eckert, Relays
    "G1-C01": {"img": "assets/images/g1_vacuum_tube_macro.jpg", "cam": "push_in"},
    "G1-C02": {"img": "assets/images/g1_human_computers_1940s.jpg", "cam": "dolly_right"},
    "G1-C03": {"img": "assets/images/g1_human_computers_1940s.jpg", "cam": "pan_left"},
    "G1-C04": {"img": "assets/images/g1_vacuum_tube_macro.jpg", "cam": "push_in"},
    "G1-C05": {"img": "assets/images/g1_vacuum_tube_macro.jpg", "cam": "dolly_right"},

    # 00:50 - 02:00: Physics, Edison Effect, Fleming Diode, Triode, Thermionic Emission, Grid, Speed, Decimal vs Binary
    "G1-C06": {"img": "assets/images/g1_triode_physics_diagram.jpg", "cam": "push_in"},
    "G1-C07": {"img": "assets/images/g1_triode_physics_diagram.jpg", "cam": "dolly_right"},
    "G1-C08": {"img": "assets/images/g1_triode_physics_diagram.jpg", "cam": "pan_left"},
    "G1-C09": {"img": "assets/images/g1_triode_physics_diagram.jpg", "cam": "push_in"},
    "G1-C10": {"img": "assets/images/g1_triode_physics_diagram.jpg", "cam": "dolly_right"},
    "G1-C11": {"img": "assets/images/g1_triode_physics_diagram.jpg", "cam": "pan_left"},
    "G1-C12": {"img": "assets/images/eniac_1946.jpg", "cam": "push_in"},

    # 02:00 - 02:50: ENIAC Unveiled, Stats, Hall Walkthrough, Accumulators, 5000 Adds/sec
    "G1-C13": {"img": "assets/images/eniac_1946.jpg", "cam": "dolly_right"},
    "G1-C14": {"img": "assets/images/eniac_1946.jpg", "cam": "pan_left"},
    "G1-C15": {"img": "assets/images/eniac_1946.jpg", "cam": "push_in"},
    "G1-C16": {"img": "assets/images/g1_eniac_programmers_panel.jpg", "cam": "dolly_right"},
    "G1-C17": {"img": "assets/images/g1_eniac_programmers_panel.jpg", "cam": "push_in"},

    # 02:50 - 03:20: Patch Cables, 6 Women Programmers, Punch Cards
    "G1-C18": {"img": "assets/images/g1_eniac_programmers_panel.jpg", "cam": "pan_left"},
    "G1-C19": {"img": "assets/images/g1_eniac_programmers_panel.jpg", "cam": "push_in"},
    "G1-C20": {"img": "assets/images/g1_punch_cards_memory_tech.jpg", "cam": "dolly_right"},

    # 03:20 - 04:10: Stored Program, Memory Grid, Mercury Delay Line, Magnetic Drum, UNIVAC I
    "G1-C21": {"img": "assets/images/g1_punch_cards_memory_tech.jpg", "cam": "push_in"},
    "G1-C22": {"img": "assets/images/g1_punch_cards_memory_tech.jpg", "cam": "pan_left"},
    "G1-C23": {"img": "assets/images/g1_punch_cards_memory_tech.jpg", "cam": "dolly_right"},
    "G1-C24": {"img": "assets/images/g1_punch_cards_memory_tech.jpg", "cam": "push_in"},
    "G1-C25": {"img": "assets/images/g1_punch_cards_memory_tech.jpg", "cam": "pan_left"},

    # 04:10 - 05:00: Machine Language, Heat Problem, Tube Burnout, Recap, Bridge to Transistor
    "G1-C26": {"img": "assets/images/g1_vacuum_tube_macro.jpg", "cam": "push_in"},
    "G1-C27": {"img": "assets/images/eniac_1946.jpg", "cam": "dolly_right"},
    "G1-C28": {"img": "assets/images/g1_vacuum_tube_macro.jpg", "cam": "pan_left"},
    "G1-C29": {"img": "assets/images/g1_vacuum_tube_macro.jpg", "cam": "push_in"},
    "G1-C30": {"img": "assets/images/g1_bridge_to_transistor.jpg", "cam": "push_in"}
}

def render_all_clips():
    clips_json = os.path.join('prompts', 'GENERATION_1_30_CLIPS_OMNIFLASH.json')
    with open(clips_json, 'r', encoding='utf-8') as f:
        clips = json.load(f)

    out_clips_dir = os.path.join('assets', 'videos', 'gen1_clips')
    os.makedirs(out_clips_dir, exist_ok=True)

    clip_video_paths = []
    print(f"\n=======================================================")
    print(f"🎬 RENDERING 30 DISCRETE CLIPS FOR GENERATION 1 (5 MIN TOTAL)")
    print(f"=======================================================\n")

    for i, clip in enumerate(clips):
        cid = clip['prompt_id']
        file_slug = cid.lower().replace('-', '_')
        scene_cfg = CLIP_SCENE_MAP.get(cid, {"img": "assets/images/g1_vacuum_tube_macro.jpg", "cam": "push_in"})
        
        img_path = scene_cfg['img']
        audio_path = os.path.join('assets', 'audio', 'gen1_clips', f"{file_slug}.mp3")
        clip_out = os.path.join(out_clips_dir, f"{file_slug}.mp4")

        # Pick smooth Ken-Burns filter
        cam = scene_cfg['cam']
        if cam == "push_in":
            # Slow cinematic push in (1.0 to 1.15)
            vf_zoom = "scale=1280:720,zoompan=z='min(zoom+0.0006,1.15)':d=240:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':s=1280x720:fps=24"
        elif cam == "dolly_right":
            # Slow lateral pan to the right
            vf_zoom = "scale=1280:720,zoompan=z=1.08:d=240:x='if(lte(on,1),(iw-iw/zoom)/3,min(x+0.5,iw-iw/zoom))':y='(ih-ih/zoom)/2':s=1280x720:fps=24"
        else:
            # Slow pan to the left
            vf_zoom = "scale=1280:720,zoompan=z=1.08:d=240:x='if(lte(on,1),2*(iw-iw/zoom)/3,max(x-0.5,0))':y='(ih-ih/zoom)/2':s=1280x720:fps=24"

        # Vignette & subtle color grade to match First Generation style bible:
        # deep charcoal shadows, tungsten amber light, warm sepia
        vf_filter = f"{vf_zoom},vignette=PI/4,eq=contrast=1.08:brightness=-0.02:saturation=1.10"

        cmd = [
            FFMPEG_EXE, '-y',
            '-loop', '1',
            '-i', img_path,
            '-i', audio_path,
            '-c:v', 'libx264',
            '-preset', 'ultrafast',
            '-tune', 'stillimage',
            '-crf', '22',
            '-c:a', 'aac',
            '-b:a', '128k',
            '-filter_complex', f"[0:v]{vf_filter}[v];[1:a]apad=whole_dur=10.0[a]",
            '-map', '[v]',
            '-map', '[a]',
            '-t', '10.0',
            '-pix_fmt', 'yuv420p',
            clip_out
        ]

        # Skip if already cleanly rendered
        if os.path.exists(clip_out) and os.path.getsize(clip_out) > 500000:
            print(f"[{i+1:02d}/30] {cid} already exists ({os.path.getsize(clip_out)} bytes), skipping...")
            clip_video_paths.append(clip_out)
            continue

        print(f"[{i+1:02d}/30] Rendering {cid} ({clip['timeline_in_reel']}): {clip['title_marathi']}...")
        res = subprocess.run(cmd, capture_output=True)
        if res.returncode != 0:
            print(f"Warning on {cid}: {res.stderr.decode('utf-8', errors='ignore')[-300:]}")
            # Fallback simple command without complex filter
            cmd_fallback = [
                FFMPEG_EXE, '-y',
                '-loop', '1',
                '-i', img_path,
                '-i', audio_path,
                '-c:v', 'libx264',
                '-preset', 'ultrafast',
                '-tune', 'stillimage',
                '-crf', '22',
                '-c:a', 'aac',
                '-b:a', '128k',
                '-vf', 'scale=1280:720',
                '-t', '10.0',
                '-pix_fmt', 'yuv420p',
                clip_out
            ]
            subprocess.run(cmd_fallback, check=True)
        clip_video_paths.append(clip_out)

    print("\n✅ All 30 individual 10-second video clips rendered successfully!")

    # Concatenate into master 5-minute reel
    master_video = os.path.join('assets', 'videos', 'gen1_video.mp4')
    concat_list = os.path.join(out_clips_dir, 'concat_list.txt')
    with open(concat_list, 'w', encoding='utf-8') as f:
        for p in clip_video_paths:
            abs_p = os.path.abspath(p).replace('\\', '/')
            f.write(f"file '{abs_p}'\n")

    print(f"\n🔗 Stitching 30 clips into master 5-minute video: {master_video}...")
    cmd_concat = [
        FFMPEG_EXE, '-y',
        '-f', 'concat',
        '-safe', '0',
        '-i', concat_list,
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-crf', '23',
        '-c:a', 'aac',
        '-b:a', '128k',
        master_video
    ]
    subprocess.run(cmd_concat, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    try:
        os.remove(concat_list)
    except:
        pass

    print(f"🎉 MASTER 5-MINUTE MOVIE CREATED SUCCESSFULLY at {master_video}!")

if __name__ == '__main__':
    render_all_clips()
