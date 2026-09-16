import { Locator,Page } from "@playwright/test";
export class checkout{
    page :Page
    firstname :Locator
    lastname:Locator
    zip:Locator
    continuebttn:Locator
    constructor(page:Page){
        this.page = page;
        this.firstname = page.locator("#first-name")
        this.lastname = page.locator("#last-name")
        this.zip = page.locator("#postal-code")
        this.continuebttn = page.locator("#continue")
    }
    async fillform(myprdct:String, fname:string,lname:string,zip:any){
        await this.firstname.fill(fname);
        await this.lastname.fill(lname);
        await this.zip.fill(zip);
        await this.continuebttn.click();

    }
}