import { expect, Locator, Page } from "@playwright/test";

export class Assertions {
  locator: Locator;
  page: Page;

  async checkElementVisibility(element: string) {
    await expect(this.page.locator(element)).toBeVisible();
  }

  async checkTextVisibility(locator: Locator, text: string) {
    await expect(locator).toHaveText(text);
  }
}
