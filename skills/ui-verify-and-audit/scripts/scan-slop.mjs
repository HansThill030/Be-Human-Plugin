import { readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const targetDir = process.argv[2] || '.';
const warnOnly = process.argv.includes('--warn-only');

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.next',
  'dist',
  'build',
  '.turbo',
  '.vercel',
  '.be-human-verify',
  'catalog',
]);

const CODE_EXTS = new Set([
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.vue',
  '.svelte',
  '.html',
  '.css',
]);

const RULES = [
  {
    id: 'lucide-import',
    severity: 'high',
    regex: /from\s+['"]lucide-react['"]|require\(['"]lucide-react['"]\)/g,
    message: 'Replace lucide-react with @phosphor-icons/react',
  },
  {
    id: 'purple-gradient-soup',
    severity: 'high',
    regex: /\b(from|via|to)-(indigo|purple|violet)-(400|500|600|700)\b/g,
    message: 'Avoid blue-to-purple gradient soup; use a pre-balanced hex palette',
  },
  {
    id: 'accent-bar-card',
    severity: 'medium',
    regex: /\bborder-[lt]-[248]\b/g,
    message: 'Avoid border-l-4 / colored accent-bar cards (major AI-slop tell)',
  },
  {
    id: 'scroll-reveal-trap',
    severity: 'medium',
    regex: /\bopacity-0\b(?=.*(animate|transition|reveal|motion))/g,
    message: 'Avoid opacity-0 scroll-reveal traps that hide content on arrival',
  },
  {
    id: 'leaked-placeholder',
    severity: 'high',
    regex: /\[(Pending|TODO|TBD|Insert|Placeholder)[^\]]*\]|Lorem ipsum|John Doe|Acme Corp/gi,
    message: 'Remove leftover placeholder text or dummy names',
  },
  {
    id: 'em-dash-copy',
    severity: 'low',
    regex: /[A-Za-zÀ-ÿ0-9]\s+—\s+[A-Za-zÀ-ÿ0-9]/g,
    message: 'Replace em-dash (—) asides in copy with commas, periods, or parentheses',
  },
  {
    id: 'ai-hype-words',
    severity: 'low',
    regex: /\b(delve|tapestry|testament to|embark on|seamlessly|revolutionize|paradigm shift|alavancar|jornada transformadora)\b/gi,
    message: 'Replace AI hype vocabulary with concrete, plain language',
  },
];

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (IGNORE_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full, files);
    } else if (CODE_EXTS.has(extname(entry)) || entry === 'package.json') {
      files.push(full);
    }
  }
  return files;
}

const findings = [];
for (const file of walk(targetDir)) {
  const rel = relative(targetDir, file);
  const content = readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  if (file.endsWith('package.json') && /"lucide-react"\s*:/.test(content)) {
    findings.push({
      file: rel,
      line: 1,
      id: 'lucide-dependency',
      severity: 'high',
      message: 'Remove lucide-react from package.json and install @phosphor-icons/react',
    });
    continue;
  }

  lines.forEach((lineText, idx) => {
    for (const rule of RULES) {
      rule.regex.lastIndex = 0;
      if (rule.regex.test(lineText)) {
        findings.push({
          file: rel,
          line: idx + 1,
          id: rule.id,
          severity: rule.severity,
          message: rule.message,
        });
      }
    }
  });
}

console.log(JSON.stringify({ scannedDir: targetDir, count: findings.length, findings }, null, 2));

const hasHigh = findings.some((f) => f.severity === 'high');
process.exit(!warnOnly && hasHigh ? 1 : 0);
