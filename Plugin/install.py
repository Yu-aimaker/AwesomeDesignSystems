#!/usr/bin/env python3
"""Install the four self-contained AwesomeDS skills into an explicitly selected project."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil
import tempfile

PLUGIN = Path(__file__).resolve().parent / 'awesomeds'
AGENTS = {'claude': '.claude', 'cursor': '.cursor', 'codex': '.agents'}
NAMES = ('awesomeds', 'ds-creator', 'design-verifier', 'design-thinking')

def digest_tree(path):
    return {str(p.relative_to(path)): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in sorted(path.rglob('*')) if p.is_file()}

def validate_source():
    manifest = json.loads((PLUGIN / 'bundle-manifest.json').read_text())
    for name in NAMES:
        source = PLUGIN / 'skills' / name
        if not (source / 'SKILL.md').is_file():
            raise ValueError(f'Missing skill: {name}')
        if any(p.is_symlink() for p in source.rglob('*')):
            raise ValueError(f'Symlinks are not supported: {name}')
        if digest_tree(source / 'references' / 'awesomeds') != manifest['files']:
            raise ValueError(f'Stale or corrupted resources: {name}; run scripts/sync_assets.py')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--agent', choices=AGENTS, required=True)
    parser.add_argument('--project', type=Path, required=True, help='Existing project directory; no global installation')
    parser.add_argument('--dry-run', action='store_true', help='Validate and show changes without writing')
    args = parser.parse_args()
    project = args.project.expanduser().resolve()
    if not project.is_dir():
        parser.error('--project must be an existing directory')
    try:
        validate_source()
    except (ValueError, OSError, KeyError) as exc:
        parser.error(str(exc))
    base = project / AGENTS[args.agent] / 'skills'
    for parent in (project / AGENTS[args.agent], base):
        if parent.is_symlink() or (parent.exists() and not parent.is_dir()):
            parser.error(f'Refusing non-directory or symlink destination: {parent}')
    operations = []
    for name in NAMES:
        source, dest = PLUGIN / 'skills' / name, base / name
        if dest.is_symlink():
            parser.error(f'Refusing symlink destination: {dest}')
        if dest.exists():
            if dest.is_dir() and digest_tree(dest) == digest_tree(source):
                print(f'Unchanged {dest}')
                continue
            parser.error(f'Destination differs: {dest}. Back up and remove that skill directory before upgrading.')
        operations.append((source, dest))
    for source, dest in operations:
        print(f'{"Would install" if args.dry_run else "Install"} {dest}')
    if args.dry_run:
        print('Dry run complete; no files written.')
        return 0
    base.mkdir(parents=True, exist_ok=True)
    for source, dest in operations:
        # Stage a whole skill before making it discoverable.
        with tempfile.TemporaryDirectory(prefix='.awesomeds-stage-', dir=base) as staging:
            staged = Path(staging) / source.name
            shutil.copytree(source, staged)
            if digest_tree(staged) != digest_tree(source):
                raise RuntimeError('Copy integrity check failed')
            if dest.exists():
                raise RuntimeError(f'Destination appeared during installation: {dest}')
            staged.rename(dest)
    print('Installation verified. Reopen your agent session if new skills are not visible.')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
