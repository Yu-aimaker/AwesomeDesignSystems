---
name: design-thinking
description: Turn a product problem into evidence-labeled personas, hypotheses, journeys, user flows and usability experiments before committing to interface decisions.
---

# Design Thinking

Make the user problem explicit and testable. Produce only artifacts that change a product decision; do not manufacture research to fill a template.

## Frame the problem

Read the supplied brief and available authorized evidence. Separate observed facts, stakeholder claims and assumptions. Express the target job as: **When [situation], [user] needs to [task], so they can [outcome]**. Identify the existing workaround, friction and cost of failure. Clarify only high-impact unknowns; when asked to proceed autonomously, label a provisional assumption and continue.

## Model behavior

Build a persona from goals, prior knowledge, usage context, constraints and behaviors relevant to the task. Avoid decorative demographic details. If no user research exists, call it a **proto-persona / hypothesis**, never an interviewed or validated persona.

Map the current and proposed journey: trigger → discovery → evaluation → action → confirmation → recovery/return. For each meaningful step record user goal, question, action, friction, evidence confidence and design opportunity. Include failure/recovery and returning users, not only the ideal first visit.

Turn the journey into a user flow with decisions, prerequisites, state changes, exits and recovery. Distinguish screens from actions. Use a compact diagram or table, whichever makes branching clearer. Check that every stated user goal has a reachable completion state.

## Test the important uncertainty

Write hypotheses as **We believe [change] helps [user/context] achieve [outcome]; we will check [observable measure]; evidence against it would be [failure criterion]**. Prioritize by impact × uncertainty and testing cost. Avoid claiming causality from a few qualitative sessions.

Select the smallest useful prototype: content sketch, clickable flow or working interface. Use bundled AwesomeDS foundations and tokens under `references/awesomeds/` when designing an AwesomeDS specimen; adapt to the actual brand. Define a usability session with a neutral scenario, observable success, likely failure points and non-leading follow-ups. Do not tell participants which control to click.

If no participants are available, run a labeled cognitive walkthrough and record risks; do not call it user testing. For actual research, record participant count/context, observation, interpretation and limitations separately. No invented quotes or fake metrics.

## Deliver decisions

Return the problem statement, compact evidence ledger, relevant persona/journey/flow, prioritized hypotheses, prototype/test plan or actual test findings, and concrete next design decisions. Connect each proposed feature to a user outcome; cut unsupported additions. Record what evidence would change your recommendation.

## Extended design contract

Read bundled `references/awesomeds/README.md` to route the task. Apply `Content/japanese.md` to Japanese copy, `Patterns/README.md` to complete journeys, and `Quality/evidence.md` to verification. Use `Themes/README.md` for brand changes and `Technology/selection.md` before adding dependencies. Keep the common accessibility and interaction contract when changing a profile. Record which rule changes, why it changes, and what runtime evidence supports it. Use `Governance/change-policy.md` when research changes the canonical DS; synchronize its assets before delivering. Do not treat all research suggestions as mandatory rules or claim browser verification from source inspection.
