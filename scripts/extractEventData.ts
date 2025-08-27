/**
 * Script to extract event/workshop details from all .tsx files in src/events and src/workshops.
 * Outputs a structured JSON file for chatbot and site-wide use.
 * 
 * Usage: ts-node scripts/extractEventData.ts
 */

import fs from "fs";
import path from "path";

// Directories to scan
const eventDirs = [
  path.join(__dirname, "../src/events"),
  path.join(__dirname, "../src/workshops"),
];

// Helper to extract text between tags or after a label
function extractBetween(str: string, start: string, end: string) {
  const s = str.indexOf(start);
  if (s === -1) return "";
  const e = str.indexOf(end, s + start.length);
  if (e === -1) return str.slice(s + start.length).trim();
  return str.slice(s + start.length, e).trim();
}

// Helper to extract all lines matching a pattern
function extractAll(str: string, regex: RegExp) {
  const matches = [];
  let m;
  while ((m = regex.exec(str))) {
    matches.push(m[1].trim());
  }
  return matches;
}

interface EventWorkshopExtracted {
  name: string;
  type: "workshop" | "event";
  codeFile: string;
  date?: string;
  time?: string;
  incharges?: string[];
  description?: string;
  skills?: string[];
  registration?: string;
  prizeWorth?: string;
  prerequisites?: string;
  email?: string;
  topic?: string;
  rules?: string[];
}

function parseTSXFile(filePath: string): EventWorkshopExtracted | null {
  const code = fs.readFileSync(filePath, "utf8");
  const isWorkshop = filePath.includes("/workshops/");
  const type = isWorkshop ? "workshop" : "event";
  const name = extractBetween(code, 'text-3xl font-bold text-center text-cyan-300 mb-4 mt-12">', "</h2>") ||
    extractBetween(code, 'text-3xl font-bold text-center text-cyan-300 mb-4">', "</h2>") ||
    path.basename(filePath, ".tsx").replace(/([A-Z])/g, " $1").trim();

  const description = extractBetween(code, 'text-white/70 mb-4">', "</p>") ||
    extractBetween(code, 'text-white/80 mb-2">', "</p>");

  const date = extractBetween(code, "📅 ", "</div>") || extractBetween(code, "Date:", "</span>");
  const time = extractBetween(code, "⏰ ", "</div>") || extractBetween(code, "Time:", "</span>");
  const incharges = extractAll(code, /Incharge:<\/span>\s*<span[^>]*>([^<]+)<\/span>/g);
  const registration = extractBetween(code, "Registration:</span>", "</span>");
  const prizeWorth = extractBetween(code, "Prize Worth:</span>", "</span>");
  const prerequisites = extractBetween(code, "Prerequisites:</span>", "</span>");
  const email = extractBetween(code, "mailto:", '"');
  const topic = extractBetween(code, "Topic:", "</p>");
  const rules = extractAll(code, /<li>([^<]+)<\/li>/g);
  const skills = extractAll(code, /<li>([^<]+)<\/li>/g);

  // If no name or description, skip
  if (!name || !description) return null;

  return {
    name,
    type,
    codeFile: filePath.replace(/\\/g, "/").replace(/^.*src\//, "src/"),
    date,
    time,
    incharges,
    description,
    skills: skills.length ? skills : undefined,
    registration,
    prizeWorth,
    prerequisites,
    email,
    topic,
    rules: rules.length ? rules : undefined,
  };
}

function main() {
  const allFiles: string[] = [];
  for (const dir of eventDirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (file.endsWith(".tsx")) {
        allFiles.push(path.join(dir, file));
      }
    }
  }

  const data: EventWorkshopExtracted[] = [];
  for (const file of allFiles) {
    const parsed = parseTSXFile(file);
    if (parsed) data.push(parsed);
  }

  const outPath = path.join(__dirname, "../src/eventsData.generated.ts");
  const ts = `// AUTO-GENERATED FILE. DO NOT EDIT DIRECTLY.
import { EventWorkshop } from "./eventsData";
export const eventsWorkshops: EventWorkshop[] = ${JSON.stringify(data, null, 2)};
`;
  fs.writeFileSync(outPath, ts, "utf8");
  console.log(`Extracted ${data.length} events/workshops to ${outPath}`);
}

main();
