import OrderData from "../Utils/OrderData.json"
import { test, expect } from "@playwright/test";
import { PageManger } from "../Pages/PageManager";
//While using as array we don't need to change the json to js --- so the below codes commented
//const dataString = JSON.stringify(OrderData)
//const data =JSON.parse(dataString)
//looping the array and call from orderdata utils
for(const data of OrderData)
  {
    //`swagdemo ${data.myprdct}` ---- for running multiple array item we need to set a unique thing, here myprdct from utils are used as unique
test(`swagdemo ${data.myprdct}`, async ({ page }) => {
    //const myprdct = 'Sauce Labs Backpack'
    const pageManage = new PageManger(page);
    const logpage= pageManage.getloginPage()
    await logpage.navigatePage();
    await logpage.loginValidate(data.username,data.password);

    
    const prdpage = pageManage.getprdPage()
    await prdpage.navigateproduct(data.myprdct);

    const carpage = pageManage.getcartPage()
    await carpage.printcartitem(data.myprdct)

    const fillpage = pageManage.getcheckoutPage()
    await fillpage.fillform(data.firstname,data.lastname,data.zip)

    const finishPage =pageManage.getfinishPage()
    await finishPage.finishOrder()

    



    

    
    
    
      /*
      
      
      
      const finishbttn = await page.locator("#finish").click();
      const thnksmsg = await page.locator(".checkout_complete_container .complete-header").textContent()
      console.log(thnksmsg);
      await expect(thnksmsg).toContain("Thank you");*/
    //await page.pause();
    await page.waitForTimeout(3000);

}
)
}