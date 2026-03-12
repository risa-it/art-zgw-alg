import { test, expect } from '@playwright/test';
import {loginAndCreateKccDossier} from './helpers/KCC-2-startNewKccDossierUtils';
import {residentInfoByBsn} from './helpers/KCC-3-RetrieveResidentByBsnUtils';
import {residentInfoByNameAndBirthDate} from './helpers/KCC-4-RetrieveResidentByNameAndBirthDate';
import {residentInfoByPostalCodeAndHouseNumber} from './helpers/KCC-5-RetrieveResidentByPostalCode';
import {fillOutQuestionFormSendQuestion} from './helpers/KCC-6-FillOutQuestionFormSendQuestionUtils';
import {fillOutQuestionFormSendQuestionWithSecondQuestion} from './helpers/KCC-7-AddingAQuestionSendQuestion';

 
test.describe("workflow-kcc-resident-test", () => {

test.beforeEach(async ({page}) => {
  await loginAndCreateKccDossier(page);  
});

test ('login, create new dossier, find resident info with BSN, fill in question form, send question', async ({ page })=>{
  await residentInfoByBsn(page);
  await fillOutQuestionFormSendQuestion(page);
});

test ('login, create new dossier, find resident info by name and birth date, fill in question form, send question', async ({ page })=>{
  await residentInfoByNameAndBirthDate(page);
  await fillOutQuestionFormSendQuestion(page);
});

test ('login, create new dossier, find resident info by postalcode and house number, fill in question form, send question', async ({ page })=>{
  await residentInfoByPostalCodeAndHouseNumber(page);
  await fillOutQuestionFormSendQuestion(page);
});

test ('login, create new dossier, add resident info, fill in question, add a second question', async ({ page })=>{
  await residentInfoByPostalCodeAndHouseNumber(page);
  await fillOutQuestionFormSendQuestionWithSecondQuestion(page);
});

});