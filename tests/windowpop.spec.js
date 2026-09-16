//17-08-2026 - Monday
import test, {expect } from "@playwright/test"
test("alertmodalself", async ({ page, context }) => {
    await page.goto("https://selenium.qabible.in/index.php");
    const alertmodal= page.getByRole("link",{name : "Alerts and Modals"})  //link - href
    await alertmodal.click();
    const windowpop = page.getByRole("link", {name : "Window Popup"})
    await windowpop.click();
    console.log(await page.title())
    const likeFB = page.getByRole("link", {name : "Like us On Facebook "})
   // promise.all - handle multiple event at a time
    const [newchild] = await Promise.all([
        context.waitForEvent("page"), await likeFB.click()
    ])
    await newchild.waitForLoadState()  //for loading the page
    console.log(await newchild.title())

    await newchild.locator("#_r_5_").fill("megha")
    await newchild.close();
    await page.close();
    await page.pause();

})