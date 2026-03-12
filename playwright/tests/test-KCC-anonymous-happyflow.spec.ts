import { test, expect } from '@playwright/test';
import {loginAndCreateKccDossier} from './helpers/KCC-2-startNewKccDossierUtils';
import {fillOutQuestionFormHandledByOperator} from './helpers/KCC-6-FillOutQuestionFormHandledByOperatorUtils';
import {addToFillOutQuestionFormHandledByOperator} from './helpers/KCC-7-AddingQuestionHandledByOperator';


test.describe("workflow-kcc-anonymous-test", () => {

test.beforeEach(async ({page}) => {
       await loginAndCreateKccDossier(page);  
});

test ('login, create new dossier, and fill in question form', async ({ page })=>{
    await fillOutQuestionFormHandledByOperator(page);
});

    //test for anonymous with additional question
test ('login, create new dossier, check anonymous, fill in question, add a second question', async({ page })=>{
    await addToFillOutQuestionFormHandledByOperator(page);
});

});