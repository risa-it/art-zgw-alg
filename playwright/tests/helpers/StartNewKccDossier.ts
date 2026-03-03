import { Page } from '@playwright/test';

export async function startNewKccDossier(page: Page) {
  await page.getByRole('button', { name: 'Dossiers' }).click();
  await page.getByRole('link', { name: 'Inwoner contact registratie' }).click();
  await page.getByLabel('Table action bar').getByRole('button', { name: 'Creëer Nieuw Dossier' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
}
