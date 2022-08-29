import { test } from "@playwright/test";

test("Clicking an object", async ({ page }) => {
  await page.goto("https://www.apronus.com/music/lessons/unit01.htm");
  // click on  the keynotes
  await page.click("#t1 > table > tr:nth-child(1) > td:nth-child(1) > button");
});
