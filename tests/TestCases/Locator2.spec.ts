import {test,expect,Browser,Page,Locator} from '@playwright/test';
import { webkit, firefox,chromium } from '@playwright/test';


test.only('locator2 testing', async() => {
   const url="https://spicejet.com/";
    const mybrowser:Browser= await chromium.launch({headless:false, channel: 'chrome'});
    const page:Page= await mybrowser.newPage();
    await page.goto(url);

 
// locator- data-testid
const menu_hotel:Locator= page.locator('[data-testid="test-id-Hotels"]');
menu_hotel.isVisible();
menu_hotel.click();

const menu_hotel1:Locator= page.getByTestId('test-id-Hotels');
menu_hotel.isVisible();



//await new Promise (()=>{});
});

