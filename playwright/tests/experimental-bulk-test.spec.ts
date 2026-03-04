import { test, expect } from '@playwright/test';
import { loginAsAdminLocal } from './helpers/LoginAsAdminLocal';
import { startNewKccDossier } from './helpers/StartNewKccDossier';
import { setCLientStatusToAnonymous } from './helpers/SetClientStatusToAnonymous';
import { fillOutQuestionFormHandledByOperator } from './helpers/FillOutQuestionFormHAndledByOperator';
import { retrieveResidentInfoByBsn } from './helpers/RetrieveResidentInfoByBsn';
import { manuallyConfirmResidentInfo } from './helpers/ManuallyConfirmResidentInfo';
import { fillOutQuestionFormSendQuestion } from './helpers/FillOutQuestionFormSendQuestion';

test.describe('happyflow-bulk', () => {

  test('happyflow-anonieme-vraag', async ({ page }) => {
    await loginAsAdminLocal(page);
    await startNewKccDossier(page);
    await setCLientStatusToAnonymous(page)
    await fillOutQuestionFormHandledByOperator(page)
  });

  test('happyflow-inwoner-vraag', async ({ page }) => {
    await loginAsAdminLocal(page);
    await startNewKccDossier(page);
    await retrieveResidentInfoByBsn(page)
    await manuallyConfirmResidentInfo(page)
    await fillOutQuestionFormSendQuestion(page)
  });

});
