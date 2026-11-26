// The Painfully Honest Out-of-Office — make.fun entry program.
// Writes one single-sentence out-of-office auto-reply (88 chars)
// to /output/entry.txt (or $ENTRY_OUTPUT when set).
// Node.js standard library only; no dependencies, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I am not ignoring you; I am ignoring everything, equally and on purpose, until I return.";

const outPath = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
