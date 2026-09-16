import test, { expect } from "@playwright/test"

test("datePicker", async ({ page }) => {

    await page.goto("https://selenium.qabible.in/index.php");

    const date = page.getByRole("link", { name: "Date Pickers" });
    await date.click();

    const enterdate = page.locator("#single-input-field");
    await enterdate.click();

    const dateselect = 21;
    const month = 1;
    const year = 2009;

    // Days → Months
    await page.locator(".datepicker-days th.datepicker-switch").click();

    // Months → Years
    await page.locator(".datepicker-months th.datepicker-switch").click();

    // Find the year range
    while (true) {

        const yearRange = await page
            .locator(".datepicker-years th.datepicker-switch")
            .textContent();

        console.log("Year Range:", yearRange);

        // Convert string values into numbers
        const startingRange = Number(yearRange.split("-")[0]);
        const endingRange = Number(yearRange.split("-")[1]);

        console.log("Starting Range:", startingRange);
        console.log("Ending Range:", endingRange);

        // Check whether required year is inside the range
        if (year >= startingRange && year <= endingRange) {
            break;
        }

        // If required year is smaller, click Previous
        if (year < startingRange) {

            const previousBttn = page.locator(".datepicker-years .prev");
            await previousBttn.click();

        }

        // If required year is bigger, click Next
        else {

            const nextarrow = page.locator(".datepicker-years .next");
            await nextarrow.click();

        }
    }

    await page.pause();
});