import { Page } from '@playwright/test';
import {retrieveResidentInfoByPostalCode} from '../pages/DeleteAfter-5-RetrieveResidentByPostalCode';

export async function residentInfoByPostalCodeAndHouseNumber(page: Page) {

   const residentPostalCodeInfoPage = new retrieveResidentInfoByPostalCode(page);
   
   await residentPostalCodeInfoPage.fillInPostalCodeAndHouseNumber();
   await residentPostalCodeInfoPage.searchAndControl();
}