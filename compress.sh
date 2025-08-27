#!/bin/bash

# compress images into webp format
# usage: ./compress.sh <input_directory> <output_directory> [quality:-75]
# usage: ./compress.sh <input_file> [output_file/directory:-input_dir] [quality:-75]

INFILE="${1}"
OUTDIR="${2:-null}"
QUALITY="${3:-75}"

if [[ -d $INFILE ]]; then
    INDIR=$INFILE
    mkdir -p "$OUTDIR"

    for file in "$INDIR"/*; do
        if [ -f "$file" ]; then
            filename=$(basename "$file")
            name="${filename%.*}"

            cwebp -q "$QUALITY" "$file" -o "$OUTDIR/${name}.webp"
        fi
    done
elif [[ -f $INFILE ]]; then
    filename=$(basename "$INFILE")
    name="${filename%.*}"

    if [[ "$OUTDIR" == "null" ]]; then
        OUTDIR=$(dirname $INFILE)
    fi
    OUTFILE=$OUTDIR
    if [[ -d $OUTDIR ]]; then
        OUTFILE="$OUTDIR/${name}.webp"
    fi

    cwebp -q "$QUALITY" "$INFILE" -o "$OUTFILE"
else
    echo "invalid path"
fi