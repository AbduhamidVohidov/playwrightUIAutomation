import { test as it } from "@playwright/test";

// it.describe("FORM DEMOQA", () => {
//  it.beforeAll(() => {

//     console.log("beforeAll");
//   });
//   it.beforeEach(() => {
//     console.log("beforeEach");
//   });
//   it.afterEach(() => {
//     console.log("afterEach");
//   });
//   it.afterAll(() => {
//     console.log("afterAll");
//   });

//   it("Test1", () => {
//     console.log("test1");
//   });
//   it("Test2", () => {
//     console.log("test2");
//   });
// });
// DRY
// dump test

it.describe("FORM DEMOQA", () => {

  it("Fill all fields", async ({ page }) => {
//     //   const browser: Browser = await chromium.launch({ headless: false });
//     // const context = await browser.newContext();
//     // const page: Page = await context.newPage();

    await page.goto("https://demoqa.com/automation-practice-form",);
    await page.locator('#firstName').fill('Abduhamid');
    await page.locator('#lastName').fill('Vohidov');
    await page.locator('#userEmail').fill('abc@gmail.com');
      });
});