---
name: awesomeds
description: Apply AwesomeDS foundations and semantic design tokens to a website or interface while preserving its product purpose and brand identity.
---

# AwesomeDS

Build an interface whose visual decisions are explainable, consistent and useful. AwesomeDS is a foundation to adapt, not a theme to stamp on every product.

## Load the right contract

Read `references/awesomeds/foundations.md` and inspect `references/awesomeds/tokens.json`, relative to this skill's directory. These are bundled, versioned snapshots; do not assume the source repository is installed beside the skill. If the target project has its own documented DS or brand overrides, use those as the local authority and record the divergence. Never silently overwrite an established brand with the baseline.

Find the requested surface, its framework, existing components, styles and primary user task. State which constraints are confirmed and which are inferred. Resolve routine implementation choices from the project; ask only where an unanswered product decision changes the result materially.

## Apply

1. Map existing values to primitive, semantic and component token layers. Reuse semantic tokens in components; keep literal primitives inside token definitions. Preserve meaningful exceptions with a reason, rather than mechanically replacing every pixel value.
2. Set typography roles and readable line lengths before decorative work. Establish one clear primary action per decision context, consistent spacing rhythm, and surfaces with a legible hierarchy.
3. Compose existing primitives into the actual task flow. Include real loading, empty, error, success, disabled and focus behavior where relevant. A visual imitation of an input or button is not a working control.
4. Adapt brand expression through intentional typography, color roles, shape, imagery, tone and motion. Keep semantic error/success meanings and readable contrast. Avoid introducing gradients, ornamental charts, or dashboard furniture without a product reason.
5. Inspect the rendered result at a wide and narrow viewport. Exercise the primary action, keyboard navigation and escape/dismiss behavior. Check long copy, empty data and reduced motion when relevant. Use the installed browser tools; if none are available, report the visual checks as unverified.

## Deliver

Return the implemented surface, a short token/brand mapping, observed validation results and material remaining gaps. Cite concrete files and screenshots when available. Do not claim usability testing, accessibility conformance, or successful deployment from static code inspection alone. For a requested independent design audit, use `design-verifier` if installed; this skill remains usable without it.

## Extended design contract

Read bundled `references/awesomeds/README.md` to route the task. Apply `Content/japanese.md` to Japanese copy, `Patterns/README.md` to complete journeys, and `Quality/evidence.md` to verification. Use `Themes/README.md` for brand changes and `Technology/selection.md` before adding dependencies. Keep the common accessibility and interaction contract when changing a profile. Record which rule changes, why it changes, and what runtime evidence supports it. Use `Governance/change-policy.md` when research changes the canonical DS; synchronize its assets before delivering. Do not treat all research suggestions as mandatory rules or claim browser verification from source inspection.
