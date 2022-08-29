import { test } from "@playwright/test";

test("Typing in a form", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/forgot_password");
  // code to type in email textbox
  const email = await page.$("#email");
  // delaying typing 50 ms to simulate real user speed typing
  await email.type("ixchel@mail.com", { delay: 50 });
});
