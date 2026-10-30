#!/usr/bin/env bash
# Overlay the split front source repos (#1072/#1217/#1224) onto the workspace at their original paths,
# so every path in ship.yml, gen-configs.yml and the other workflows resolves. Single list: edit it here only.
# Overlaid paths are added to .git/info/exclude so they are never committed back by this repo.
# Usage (from the repo root): bash 1_cicd/src/scripts/overlay-split-repos.sh
set -euo pipefail
tmp="${RUNNER_TEMP:-/tmp}"

# Mirrored-layout repos: the repo carries the original top-level paths and a SPLIT-PATHS.txt.
for r in Projects-endeavours cloud-me-pub-shared cloud-me-pub-profiles-prf-prs cloud-me-pub-profiles-_lnktree CG-galaxy CG-circus Projects-labtools cloud-h-webapps-2; do
  git clone --depth 1 "https://github.com/diegonmarcos/$r.git" "$tmp/$r"
  rsync -a --exclude='.git' --exclude='README.md' --exclude='SPLIT-PATHS.txt' --exclude='/.gitmodules' --exclude='/0_deployer' --exclude='/1_cicd' --exclude='/.github' --exclude='/a_Companies/leafy' --exclude='/a_Companies/nexus' --exclude='/a_Companies/stark' "$tmp/$r/" ./
  sed 's#^#/#' "$tmp/$r/SPLIT-PATHS.txt" >> .git/info/exclude
done

# One-project repos (project at the repo root): overlaid at the path the project had before the move.
for pair in cloud-me-pub-profiles-leaf.y:a_Companies/leafy cloud-me-pub-profiles-nexus.z:a_Companies/nexus cloud-me-pub-profiles-stark.x:a_Companies/stark Capital-Macro-Central-Bank:a_Companies/mqpm Capital-Stack-Fin-Terminal:a_Companies/blmbrg HardTech-DeepXTech:a_Companies/deepsc-x; do
  r="${pair%%:*}"; d="${pair##*:}"
  git clone --depth 1 "https://github.com/diegonmarcos/$r.git" "$tmp/$r"
  mkdir -p "$d"
  rsync -a --exclude='.git' --exclude='/README.md' --exclude='/.gitmodules' --exclude='/0_deployer' --exclude='/1_cicd' --exclude='/.github' --exclude='/build.sh' --exclude='/ship.yml' "$tmp/$r/" "$d/"
  ln -sfn ../../1_cicd/src/scripts/_engine.sh "$d/build.sh"
  ln -sfn ../../.github/workflows/ship.yml "$d/ship.yml"
  echo "/$d" >> .git/info/exclude
done
