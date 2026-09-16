import {test , expect}from "@playwright/test";
test("Locator tests", async ({page}) => {
await page.goto("https://selenium.qabible.in/form-submit.php");  // navigate to google.com
//await page.locator(".form-control").nth(0).fill("Senora");  // fill the first name field
await page.locator(".form-control").first().fill("Senora");  // fill the first name field
//await page.locator(".form-control").nth(1).fill("Sen"); // for class locator we can use . (dot) and for id locator we can use # (hash) and for xpath we can use // (double slash)
await page.locator("#validationCustom02").fill("sen"); //for id locator we can use # (hash)
await page.locator('input[id="validationCustomUsername"]').fill("seya");
await page.locator('//input[@placeholder="City"]').fill("Chennai");  //xpath
await page.getByPlaceholder("State").fill("tamil nadu"); // using special locator - getbyplaceholder
await page.getByPlaceholder("Zip").fill("600001"); // using special locator - getbyplaceholder
const checkbox = page.locator("#invalidCheck");
await checkbox.check();  // check the checkbox
//get by role locator 
const submitButton = page.getByRole('button',{name : "Submit form"});
await submitButton.click();  // click the submit button
//Assertions - expected conditions - to be visible, to be hidden, to be checked, to be unchecked, to be enabled, to be disabled, to have text, to have value, to have attribute, to have class, to have css property, to have count, to have length
const successMessage = page.locator("#message-one")
const visiblemessage =await successMessage.isVisible()  //is visible is a method which returns true or false
console.log(visiblemessage);
await expect(visiblemessage).toBeTruthy()
await expect(successMessage).toBeVisible() // import expect from @playwright/test
await page.pause();  // pause the test execution
})