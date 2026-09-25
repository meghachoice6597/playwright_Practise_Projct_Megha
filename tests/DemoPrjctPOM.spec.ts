import OrderData from "../Utils/OrderData.json"with {type: "json"};
import { test, expect } from "@playwright/test";
import { PageManger } from "../pages_TS/PageManager.ts";
for(const data of OrderData){
test(`swagdemo ${data.myprdct}`, async ({ page }) => {
    const myprdct = 'Sauce Labs Backpack'
    const pageManage = new PageManger(page);
    const logpage= pageManage.getloginPage()
    await logpage.navigatePage();
    await logpage.loginValidate(data.username, data.password);

    const prdpage = pageManage.getprdPage()
    await prdpage.navigateproduct(data.myprdct);

    const carpage = pageManage.getcartPage()
    await carpage.printcartitem(data.myprdct)

    const fillpage = pageManage.getcheckoutPage()
    await fillpage.fillform(data.myprdct, data.firstname, data.lastname, data.zip)

    const finishPage =pageManage.getfinishPage()
    await finishPage.finishOrder()

    



    

    
    
    
      /*
      
      
      
      const finishbttn = await page.locator("#finish").click();
      const thnksmsg = await page.locator(".checkout_complete_container .complete-header").textContent()
      console.log(thnksmsg);
      await expect(thnksmsg).toContain("Thank you");*/
    await page.pause();

})}