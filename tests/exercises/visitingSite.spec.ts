import { test, chromium } from '@playwright/test';

test.skip('Visit a page', async ({ page }) => {
  	// launching browser
    const browser = await chromium.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	page = await browser.newPage();
   	// navigating to site
    await page.goto('http://google.com');
  	// closing browser
    await browser.close();
});
