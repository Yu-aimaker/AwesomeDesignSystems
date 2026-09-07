# AwesomeDS plugin

Four portable Agent Skills: `awesomeds` applies the system, `ds-creator` discovers a brand and creates a DS, `design-verifier` checks browser evidence, and `design-thinking` develops evidence-labeled user journeys and experiments. They work independently and each includes its own versioned DS snapshot. No API key, MCP server, network call or paid dependency is required to install. Browser review still requires browser tooling in the selected agent.

## Install into a project

Clone this private repository using your GitHub account. From its root, choose the agent used in your target project. Python 3.9+ is required.

```sh
python3 Plugin/install.py --agent codex --project /absolute/path/to/your-project --dry-run
python3 Plugin/install.py --agent codex --project /absolute/path/to/your-project
```

Replace `codex` with `claude` or `cursor`. Installation copies files only into the explicitly selected project. Existing identical skills are left untouched; a conflicting skill stops installation before writes. To upgrade a modified installation, back up and remove the four existing skill directories, then rerun the installer. No global settings, marketplaces or unrelated skills are edited.

| Agent | Project destination | Example invocation |
| --- | --- | --- |
| Codex | `.agents/skills/<name>/` | `$awesomeds Build a settings screen for this product.` |
| Claude Code | `.claude/skills/<name>/` | `/ds-creator Help define this product's brand.` |
| Cursor | `.cursor/skills/<name>/` | `/design-verifier Review the running application.` |

Open a new agent session if the skills are not discovered. Cursor also reads `.agents/skills`; avoid installing duplicate copies for both Codex and Cursor in the same project. Use the Codex destination when sharing that project between them.

The bundle also contains native `.codex-plugin/plugin.json` and `.claude-plugin/plugin.json` manifests. For a local Claude Code plugin session, from the repository root:

```sh
claude --plugin-dir ./Plugin/awesomeds
```

Plugin invocation is namespaced, for example `/awesomeds:ds-creator`. This repository does not register a marketplace or claim a published registry package. The project-skill installer is the supported portable installation path.

## Maintain the single source

Edit root `AwesomeDS/`, then regenerate portable snapshots before distributing:

```sh
python3 Plugin/awesomeds/scripts/sync_assets.py
python3 Plugin/awesomeds/scripts/sync_assets.py --check
python3 Plugin/test_install.py
```

`--check` compares every bundled file and the SHA-256 manifest with the canonical source. Installed snapshots remain fixed until reinstalled. Edit your own project's system rather than the installed baseline when creating a new brand.

## Sources and limits

Installation formats checked against official [Codex skill documentation](https://learn.chatgpt.com/docs/build-skills), [Claude Code skills](https://code.claude.com/docs/en/skills), [Claude Code plugins](https://code.claude.com/docs/en/plugins), and [Cursor skills](https://cursor.com/docs/skills). Brand discovery draws conceptual inspiration from [Matt Pocock's skills](https://github.com/mattpocock/skills); all AwesomeDS skill instructions are independently authored.

The installer is locally tested for all three folder formats, integrity, dry runs, idempotence and conflicts. This verifies packaging, not behavioral execution inside every vendor's application. Skills instruct agents; they do not themselves run a browser, conduct human interviews or guarantee design quality.
