import test, { expect } from "@playwright/test";
test("@web checkbox test", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php");
    const inputform = page.getByRole("link",{name : "Input Form"})  //link - href
    await inputform.click();
    const checkboxdemo = page.getByRole("link", {name : "Checkbox Demo"})
    await checkboxdemo.click();
    const checkbox = page.getByLabel("Click on this check box") 
    await checkbox.check();  // check the checkbox
    await page.pause();
})