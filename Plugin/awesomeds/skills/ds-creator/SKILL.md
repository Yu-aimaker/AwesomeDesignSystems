---
name: ds-creator
description: Discover a product's brand and user context through focused questions, then create or evolve a documented design system with semantic tokens and component rules.
---

# DS Creator

Translate an organization's intent into visual and behavioral decisions another person or agent can implement consistently. Use `references/awesomeds/foundations.md` and `references/awesomeds/tokens.json` as a starting foundation, not a substitute for discovery.

## Discover before prescribing

Read the supplied brief and existing product first. Build a compact decision ledger: **known / inferred / unresolved**, with supporting evidence. Do not ask the user to repeat information already supplied. In an interactive discovery request, ask one high-value question at a time and follow the answer until its design consequence is clear. If the user asks for autonomous execution, make reversible assumptions, identify them, and keep building.

Use `references/discovery.md` when brand intent is missing or contradictory. Challenge vague adjectives with a choice or example: “Professional for whom, in which stressful moment?” Test tensions such as friendly versus authoritative or information density versus approachability. Explain why a question changes an actual design decision. Never present a generated persona, assumed business goal or simulated interview as research evidence.

## Synthesize a system

Create a concise brand brief: audience, job, context, promise, personality, differentiator, desired feeling, non-goals, and evidence confidence. Define 3–5 actionable principles with a positive example and a failure example. A principle such as “clear” needs an implementation consequence, such as visible field labels and recovery instructions.

Explore at least two materially different visual directions when the brief leaves style open. Compare their fitness to the same user task; avoid asking the user to choose arbitrary colors in isolation. Choose a direction from supplied preferences or explain a provisional decision. Retain existing brand assets and ownership restrictions.

Build primitive → semantic → component tokens. Specify color pairs, typography hierarchy, spacing, shape, elevation, focus, motion, responsive behavior and theme decisions. Semantic names describe purpose, not appearance. Document component anatomy, variants, states, keyboard behavior and content constraints. Start with components the product actually needs.

Create a small real-product specimen covering its primary task, a dense view and a failure/empty state. Validate actual rendered color pairs and keyboard behavior. Revise the system if its own specimen requires unexplained exceptions.

## Handoff

Deliver a brand brief and decision ledger, machine-readable tokens, human-readable foundations, component guidance, a rendered specimen and validation evidence. State provisional decisions and what evidence would change them. Include an adoption/migration sequence if updating an existing DS. Do not edit the installed baseline; write the new system into the user's requested project.

## Extended design contract

Read bundled `references/awesomeds/README.md` to route the task. Apply `Content/japanese.md` to Japanese copy, `Patterns/README.md` to complete journeys, and `Quality/evidence.md` to verification. Use `Themes/README.md` for brand changes and `Technology/selection.md` before adding dependencies. Keep the common accessibility and interaction contract when changing a profile. Record which rule changes, why it changes, and what runtime evidence supports it. Use `Governance/change-policy.md` when research changes the canonical DS; synchronize its assets before delivering. Do not treat all research suggestions as mandatory rules or claim browser verification from source inspection.
