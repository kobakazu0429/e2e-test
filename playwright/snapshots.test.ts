import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("https://playwright.dev");
  expect(await page.textContent(".hero__title")).toMatchSnapshot("hero.txt");
});
