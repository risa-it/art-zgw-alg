import { Page } from '@playwright/test';
import { startNewKccDossier } from './StartNewKccDossier';

export async function setCLientStatusToAnonymous(page: Page) {
  await startNewKccDossier(page);
  await page.getByText('Anoniem').click();
}
