from PIL import Image
import potrace as pypotrace
import numpy as np
import argparse

def raster_to_svg_potrace(image_path, output_svg_path, threshold=128):
    # 1. Load the image using Pillow
    img = Image.open(image_path).convert('L') # Convert to grayscale

    # 2. Convert to a 1-bit (black and white) image for Potrace
    # Potrace works best with black shapes on a white background (or vice-versa)
    # You might need to invert if your image has white shapes on black
    binary_img = img.point(lambda p: 0 if p < threshold else 255, '1') # '1' for 1-bit pixels

    # 3. Use pypotrace to generate SVG
    # Convert Pillow image to a Potrace compatible bitmap object
    # Potrace expects 0 for black (traceable), 1 for white (background)
    bitmap_data = np.array(binary_img).astype(bool) # Potrace takes boolean array
    # If your image has white paperclip on white background, you might need to invert:
    # bitmap_data = np.invert(bitmap_data)

    potrace_bitmap = pypotrace.Bitmap(bitmap_data)

    # 4. Trace the bitmap
    path = pypotrace.trace(potrace_bitmap)

    # 5. Save the SVG
    path.write_svg(output_svg_path)
    print(f"SVG saved to {output_svg_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert a raster image to SVG using Potrace.')
    parser.add_argument('input_file', help='The input raster image file (e.g., PNG, JPG).')
    parser.add_argument('output_file', help='The output SVG file.')
    parser.add_argument('--threshold', type=int, default=128, help='The threshold for converting to a binary image (0-255).')
    args = parser.parse_args()

    raster_to_svg_potrace(args.input_file, args.output_file, args.threshold)
