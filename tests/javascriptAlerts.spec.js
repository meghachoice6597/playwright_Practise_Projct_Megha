import {test, expect } from "@playwright/test"
test("javascriptalerts", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php");
    const alertmodal= page.getByRole("link",{name : "Alerts and Modals"})  //link - href
    await alertmodal.click();
    const jsalert= page.getByRole("link", {name: "Javascript Alert"})
    await jsalert.click();
    const jsclickmebutton = page.getByRole("button", {name : "Click me!"}).last()
    //handle js dialog popup
    page.on("dialog", async(dialog)=>{
        await page.waitForTimeout(3000)
        console.log(dialog.message());
       await dialog.accept()});
    await jsclickmebutton.click();
    const pressOk = await page.locator("#confirm-demo").textContent();
    console.log(pressOk);
    await expect(pressOk).toContain("OK!");
   await expect(page.locator("#confirm-demo")).toBeVisible();
    //page.on("dialog", dialog=>dialog.dismiss());
    await page.pause();
})