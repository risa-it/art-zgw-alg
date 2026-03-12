import { Page , expect, Locator} from '@playwright/test';
import {loginAsAdminLocal } from '../helpers/KCC-1-LoginUtils';


export class GzacCreateDossierKccProces {
    readonly page : Page;
    readonly dossiersButton : Locator;
    readonly inwonerContactRegistratie : Locator;
    readonly creerNieuwDossierButton : Locator;
    readonly startButton: Locator;

    constructor(page: Page) {
            this.page = page;
            this.dossiersButton= page.getByRole('button', { name: 'Dossiers' });
            this.inwonerContactRegistratie= page.getByRole('link', { name: 'Inwoner contact registratie' });
            this.creerNieuwDossierButton= page.getByLabel('Table action bar').getByRole('button', { name: 'Creëer Nieuw Dossier' });
            this.startButton= page.getByRole('button', { name: 'Start' });
        }
    async loginAndCreateKCCDossier(){
            await loginAsAdminLocal(this.page);
            await this.dossiersButton.click();
            await this.inwonerContactRegistratie.click();
            await expect(this.creerNieuwDossierButton).toBeVisible();
            await this.creerNieuwDossierButton.click();
            await this.startButton.click()
        }
}
