import { Page, expect } from "@playwright/test";

export default class LoginPage {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  loginAndVerifyUser = async (
    email: string,
    password: string,
  ): Promise<void> => {
    await this.page.getByTestId("login-email").fill(email);
    await this.page.getByTestId("login-password").fill(password);
    await this.page.getByTestId("login-submit").click();
    await expect(this.page).toHaveURL(
      "https://practice.expandtesting.com/notes/app",
    );
    await expect(
      this.page.getByRole("button", { name: "Logout" }),
    ).toBeVisible();
  };
}
