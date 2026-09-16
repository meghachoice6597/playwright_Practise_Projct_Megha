
export class loginpage{
    constructor (page)
    {
    this.page=page;   
    this.username = page.locator("#user-name")
    this.password = page.locator("#password")
    this.loginbtn = page.getByRole("button", {name: "Login"})

    }
      async navigatePage ()
      {
        await this.page.goto("https://www.saucedemo.com/");
      }
    
    async loginValidate (uName,Pword)
    {
        await this.username.fill(uName);
   
        await this.password.fill(Pword);
    
        await this.loginbtn.click()
    }
    
}