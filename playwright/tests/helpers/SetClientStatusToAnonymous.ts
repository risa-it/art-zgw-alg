import { Page } from '@playwright/test';

export async function setCLientStatusToAnonymous(page: Page) {
  await page.getByText('Anoniem').click();
}
