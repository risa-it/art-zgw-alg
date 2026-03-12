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
  }

  async searchAndControl(){
    await this.page.waitForTimeout(500);
    await this.page.getByRole('button', { name: 'Zoeken' }).click();
    await this.page.locator('.cds--checkbox-label').click();
    }
}
