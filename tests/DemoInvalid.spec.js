import {test, expect} from "@playwright/test"
test("swagdemo", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    
    const username = await page.locator("#user-name")
    await username.fill("standard_us");
    const password = await page.locator("#password")
    await password.fill("secret_sauce");
    const loginbtn = await page.getByRole("button", {name: "Login"})
    await loginbtn.click()
   const errorMsg = page.getByText("Epic sadface");

if (await errorMsg.isVisible()) {
     console.log( await errorMsg.textContent());
}
    await page.pause();

})