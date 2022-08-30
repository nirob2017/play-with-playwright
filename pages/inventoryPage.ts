import { expect, Locator, Page } from "@playwright/test";
import { Assertions } from "../utils/assertions";

export class Inventory {
  readonly inventoryListClass: Locator;
  readonly backPack: Locator;
  readonly shoppingCart: Locator;
  readonly checkoutBtn: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly itemName: Locator;

  constructor(readonly page: Page) {
    this.inventoryListClass = page.locator(".inventory_list");
    this.backPack = page.locator("#add-to-cart-sauce-labs-backpack");
    this.shoppingCart = page.locator(".shopping_cart_link");
    this.checkoutBtn = page.locator("#checkout");
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueBtn = page.locator("#continue");
    this.finishBtn = page.locator("#finish");
    this.itemName = page.locator(".inventory_item_name");
  }

  async buyProduct(username: string, lastName: string, postalCode: string) {
    await this.backPack.click();
    await this.shoppingCart.click();
    const assertion = new Assertions();
    await assertion.checkTextVisibility(this.itemName, "Sauce Labs Backpack");
    await this.checkoutBtn.click();
    await this.firstName.fill(username);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueBtn.click();
    await this.finishBtn.click();
  }

  async expectInventoryList() {
    await expect(this.inventoryListClass).toBeVisible();
  }
}
