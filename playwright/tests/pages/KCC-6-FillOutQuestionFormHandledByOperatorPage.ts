import { Page, Locator, expect } from '@playwright/test';

export class QuestionFormPage {

  readonly page: Page;
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
  readonly afrondenButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.radioAnonymous = page.getByText('Anoniem');
    this.contactType = page.locator('v-select[name="contactType"]');
    this.subject = page.locator('v-select[name="subject"]');
    this.concerningInput = page.locator('v-input[name="concerning"] input');
    this.clientQuestionInput = page.locator('v-input[name="clientQuestion"] textarea');
    this.skill = page.locator('v-select[name="selectedSkill"]');
    this.productOrService = page.locator('v-select[name="selectedProductOrService"]');
    this.questionType = page.locator('v-select[name="selectedQuestionType"]');
    this.radioHandled = page.locator('.cds--radio-button__appearance').first();
    this.answer = page.locator('v-input[name="answer"] textarea');
    this.reportingCode = page.locator('v-input[name="reportingCode"]');
    this.afrondenButton = page.locator('v-button').getByText('Afronden');
  }

  async fillOutQuestionFormHandledByOperator() {
    await this.radioAnonymous.click();
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
    await this.page.getByRole('button', { name: 'Dossier Afsluiten' }).click();
    await this.page.getByRole('button', { name: 'Ja' }).click();
  }

}
