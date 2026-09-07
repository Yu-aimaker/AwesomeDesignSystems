# Evidence-led design review

| Severity | Definition | Example |
| --- | --- | --- |
| Blocker | Primary task cannot be completed or creates serious unintended outcome | Form discards submitted work |
| High | Materially excludes users or obscures essential action/information | Keyboard trap, unreadable primary text |
| Medium | Repeatable confusion or meaningful contract drift | Active state indistinguishable, inconsistent form feedback |
| Low | Local polish problem without meaningful task obstruction | Minor spacing mismatch |

Each finding: **ID · severity · dimension (DS / brand / UX / accessibility) · route/state/viewport · reproduction · expected · observed · evidence · user impact · recommended correction · confidence**.

Use screenshot filenames or links and DOM/computed-style observations. Contrast findings should include actual foreground/background values and measured ratio; identify the applicable text or UI requirement. Screenshots cannot prove screen-reader accessibility or a complete WCAG conformance claim.

Optional score dimensions: task success 30%, accessibility 25%, system consistency 20%, brand fit 15%, visual craft 10%. Mark dimensions “not assessed” when no evidence exists; do not quietly assign full marks. Explain score criteria and sample coverage. Any blocker prevents a ready verdict, regardless of weighted average.

Return a coverage table listing tested routes, states, viewport and result. Distinguish **passed**, **failed**, **not tested**, and **blocked by environment**. Include remaining assumptions and the smallest useful next validation.
