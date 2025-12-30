#!/usr/bin/env python3
"""Git push script - run this to commit and push changes"""
import subprocess
import os

os.chdir('/home/diego/Documents/Git/front-Github_io')

commands = [
    ['git', 'status'],
    ['git', 'add', '-A'],
    ['git', 'commit', '-m', 'refactor: reorganize folders into categories\n\n- a_Portals: linktree, cloud\n- b_Work_Profiles: cv_pdf, cv_web, landpage, nexus\n- b_Work_Tools: api, myanalytics, mydrive, mymail, mymaps, myphotos, skills_mcp\n- c_Personal_Profiles: myprofile\n- c_Personal_Tools: remaining projects\n\nUpdated deploy.yml with new paths'],
    ['git', 'push']
]

for cmd in commands:
    print(f"\n>>> Running: {' '.join(cmd)}")
    result = subprocess.run(cmd, capture_output=True, text=True)
    print(result.stdout)
    if result.stderr:
        print(result.stderr)
    if result.returncode != 0 and cmd[1] != 'commit':  # commit may fail if nothing to commit
        print(f"Command failed with code {result.returncode}")
        break

print("\nDone!")
