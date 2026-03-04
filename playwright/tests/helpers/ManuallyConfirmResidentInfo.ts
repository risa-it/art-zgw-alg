import { Page } from '@playwright/test';

export async function manuallyConfirmResidentInfo(page: Page) {
  await page.waitForTimeout(500);
  await page.locator('.cds--checkbox-label').click();
}
