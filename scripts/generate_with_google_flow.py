"""
Google Flow AI / Gemini GenAI Video & Asset Generator
------------------------------------------------------
This script connects to Google AI Studio / Gemini API (or Google Flow AI)
to generate high-definition imagery and cinematic video prompts for each generation.

Usage:
  1. Set your Gemini API Key:
     $env:GEMINI_API_KEY="your_gemini_api_key_here"
  2. Run:
     python scripts/generate_with_google_flow.py [--gen 1-5] [--prompt "custom prompt"]
"""

import os
import sys
import argparse

try:
    from google import genai
    from google.genai import types
except ImportError:
    print("google-genai library not found. Install via: pip install google-genai")
    sys.exit(1)

GENERATION_PROMPTS = {
    1: "Archival cinematic 1946 documentary photo of the ENIAC computer hall, 18,000 glowing vacuum tubes, technicians operating patch cables, warm sepia and tungsten film lighting, authentic historical detail, ultra high resolution 8K.",
    2: "Cinematic 1956 documentary photograph of Bell Labs scientists examining the first germanium transistors and the IBM 1401 mainframe, magnetic tape reels spinning, mid-century retro computing aesthetic, warmKodachrome color grading.",
    3: "Cinematic 1968 documentary view of the Apollo Guidance Computer and early silicon integrated circuit microchips under a laboratory microscope, cleanroom silicon wafer, dramatic rim lighting, NASA mission control aesthetic.",
    4: "Cinematic 1981 photograph of the personal computer revolution, the Intel 4004 microprocessor, Apple Macintosh, early CRT desktop monitors, engineers typing on mechanical keyboards, 35mm film photography style.",
    5: "Cinematic modern 2026 ultra-datacenter with thousands of glowing AI GPU server racks, fiber optic pulses, supercomputer cooling, quantum qubit processor chamber, deep obsidian blue and warm amber lighting, photojournalistic realism."
}

def generate_assets(api_key, gen_id=None):
    client = genai.Client(api_key=api_key)
    
    gens = [gen_id] if gen_id else list(GENERATION_PROMPTS.keys())

    print("\n=======================================================")
    print("🚀 Connecting to Google AI Studio / Gemini API...")
    print("=======================================================")

    for g in gens:
        prompt = GENERATION_PROMPTS[g]
        print(f"\n[Generation {g}] Prompt: {prompt[:80]}...")
        try:
            # Generate high-resolution visual concept using Imagen 3
            result = client.models.generate_images(
                model='imagen-3.0-generate-002',
                prompt=prompt,
                config=dict(
                    number_of_images=1,
                    aspect_ratio="16:9",
                    output_mime_type="image/jpeg"
                )
            )
            for idx, image in enumerate(result.generated_images):
                output_path = f"assets/images/google_flow_gen{g}.jpg"
                with open(output_path, "wb") as f:
                    f.write(image.image.image_bytes)
                print(f"✅ Saved Google Flow visual asset to {output_path}")
        except Exception as e:
            print(f"⚠️ Google API note for Gen {g}: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate visuals using Google Flow AI / Gemini API")
    parser.add_argument("--api-key", default=os.environ.get("GEMINI_API_KEY", ""), help="Google AI Studio / Gemini API Key")
    parser.add_argument("--gen", type=int, choices=[1, 2, 3, 4, 5], help="Generation number (1-5)")
    args = parser.parse_args()

    api_key = args.api_key or os.environ.get("GEMINI_API_KEY", "")
    if not api_key:
        print("\n⚠️ Google Gemini API Key missing!")
        print("Please provide your key:")
        print("  Windows PowerShell: $env:GEMINI_API_KEY=\"your_key_here\"")
        print("  Or run: python scripts/generate_with_google_flow.py --api-key \"your_key_here\"\n")
        sys.exit(1)

    generate_assets(api_key, args.gen)
