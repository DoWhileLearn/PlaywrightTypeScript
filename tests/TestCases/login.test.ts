import {test, expect,Browser,Page, Locator} from '@playwright/test';
import { webkit,chromium,firefox} from '@playwright/test';

test('login test', async() => {
    const url="https://naveenautomationlabs.com/opencart/index.php?route=account/login";
   const mybrowser:Browser= await firefox.launch ({headless:false});
   const page:Page= await mybrowser.newPage();
   await page.goto(url);

   const emailid:Locator= await page.locator('#input-email');
   const password:Locator= await page.locator('#input-password');
   const loginButton:Locator= await page.locator("[value='Login']");

   emailid.fill("pwtest@opencart.com");
   password.fill("playwright@123");
    loginButton.click();
    
    const title=await page.title();
    console.log("home page title: ",title);

    await page.screenshot({path: 'login.png'});

    expect(title).toEqual("My Account");
    await mybrowser.close();
    
});