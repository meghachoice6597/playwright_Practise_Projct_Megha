//13/8/2026 - 14/8/2026
import test, {expect} from "@playwright/test"
test("datePicker", async({page}) =>{
await page.goto("https://selenium.qabible.in/index.php");

const date = await page.getByRole("link", {name : "Date Pickers"})
await date.click();
const enterdate = page.locator("#single-input-field");
await enterdate.click();

const dateselect=21
const month =1
const year=2041

await page.locator(".datepicker-days th.datepicker-switch").click()
await page.locator(".datepicker-months th.datepicker-switch").click()

while(true){
const yearRange = await page.locator(".datepicker-years th.datepicker-switch").textContent()
console.log(yearRange);
//split method - string get as Array
const startingRange = yearRange.split("-")[0]
console.log(startingRange)
const endingRange = yearRange.split("-")[1]
console.log(endingRange)



if (year >= startingRange && year <= endingRange) {
            break;
        }

        
        if (year < startingRange) {

            const previousBttn = page.locator(".datepicker-years th.prev");
            await previousBttn.click();

        }

        
        else {

            const nextarrow = page.locator(".datepicker-years th.next");
            await nextarrow.click();

        }
    }
    await page.locator(".datepicker-years td").getByText(year.toString(),{exact : true}).first().click()
    await page.locator(".month").nth(month-1).click()
    await page.getByText(dateselect.toString(), {exact : true}).first().click()
    
    
    const showbttn = await page.locator("#button-one").click()
    console.log(showbttn);
    //const messagecontent = await showbttn.textContent();
    //console.log(messagecontent)
    //console.log(dateselect)
    await page.pause();
})




