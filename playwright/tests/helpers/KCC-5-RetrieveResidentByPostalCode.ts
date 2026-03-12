import { Page } from '@playwright/test';
import {retrieveResidentInfoByPostalCode} from '../pages/KCC-5-RetrieveResidentByPostalCode';


export async function residentInfoByPostalCodeAndHouseNumber(page: Page) {

  const residentPostalCodeInfoPage = new retrieveResidentInfoByPostalCode(page);
   
  await residentPostalCodeInfoPage.fillInPostalCode('2555BD');
  await residentPostalCodeInfoPage.fillHouseNumber('55');
  await residentPostalCodeInfoPage.fillHouseLetter('D');
  await residentPostalCodeInfoPage.searchAndControl();
}