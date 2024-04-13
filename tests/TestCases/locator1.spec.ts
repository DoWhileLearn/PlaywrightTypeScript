import {test, expect,Browser,Page, Locator} from '@playwright/test';
import {webkit,chromium,firefox} from '@playwright/test';

test('locator1 testing', async() => {
    const url="https://www.spicejet.com/";
    const mybrowser:Browser= await chromium.launch ({headless:false});
    const page:Page= await mybrowser.newPage();
    await page.goto(url);

    //create a web element (locator)= perform action on it( click, fill)
    
    await page.locator('text=Add-ons').hover();
});
