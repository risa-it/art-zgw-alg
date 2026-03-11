import { expect, type Locator, type Page } from "@playwright/test";
import { login } from "../utils/gzac2-login";
import {loginAndCreateDBLDossier} from "../utils/gzac2-create-dossier-DBL-proces";

export class StartFormDBLProces{
    readonly page : Page;
    readonly gegevensVoornaam : Locator;
    readonly gegevensAchternaam : Locator;
    readonly isProfessionalAanmelder : Locator;
    readonly welkeDienstGDHDropdown: Locator;
    readonly dsoOption: Locator;
    readonly afdeling: Locator;
    readonly functie: Locator;
    readonly telefoonNummer: Locator;
    readonly emailAdres: Locator;
    readonly stadsdeelDropdown: Locator;
    readonly stadsdeelOptie: Locator;
    //readonly submitButton : Locator;

    constructor(page: Page) {
        this.page = page;
        this.gegevensVoornaam = page.getByTestId('aanmelding-doorbraaklab.start-professional.gegevensProfessional.persoonsgegevens.voornaam');
        this.gegevensAchternaam= page.getByTestId('aanmelding-doorbraaklab.start-professional.gegevensProfessional.persoonsgegevens.achternaam');
        this.isProfessionalAanmelder= page.getByRole('radiogroup', { name: 'Is de professional/aanmelder' }).getByLabel('Ja');
        this.welkeDienstGDHDropdown = page.locator('.form-control.ui').first();
        this.dsoOption = page.getByRole('option', { name: 'DSO' });
        this.afdeling =page.getByTestId('aanmelding-doorbraaklab.start-professional.welkeAfdeling');
        this.functie =page.getByTestId('aanmelding-doorbraaklab.start-professional.functie');
        this.telefoonNummer =page.getByTestId('aanmelding-doorbraaklab.start-professional.gegevensProfessional.contactgegevens.telefoonnummer');
        this.emailAdres = page.getByTestId('aanmelding-doorbraaklab.start-professional.gegevensProfessional.contactgegevens.emailadres');
        this.stadsdeelDropdown =page.locator('.form-control.ui');
        this.stadsdeelOptie =page.getByRole('option', { name: 'Laak' });
        //this.submitButton= page.getByRole('button', { name: 'Submit' });
}

async fillInStartFormDBLProces(){
    await loginAndCreateDBLDossier(this.page);
    await this.gegevensVoornaam.fill('Steven');
    await this.gegevensAchternaam.fill('Jones');
    await this.isProfessionalAanmelder.check();
    await expect(this.welkeDienstGDHDropdown).();
    await this.welkeDienstGDHDropdown.click();
    
    //await this.welkeDienstGDHDropdown.fill('DSO');
    //await this.page.keyboard.press('Enter');

    //await this.welkeDienstGDHDropdown.click();
    await expect(this.dsoOption).toBeVisible();
    await this.dsoOption.click();

    await this.afdeling.click();
    await this.afdeling.fill('afdeling A');
    await this.functie.click();
    await this.functie.fill('een functie');
    await this.telefoonNummer.click();
    await this.telefoonNummer.fill('0700000000');
    await this.emailAdres.click();
    await this.emailAdres.fill('test@test.nl');
    //await this.stadsdeelDropdown.click();
    //await expect(this.stadsdeelOptie).toBeVisible();
    //wait this.stadsdeelOptie.click();
    
}
}
   //await page.locator('.form-control.ui').first().click();
  //await page.getByRole('option', { name: 'DSO' }).click();

 


 // await page.locator('#e1y6lm3 > .choices > .form-control.ui').click();
 // await page.getByRole('option', { name: 'Laak' }).click();
 // await page.getByTestId('aanmelding-doorbraaklab.start-inwoner.watIsDeSituatie').click();
 // await page.getByTestId('aanmelding-doorbraaklab.start-inwoner.watIsDeSituatie').fill('een situatie');
 // await page.getByTestId('aanmelding-doorbraaklab.start-inwoner.waarLooptUTegenaan').click();
 // await page.getByTestId('aanmelding-doorbraaklab.start-inwoner.waarLooptUTegenaan').fill('dingen');
 // await page.getByTestId('aanmelding-doorbraaklab.start-inwoner.vraagAanDoorbraaklab').click();
 // await page.getByTestId('aanmelding-doorbraaklab.start-inwoner.vraagAanDoorbraaklab').fill('een goede vraag');
 // await page.getByRole('radiogroup', { name: 'Casus inbrengen in' }).getByLabel('Nee').check();
 // await page.getByTestId('aanmelding-doorbraaklab.start-beoordeling.casus.toelichting').click();
 // await page.getByRole('button', { name: 'Indienen' }).click();
 // await page.getByRole('button', { name: 'Indienen' }).click();
