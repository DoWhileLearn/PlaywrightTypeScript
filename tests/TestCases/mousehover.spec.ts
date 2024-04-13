import {test, expect,Browser,Page, Locator} from '@playwright/test';
import {webkit,chromium,firefox} from '@playwright/test';
import { defineConfig } from '@playwright/test';
import { channel } from 'diagnostics_channel';

export default defineConfig({
  use: {
    // Context geolocation
    geolocation: { longitude: 12.492507, latitude: 41.889938 },
    permissions: ['geolocation'],
  },
});
test('slow typing', async() => {
const url="https://www.spicejet.com/";
const mybrowser:Browser= await chromium.launch ({headless:false});
const page:Page= await mybrowser.newPage();
await page.goto(url);

//page.on('dialog', dialog => dialog.accept());
//await page.getByRole('button').click();

//await context.grantPermissions(['geolocation'], { origin: 'https://www.bestbuy.com' });

await page.getByText('Add-ons').first().hover();
await page.getByText('SpiceMAX').first().click();



})