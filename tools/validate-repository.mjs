import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredRoot = [
  'README.md',
  'LICENSE',
  '.gitignore',
  '.github/workflows/ci.yml',
  'Dockerfile',
  'docker-compose.yml',
  '.env.example',
  'CONTRIBUTING.md',
  '.github/CODEOWNERS',
  '.github/pull_request_template.md',
  '.github/ISSUE_TEMPLATE/engineering-review.md'
];
const requiredDocs = [
  'PORTFOLIO.md',
  'PRODUCT.md',
  'WHY_TRACE.md',
  'AI_ADOPTION.md',
  'VISION.md',
  'ROADMAP.md',
  'ARCHITECTURE.md',
  'CURRENT_MAINLINE_STATUS.md',
  'RC3D_WORKSPACE_ENGINE.md',
  'FEATURE_MATRIX.md',
  'RELEASE_SHOWCASE.md',
  'SCREENSHOTS.md',
  'API_EXAMPLES.md',
  'FOLDER_STRUCTURE.md',
  'ENGINEERING_DECISIONS.md',
  'PERFORMANCE.md',
  'SECURITY.md',
  'WHAT_THIS_PROVES.md',
  'WHAT_THIS_DOES_NOT_CLAIM.md'
];
const requiredAssets = [
  'screenshots/rc3d-goal-home-desktop.png',
  'screenshots/rc3d-solution-recommendation-desktop.png',
  'screenshots/rc3d-goal-home-mobile.png',
  'architecture/rc3d-system-overview.svg',
  'architecture/rc3d-system-overview.png',
  'architecture/rc3d-workspace-flow.svg',
  'architecture/rc3d-workspace-flow.png',
  'release/rc3-release-timeline.svg',
  'release/rc3-release-timeline.png'
];

let failed = false;
function requireFile(relativePath) {
  const full = path.join(root, relativePath);
  if (!fs.existsSync(full)) {
    console.error(`Missing required file: ${relativePath}`);
    failed = true;
  }
}
for (const file of requiredRoot) requireFile(file);
for (const file of requiredDocs) requireFile(path.join('docs', file));
for (const file of requiredAssets) requireFile(path.join('assets', file));

const forbiddenFileNames = ['.env', 'id_rsa', 'id_ed25519'];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const relative = path.relative(root, full).replace(/\\/g, '/');
    if (relative.startsWith('.git/')) continue;
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (forbiddenFileNames.includes(entry.name)) {
      console.error(`Forbidden file present: ${relative}`);
      failed = true;
    }
    if (/\.(md|txt|yml|yaml|json|js|mjs|ts|tsx|env|example|gitignore|dockerignore)$/i.test(entry.name) || entry.name === 'Dockerfile') {
      const text = fs.readFileSync(full, 'utf8');
      const forbidden = [
        /C:[\\/]/i,
        /\/Users\/trace/i,
        /10\.8\.\d{1,3}\.\d{1,3}/,
        /192\.168\.\d{1,3}\.\d{1,3}/,
        /\.ssh[\\/]/i,
        /BEGIN (RSA|OPENSSH|PRIVATE) KEY/i,
        /private[_-]?key\s*[:=]/i,
        /secret\s*[:=]\s*['"][A-Za-z0-9_.-]{12,}['"]/i,
        /api[_-]?key\s*[:=]\s*['"][A-Za-z0-9_.-]{12,}['"]/i,
        /token\s*[:=]\s*['"][A-Za-z0-9_.-]{20,}['"]/i
      ];
      for (const pattern of forbidden) {
        if (pattern.test(text)) {
          console.error(`Forbidden pattern ${pattern} in ${relative}`);
          failed = true;
        }
      }
      if (/\.md$/i.test(entry.name)) validateMarkdownLinks(full, relative, text);
    }
  }
}

function validateMarkdownLinks(fullPath, relativePath, source) {
  const links = source.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g);
  for (const match of links) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, '').split(/\s+["']/)[0];
    if (!rawTarget || /^(?:https?:|mailto:|#)/i.test(rawTarget)) continue;
    const target = decodeURIComponent(rawTarget.split('#')[0].split('?')[0]);
    const resolved = path.resolve(path.dirname(fullPath), target);
    if (!fs.existsSync(resolved)) {
      console.error(`Broken local link in ${relativePath}: ${rawTarget}`);
      failed = true;
    }
  }
}
walk(root);

if (failed) process.exit(1);
console.log('Repository validation passed.');
