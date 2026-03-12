import { Page, Locator, expect } from '@playwright/test';

export class SendQuestionFormPageWithAdd {

  readonly page: Page;
  readonly form: Locator;
  readonly contactType: Locator;
  readonly subject: Locator;
  readonly concerningInput: Locator;
  readonly clientQuestionInput: Locator;
  readonly skill: Locator;
  readonly productOrService: Locator;
  readonly questionType: Locator;
  readonly radioHandled: Locator; 
  readonly selectedService: Locator;
  readonly selectedDepartment: Locator;
  readonly selectedEmployee: Locator;
  readonly internalNote: Locator;
  readonly toevoegenButton: Locator;
  readonly doorsturenButton: Locator;

  constructor(page: Page, formIndex = 0) {
    this.page = page;
    this.form = page.locator('app-klantvraag').nth(formIndex);

    this.contactType = this.form.locator('v-select[name="contactType"]');
    this.subject = this.form.locator('v-select[name="subject"]');
    this.concerningInput = this.form.locator('v-input[name="concerning"] input');
    this.clientQuestionInput = this.form.locator('v-input[name="clientQuestion"] textarea');
    this.skill = this.form.locator('v-select[name="selectedSkill"]');
    this.productOrService = this.form.locator('v-select[name="selectedProductOrService"]');
    this.questionType = this.form.locator('v-select[name="selectedQuestionType"]');
    this.radioHandled = this.form.locator('.cds--radio-button__appearance').last();
    this.selectedService = this.form.locator('v-select[name="selectedService"]');
    this.selectedDepartment = this.form.locator('v-select[name="selectedDepartment"]');
    this.selectedEmployee = this.form.locator('v-select[name="selectedEmployee"]');
    this.internalNote = this.form.locator('v-input[name="internalNote"]');
    this.toevoegenButton= this.page.locator('button').getByText('Toevoegen');
    this.doorsturenButton = this.form.locator('v-button').getByText('Doorsturen');
  }

  async selectContactType() {
    await this.contactType.click();

    await this.page.getByLabel('Listbox').getByText('Telefoongesprek', { exact: true }).click();
  }

  async selectSubject() {
    await this.subject.click();
    await this.page.getByLabel('Listbox').getByText('Vraag', { exact: true }).click();
  }

  async fillConcerning(text: string) {
    await expect(this.concerningInput).toBeVisible();
    await this.concerningInput.fill(text);
  }

  async fillClientQuestion(text: string) {
    await this.clientQuestionInput.fill(text);
  }

  async fillQuestionDetails() {

    await this.skill.click();
    await this.page.getByLabel('Listbox').getByText('CJG - Jeugdhulp', { exact: true }).click();
    await this.productOrService.click();
    await this.page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp;12]').click();
    await this.questionType.click();
    await this.page.getByLabel('Listbox').getByText('[CJG - Jeugdhulp:12B]').click();
    await this.radioHandled.click();
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

  //to be used when button is fixed
  // await this.page.getByRole('button', { name: 'Dossier Afsluiten' }).click();
  //await this.page.getByRole('button', { name: 'Ja' }).click();
  }
  async addQuestion(){
    await this.toevoegenButton.click();
  }
}
