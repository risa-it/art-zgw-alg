import { Page, Locator, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

export class  retrieveResidentInfoByBsn {
  readonly page : Page;
  readonly bsnNumber : Locator;
  readonly searchButton : Locator;
  readonly emailAddress : Locator;
  readonly phoneNumber : Locator;
  readonly controleCheckbox : Locator;

  constructor(page: Page) {
    this.page = page;
    this.bsnNumber= page.locator('v-input[name="bsn"] input');
    this.searchButton = page.locator('v-button').getByText('Zoeken');
    this.emailAddress = page.locator('v-input[name="e-mail"] input');
    this.phoneNumber = page.locator('v-input[name="phoneNumber"] input');
    this.controleCheckbox  = page.locator('v-input[name="isVerified"]');   
    }

  async fillInBsn(text: string){
    await this.bsnNumber.click();
    await this.bsnNumber.fill(text);
  }

  async addEmail(text: string){
    await this.emailAddress.fill(text);
  }

  async addPhone(text: string){
    await this.phoneNumber.fill(text);
  }

  async searchAndControl(){
    await this.page.waitForTimeout(500);
    await this.page.getByRole('button', { name: 'Zoeken' }).click();
    await this.page.locator('.cds--checkbox-label').click();
    }
}
