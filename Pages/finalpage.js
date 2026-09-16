import { expect } from "@playwright/test";
export class finalpage{
    constructor(page){
        this.page =page
        this.finishbttn = page.locator("#finish")
        this.thnksmsg1 = page.locator(".checkout_complete_container .complete-header")
    }
    async finishOrder(){
    await this.finishbttn.click();
    const thnksmsg = await this.thnksmsg1.textContent()
    console.log(thnksmsg);
    await expect(thnksmsg).toContain("Thank you");
    }
}