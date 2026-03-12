import { Page, Locator, expect } from '@playwright/test';

export class  retrieveResidentInfoByPostalCode {
 
  readonly page : Page;
  readonly radioPersoonsGegevens: Locator;
  readonly postalCode : Locator;
  readonly houseNumber: Locator;
  readonly houseLetter: Locator;
  readonly searchButton : Locator
  readonly selector : Locator;
  readonly controleCheckbox : Locator;

  constructor(page: Page) {
    this.page = page;
    this.radioPersoonsGegevens = page.getByText('Postcode en Huisnummer');
    this.postalCode= page.locator('v-input[name="zipCode"] input');
    this.houseNumber= page.locator('v-input[name="addressNumber"] input');
    this.houseLetter= page.locator('v-input[name="addressLetter"] input');
    this.searchButton= page.getByRole('button', { name: 'Zoeken' });
    this.selector= page.locator('v-select[label="Zoekresultaten"]');
    this.controleCheckbox  = page.locator('v-input[name="isVerified"]');
    }

  async fillInPostalCode(text: string){
    await this.radioPersoonsGegevens.click();
    await this.postalCode.click();
    await this.postalCode.fill(text);
    }

  async fillHouseNumber(text: string){
    await this.houseNumber.click();
    await this.houseNumber.fill(text);
    };

  async fillHouseLetter(text: string){
    await this.houseLetter.click();
    await this.houseLetter.fill(text)
  };

  async searchAndControl(){
    await this.page.waitForTimeout(500);
    await this.page.getByRole('button', { name: 'Zoeken' }).click();
    await this.page.waitForTimeout(500);
    await this.page.locator('#combobox-14').click();
    await this.page.getByText('Barry • Paardelaan').click();
    await this.page.locator('.cds--checkbox-label').click();
    }
}

  