import test, {expect } from "@playwright/test";
test("dropdown test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php");
    const inputform = page.getByRole("link",{name : "Input Form"})  //link - href
    await inputform.click();
    const selectinputform = page.getByRole("link", {name : "Select Input"})
    await selectinputform.click();

    const dropdown = page.locator("#single-input-field");
    await dropdown.selectOption("Red");
    
    const selectcontent = await page.locator("#message-one").textContent();
    console.log(selectcontent);
    await expect(selectcontent).toContain("Red");
    await page.pause();
    
})