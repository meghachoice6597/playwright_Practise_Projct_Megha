import test, {expect} from "@playwright/test"
test("screenshots", async({page}) =>{
await page.goto("https://selenium.qabible.in/index.php");
//screenshot
await page.screenshot({path: "home.png"})
const inputform = page.getByRole("link", {name : "Input Form"})
await inputform.screenshot({path: "inputform.png"});
//visual comparison - comparing the expected and actual -checking pixel to pixel
})
test("visualcomparison", async({page})=>{
  await page.goto("https://selenium.qabible.in/index.php");
  await expect(await page.screenshot()).toMatchSnapshot()  
})
