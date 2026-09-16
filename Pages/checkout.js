export class checkout{
    constructor(page){
        this.page = page;
        this.firstname = page.locator("#first-name")
        this.lastname = page.locator("#last-name")
        this.zip = page.locator("#postal-code")
        this.continuebttn = page.locator("#continue")
    }
    async fillform(fname,lname,zipp ){
        await this.firstname.fill(fname);
        await this.lastname.fill(lname);
        await this.zip.fill(zipp);
        await this.continuebttn.click();

    }
}