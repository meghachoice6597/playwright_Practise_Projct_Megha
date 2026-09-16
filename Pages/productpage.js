import { expect } from "@playwright/test";
export class productpage{
    //constructor used to store the locators
    constructor(page) {
        this.page = page;
        this.prdtTitle = page.locator(".inventory_item_name ")

        this.cartbttn = page.locator(".shopping_cart_link")
        this.inven_descr = this.page.locator(".inventory_item_description")
       
              
    }
    async navigateproduct(myprdct){
            this.titles = await this.prdtTitle.allTextContents() 
            console.log(this.titles)
            this.count = await this.prdtTitle.count()
            console.log(this.count)
             
            
            for(let i=0;i<this.count;i++)
                {
                if(await this.inven_descr.locator(".inventory_item_name ").nth(i).textContent() === myprdct){
                    console.log(await this.inven_descr.locator(".inventory_item_name ").nth(i).textContent())
                    this.addcart_btn = await this.page.getByText("Add to cart").nth(i).click()
                    
                }
                }
                await this.cartbttn.click()
    
    } 
    
}





