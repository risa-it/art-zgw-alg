import { Page } from '@playwright/test';
import { GzacCreateDossierKccProces } from '../pages/DeleteAfter-2-startNewKccDossierPage';

export async function loginAndCreateKccDossier(page: Page) {
    const createDossierPage = new GzacCreateDossierKccProces(page);
    await createDossierPage.loginAndCreateKCCDossier();
  
}