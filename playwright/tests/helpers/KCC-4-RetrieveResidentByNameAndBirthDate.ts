import { Page } from '@playwright/test';
import { retrieveResidentInfoByNameAndBirthDate} from '../pages/KCC-4-RetrieveResidentByNameAndBirthDate';

export async function residentInfoByNameAndBirthDate(page: Page) {

  const residentNameInfoPage = new retrieveResidentInfoByNameAndBirthDate(page);
   
  await residentNameInfoPage.fillInNameAndBirthDate();
  await residentNameInfoPage.searchAndControl();
}