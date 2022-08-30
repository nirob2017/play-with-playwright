import { Page, Locator, expect } from "@playwright/test";
import { Actions } from "../utils/actions";
import { testData } from "../utils/testData";

export class LoginPage {
  page: Page;
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: string;
  errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("id=password");
    this.loginButton = "id=login-button";
    this.errorMessage = page.locator(`[data-test="error"]`)
  }

  async load() {
    await this.page.goto(testData.baseUrl);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    const action = new Actions(this.page);
    await action.clickAnElement(this.loginButton);
  }

  async loginError(text: string) {
    await expect(this.errorMessage).toHaveText(text);
  }
}
