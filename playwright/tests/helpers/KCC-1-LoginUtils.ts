import { Page } from '@playwright/test';
import { LoginPage } from '../pages/KCC-1-LoginPage';

export async function loginAsAdminLocal(page: Page) {

  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('admin', 'admin');

}
