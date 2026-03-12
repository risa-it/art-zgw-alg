import { test, expect } from '@playwright/test';
import { loginAsAdminLocal } from './helpers/LoginAsAdminLocal';
import { startNewKccDossier } from './helpers/StartNewKccDossier';
import { setCLientStatusToAnonymous } from './helpers/SetClientStatusToAnonymous';
import { fillOutQuestionFormHandledByOperator } from './helpers/FillOutQuestionFormHandledByOperator';

test.describe("workflow-anonymous-test", () => {
//Happyflow Anonymous
test('login as admin  as admin and create new dossier KCC', async ({ page }) =>{
  await startNewKccDossier(page);
}); 

 test('login as admin, create new KCC dossier,  and check anonymous inwonerbeeld, fill in question - handeled by operator, ', async ({ page })=>{
  await setCLientStatusToAnonymous(page);
  await fillOutQuestionFormHandledByOperator(page);
 });

});

