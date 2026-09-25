import { Before,BeforeStep,AfterStep,After } from '@cucumber/cucumber'
import { Status } from '@cucumber/cucumber';
import {PageManger} from '../../Pages/PageManager.js'
import { chromium } from 'playwright';
Before(async function () {
    console.log("Run before first step of each scenario");
      const browser = await chromium.launch({ headless: false });
      const context = await browser.newContext();
       this.page = await context.newPage();
      this.pageManage = new PageManger(this.page);
})
BeforeStep(async function () {
    console.log("Run before each step of each scenario");
})
AfterStep(async function ({result}) {
    console.log("Run after each step of each scenario");
    if(result.status === Status.FAILED){
 const screenshot = await this.page.screenshot({path: 'screenshot.png', fullPage: true});   
}})
After(async function () {
    console.log("Run after last step of each scenario");
    if(this.page){
        await this.page.close();
    }
    if(this.context){
        await this.context.close();
    }
    if(this.browser){
        await this.browser.close();
    }
})