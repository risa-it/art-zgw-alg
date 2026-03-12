import { Page, Locator, expect } from '@playwright/test';

export class QuestionFormPage {

  readonly page: Page;
  readonly form: Locator;
  readonly radioAnonymous: Locator;
  readonly contactType: Locator;
  readonly subject: Locator;
  readonly concerningInput: Locator;
  readonly clientQuestionInput: Locator;
  readonly skill: Locator;
  readonly productOrService: Locator;
  readonly questionType: Locator;
  readonly radioHandled: Locator;
  readonly answer: Locator;
  readonly reportingCode: Locator;
  readonly toevoegenButton: Locator;
  readonly afrondenButton: Locator;

  constructor(page: Page, formIndex = 0) {
    this.page = page;
    this.form = page.locator('app-klantvraag').nth(formIndex);
    this.radioAnonymous = page.getByText('Anoniem');
    this.contactType = this.form.locator('v-select[name="contactType"]');
    this.subject = this.form.locator('v-select[name="subject"]');
    this.concerningInput = this.form.locator('v-input[name="concerning"] input');
    this.clientQuestionInput = this.form.locator('v-input[name="clientQuestion"] textarea');
    this.skill = this.form.locator('v-select[name="selectedSkill"]');
    this.productOrService = this.form.locator('v-select[name="selectedProductOrService"]');
    this.questionType = this.form.locator('v-select[name="selectedQuestionType"]');
    this.radioHandled = this.form.locator('.cds--radio-button__appearance').first();
    this.answer = this.form.locator('v-input[name="answer"] textarea');
    this.reportingCode = this.form.locator('v-input[name="reportingCode"]');
    this.toevoegenButton= this.page.locator('button').getByText('Toevoegen');
    this.afrondenButton = this.form.locator('v-button').getByText('Afronden');
  }

  async chooseAnonymous(){
    await this.radioAnonymous.click();
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

  async fillAnswer(text: string) {
    await this.answer.fill(text);
  }

  async toggleReportingCode() {
    await this.reportingCode.click();
  }
 
  async finishQuestion() {
    await this.page.waitForTimeout(500);
    await this.afrondenButton.click();

    await this.page.waitForTimeout(500);
    await this.page.getByRole('button', { name: 'Ja' }).click();
   //to be ised when button is fixed
   // await this.page.getByRole('button', { name: 'Dossier Afsluiten' }).click();
   //await this.page.getByRole('button', { name: 'Ja' }).click();
  }
   async addQuestion(){
    await this.toevoegenButton.click();
  }
}
