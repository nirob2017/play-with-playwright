import { test, expect, request } from "@playwright/test";

test.describe("Playwright", () => {
  test("Interacting iFrames", async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/ingredients/iframe");

    const iframe = page.frameLocator("id=the-kitchen-table");
    const table = iframe.locator("id=fruits-vegetables");

    await expect(table).toBeVisible();
  });

  test("API testing", async () => {
    const requestContext = await request.newContext({
      baseURL: "https://kitchen.applitools.com",
    });
    const response = await requestContext.get("api/recipes");
    await expect(response).toBeOK();

    const body = await response.json();
    expect(body.time).toBeGreaterThan(0);
    expect(body.data.length).toBeGreaterThan(0);
  });
});
