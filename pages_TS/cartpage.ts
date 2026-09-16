import { expect, Locator, Page } from "@playwright/test";
export class cartpage{
        page:Page
        cartitem:Locator
        checkoutbttn:Locator
        
constructor(page : Page){
         this.page=page;
         this.cartitem = page.locator(".cart_item_label .inventory_item_name")
         this.checkoutbttn = page.locator("#checkout")
    }
    async printcartitem(myprdct:String){
                const cartitems = await this.cartitem.textContent();
                console.log(cartitems);
                await expect(cartitems).toContain(myprdct);
                await this.checkoutbttn.click()
              
    }
}