import test, { expect } from "@playwright/test";
test("radiobutton test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php");
    const inputform = page.getByRole("link",{name : "Input Form"})  
    await inputform.click();
    const radiobuttondemo = page.getByRole("link", {name : "Radio Buttons Demo"})
    await radiobuttondemo.click();
    const radiobutton = page.getByLabel("Female").first() 
    await radiobutton.check();
    const showselectedbutton = page.getByRole("button", {name : "Show Selected Value"})
    await showselectedbutton.click();
    const message = page.locator("#message-one");
    const visiblemessage = await message.isVisible() 
    const messagecontent = await message.textContent(); // get the text content of the messag
    console.log(messagecontent);
    await expect(messagecontent).toContain("Female"); // assertion
    await page.pause();
})  
