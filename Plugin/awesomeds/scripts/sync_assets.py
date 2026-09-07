#!/usr/bin/env python3
"""Bundle canonical AwesomeDS resources into portable skills; stdlib only."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import sys

PLUGIN = Path(__file__).resolve().parents[1]
SOURCE = PLUGIN.parents[1] / 'AwesomeDS'

def hashes(folder):
    return {str(p.relative_to(folder)): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in sorted(folder.rglob('*')) if p.is_file()}

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Fail on missing or stale bundles; write nothing')
    args = parser.parse_args()
    for required in ('foundations.md', 'tokens.json'):
        if not (SOURCE / required).is_file():
            parser.error(f'Canonical resource missing: {SOURCE / required}')
    json.loads((SOURCE / 'tokens.json').read_text())
    if any(p.is_symlink() for p in SOURCE.rglob('*')):
        parser.error('Canonical resources must not contain symlinks')
    expected = hashes(SOURCE)
    stale = []
    for skill in sorted((PLUGIN / 'skills').iterdir()):
        if not (skill / 'SKILL.md').is_file():
            continue
        target = skill / 'references' / 'awesomeds'
        if hashes(target) != expected:
            stale.append(skill.name)
            if not args.check:
                if target.exists():
                    shutil.rmtree(target)
                shutil.copytree(SOURCE, target)
    manifest = PLUGIN / 'bundle-manifest.json'
    payload = {'source': 'AwesomeDS/', 'algorithm': 'sha256', 'files': expected}
    if args.check:
        if not manifest.is_file() or json.loads(manifest.read_text()) != payload:
            stale.append('bundle-manifest.json')
        if stale:
            print('Stale bundle: ' + ', '.join(stale), file=sys.stderr)
            return 1
    else:
        manifest.write_text(json.dumps(payload, indent=2) + '\n')
    print('Bundle verified' if args.check else 'Bundle synchronized')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
