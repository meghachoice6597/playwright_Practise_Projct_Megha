import {test, expect } from "@playwright/test"
test("ke", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php");
    const OSmachine = process.platform === "win32" ? "Control" : "Meta"; //checking the machine type
    const inputbox = page.locator("#single-input-field");
    await inputbox.focus();
    await page.keyboard.type("Hi girls!!!")
    await page.keyboard.press(`${OSmachine}+a`);
    await page.keyboard.press(`${OSmachine}+c`);
    const entervalue = await page.locator("#value-a")
    await entervalue.focus();
    await page.keyboard.press(`${OSmachine}+v`);
    await page.keyboard.press("Enter");
    


    await page.waitForTimeout(3000);

})