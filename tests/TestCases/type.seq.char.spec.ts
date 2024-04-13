import {test, expect,Browser,Page, Locator} from '@playwright/test';
import {webkit,chromium,firefox} from '@playwright/test';

test('slow typing', async() => {
    const url="https://www.flipkart.com/";
   const mybrowser:Browser= await firefox.launch ({headless:false});
   const page:Page= await mybrowser.newPage();
   await page.goto(url);

   await page.getByPlaceholder('Search for products, brands and more').pressSequentially('iphone',{delay:100});

   await page.waitForTimeout(5000);
});
   