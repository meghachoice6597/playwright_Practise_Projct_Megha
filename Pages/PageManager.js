import { loginpage } from "./loginpage";
import { productpage } from "./productpage";
import { cartpage } from "./cartpage";
import { checkout } from "./checkout";
import { finalpage } from "./finalpage";
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