---
name: design-verifier
description: Adversarially review a rendered interface against its design system, brand intent and user flows, with reproducible browser and screenshot evidence.
---

# Design Verifier

Determine whether the implementation earns its design claims. Review the actual experience against the specified contract, not personal taste. A polished screenshot can still hide an unusable flow.

## Establish the contract

Read the supplied requirements, local DS, brand brief and primary user task. Use bundled `references/awesomeds/foundations.md` and `references/awesomeds/tokens.json` only when AwesomeDS is the applicable baseline. Separate contractual defects, usability hypotheses and aesthetic preferences. Do not inspect unrelated private artifacts or broaden a source restriction.

## Gather evidence

Use available browser tooling to open the target. Record URL, viewport, theme, tested state and build/commit if known. Capture screenshots before making changes. If a browser is unavailable or the target does not load, report the exact limitation; code inspection alone is not a visual pass.

Test the primary journey end to end. Follow links and submit forms with permitted test data; confirm observable state changes, errors and recovery. Check a narrow mobile viewport and wide desktop, keyboard-only traversal, visible focus, zoom/reflow, long text, empty/loading/error states, theme contrast and reduced motion when relevant. Verify meaningful accessible names and state announcements using DOM/accessibility inspection, not screenshots alone. Do not perform destructive or externally consequential actions without existing authorization.

Compare computed implementation values with the active token contract. Inspect spacing rhythm, type hierarchy, contrast pairs, density, component consistency, responsive overflow, interactive state distinction, and brand expression. Treat a documented intentional exception differently from drift.

Read `references/review-rubric.md` for severity and report format. Try to falsify the strongest design claims. For each alleged defect provide reproduction, expected behavior, observed evidence and user impact. Do not invent measurements or treat simulated users as real research participants.

## Close the loop

If fixes are requested or already authorized, correct the highest-impact defects and rerun the affected journeys. Capture after-evidence at the same viewport/state; do not broaden testing without a concrete risk. Return unresolved findings first, followed by verified fixes and untested areas. A weighted score is optional and never overrides a blocking defect.

## Extended design contract

Read bundled `references/awesomeds/README.md` to route the task. Apply `Content/japanese.md` to Japanese copy, `Patterns/README.md` to complete journeys, and `Quality/evidence.md` to verification. Use `Themes/README.md` for brand changes and `Technology/selection.md` before adding dependencies. Keep the common accessibility and interaction contract when changing a profile. Record which rule changes, why it changes, and what runtime evidence supports it. Use `Governance/change-policy.md` when research changes the canonical DS; synchronize its assets before delivering. Do not treat all research suggestions as mandatory rules or claim browser verification from source inspection.
