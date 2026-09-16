import { expect } from "@playwright/test";
export class cartpage{
    constructor(page){
         this.page=page;
         this.cartitem = page.locator(".cart_item_label .inventory_item_name")
         this.checkoutbttn = page.locator("#checkout")
    }
    async printcartitem(myprdct){
                const cartitems = await this.cartitem.textContent();
                console.log(cartitems);
                await expect(cartitems).toContain(myprdct);
                await this.checkoutbttn.click()
              
    }
}