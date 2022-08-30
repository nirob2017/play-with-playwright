import { test } from "@playwright/test";
import { Inventory } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";
import { testData } from "../utils/testData";

test.describe("Inventory page", () => {
  test("Buy product test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.load();
    await loginPage.login(testData.standardUser, testData.password);
    const inventoryPage = new Inventory(page);
    await inventoryPage.expectInventoryList();
    await inventoryPage.buyProduct(
      testData.firstName,
      testData.lastName,
      testData.postalCode
    );
  });
});
