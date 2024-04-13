import {test, expect,BrowserContext,Page,Browser} from '@playwright/test';
import {webkit,chromium,firefox} from '@playwright/test';

test('locator4 testing', async() => {

    const url="https://spicejet.com/";
    const mybrowser:BrowserContext= await chromium.launchPersistentContext('',{headless:false, channel: 'chrome'});
    const pages= await mybrowser.pages();
    const page:Page = pages[0];
    await page.goto(url);
    await page.waitForTimeout(5000);

    //locator chaining
    const menu_hotel= page.locator('[data-testid="test-id-Hotels"]').locator('text=Hotels');
    menu_hotel.isVisible();
    menu_hotel.click();

    //await new Promise (()=>{});
    

});