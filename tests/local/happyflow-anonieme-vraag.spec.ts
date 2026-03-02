import { test, expect } from '@playwright/test';
import { loginAsAdminLocal } from './helpers/LoginAsAdminLocal';
import { startNewKccDossier } from './helpers/StartNewKccDossier';
import { setCLientStatusToAnonymous } from './helpers/SetClientStatusToAnonymous';
import { fillOutQuestionFormHandledByOperator } from './helpers/FillOutQuestionFormHAndledByOperator';

test('happyflow-anonieme-vraag', async ({ page }) => {

  await loginAsAdminLocal(page);
  await startNewKccDossier(page);
  await setCLientStatusToAnonymous(page)
  await fillOutQuestionFormHandledByOperator(page)

});
