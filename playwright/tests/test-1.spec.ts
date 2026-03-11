import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8082/auth/realms/valtimo/protocol/openid-connect/auth?client_id=valtimo-console&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fkeycloak%2Fcallback&state=57536723-5825-4e81-96d4-194cac8899ea&response_mode=fragment&response_type=code&scope=openid&nonce=d38d316e-191c-47ac-b96c-98937f7572e7&code_challenge=6cFwibFr9ytQRtCQVOfFwCYW7yi6OxnfX1GAu61qnIY&code_challenge_method=S256');
  await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Dossiers' }).click();
  await page.getByRole('link', { name: 'Inwoner contact registratie' }).click();
  await page.getByLabel('Table action bar').getByRole('button', { name: 'Creëer Nieuw Dossier' }).click();
  await page.getByRole('button', { name: 'Start' }).click();

  await page.locator('#combobox-2').click();
  await page.getByText('Brief').click();
  await page.getByText('Email').click();
  await page.getByRole('textbox').first().fill('iets');
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('een vraag over');
  await page.locator('#combobox-6').click();
  await page.getByText('CJG - JGZ 4+').click();
  await page.locator('#combobox-14').click();
  await page.getByText('[CJG - JGZ 4+:2] > 5 dagen').click();
  await page.getByRole('button', { name: 'Open menu' }).nth(4).click();
  await page.getByText('[CJG - JGZ 4+:2A] Zelf').click();
  await page.locator('.cds--radio-button__appearance').first().click();
  await page.locator('.cds--checkbox-label').first().click();
  await page.locator('div:nth-child(14)').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('een antwoord');

  await page.locator('#label-radio-1 > .cds--radio-button__appearance').click();
  
  await page.getByRole('button', { name: 'Toevoegen' }).click();
  await page.getByRole('button', { name: 'Open menu' }).nth(5).click();
  await page.getByText('Chat').click();
  await page.locator('#combobox-20').click();
  await page.getByText('Afwijzen aanvraag (WWB en BB)').click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('iets anders');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('een tweede vraag');
  await page.locator('app-klantvraag:nth-child(2) > v-form > .v-form > .v-input-container.simple-border > v-select:nth-child(10) > .v-select-container > cds-combo-box > .cds--list-box__wrapper > .cds--list-box > .cds--list-box__field > .cds--list-box__menu-icon').click();
  await page.getByText('Fout contact').click();
  await page.locator('#combobox-24').click();
  await page.getByText('[Fout contact:2] Verkeerd').click();
  await page.getByRole('textbox').nth(5).click();
  await page.getByRole('textbox').nth(5).fill('antwooerd 2');

  await page.locator('app-klantvraag').filter({ hasText: '× Type contact (vereist)' }).locator('v-button').click();
  await page.getByRole('button', { name: 'Ja' }).click();
});