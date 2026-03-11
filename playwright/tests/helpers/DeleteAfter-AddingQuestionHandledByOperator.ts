import { Page } from '@playwright/test';
import { QuestionFormPage } from '../pages/DeleteAfter-AddingAQuestionHandledByOperator';


export async function addToFillOutQuestionFormHandledByOperator(page: Page) {

  const questionPage = new QuestionFormPage(page, 0);
  const secondQuestionPage = new QuestionFormPage(page, 1);

  await questionPage.chooseAnonymous();
  await questionPage.selectContactType();
  await questionPage.selectSubject();

  await questionPage.fillConcerning('Onderwerp van vraag.');
  await questionPage.fillClientQuestion('De vraag zelf.');

  await questionPage.fillQuestionDetails();

  await questionPage.fillAnswer('Het eventuele antwoord op de vraag komt hier.');

  await questionPage.toggleReportingCode();
  

  await questionPage.addQuestion();
  
  await secondQuestionPage.selectContactType();
  await secondQuestionPage.selectSubject();
  await secondQuestionPage.fillConcerning('Onderwerp van tweede.');
  await secondQuestionPage.fillClientQuestion('De tweede vraag.');
  await secondQuestionPage.fillQuestionDetails();
  await secondQuestionPage.fillAnswer('Het eventuele tweede antwoord op de vraag komt hier.');
  
  await questionPage.finishQuestion();
  await secondQuestionPage.finishQuestion();
}
