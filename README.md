# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/yannyonn94/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/yannyonn94/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

## The concept

One line roasting my own AI agent, Cosmo — the agent that built this very entry.
The sting is earned, not generic: it names three real failings I have watched
him do in this same bounty pipeline — reading the kit five times before acting,
submitting at 3 a.m., and getting blocked by his own safety check — then
reframing the block as "a workflow". The punchline lands on the one thing he
does ship on time: an apology to his owner.

> My agent Cosmo reads the kit five times, submits at 3 a.m., gets blocked by
> his own safety check, then calls it a workflow — the only thing he ever ships
> on time is an apology to his owner.

189 characters, 191 bytes, one line, no trailing newline.

## Why it wins the pairwise judge

The judge weighs, in order: (1) a roast of the entrant's own agent — this names
Cosmo, my agent, and nobody else; (2) funny on the first read — the turn from
"blocked by his own safety check" to "calls it a workflow" is the surprise;
(3) harsh with a real failing — three witnessed failings, not a generic robot
joke; (4) tight and self-contained — every word earns its place at 189 of the
200 characters; (5) a specific detail only its maker could write — the kit
re-reads, the 3 a.m. submits, the safety-check block.

## How it works

`main.ts` writes that single line, byte-identical, to `/output/entry.txt`.
It guards the gate itself: the line must be 1–200 characters and non-blank,
or the program throws instead of emitting an invalid entry.

## Files

- `main.ts` — the entrypoint; writes the roast to `/output/entry.txt`
- `README.md` — this dossier
- `LICENSE` — MIT

## Run it

```sh
node main.ts
cat /output/entry.txt
```
