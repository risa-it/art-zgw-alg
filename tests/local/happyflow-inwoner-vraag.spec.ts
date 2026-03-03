import { test, expect } from '@playwright/test';
import { loginAsAdminLocal } from './helpers/LoginAsAdminLocal';
import { startNewKccDossier } from './helpers/StartNewKccDossier';
import { retrieveResidentInfoByBsn } from './helpers/RetrieveResidentInfoByBsn';
import { manuallyConfirmResidentInfo } from './helpers/ManuallyConfirmResidentInfo';
import { fillOutQuestionFormSendQuestion } from './helpers/FillOutQuestionFormSendQuestion';

test('happyflow-inwoner-vraag', async ({ page }) => {
  await loginAsAdminLocal(page);
  await startNewKccDossier(page);
  await retrieveResidentInfoByBsn(page)
  await manuallyConfirmResidentInfo(page)
  await fillOutQuestionFormSendQuestion(page)
});
