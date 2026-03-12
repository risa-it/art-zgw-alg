import { Page } from '@playwright/test';
import { retrieveResidentInfoByBsn } from '../pages/KCC-3-RetrieveResidentByBsnPage';

export async function residentInfoByBsn(page: Page) {

   const residentBsnInfoPage = new retrieveResidentInfoByBsn(page);
   
   await residentBsnInfoPage.fillInBsn('123456789');
   await residentBsnInfoPage.addEmail('test@test.nl')
   await residentBsnInfoPage.addPhone('0700000000');
   await residentBsnInfoPage.searchAndControl();
}
