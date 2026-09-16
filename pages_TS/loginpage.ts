import { Locator, Page } from "@playwright/test";

export class loginpage{
    page:Page;
    username : Locator
    password : Locator
    loginbtn : Locator
    constructor (page:Page)
    {
    this.page =page;   
    this.username = page.locator("#user-name")
    this.password = page.locator("#password")
    this.loginbtn = page.getByRole("button", {name: "Login"})

    }
      async navigatePage ()
      {
        await this.page.goto("https://www.saucedemo.com/");
      }
    
    async loginValidate (uname:any,pword:any)
    {
        await this.username.fill(uname);
    
        await this.password.fill(pword);
    
        await this.loginbtn.click()
    }
    
}