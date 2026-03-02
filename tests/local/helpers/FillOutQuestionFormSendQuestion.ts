import { Page } from '@playwright/test';

export async function fillOutQuestionFormSendQuestion(page: Page) {
  await page.locator('.cds--checkbox-label').click();
  await page.locator('#combobox-2').click();
  await page.getByText('Telefoongesprek').click();
  await page.locator('#combobox-4').click();
  await page.getByLabel('Listbox').getByText('Vraag', { exact: true }).click();
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('Onderwerp van vraag.');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('De vraag zelf.');
  await page.locator('#combobox-6').click();
  await page.getByText('CJG - Jeugdhulp').click();
  await page.locator('#combobox-14').click();
  await page.getByText('[CJG - Jeugdhulp;12]').click();
  await page.locator('#combobox-16').click();
  await page.getByText('[CJG - Jeugdhulp:12B]').click();
  await page.locator('#combobox-8').click();
  await page.getByText('locatie 1').click();
  await page.locator('#combobox-10').click();
  await page.getByText('Afdeling A').click();
  await page.locator('#combobox-12').click();
  await page.getByText('employee 1').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('Een interne notitie hier...');
  await page.waitForTimeout(500);
  await page.getByText('Doorsturen').click();
  await page.getByRole('button', { name: 'Ja' }).click();
}
