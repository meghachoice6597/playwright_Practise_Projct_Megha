import test, {expect } from "@playwright/test"
test("alertmodalself", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php");
    const alertmodal= page.getByRole("link",{name : "Alerts and Modals"})  //link - href
    await alertmodal.click();
    const bootstrapalert = page.getByRole("link", {name : "Bootstrap Modal"})
    await bootstrapalert.click();
    const launchonemodel = await page.getByRole("button",{name : "Launch modal"}).last()
    await launchonemodel.click();
    const lauchanothermodelbutton = await page.getByRole("button",{name : "Launch another modal"})
    await lauchanothermodelbutton.click();
    const seondModalTitle = await page.locator("#exampleModalCenter2");
    await expect(seondModalTitle).toBeVisible();
    await seondModalTitle.getByRole("button", {name : "Save changes"}).click();
    await page.pause();
})