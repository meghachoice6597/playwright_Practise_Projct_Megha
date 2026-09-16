import { expect, Locator, Page } from "@playwright/test";
export class productpage{
    //constructor used to store the locators
    page:Page
    prdtTitle:Locator
    cartbttn:Locator
    inven_descr:Locator
   // titles: string[];
    
    constructor(page:Page) {
        this.page = page;
        this.prdtTitle = page.locator(".inventory_item_name ")

        this.cartbttn = page.locator(".shopping_cart_link")
        this.inven_descr = this.page.locator(".inventory_item_description")
        //this.titles = []
        
              
    }
    async navigateproduct(myprdct:String){
           const titles = await this.prdtTitle.allTextContents() 
            console.log(titles)
            const count:number = await this.prdtTitle.count()
            console.log(count)
             
            
            for(let i=0;i<count;i++)
                {
                if(await this.inven_descr.locator(".inventory_item_name ").nth(i).textContent() === myprdct){
                    console.log(await this.inven_descr.locator(".inventory_item_name ").nth(i).textContent())
                    const addcart_btn:any  = await this.page.getByText("Add to cart").nth(i).click()
                    
                }
                }
                await this.cartbttn.click()
    
    } 
    
}

