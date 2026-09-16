//1/9/2026 - Drag and drop
import test, {expect } from "@playwright/test"
test("dragandDrop", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/drag-drop.php");
    const source = page.getByText("Draggable n°3");
    const destination = page.locator("#mydropzone");
    await source.dragTo(destination);
    

})
