import { Page } from '@playwright/test';
import {  retrieveResidentInfoByBsn } from '../pages/DeleteAfter-3-RetrieveResidentByBsnPage';

export async function ResidentInfoByBsn(page: Page) {

   const residentBsnInfoPage = new retrieveResidentInfoByBsn(page);
   
   await residentBsnInfoPage.fillInBsn();
   await residentBsnInfoPage.searchAndControl();
}
