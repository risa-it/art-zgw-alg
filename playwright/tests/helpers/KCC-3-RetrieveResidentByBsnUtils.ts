import { Page } from '@playwright/test';
import { retrieveResidentInfoByBsn } from '../pages/KCC-3-RetrieveResidentByBsnPage';

export async function residentInfoByBsn(page: Page) {

   const residentBsnInfoPage = new retrieveResidentInfoByBsn(page);
   
   await residentBsnInfoPage.fillInBsn();
   await residentBsnInfoPage.searchAndControl();
}
