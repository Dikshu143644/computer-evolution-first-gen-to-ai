"""
ElevenLabs Emotional Voice Generator for Computer Evolution Web Cinema
------------------------------------------------------------------------
This script connects to ElevenLabs API to generate human-like emotional speech
for all 5 generations in English and Marathi.

Usage:
  1. Set your ElevenLabs API Key in environment or pass as argument:
     export ELEVENLABS_API_KEY="your_elevenlabs_api_key_here"
     (On Windows PowerShell: $env:ELEVENLABS_API_KEY="your_elevenlabs_api_key_here")
  2. Run:
     python scripts/generate_with_elevenlabs.py [--gen 1-5] [--lang en|mr] [--voice VOICE_ID]
"""

import os
import sys
import argparse
import requests
import json

try:
    from generate_audio_narration import SCRIPTS
except ImportError:
    from scripts.generate_audio_narration import SCRIPTS

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"

# Recommended ElevenLabs Voices:
# English: "pNInz6obpgDQGcFmaJgB" (Adam - Deep, cinematic narrative voice)
# Marathi / Multilingual: "21m00Tcm4TlvDq8ikWAM" (Rachel) or "flq6f7yk4E4fJM5XTYuZ" (Michael)
DEFAULT_VOICES = {
    "en": "pNInz6obpgDQGcFmaJgB", # Adam (Narrative Storyteller)
    "mr": "21m00Tcm4TlvDq8ikWAM"  # Rachel (Multilingual v2)
}

def generate_elevenlabs_audio(api_key, text, output_file, voice_id="pNInz6obpgDQGcFmaJgB", stability=0.45, similarity_boost=0.85, style=0.40):
    url = f"{ELEVENLABS_API_URL}/{voice_id}"
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": api_key
    }
    data = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": stability,
            "similarity_boost": similarity_boost,
            "style": style,
            "use_speaker_boost": True
        }
    }

    print(f"🎙️ Sending request to ElevenLabs ({voice_id})...")
    response = requests.post(url, json=data, headers=headers)
    
    if response.status_code == 200:
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        with open(output_file, "wb") as f:
            f.write(response.content)
        size_kb = len(response.content) / 1024
        print(f"✅ Generated {output_file} ({size_kb:.1f} KB)")
        return True
    else:
        print(f"❌ ElevenLabs API error ({response.status_code}): {response.text}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Generate human-like emotional voiceovers using ElevenLabs")
    parser.add_argument("--api-key", default=os.environ.get("ELEVENLABS_API_KEY", ""), help="ElevenLabs API Key")
    parser.add_argument("--gen", type=int, choices=[1, 2, 3, 4, 5], help="Specific generation to generate (1-5)")
    parser.add_argument("--lang", choices=["en", "mr", "both"], default="both", help="Language (en, mr, or both)")
    parser.add_argument("--voice", help="Custom ElevenLabs Voice ID")
    args = parser.parse_args()

    api_key = args.api_key or os.environ.get("ELEVENLABS_API_KEY", "")
    if not api_key:
        print("\n⚠️ ElevenLabs API Key missing!")
        print("Please provide your key:")
        print("  Windows PowerShell: $env:ELEVENLABS_API_KEY=\"your_key_here\"")
        print("  Or run: python scripts/generate_with_elevenlabs.py --api-key \"your_key_here\"\n")
        sys.exit(1)

    gens_to_generate = [args.gen] if args.gen else list(SCRIPTS.keys())

    for g in gens_to_generate:
        item = SCRIPTS[g]
        langs = ["en", "mr"] if args.lang == "both" else [args.lang]
        for lang in langs:
            voice_id = args.voice or DEFAULT_VOICES[lang]
            output_mp3 = f"assets/audio/gen{g}_{lang}.mp3"
            print(f"\n--- Generating Gen {g} [{lang.upper()}] with ElevenLabs ---")
            success = generate_elevenlabs_audio(
                api_key=api_key,
                text=item[lang],
                output_file=output_mp3,
                voice_id=voice_id
            )
            if not success:
                print(f"Failed to generate Gen {g} [{lang}]. Aborting.")
                return

    print("\n🎉 ElevenLabs Voiceovers successfully completed!")

if __name__ == "__main__":
    main()
