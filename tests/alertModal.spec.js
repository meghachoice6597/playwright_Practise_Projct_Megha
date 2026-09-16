import test, {expect } from "@playwright/test"
test("@web alertmodal", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/index.php");
    const alertmodal= page.getByRole("link",{name : "Alerts and Modals"})  //link - href
    await alertmodal.click();
    const bootstrapalert = page.getByRole("link", {name : "Bootstrap Modal"})
    await bootstrapalert.click();
    const launchmodal = page.locator(".btn.btn-primary").first() // having 2classes --- removed space and connected using dot
    await launchmodal.click();
    const hovermodal = page.locator("#exampleModalCenter");
    await expect(hovermodal).toBeVisible();
    await hovermodal.getByRole("button", {name : "Save changes"}).click();
    await page.pause();

})