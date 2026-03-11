import { test, expect } from '@playwright/test';
import {loginAsAdminLocal} from './helpers/DeleteAfter-1-LoginUtils';
import {fillOutQuestionFormHandledByOperator} from './helpers/DeleteAfter-FillOutQuestionFormHandledByOperatorUtils';
import {fillOutQuestionFormSendQuestion} from './helpers/DeleteAfter-FillOutQuestionFormSendQuestionUtils';
import {ResidentInfoByBsn} from './helpers/DeleteAfter-3-RetrieveResidentByBsnUtils';
import {loginAndCreateKccDossier} from './helpers/DeleteAfter-2-startNewKccDossierUtils';
import {residentInfoByNameAndBirthDate} from './helpers/DeleteAfter-4-RetrieveResidentByNameAndBirthDate';
import {residentInfoByPostalCodeAndHouseNumber} from './helpers/DeleteAfter-5-RetrieveResidentByPostalCode';
import {addToFillOutQuestionFormHandledByOperator} from './helpers/DeleteAfter-AddingQuestionHandledByOperator';
import {fillOutQuestionFormSendQuestionWithSecondQuestion} from './helpers/DeleteAfter-AddingAQuestionSendQuestion';

//test for anonymous
test ('login and create a new dossier', async ({ page }) =>{
    await loginAndCreateKccDossier(page);
});

test ('login, create new dossier, and fill in question form', async ({ page })=>{
    await loginAndCreateKccDossier(page);
    await fillOutQuestionFormHandledByOperator(page);
});

    //test for anonymous with additional question
test ('login, create new dossier, check anonymous, fill in question, add a second question', async({ page })=>{
    await loginAndCreateKccDossier(page);
    await addToFillOutQuestionFormHandledByOperator(page);
    })


// test for resident
test ('login, create new dossier, find resident info with BSN, fill in question form, send question', async ({ page })=>{
    await loginAndCreateKccDossier(page);
    await ResidentInfoByBsn(page);
    await fillOutQuestionFormSendQuestion(page);
});

test ('login, create new dossier, find resident info by name and birth date, fill in question form, send question', async ({ page })=>{
    await loginAndCreateKccDossier(page);
    await residentInfoByNameAndBirthDate(page);
    await fillOutQuestionFormSendQuestion(page);
});

test ('login, create new dossier, find resident info by postalcode and house number, fill in question form, send question', async ({ page })=>{
    await loginAndCreateKccDossier(page);
    await residentInfoByPostalCodeAndHouseNumber(page);
    await fillOutQuestionFormSendQuestion(page);
    });

test ('checking if it works', async ({ page })=>{
    await loginAndCreateKccDossier(page);
    await residentInfoByPostalCodeAndHouseNumber(page);
    await fillOutQuestionFormSendQuestionWithSecondQuestion(page);
    });