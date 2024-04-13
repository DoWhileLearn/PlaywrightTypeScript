import {test, Page, BrowserContext, Browser, Locator, expect} from '@playwright/test';
import { webkit,firefox,chromium } from '@playwright/test';

test('Locator3 GetByRole', async()=>{

    const url= "https://naveenautomationlabs.com/opencart/index.php?route=account/register";

    const browser:Browser= await chromium.launch({headless:false});
    const context:BrowserContext= await browser.newContext();
    const page:Page= await context.newPage();
    await page.goto(url);

    //locator by role- textbox
    const firstName= await page.getByRole('textbox',{name:'firstname'});

    //locator by role- heading
    expect(await page.getByRole('heading',{name:'Register Account'}).isVisible);

    //locator byRole- dropdown
    expect(await page.getByRole('link',{name:'Desktops'}).isVisible);
    await page.getByRole('link',{name:'Desktops'}).click();

    expect(await page.getByRole('link',{name:'PC'}).isVisible);
    await page.getByRole('link',{name:'PC'}).click();

    expect(await page.getByRole('link',{name:'MAC'}).isVisible);
    await page.getByRole('link',{name:'MAC'}).click();

    await page.waitForTimeout(5000);
    
});