import {test, expect} from "@playwright/test"
import {customTest} from "../Utils/testBase"
import {myTest} from "../Utils/testBase copy"
test.skip("swagdemo", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    
    const username = await page.locator("#user-name")
    await username.fill("standard_user");
    const password = await page.locator("#password")
    await password.fill("secret_sauce");
    const loginbtn = await page.getByRole("button", {name: "Login"})
    await loginbtn.click()

    const prdtTitle = page.locator(".inventory_item_name ")
    const titles = await prdtTitle.allTextContents()  //for getting multiple text contents
    console.log(titles)

    const myprdct = 'Sauce Labs Backpack'
    const count = await prdtTitle.count()
    console.log(count)
    const inven_descr = await page.locator(".inventory_item_description")
    for(let i=0;i<count;i++)
        {
        if(await inven_descr.locator(".inventory_item_name ").nth(i).textContent()===myprdct){
            console.log(await inven_descr.locator(".inventory_item_name ").nth(i).textContent())
            const addcart_btn = await page.getByText("Add to cart").nth(i).click()
            //const cartbttn = await page.locator(".shopping_cart_badge").click();
            
        }
        }
      const cartbttn = await page.locator(".shopping_cart_link").click()
      const cartitem = await page.locator(".cart_item_label .inventory_item_name").textContent()
      console.log(cartitem);
      await expect(cartitem).toContain(myprdct);
      const checkoutbttn = await page.locator("#checkout").click();
      const firstname = await page.locator("#first-name").fill("megha");
      const lastname = await page.locator("#last-name").fill("saji");
      const zip = await page.locator("#postal-code").fill("1234");
      const continuebttn = await page.locator("#continue").click();
      const finishbttn = await page.locator("#finish").click();
      const thnksmsg = await page.locator(".checkout_complete_container .complete-header").textContent()
      console.log(thnksmsg);
      await expect(thnksmsg).toContain("Thank you");
    await page.pause();
})

    customTest.skip("swagdemo with fixture", async({page, loginFixture})=>{
    await page.goto("https://www.saucedemo.com/");
    
    const username = await page.locator("#user-name")
    await username.fill(loginFixture.username);
    const password = await page.locator("#password")
    await password.fill(loginFixture.password);
    const loginbtn = await page.getByRole("button", {name: "Login"})
    await loginbtn.click()




  // Product list
    const prdtTitle = page.locator(".inventory_item_name");

    const titles = await prdtTitle.allTextContents();
    console.log(titles);

    // Product from fixture
    const myprdct = loginFixture.myprdct;

    const count = await prdtTitle.count();
    console.log(count);


    // Find product and add to cart
    const inven_descr = page.locator(".inventory_item_description");

    for (let i = 0; i < count; i++) {

        const productName = await inven_descr
            .locator(".inventory_item_name")
            .nth(i)
            .textContent();

        if (productName?.trim() === myprdct) {

            console.log(productName);

            const addcart_btn = page.getByText("Add to cart").nth(i);

            await addcart_btn.click();

            break;
        }
    }


    // Cart
    const cartbttn = page.locator(".shopping_cart_link");
    await cartbttn.click();

    const cartitem = page.locator(
        ".cart_item_label .inventory_item_name"
    );

    const cartItemText = await cartitem.textContent();

    console.log(cartItemText);

    await expect(cartItemText).toContain(myprdct);


    // Checkout
    await page.locator("#checkout").click();


    // Customer details from fixture
    const firstname = page.locator("#first-name");
    await firstname.fill(loginFixture.firstname);

    const lastname = page.locator("#last-name");
    await lastname.fill(loginFixture.lastname);

    const zip = page.locator("#postal-code");
    await zip.fill(loginFixture.zip);


    // Continue
    const continuebttn = page.locator("#continue");
    await continuebttn.click();


    // Finish
    const finishbttn = page.locator("#finish");
    await finishbttn.click();


    // Thank you message
    const thnksmsg = await page
        .locator(".checkout_complete_container .complete-header")
        .textContent();

    console.log(thnksmsg);

    await expect(thnksmsg).toContain("Thank you");


    await page.pause();
});



  /*myTest("loop login", async({page, userList})=>{
    await page.goto("https://www.saucedemo.com/");
   for( const user of userList){ 
    const username = await page.locator("#user-name")
    await username.fill(user.username);
    const password = await page.locator("#password")
    await password.fill(user.password);
    const loginbtn = await page.getByRole("button", {name: "Login"})
    await loginbtn.click() 
   } 
  })*/
 myTest("loop login", async ({ page, userList }) => {

    for (const user of userList) {

        await page.goto("https://www.saucedemo.com/");

        const username = page.locator("#user-name");
        await username.fill(user.username);

        const password = page.locator("#password");
        await password.fill(user.password);

        const loginbtn = page.getByRole("button", { name: "Login" });
        await loginbtn.click();

        console.log("Logged in with:", user.username);

        // If you need to perform actions after login
        await page.getByText("Products").waitFor();

        // Logout before next user
        await page.getByRole("button", { name: "Open Menu" }).click();
        await page.getByText("Logout").click();
    }
});