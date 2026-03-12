import { Page } from '@playwright/test';
import { SendQuestionFormPage } from '../pages/KCC-6-FillOutQuestionFormSendQuestionPage';

export async function fillOutQuestionFormSendQuestion(page: Page) {

  const sendQuestionFormPage = new SendQuestionFormPage(page);

  await sendQuestionFormPage.fillOutQuestionFormSendQuestion();

  await sendQuestionFormPage.fillConcerning('Onderwerp van de vraag');

  await sendQuestionFormPage.fillClientQuestion('de vraag va de klant');
 
  await sendQuestionFormPage.FillQuestionDetails();

  await sendQuestionFormPage.fillSendInformation();

  await sendQuestionFormPage.finishQuestion();
}