import test from "@playwright/test";
// create a test ( title, function)
test("First Test", async({browser})=>{     // here browser is a fixture, we can use it to create a new context and page
const context = await browser.newContext();  // need in all test
const page =  await context.newPage();  // need in all test
await page.goto("https://www.google.com/");  // navigate to google.com    
})


