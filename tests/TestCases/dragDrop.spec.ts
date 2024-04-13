import {test, expect,Browser,Page, Locator} from '@playwright/test';
import {webkit,chromium,firefox} from '@playwright/test';

test('drag and drop', async() => {
    const url="https://jqueryui.com/resources/demos/droppable/default.html";
   const mybrowser:Browser= await firefox.launch ({headless:false});
   const page:Page= await mybrowser.newPage();
   await page.goto(url);

   const source:Locator=  page.locator("#draggable");
   const target:Locator=  page.locator("#droppable");

  // source.dragTo(target);

//using mouse movements

await source.hover();
await page.mouse.down();
await target.hover();
await page.mouse.up();

   await page.waitForTimeout(5000);

});