import { Page } from '@playwright/test';

export async function fillOutQuestionFormHandledByOperator(page: Page) {

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
  await page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp;12]').click();

  await page.locator ('v-select[name="selectedQuestionType"]').click();
  await page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp:12B]').click();
 
  await page.locator('.cds--radio-button__appearance').first().click();
  
  await page.locator('v-input[name="answer"]').click();
  await page.locator('v-input[name="answer"] textarea').fill('Het eventuele antwoord op de vraag komt hier.');
  
  await page.locator('v-input[name="reportingCode"]').click();

  await page.waitForTimeout(500);
  await page.locator('v-button', { hasText: /Afronden/ }).click();
  await page.getByRole('button', { name: 'Ja' }).click();
}
