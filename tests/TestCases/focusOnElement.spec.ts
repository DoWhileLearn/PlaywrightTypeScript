import {test, Browser, Page, Locator, BrowserContext} from '@playwright/test';
import {webkit, firefox, chromium} from '@playwright/test';

test('foucs on element', async()=>{

    const url="https://www.orangehrm.com/orangehrm-30-day-trial/";
    const browser:Browser= await firefox.launch({headless:false});  
    const context:BrowserContext= await browser.newContext();
    const page:Page= await context.newPage();
    await page.goto(url);
    await page.getByText('Accept Cookies').focus();
    await page.getByText('Accept Cookies').click();
    
    await page.locator("//input[@id='Form_getForm_Name']").focus();
   
});