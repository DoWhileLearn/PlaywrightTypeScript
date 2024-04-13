import {test,expect,Browser,Page,Locator} from '@playwright/test';
import { webkit, firefox,chromium } from '@playwright/test';

test('locator1 testing', async() => {
   const url="https://naveenautomationlabs.com/opencart/index.php?route=account/register";
    const mybrowser:Browser= await chromium.launch({headless:false, channel: 'chrome'});
    const page:Page= await mybrowser.newPage();
    await page.goto(url);

 
// locator- test by ID
const reg_fName:Locator= page.locator('id=input-firstname');
const reg_lName:Locator= page.locator('id=input-lastname');
const reg_email:Locator= page.locator('id=input-email');

await reg_fName.fill('test');
await reg_lName.fill('test');
await reg_email.fill('test@123@gmail.com');

//locator- test by Name
const reg_logo:Locator= page.locator('.img-responsive');
await reg_logo.isEnabled();

//locator text
const reg_text:Locator= page.locator('text=Register Account');
await reg_text.isVisible();
const reg_AddressBook :Locator= page.locator('text=Address Book');
await reg_AddressBook.isVisible();


//locator css
const reg_password:Locator= page.locator('css=input#input-password');
await reg_password.fill('test@123');

//locator xpath
const reg_telephone:Locator= page.locator('xpath=//input[@id="input-telephone"]');
await reg_telephone.fill('1234567890');

//data-testid
const reg_fax:Locator= page.locator('[data-testid="input-fax"]');
await reg_fax.fill('1234567890');



//await new Promise (()=>{});
});

