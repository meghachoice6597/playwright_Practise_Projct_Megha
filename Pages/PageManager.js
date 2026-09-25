import { loginpage } from "./loginpage.js";
import { productpage } from "./productpage.js";
import { cartpage } from "./cartpage.js";
import { checkout } from "./checkout.js";
import { finalpage } from "./finalpage.js";
 export class PageManger {
    constructor(page){
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