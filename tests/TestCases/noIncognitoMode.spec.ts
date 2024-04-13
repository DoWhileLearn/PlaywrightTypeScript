import {test,expect,Browser,Page,Locator, BrowserContext} from '@playwright/test';
import { webkit, firefox,chromium } from '@playwright/test';

    test('No incognito mode', async() => {
        const url="https://spicejet.com/";
        const mybrowser:BrowserContext= await chromium.launchPersistentContext('',{headless:false, channel: 'chrome'});
        //commment below if want to close extra tab
       // const page:Page= await mybrowser.newPage();
       // await page.goto(url);
       // await page.waitForTimeout(5000);
   
        //close one extra tab
        const pages= await mybrowser.pages();
        const page:Page = pages[0];
        await page.goto(url);
        await page.waitForTimeout(5000);
   

    });
