import { Page } from '@playwright/test';
import {QuestionFormPage} from '../pages/DeleteAfter-FillOutQuestionFormHandledByOperatorPage';

export async function fillOutQuestionFormHandledByOperator(page: Page) {

  const questionPage = new QuestionFormPage(page);

  // Fill out the first group of fields
  await questionPage.fillOutQuestionFormHandledByOperator();

  await questionPage.fillConcerning('Onderwerp van vraag.');
  await questionPage.fillClientQuestion('De vraag zelf.');
  await questionPage.FillQuestionDetails();
  await questionPage.fillAnswer('Het eventuele antwoord op de vraag komt hier.');

  await questionPage.toggleReportingCode();

  await questionPage.finishQuestion();

}
