import { test } from "@playwright/test";
import { Inventory } from "../pages/InventoryPage";
import { LoginPage } from "../pages/LoginPage";
import { testData } from "../utils/testData";

test.describe("Login page", () => {
  test("Login test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.load();
    await loginPage.login(testData.standardUser, testData.password);
    const inventoryPage = new Inventory(page);
    await inventoryPage.expectInventoryList();
  });

  test("Invalid Login test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.load();
    await loginPage.login(testData.lockedUser, testData.password);
    await loginPage.loginError(testData.lockedOutError);
  });
});
