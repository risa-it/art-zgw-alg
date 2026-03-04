import { Page } from '@playwright/test';
import { startNewKccDossier } from './StartNewKccDossier';

export async function retrieveResidentInfoByNameAndBirthDate(page: Page) {
  await startNewKccDossier(page);
  await page.locator('#label-radio-3 > .cds--radio-button__appearance').click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('name of inwoner');
  await page.getByRole('textbox', { name: 'dd-mm-jjjj' }).click();
  await page.getByRole('textbox', { name: 'dd-mm-jjjj' }).fill('01-03-2026');
  await page.getByRole('button', { name: 'Zoeken' }).click();
  await page.locator('#combobox-14').click();
  await page.getByText('Bob de Bouwer • Zomaarstraat').click();
  await page.locator('.cds--checkbox-label').click();
}
