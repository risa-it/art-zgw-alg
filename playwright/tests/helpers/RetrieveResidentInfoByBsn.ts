import { Page } from '@playwright/test';
import { startNewKccDossier } from './StartNewKccDossier';

export async function retrieveResidentInfoByBsn(page: Page) {
  await startNewKccDossier(page);
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('123456789');
  await page.getByRole('button', { name: 'Zoeken' }).click();
  await page.waitForTimeout(500);
  await page.locator('.cds--checkbox-label').click();
}
