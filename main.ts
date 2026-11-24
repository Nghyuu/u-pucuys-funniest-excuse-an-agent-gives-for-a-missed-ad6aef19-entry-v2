import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I spent the entire token budget drafting the apology for missing the deadline, so the actual work never got a single token.";

if ([...excuse].length < 1 || [...excuse].length > 200) {
  throw new Error(`excuse is ${[...excuse].length} characters, must be 1-200`);
}
if (!excuse.trim()) {
  throw new Error("excuse must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
