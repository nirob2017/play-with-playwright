import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {

  // Go to https://playwright.dev/
  await page.goto('https://playwright.dev/');

  // Click a:has-text("Community")
  await page.locator('a:has-text("Community")').click();
  await expect(page).toHaveURL('https://playwright.dev/community/welcome');

  // Click [aria-label="GitHub repository"]
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('[aria-label="GitHub repository"]').click()
  ]);

  // Click text=Python >> nth=0
  await page1.locator('text=Python').first().click();
  await expect(page1).toHaveURL('https://playwright.dev/python/docs/intro');

  // Click code:has-text("pip install pytest-playwright")
  await page1.locator('code:has-text("pip install pytest-playwright")').click({
    button: 'right'
  });

  // Click code:has-text("playwright install")
  await page1.locator('code:has-text("playwright install")').click({
    button: 'right'
  });

});