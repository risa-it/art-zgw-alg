import { test, expect } from '@playwright/test';
import { loginAsAdminLocal } from './helpers/LoginAsAdminLocal';
import { startNewKccDossier } from './helpers/StartNewKccDossier';
import { retrieveResidentInfoByBsn } from './helpers/RetrieveResidentInfoByBsn';
import { fillOutQuestionFormSendQuestion } from './helpers/FillOutQuestionFormSendQuestion';
import { retrieveResidentInfoByNameAndBirthDate } from './helpers/RetrieveResidentByNameAndBirthDate';


test('login', async ({ page })=>{
  await loginAsAdminLocal(page);
});

test('login and create new KCC dossier', async ({ page })=>{
  await startNewKccDossier(page);
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
