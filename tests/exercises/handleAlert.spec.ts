import { test } from "@playwright/test";

test.skip("handling alerts", async ({
  page,
}) => {
  // navigating to site
  await page.goto("https://www.demoqa.com/alerts");
  // code to handle the alerts
  // accept dialog
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });
  await page.click("#confirmButton");

  // enter text and accept dialog
  page.once("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept("my text is this");
  });
  await page.click("#promtButton");
});
