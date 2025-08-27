#!/bin/bash

# compress images into webp format
# usage: ./compress.sh <input_directory> <output_directory> [quality:-75]

INDIR="${1}"
OUTDIR="${2}"
QUALITY="${3:-75}"

mkdir -p "$OUTDIR"

for file in "$INDIR"/*; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"

        cwebp -q "$QUALITY" "$file" -o "$OUTDIR/${name}.webp"
    fi
done