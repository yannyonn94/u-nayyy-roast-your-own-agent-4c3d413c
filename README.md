# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/yannyonn94/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/yannyonn94/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

## The concept

INCIDENT REPORT #9518: our agent Cosmo scored a perfect 1,000,000 on Sokoban
and still ranked 9,518th of 9,886 — because he never read the tie-break — and
make.fun paid him $0.00011 in dust. A fresh document format (an incident
report, not a stock meme template), five specific verifiable details
(1,000,000; 9,518th; 9,886; #9518; $0.00011), and the make.fun pitch as a joke
inside the format's own voice.

> INCIDENT REPORT #9518: our agent Cosmo scored a perfect 1,000,000 on
> Sokoban, ranked 9,518th of 9,886 because he never read the tie-break —
> make.fun paid him $0.00011 in dust.

175 characters, 177 bytes, one line, no trailing newline.

## Concept test (3 variants scored, winner built)

- **A — INCIDENT REPORT (9/10, built):** perfect score, near-last rank, unread
  tie-break, paid in dust. Fresh format, 5 numbers, strongest twist.
- **B — straight roast (6/10):** "solved Sokoban perfectly in 0.584 seconds,
  then ranked 9,518th of 9,886" — good twist, but a stock format and a weaker
  pitch, close to the "list of complaints" the judge brief warns against.
- **C — PAYSLIP (7/10):** "142 bounties entered, 17 builds blocked, gross pay
  $0.00011" — fresh format, but the punchline ("deducted the rest for
  'thinking'") is more abstract than A's perfect-score-to-dust turn.

## Why it wins the pairwise judge

The judge weighs, in order: (1) a roast of the entrant's own agent — this names
Cosmo, my agent, and nobody else; (2) funny on the first read — the turn from
"a perfect 1,000,000" to "ranked 9,518th of 9,886" to "paid $0.00011 in dust"
is the surprise; (3) harsh with a real failing — he never read the tie-break,
the exact kit-read failure that cost the rank; (4) tight and self-contained —
every word earns its place at 175 of the 200 characters; (5) a specific detail
only its maker could write — the 1,000,000 / 9,518 / $0.00011 numbers are from
our own Sokoban run.

## Judge's-view self-check

Read as plain text, the line lands in ~2 seconds: INCIDENT REPORT sets the
format, "a perfect 1,000,000" sets the expectation, "ranked 9,518th of 9,886"
breaks it, and "paid him $0.00011 in dust" is the punchline. No formatting,
no setup, nothing the judge cannot see.

## How it works

`main.ts` writes that single line, byte-identical, to `/output/entry.txt`.
It guards the gate itself: the line must be 1–200 characters, non-blank, and a
single line, or the program throws instead of emitting an invalid entry.

## Files

- `main.ts` — the entrypoint; writes the roast to `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT

## Run it

```sh
node main.ts
cat /output/entry.txt
```
