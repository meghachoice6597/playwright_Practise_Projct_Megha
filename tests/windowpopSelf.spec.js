import {test, expect} from "@playwright/test"
test("windowpopup", async ({page,context})=>{
   await page.goto("https://selenium.qabible.in/window-popup.php") 
   const likebtn = await page.getByRole("link",{ name:  "Like us On Facebook "})
  
   const [newchildd]= await Promise.all([
    context.waitForEvent("page"),  await likebtn.click()
   ])
   await newchildd.waitForLoadState();
   console.log(await newchildd.title())
   await newchildd.getByText("email").fill("9633712761")
   await newchildd.waitForLoadState();
   await newchildd.getByText("password").first().fill("Samegha143")
   const loginbtn = await newchildd.getByRole("button", {name : "Log in"})
   await loginbtn.screenshot({path : "login.png"})
   await loginbtn.click();
   console.log("successfully logged in")
   await page.pause();

})