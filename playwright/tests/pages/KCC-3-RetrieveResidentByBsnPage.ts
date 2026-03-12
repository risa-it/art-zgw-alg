import { Page, Locator, expect } from '@playwright/test';

export class  retrieveResidentInfoByBsn {
 
    readonly page : Page;
    readonly bsnNumber : Locator;
    readonly searchButton : Locator;
    readonly controleCheckbox : Locator;

    constructor(page: Page) {

        this.page = page;
        this.bsnNumber= page.locator('v-input[name="bsn"] input');
        this.searchButton = page.locator('v-button').getByText('Zoeken');
        this.controleCheckbox  = page.locator('v-input[name="isVerified"]');
        
    }

    async fillInBsn(){
        await this.bsnNumber.click();
        await this.bsnNumber.fill('123456789');
       // await this.page.getByRole('textbox').nth(3).fill('123456789');
    }

    async searchAndControl(){
        await this.page.waitForTimeout(500);
        await this.page.getByRole('button', { name: 'Zoeken' }).click();
  
        await this.page.locator('.cds--checkbox-label').click();

        //await this.searchButton.click();
        //await this.page.waitForTimeout(500);
        //await this.controleCheckbox.click();
    }
}

  //await startNewKccDossier(page);
  //await page.getByRole('textbox').nth(3).click();
  //await page.getByRole('textbox').nth(3).fill('123456789');
  //await page.getByRole('button', { name: 'Zoeken' }).click();
  //await page.waitForTimeout(500);
  //wait page.locator('.cds--checkbox-label').click();
