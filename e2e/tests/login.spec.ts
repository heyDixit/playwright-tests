import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test("should login with the correct credentials", async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/notes/app/login");
    await page.getByTestId("login-email").fill("oliver@example.com");
    await page.getByTestId("login-password").fill("welcome");
    await page.getByTestId("login-submit").click();
    await expect(page).toHaveURL(
      "https://practice.expandtesting.com/notes/app",
    );
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });
});
