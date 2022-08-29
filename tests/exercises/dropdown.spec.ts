import { test } from "@playwright/test";

test("Select element from dropdown", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  let dropdown = await page.$("#dropdown");
  // value
  await dropdown.selectOption({ value: "1" });
  // label
  await dropdown.selectOption({ label: "Option 2" });
  // index
  await dropdown.selectOption({ index: 1 });
  // values inside this select
  const availableOptions = await dropdown.$$("option");
  for (let i = 0; i < availableOptions.length; i++) {
    console.log(await availableOptions[i].innerText());
  }
});
