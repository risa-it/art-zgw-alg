import { Page } from '@playwright/test';
import {SendQuestionFormPageWithAdd } from '../pages/KCC-7-AddingAQuestionSendQuestion';

export async function fillOutQuestionFormSendQuestionWithSecondQuestion(page: Page) {

  const sendQuestionFormPage = new SendQuestionFormPageWithAdd(page, 0);
  const secondSendQuestionFormPage = new SendQuestionFormPageWithAdd(page, 1);

  await sendQuestionFormPage.selectContactType();
  await sendQuestionFormPage.selectSubject();

  await sendQuestionFormPage.fillConcerning('Onderwerp van de vraag');

  await sendQuestionFormPage.fillClientQuestion('de vraag va de klant');
 
  await sendQuestionFormPage.fillQuestionDetails();

  await sendQuestionFormPage.fillSendInformation();

  await sendQuestionFormPage.addQuestion();

  await secondSendQuestionFormPage.selectContactType();
  await secondSendQuestionFormPage.selectSubject();
  await secondSendQuestionFormPage.fillConcerning('onderwerp van tweede vraag');
  await secondSendQuestionFormPage.fillClientQuestion('tweede vraag');
  await secondSendQuestionFormPage.fillQuestionDetails();
  await secondSendQuestionFormPage.fillSendInformation();

  await sendQuestionFormPage.finishQuestion();
  await secondSendQuestionFormPage.finishQuestion();
}