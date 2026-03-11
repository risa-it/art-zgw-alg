import { Page, Locator, expect } from '@playwright/test';

export class  retrieveResidentInfoByNameAndBirthDate {
 
    readonly page : Page;
    readonly radioPersoonsGegevens: Locator;
    readonly lastName : Locator;
    readonly birthDate: Locator;
    readonly searchButton : Locator
    readonly selector : Locator;
    readonly controleCheckbox : Locator;

    constructor(page: Page) {

        this.page = page;
        this.radioPersoonsGegevens = page.getByText('Achternaam en geboortedatum');
        this.lastName= page.locator('v-input[name="lastName"] input');
        this.birthDate= page.getByRole('textbox', { name: 'dd-mm-jjjj' });
        this.searchButton= page.getByRole('button', { name: 'Zoeken' });
        this.selector= page.locator('v-select[label="Zoekresultaten"]');
        this.controleCheckbox  = page.locator('v-input[name="isVerified"]');
        
    }

    async fillInNameAndBirthDate(){
     
        await this.radioPersoonsGegevens.click();
        await this.lastName.click();
        await this.lastName.fill('naam inwoner');
        await this.birthDate.click();
        await this.birthDate.fill('01-03-2026');
    }

    async searchAndControl(){
        await this.page.waitForTimeout(500);
        await this.page.getByRole('button', { name: 'Zoeken' }).click();
        await this.page.waitForTimeout(500);
        await this.page.locator('#combobox-14').click();
        //await this.selector.click();
        await this.page.getByText('Barry • Paardelaan').click();
       
        await this.page.locator('.cds--checkbox-label').click();

        //await this.searchButton.click();
        //await this.page.waitForTimeout(500);
        //await this.controleCheckbox.click();
    }
}

  //await startNewKccDossier(page);
   //await page.locator('#label-radio-3 > .cds--radio-button__appearance').click();
   // await page.getByRole('textbox').nth(3).click();
    //await page.getByRole('textbox').nth(3).fill('name of inwoner');
    //await page.getByRole('textbox', { name: 'dd-mm-jjjj' }).click();
    //await page.getByRole('textbox', { name: 'dd-mm-jjjj' }).fill('01-03-2026');
   // await page.getByRole('button', { name: 'Zoeken' }).click();
   // await page.locator('#combobox-14').click();
   // await page.getByText('Bob de Bouwer • Zomaarstraat').click();
   // await page.locator('.cds--checkbox-label').click();