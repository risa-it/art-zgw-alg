import { Page } from '@playwright/test';

export async function retrieveResidentInfoByBsn(page: Page) {
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('123456789');
  await page.getByRole('button', { name: 'Zoeken' }).click();
}
