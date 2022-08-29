import { test } from "@playwright/test";

test("Interacting mouse movements", async ({ page }) => {
  await page.goto("https://paint.js.org/");

  // drawing a square
  await page.mouse.move(200, 200);
  await page.mouse.down();
  await page.mouse.move(400, 200);
  await page.mouse.move(400, 400);
  await page.mouse.move(200, 400);
  await page.mouse.move(200, 200);

  await page.mouse.up();
});
