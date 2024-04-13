import {test, expect,Browser,Page, Locator} from '@playwright/test'
import {webkit, firefox, chromium} from '@playwright/test'

test('Basic auth test', async()=>{

   const url="https://the-internet.herokuapp.com/basic_auth";
   const myBrowser: Browser= await firefox.launch({headless:false});
    const page:Page= await myBrowser.newPage();
    page.setExtraHTTPHeaders({Authorization: createauthHeader('admin', 'admin')});
    await page.goto(url);


});


function createauthHeader(username:any, password:any){
    return 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
}