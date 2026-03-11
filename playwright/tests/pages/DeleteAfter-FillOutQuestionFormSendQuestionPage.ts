import { Page, Locator } from '@playwright/test';

export class SendQuestionFormPage {
    
    readonly page: Page;
    readonly contactType: Locator;
    readonly subject: Locator;
    readonly concerningInput: Locator;
    readonly clientQuestionInput: Locator;
    readonly skill: Locator;
    readonly productOrService: Locator;
    readonly questionType: Locator;
    readonly selectedService: Locator;
    readonly selectedDepartment: Locator;
    readonly selectedEmployee: Locator;
    readonly internalNote: Locator;
    readonly doorsturenButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.contactType = page.locator('v-select[name="contactType"]');
    this.subject = page.locator('v-select[name="subject"]');
    this.concerningInput = page.locator('v-input[name="concerning"] input');
    this.clientQuestionInput = page.locator('v-input[name="clientQuestion"] textarea');

    this.skill = page.locator('v-select[name="selectedSkill"]');
    this.productOrService = page.locator('v-select[name="selectedProductOrService"]');
    this.questionType = page.locator('v-select[name="selectedQuestionType"]');
    this.selectedService = page.locator ('v-select[name="selectedService"]');
    this.selectedDepartment = page.locator ('v-select[name="selectedDepartment"]');
    this.selectedEmployee = page.locator ('v-select[name="selectedEmployee"]');
    this.internalNote = page.locator('v-input[name="internalNote"]');

    this.doorsturenButton = page.locator('v-button').getByText('Doorsturen');
  }
async fillOutQuestionFormSendQuestion() {
   
    await this.contactType.click();
    await this.page.getByLabel('Listbox').getByText('Telefoongesprek', { exact: true }).click();
    await this.subject.click();
    await this.page.getByLabel('Listbox').getByText('Vraag', { exact: true }).click();
 
}

  async fillConcerning(text: string) {
    await this.concerningInput.fill(text);
  }

  async fillClientQuestion(text: string) {
    await this.clientQuestionInput.fill(text);
  }

async FillQuestionDetails(){
    await this.skill.click();
    await this.page.getByLabel('Listbox').getByText('CJG - Jeugdhulp', { exact: true }).click();
    await this.productOrService.click();
    await this.page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp;12] Terugbelverzoek').click();
    await this.questionType.click();
    await this.page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp:12B] Doorgezet naar andere afdeling').click();
     await this.internalNote.click();
    await this.page.locator('v-input[name="internalNote"] textarea').fill('Een interne notitie hier...');
  }
      
async fillSendInformation(){
    await this.selectedService.click();
    await this.page.getByLabel('Listbox').getByText('locatie 1', { exact: true}).click();
    await this.selectedDepartment.click();
    await this.page.getByLabel('Listbox').getByText('Afdeling A', { exact: true}).click();
    await this.selectedEmployee.click();
    await this.page.getByLabel('Listbox').getByText('employee 3', { exact: true}).click();
    await this.internalNote.click();
}
async finishQuestion() {
  
    await this.page.waitForTimeout(500);
    await this.doorsturenButton.click();

    await this.page.waitForTimeout(500);
    await this.page.getByRole('button', { name: 'Ja' }).click();
    await this.page.getByRole('button', { name: 'Dossier Afsluiten' }).click();
    await this.page.getByRole('button', { name: 'Ja' }).click();
  }

  }


   // await page.locator ('v-select[name="contactType"]').click();
  //await page.getByLabel('Listbox').getByText('Telefoongesprek', { exact: true }).click();
  //await page.locator ('v-select[name="subject"]').click();
  //await page.getByLabel('Listbox').getByText('Vraag', { exact: true }).click();
  //await page.locator('v-input[name="concerning"]').click();
  //await page.locator('v-input[name="concerning"] input').fill('Onderwerp van vraag.');
  //await page.locator('v-input[name="clientQuestion"]').click();
  //await page.locator('v-input[name="clientQuestion"] textarea').fill('De vraag zelf.');

  //await page.locator ('v-select[name="selectedSkill"]').click();
  //await page.getByLabel('Listbox').getByText('CJG - Jeugdhulp', { exact: true }).click();
  //await page.locator ('v-select[name="selectedProductOrService"]').click();
  //await page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp;12] Terugbelverzoek',{ exact: true }).click();
  //await page.locator ('v-select[name="selectedQuestionType"]').click();
  //await page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp:12B] Doorgezet naar andere afdeling', { exact: true}).click();
 
  //await page.locator ('v-select[name="selectedService"]').click();
  //await page.getByLabel('Listbox').getByText('locatie 1', { exact: true}).click();
  //await page.locator ('v-select[name="selectedDepartment"]').click();
  //await page.getByLabel('Listbox').getByText('Afdeling A', { exact: true}).click();
  //await page.locator ('v-select[name="selectedEmployee"]').click();
  //await page.getByLabel('Listbox').getByText('employee 3', { exact: true}).click();

  //await page.locator('v-input[name="internalNote"]').click();
  //await page.locator('v-input[name="internalNote"] textarea').fill('Een interne notitie hier...');
 
  //await page.waitForTimeout(500);
  //await page.locator('v-button', { hasText: /Doorsturen/ }).click();
  
  //await page.waitForTimeout(500);
  //await page.getByRole('button', { name: 'Ja' }).click();

  //await page.getByRole('button', { name: 'Dossier Afsluiten' }).click();
  //await page.getByRole('button', { name: 'Ja' }).click();
