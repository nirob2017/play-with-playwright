import { expect, Locator, Page, selectors } from "@playwright/test";

export class Actions {
  locator: Locator;
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async clickAnElement(element: string) {
    await this.page.locator(element).click();
  }
}
