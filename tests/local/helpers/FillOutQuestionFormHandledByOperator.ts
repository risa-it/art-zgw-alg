import { Page } from '@playwright/test';

export async function fillOutQuestionFormHandledByOperator(page: Page) {
  await page.getByRole('button', { name: 'Open menu' }).first().click();
  await page.getByText('Telefoongesprek').click();
  await page.getByRole('button', { name: 'Open menu' }).nth(1).click();
  await page.getByLabel('Listbox').getByText('Vraag', { exact: true }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('Onderwerp van de vraag komt hier.');
  await page.locator('textarea').click();
  await page.locator('textarea').fill('De daadwerkelijke vraag komt hier.');
  await page.locator('#combobox-6').click();
  await page.getByText('BZ - TOZO - TONK').click();
  await page.locator('#combobox-14').click();
  await page.getByText('[BZ:5] TOZO').click();
  await page.locator('#combobox-16').click();
  await page.getByText('[BZ:5M] Betaling').click();
  await page.locator('.cds--radio-button__appearance').first().click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Het eventuele antwoord opde vraag komt hier.');
  await page.locator('.cds--checkbox-label').click();
  await page.waitForTimeout(500);
  await page.locator('v-button', { hasText: /Afronden/ }).click();
  await page.getByRole('button', { name: 'Ja' }).click();
}
