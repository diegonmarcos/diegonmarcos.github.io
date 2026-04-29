#!/usr/bin/env python3
"""
Convert a VCF (vCard) file into a QR code image.
"""

import qrcode
import argparse
from pathlib import Path
from PIL import Image


def vcf_to_qrcode(vcf_file_path, output_path=None, box_size=10, border=4, logo_path=None, logo_size_ratio=0.3):
    """
    Convert a VCF file to a QR code image.

    Args:
        vcf_file_path: Path to the input VCF file
        output_path: Path for the output QR code image (default: same name as input with .png extension)
        box_size: Size of each box in pixels (default: 10)
        border: Border size in boxes (default: 4)
        logo_path: Path to logo/image to place in center (optional)
        logo_size_ratio: Size of logo relative to QR code (default: 0.3, max: 0.3)
    """
    # Read VCF file content
    vcf_path = Path(vcf_file_path)
    if not vcf_path.exists():
        raise FileNotFoundError(f"VCF file not found: {vcf_file_path}")

    with open(vcf_path, 'r', encoding='utf-8') as f:
        vcf_content = f.read()

    # Use higher error correction if logo is present
    error_correction = qrcode.constants.ERROR_CORRECT_H if logo_path else qrcode.constants.ERROR_CORRECT_L

    # Generate QR code
    qr = qrcode.QRCode(
        version=None,  # Auto-detect version based on data size
        error_correction=error_correction,
        box_size=box_size,
        border=border,
    )
    qr.add_data(vcf_content)
    qr.make(fit=True)

    # Create image
    img = qr.make_image(fill_color="black", back_color="white").convert('RGB')

    # Add logo if provided
    if logo_path:
        logo_path = Path(logo_path)
        if not logo_path.exists():
            raise FileNotFoundError(f"Logo file not found: {logo_path}")

        logo = Image.open(logo_path)

        # Calculate logo size (limit to 30% of QR code to maintain readability)
        logo_size_ratio = min(logo_size_ratio, 0.3)
        qr_width, qr_height = img.size
        logo_max_size = int(min(qr_width, qr_height) * logo_size_ratio)

        # Resize logo maintaining aspect ratio
        logo.thumbnail((logo_max_size, logo_max_size), Image.Resampling.LANCZOS)

        # Calculate position to center the logo
        logo_pos = (
            (qr_width - logo.size[0]) // 2,
            (qr_height - logo.size[1]) // 2
        )

        # Add white background behind logo for better visibility
        if logo.mode == 'RGBA':
            # Create white background
            background = Image.new('RGB', logo.size, 'white')
            # Composite logo onto white background
            background.paste(logo, (0, 0), logo)
            logo = background

        # Paste logo onto QR code
        img.paste(logo, logo_pos)
        print(f"Logo added: {logo.size[0]}x{logo.size[1]} pixels at center")

    # Determine output path
    if output_path is None:
        output_path = vcf_path.with_suffix('.png')
    else:
        output_path = Path(output_path)

    # Save image
    img.save(output_path)
    print(f"QR code saved to: {output_path}")
    print(f"QR code size: {img.size[0]}x{img.size[1]} pixels")

    return output_path


def main():
    parser = argparse.ArgumentParser(
        description="Convert a VCF (vCard) file into a QR code image"
    )
    parser.add_argument(
        "vcf_file",
        help="Path to the input VCF file"
    )
    parser.add_argument(
        "-o", "--output",
        help="Path for the output QR code image (default: same name as input with .png extension)",
        default=None
    )
    parser.add_argument(
        "-b", "--box-size",
        help="Size of each box in pixels (default: 10)",
        type=int,
        default=10
    )
    parser.add_argument(
        "-r", "--border",
        help="Border size in boxes (default: 4)",
        type=int,
        default=4
    )
    parser.add_argument(
        "-l", "--logo",
        help="Path to logo/image to place in center of QR code (optional)",
        default=None
    )
    parser.add_argument(
        "-s", "--logo-size",
        help="Size of logo relative to QR code (default: 0.3, max: 0.3)",
        type=float,
        default=0.3
    )

    args = parser.parse_args()

    try:
        vcf_to_qrcode(
            args.vcf_file,
            args.output,
            args.box_size,
            args.border,
            args.logo,
            args.logo_size
        )
    except Exception as e:
        print(f"Error: {e}")
        return 1

    return 0


if __name__ == "__main__":
    exit(main())
