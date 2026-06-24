import { test } from "../fixtures";

test.describe("Login Page", () => {
  test("should login with the correct credentials", async ({
    page,
    loginPage,
  }) => {
    await page.goto("https://practice.expandtesting.com/notes/app/login");
    await loginPage.loginAndVerifyUser("oliver@example.com", "welcome");
  });
});
