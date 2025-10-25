#!/bin/bash
set -x

# Read and print spec.md based on argument
if [ "$1" = "cv_web" ]; then
    cat cv_web/spec.md
    echo "Exit code of cat: $?"
elif [ "$1" = "cv_pdf" ]; then
    cat cv_pdf/spec.md
    echo "Exit code of cat: $?"
elif [ "$1" = "linktree" ]; then
    cat linktree/spec.md
    echo "Exit code of cat: $?"
else
    cat spec.md
    echo "Exit code of cat: $?"
fi