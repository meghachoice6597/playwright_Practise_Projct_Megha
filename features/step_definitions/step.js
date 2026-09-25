import { Given, When, Then } from '@cucumber/cucumber';
//import {PageManger} from '../../Pages/PageManager.js'
//import { chromium } from 'playwright';
//import { setdefaultTimeout } from '@cucumber/cucumber';
//setdefaultTimeout(60 * 1000);
/*let browser;
let context;
let page;
let pageManage;*/

Given('login using with {string} and {string}', async function (username, password)
 {
      /*browser = await chromium.launch({ headless: false });
       context = await browser.newContext();
       page = await context.newPage();
       pageManage = new PageManger(page); */
      const logpage= this.pageManage.getloginPage()
      await logpage.navigatePage();
      await logpage.loginValidate(username,password);
});
When('add a {string} to the cart', async function (product) {
    
    const prdpage = this.pageManage.getprdPage()
    await prdpage.navigateproduct(product);
  
});

Then('verify the {string} is same as we added to the cart', async function (product) {
   /*const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageManage = new PageManger(page); */
    const carpage = this.pageManage.getcartPage()
    await carpage.printcartitem(product)
});
When('enter the valid details {string},{string}, {string}',  async function (fname, lname, zipp) {
    /*const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageManage = new PageManger(page);*/
    const fillpage = this.pageManage.getcheckoutPage()
    await fillpage.fillform(fname,lname,zipp)
});
Then('verify the order is placed successfully', async function () {
    /*const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    const pageManage = new PageManger(page);*/
    const finishPage =this.pageManage.getfinishPage()
    await finishPage.finishOrder()
  
});