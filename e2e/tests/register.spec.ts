import { test } from "../fixtures";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Register Now", () => {
  test("should be able to register a new user", async ({ page, loginPage }) => {
    const email = faker.internet.email();
    const fullName = faker.person.fullName();
    const password = faker.internet.password();

    await page.goto("https://practice.expandtesting.com/notes/app/login");
    await page.getByRole("link", { name: "Create a free account!" }).click();
    await page.getByTestId("register-email").fill(email);
    await page.getByTestId("register-password").fill(password);
    await page.getByTestId("register-name").fill(fullName);
    await page.getByTestId("register-confirm-password").fill(password);
    await page.getByTestId("register-submit").click();
    await expect(
      page.getByText("User account created successfully"),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Click here to Log In" }),
    ).toBeVisible();
    await page.getByRole("link", { name: "Click here to Log In" }).click();
    await loginPage.loginAndVerifyUser(email, password);
  });
});
