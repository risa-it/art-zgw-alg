import { Page } from '@playwright/test';
import { loginAsAdminLocal } from './LoginAsAdminLocal';

export async function startNewKccDossier(page: Page) {
  await loginAsAdminLocal(page);
  await page.getByRole('button', { name: 'Dossiers' }).click();
  await page.getByRole('link', { name: 'Inwoner contact registratie' }).click();
  await page.getByLabel('Table action bar').getByRole('button', { name: 'Creëer Nieuw Dossier' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
}
