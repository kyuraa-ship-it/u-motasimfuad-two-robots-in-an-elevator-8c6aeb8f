// Two Robots in an Elevator — one line of awkward robot small talk.
// The line: a robot confesses a small shared secret (faking a charge
// state when humans ride along), which is machine logic showing through
// forced elevator politeness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "So… do you also pretend to charge when the humans get in, or is that just a me thing?";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1-200 chars,
// not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry length ${LINE.length} outside 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
