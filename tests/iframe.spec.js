

import test, {expect } from "@playwright/test"
test("iframe", async ({ page, context }) => {
    await page.goto("https://demoqa.com/frames");
    const iframe =  page.frameLocator("#frame1");
    const iframevText = await iframe.locator("#sampleHeading").textContent();
    console.log(iframevText);
    await page.waitForTimeout(3000);
})
