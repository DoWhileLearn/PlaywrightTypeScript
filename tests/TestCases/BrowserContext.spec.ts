import {test, expect,Browser,Page, Locator, BrowserContext} from '@playwright/test';
import { webkit,chromium,firefox} from '@playwright/test';

test('browser Context', async()=>{

    const url="https://naveenautomationlabs.com/opencart/index.php?route=account/login";
    
    const browser:Browser=await firefox.launch({headless:false});
    const browser_context1:BrowserContext=await browser.newContext();

    const page1:Page=await browser_context1.newPage();
    await page1.goto(url);
    const email1= await page1.locator('#input-email');
    const password1= await page1.locator('#input-password');
    const loginButton1:Locator= await page1.locator("[value='Login']");

    email1.fill("pwtest@opencart.com");
    password1.fill("playwright@123");
    loginButton1.click();

    //context2
    const browser_context2:BrowserContext=await browser.newContext();

    const page2:Page=await browser_context1.newPage();
    await page2.goto(url);
    const email2= await page2.locator('#input-email');
    const password2= await page2.locator('#input-password');
    const loginButton2:Locator= await page2.locator("[value='Login']");

    email2.fill("pwtest@opencart.com");
    password2.fill("playwright@123");
    loginButton2.click();

    browser_context1.close();
    browser_context2.close();

    browser.close();

    await new Promise(()=>{}); //to keep the browser open


});