import { Page } from '@playwright/test';

export async function fillOutQuestionFormSendQuestion(page: Page) {
 
  await page.locator ('v-select[name="contactType"]').click();
  await page.getByLabel('Listbox').getByText('Telefoongesprek', { exact: true }).click();
  await page.locator ('v-select[name="subject"]').click();
  await page.getByLabel('Listbox').getByText('Vraag', { exact: true }).click();
  await page.locator('v-input[name="concerning"]').click();
  await page.locator('v-input[name="concerning"] input').fill('Onderwerp van vraag.');
  await page.locator('v-input[name="clientQuestion"]').click();
  await page.locator('v-input[name="clientQuestion"] textarea').fill('De vraag zelf.');

  await page.locator ('v-select[name="selectedSkill"]').click();
  await page.getByLabel('Listbox').getByText('CJG - Jeugdhulp', { exact: true }).click();
  await page.locator ('v-select[name="selectedProductOrService"]').click();
  await page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp;12] Terugbelverzoek',{ exact: true }).click();
  await page.locator ('v-select[name="selectedQuestionType"]').click();
  await page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp:12B] Doorgezet naar andere afdeling', { exact: true}).click();
 
  await page.locator ('v-select[name="selectedService"]').click();
  await page.getByLabel('Listbox').getByText('locatie 1', { exact: true}).click();
  await page.locator ('v-select[name="selectedDepartment"]').click();
  await page.getByLabel('Listbox').getByText('Afdeling A', { exact: true}).click();
  await page.locator ('v-select[name="selectedEmployee"]').click();
  await page.getByLabel('Listbox').getByText('employee 3', { exact: true}).click();

  await page.locator('v-input[name="internalNote"]').click();
  await page.locator('v-input[name="internalNote"] textarea').fill('Een interne notitie hier...');
 
  await page.waitForTimeout(500);
  await page.locator('v-button', { hasText: /Doorsturen/ }).click();
  
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Ja' }).click();

  await page.getByRole('button', { name: 'Dossier Afsluiten' }).click();
  await page.getByRole('button', { name: 'Ja' }).click();
}
