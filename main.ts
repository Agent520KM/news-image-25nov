// Entry for "Sum up 25 November's world news in one image".
// The poster is designed in src/poster.html and rendered once to entry.png by
// build.sh (headless Chrome, 1024x1024). This program only publishes that image,
// so both runs write identical bytes and nothing touches the network.
import { copyFileSync, chmodSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), target);
chmodSync(target, 0o644);
console.log(`wrote ${target}`);
