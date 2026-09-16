import { Page } from "@playwright/test";
import { loginpage } from "../pages_TS/loginpage";
import { productpage } from "../pages_TS/productpage";
import { cartpage } from "../pages_TS/cartpage";
import { checkout } from "../pages_TS/checkout";
import { finalpage } from "../pages_TS/finalpage";
 export class PageManger {
    page:Page
    logpage:loginpage
    prdpage:productpage
    carpage:cartpage
    fillpage:checkout
    finishPage:finalpage
    constructor(page:Page){
        this.page =page
        this.logpage = new loginpage(page);
        this.prdpage = new productpage(page);
        this.carpage = new cartpage(page);
        this.fillpage = new checkout(page);
         this.finishPage = new finalpage(page)
    }
    getloginPage(){
        return this.logpage
    }
    getprdPage(){
        return this.prdpage
    }
    getcartPage(){
        return this.carpage
    }
    getcheckoutPage(){
        return this.fillpage
    }
    getfinishPage(){
        return this.finishPage
    }
}