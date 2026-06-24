import { test as base } from "@playwright/test";
import LoginPage from "@poms/login";

interface ExtendedFixture {
  loginPage: LoginPage;
}

export const test = base.extend<ExtendedFixture>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});
