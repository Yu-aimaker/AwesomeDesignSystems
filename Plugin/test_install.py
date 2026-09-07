#!/usr/bin/env python3
"""Exercise observable install behavior in isolated temporary projects."""
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parent
sys.path.insert(0, str(ROOT))
from install import AGENTS, NAMES, digest_tree

class InstallerTests(unittest.TestCase):
    def run_install(self, agent, project, *extra):
        return subprocess.run([sys.executable, str(ROOT / 'install.py'), '--agent', agent,
                               '--project', str(project), *extra], capture_output=True, text=True)

    def test_each_agent_dry_run_install_and_idempotence(self):
        for agent, folder in AGENTS.items():
            with self.subTest(agent=agent), tempfile.TemporaryDirectory() as tmp:
                project = Path(tmp)
                dry = self.run_install(agent, project, '--dry-run')
                self.assertEqual(dry.returncode, 0, dry.stderr)
                self.assertEqual(list(project.iterdir()), [])
                actual = self.run_install(agent, project)
                self.assertEqual(actual.returncode, 0, actual.stderr)
                for name in NAMES:
                    self.assertEqual(digest_tree(project / folder / 'skills' / name),
                                     digest_tree(ROOT / 'awesomeds' / 'skills' / name))
                before = digest_tree(project)
                again = self.run_install(agent, project)
                self.assertEqual(again.returncode, 0, again.stderr)
                self.assertEqual(before, digest_tree(project))

    def test_conflict_fails_without_partial_install(self):
        with tempfile.TemporaryDirectory() as tmp:
            project = Path(tmp)
            existing = project / '.agents' / 'skills' / 'design-thinking'
            existing.mkdir(parents=True)
            (existing / 'SKILL.md').write_text('User-authored skill')
            before = digest_tree(project)
            result = self.run_install('codex', project)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual(before, digest_tree(project))

    def test_symlink_destination_rejected(self):
        with tempfile.TemporaryDirectory() as tmp, tempfile.TemporaryDirectory() as outside:
            project = Path(tmp)
            (project / '.claude').symlink_to(outside, target_is_directory=True)
            result = self.run_install('claude', project)
            self.assertNotEqual(result.returncode, 0)
            self.assertEqual(list(Path(outside).iterdir()), [])

if __name__ == '__main__':
    unittest.main()
