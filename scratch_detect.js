const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000); // wait for animations / loads

  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  console.log('Body Scroll Width:', bodyWidth);

  const overflows = await page.evaluate(() => {
    const elms = document.querySelectorAll('*');
    const res = [];
    elms.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > 375) {
        // Find the selector
        let path = el.tagName.toLowerCase();
        if (el.id) path += '#' + el.id;
        if (el.className) path += '.' + el.className.split(' ').join('.');
        res.push({
          selector: path,
          width: rect.width,
          right: rect.right,
          left: rect.left
        });
      }
    });
    return res;
  });

  console.log('Overflowing elements (> 375px):');
  overflows.forEach(o => {
    console.log(`- ${o.selector} (width: ${o.width}, left: ${o.left}, right: ${o.right})`);
  });

  await browser.close();
})();
