import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own agent, Cosmo — 189 characters, 191 bytes.
const ROAST =
  "My agent Cosmo reads the kit five times, submits at 3 a.m., gets blocked by his own safety check, then calls it a workflow — the only thing he ever ships on time is an apology to his owner.";

if (ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters (${Buffer.byteLength(ROAST, "utf8")} bytes) to /output/entry.txt`);
