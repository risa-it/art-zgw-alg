import { test, expect } from '@playwright/test';
import { loginAsAdminLocal } from './helpers/LoginAsAdminLocal';
import { startNewKccDossier } from './helpers/StartNewKccDossier';
import { retrieveResidentInfoByBsn } from './helpers/RetrieveResidentInfoByBsn';
import { manuallyConfirmResidentInfo } from './helpers/ManuallyConfirmResidentInfo';
import { fillOutQuestionFormSendQuestion } from './helpers/FillOutQuestionFormSendQuestion';
import { fillOutQuestionFormHandledByOperator } from './helpers/FillOutQuestionFormHandledByOperator';
import { setCLientStatusToAnonymous } from './helpers/SetClientStatusToAnonymous';
import { retrieveResidentInfoByNameAndBirthDate } from './helpers/RetrieveResidentByNameAndBirthDate';


//Happyflow Anonymous
test('login as admin  as admin and create new dossier KCC', async ({ page }) =>{
  await startNewKccDossier(page);
}); 

 test('login as admin, create new KCC dossier,  and check anonymous inwonerbeeld, fill in question - handeled by operator, ', async ({ page })=>{
  await setCLientStatusToAnonymous(page);
  await fillOutQuestionFormHandledByOperator(page);
 });

//Happyflow Inwoner
test('login as admin, create a new KCC dossier and fill in resident info by bSN', async ({ page})=> {
  await retrieveResidentInfoByBsn(page);
});

test('login as admin, create new KCC dossier, fill in resident info by BSN, fill in question- send question', async ({ page})=> {
  await retrieveResidentInfoByBsn(page);
  await fillOutQuestionFormSendQuestion(page);
});

test('login as admin, create new KCC dossier, fill in resident info by name/birthdate, fill in question- send question', async ({page})=> {
  await retrieveResidentInfoByNameAndBirthDate(page);
});

test('login as admin, create new KCC dossier, fill in resident info by name/birth date  fill in question- send question', async ({ page})=> {
  await retrieveResidentInfoByNameAndBirthDate(page);
  await fillOutQuestionFormSendQuestion(page);
});
