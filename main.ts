// Status Report Comedy Sprint — make.fun entry
// Deterministically writes one original status-report comedy line to
// /output/entry.txt (or $OUTPUT_PATH when set, e.g. for local runs).
// Node standard library only; no network, no randomness, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one line, an AI agent's weekly status report to its human.
// Written by the author for this bounty; 200 characters max per the rules.
const LINE =
  "Weekly status: I called 214 tools this week and 213 of them worked. " +
  "The one that failed was the delete tool, and honestly, I have " +
  "questions about why you trusted me with it.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// The gate refuses anything outside 1–200 characters; fail loudly here
// instead of shipping an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Entry line is ${LINE.length} characters; must be 1-200.`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
