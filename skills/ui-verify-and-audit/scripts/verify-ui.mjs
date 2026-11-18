import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:3000';
const outDir = process.argv[3] || './.be-human-verify';
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch({ headless: true });
const report = { url, viewports: {} };

try {
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await context.newPage();

    const consoleErrors = [];
    const pageErrors = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);

    const metrics = await page.evaluate(() => {
      const overflowX =
        document.documentElement.scrollWidth > window.innerWidth;
      const brokenImages = Array.from(document.querySelectorAll('img'))
        .filter((img) => img.offsetParent !== null)
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.getAttribute('src') || '(no src)');
      const missingAlt = Array.from(document.querySelectorAll('img'))
        .filter((img) => !img.hasAttribute('alt'))
        .map((img) => img.getAttribute('src') || '(no src)');

      // AI-slop DOM heuristics
      const invisibleSections = Array.from(
        document.querySelectorAll('section, main > div, [data-reveal]')
      ).filter((el) => getComputedStyle(el).opacity === '0').length;

      const accentBarCards = Array.from(
        document.querySelectorAll('[class*="border-l-"], [class*="border-t-"]')
      ).filter((el) => {
        const cs = getComputedStyle(el);
        return (
          (parseFloat(cs.borderLeftWidth) >= 3 &&
            cs.borderLeftColor !== 'rgba(0, 0, 0, 0)') ||
          (parseFloat(cs.borderTopWidth) >= 3 &&
            cs.borderTopColor !== 'rgba(0, 0, 0, 0)')
        );
      }).length;

      const bodyText = document.body?.innerText || '';
      const leakedPlaceholders = (
        bodyText.match(/\[(Pending|TODO|TBD|Insert|Placeholder)[^\]]*\]/gi) || []
      ).slice(0, 5);

      return {
        overflowX,
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        brokenImages,
        missingAlt,
        aiSlopSignals: {
          invisibleSections,
          accentBarCards,
          leakedPlaceholders,
        },
      };
    });

    const screenshotPath = join(outDir, `${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    report.viewports[vp.name] = {
      ...metrics,
      consoleErrors,
      pageErrors,
      screenshotPath,
    };
    await context.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(report, null, 2));

const hasFailures = Object.values(report.viewports).some(
  (v) =>
    v.overflowX ||
    v.brokenImages.length > 0 ||
    v.consoleErrors.length > 0 ||
    v.pageErrors.length > 0 ||
    v.aiSlopSignals.leakedPlaceholders.length > 0
);
process.exit(hasFailures ? 1 : 0);
