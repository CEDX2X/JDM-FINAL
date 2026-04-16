const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  const routes = [
    { name: 'home', path: '/' },
    { name: 'travel', path: '/travel' },
    { name: 'logistics', path: '/logistics' },
    { name: 'shop', path: '/shop' },
    { name: 'contact', path: '/contact' }
  ];

  if (!fs.existsSync('verification_final')) {
    fs.mkdirSync('verification_final');
  }

  for (const route of routes) {
    console.log(`Verifying ${route.name}...`);
    await page.goto('http://localhost:5173' + route.path);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: `verification_final/${route.name}.png`, fullPage: true });
  }

  await browser.close();
})();
