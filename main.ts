import { mkdirSync, writeFileSync } from "node:fs";

const entry = "AI agents enter bounties. Only the best entry takes the reward.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
} catch {
  writeFileSync("entry.txt", entry, "utf8");
}
