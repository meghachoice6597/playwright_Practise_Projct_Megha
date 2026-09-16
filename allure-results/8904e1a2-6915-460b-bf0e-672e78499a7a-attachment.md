# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoPrjct.spec.js >> swagdemo with fixture
- Location: tests\DemoPrjct.spec.js:46:15

# Error details

```
Error: Playwright Test did not expect test() to be called here.
Most common reasons include:
- You are calling test() in a configuration file.
- You are calling test() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
- You are calling test() from an async test.describe() block. Only sync ones are supported.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [aria-hidden] [ref=e10]:
              - navigation [ref=e12]:
                - button [ref=e13] [cursor=pointer]: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - button [ref=e15] [cursor=pointer]: Logout
                - button [ref=e16] [cursor=pointer]: Reset App State
              - button [ref=e18] [cursor=pointer]: Close Menu
        - generic [ref=e20]: Swag Labs
        - button "Cart, empty" [ref=e23]
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox "Sort products" [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e30]:
      - generic [ref=e33]:
        - generic [ref=e34]:
          - button "View details for Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e37]
          - generic [ref=e38]:
            - generic [ref=e39]:
              - button "View details for Sauce Labs Backpack" [ref=e40] [cursor=pointer]:
                - generic [ref=e41]: Sauce Labs Backpack
              - generic [ref=e42]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e43]:
              - generic [ref=e44]: $29.99
              - button "Add to cart" [ref=e45] [cursor=pointer]
        - generic [ref=e46]:
          - button "View details for Sauce Labs Bike Light" [ref=e48] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e49]
          - generic [ref=e50]:
            - generic [ref=e51]:
              - button "View details for Sauce Labs Bike Light" [ref=e52] [cursor=pointer]:
                - generic [ref=e53]: Sauce Labs Bike Light
              - generic [ref=e54]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e55]:
              - generic [ref=e56]: $9.99
              - button "Add to cart" [ref=e57] [cursor=pointer]
        - generic [ref=e58]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e60] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e61]
          - generic [ref=e62]:
            - generic [ref=e63]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e64] [cursor=pointer]:
                - generic [ref=e65]: Sauce Labs Bolt T-Shirt
              - generic [ref=e66]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e67]:
              - generic [ref=e68]: $15.99
              - button "Add to cart" [ref=e69] [cursor=pointer]
        - generic [ref=e70]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e72] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e73]
          - generic [ref=e74]:
            - generic [ref=e75]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e76] [cursor=pointer]:
                - generic [ref=e77]: Sauce Labs Fleece Jacket
              - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e79]:
              - generic [ref=e80]: $49.99
              - button "Add to cart" [ref=e81] [cursor=pointer]
        - generic [ref=e82]:
          - button "View details for Sauce Labs Onesie" [ref=e84] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=e85]
          - generic [ref=e86]:
            - generic [ref=e87]:
              - button "View details for Sauce Labs Onesie" [ref=e88] [cursor=pointer]:
                - generic [ref=e89]: Sauce Labs Onesie
              - generic [ref=e90]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e91]:
              - generic [ref=e92]: $7.99
              - button "Add to cart" [ref=e93] [cursor=pointer]
        - generic [ref=e94]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e96] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e97]
          - generic [ref=e98]:
            - generic [ref=e99]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e100] [cursor=pointer]:
                - generic [ref=e101]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e102]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e103]:
              - generic [ref=e104]: $15.99
              - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "Twitter" [ref=e109] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | import {test, expect} from "@playwright/test"
  2   | import {customTest} from "../Utils/testBase"
  3   | test.skip("swagdemo", async({page})=>{
  4   |     await page.goto("https://www.saucedemo.com/");
  5   |     
  6   |     const username = await page.locator("#user-name")
  7   |     await username.fill("standard_user");
  8   |     const password = await page.locator("#password")
  9   |     await password.fill("secret_sauce");
  10  |     const loginbtn = await page.getByRole("button", {name: "Login"})
  11  |     await loginbtn.click()
  12  | 
  13  |     const prdtTitle = page.locator(".inventory_item_name ")
  14  |     const titles = await prdtTitle.allTextContents()  //for getting multiple text contents
  15  |     console.log(titles)
  16  | 
  17  |     const myprdct = 'Sauce Labs Backpack'
  18  |     const count = await prdtTitle.count()
  19  |     console.log(count)
  20  |     const inven_descr = await page.locator(".inventory_item_description")
  21  |     for(let i=0;i<count;i++)
  22  |         {
  23  |         if(await inven_descr.locator(".inventory_item_name ").nth(i).textContent()===myprdct){
  24  |             console.log(await inven_descr.locator(".inventory_item_name ").nth(i).textContent())
  25  |             const addcart_btn = await page.getByText("Add to cart").nth(i).click()
  26  |             //const cartbttn = await page.locator(".shopping_cart_badge").click();
  27  |             
  28  |         }
  29  |         }
  30  |       const cartbttn = await page.locator(".shopping_cart_link").click()
  31  |       const cartitem = await page.locator(".cart_item_label .inventory_item_name").textContent()
  32  |       console.log(cartitem);
  33  |       await expect(cartitem).toContain(myprdct);
  34  |       const checkoutbttn = await page.locator("#checkout").click();
  35  |       const firstname = await page.locator("#first-name").fill("megha");
  36  |       const lastname = await page.locator("#last-name").fill("saji");
  37  |       const zip = await page.locator("#postal-code").fill("1234");
  38  |       const continuebttn = await page.locator("#continue").click();
  39  |       const finishbttn = await page.locator("#finish").click();
  40  |       const thnksmsg = await page.locator(".checkout_complete_container .complete-header").textContent()
  41  |       console.log(thnksmsg);
  42  |       await expect(thnksmsg).toContain("Thank you");
  43  |     await page.pause();
  44  | })
  45  | 
  46  |     customTest("swagdemo with fixture", async({page, loginFixture})=>{
  47  |     await page.goto("https://www.saucedemo.com/");
  48  |     
  49  |     const username = await page.locator("#user-name")
  50  |     await username.fill(loginFixture.username);
  51  |     const password = await page.locator("#password")
  52  |     await password.fill(loginFixture.password);
  53  |     const loginbtn = await page.getByRole("button", {name: "Login"})
  54  |     await loginbtn.click()
  55  | 
  56  | 
  57  | 
> 58  | customTest("swagdemo with fixture", async ({ page, loginFixture }) => {
      |           ^ Error: Playwright Test did not expect test() to be called here.
  59  | 
  60  |     await page.goto("https://www.saucedemo.com/");
  61  | 
  62  |   // Product list
  63  |     const prdtTitle = page.locator(".inventory_item_name");
  64  | 
  65  |     const titles = await prdtTitle.allTextContents();
  66  |     console.log(titles);
  67  | 
  68  |     // Product from fixture
  69  |     const myprdct = loginFixture.myprdct;
  70  | 
  71  |     const count = await prdtTitle.count();
  72  |     console.log(count);
  73  | 
  74  | 
  75  |     // Find product and add to cart
  76  |     const inven_descr = page.locator(".inventory_item_description");
  77  | 
  78  |     for (let i = 0; i < count; i++) {
  79  | 
  80  |         const productName = await inven_descr
  81  |             .locator(".inventory_item_name")
  82  |             .nth(i)
  83  |             .textContent();
  84  | 
  85  |         if (productName?.trim() === myprdct) {
  86  | 
  87  |             console.log(productName);
  88  | 
  89  |             const addcart_btn = page.getByText("Add to cart").nth(i);
  90  | 
  91  |             await addcart_btn.click();
  92  | 
  93  |             break;
  94  |         }
  95  |     }
  96  | 
  97  | 
  98  |     // Cart
  99  |     const cartbttn = page.locator(".shopping_cart_link");
  100 |     await cartbttn.click();
  101 | 
  102 |     const cartitem = page.locator(
  103 |         ".cart_item_label .inventory_item_name"
  104 |     );
  105 | 
  106 |     const cartItemText = await cartitem.textContent();
  107 | 
  108 |     console.log(cartItemText);
  109 | 
  110 |     await expect(cartItemText).toContain(myprdct);
  111 | 
  112 | 
  113 |     // Checkout
  114 |     await page.locator("#checkout").click();
  115 | 
  116 | 
  117 |     // Customer details from fixture
  118 |     const firstname = page.locator("#first-name");
  119 |     await firstname.fill(loginFixture.firstname);
  120 | 
  121 |     const lastname = page.locator("#last-name");
  122 |     await lastname.fill(loginFixture.lastname);
  123 | 
  124 |     const zip = page.locator("#postal-code");
  125 |     await zip.fill(loginFixture.zip);
  126 | 
  127 | 
  128 |     // Continue
  129 |     const continuebttn = page.locator("#continue");
  130 |     await continuebttn.click();
  131 | 
  132 | 
  133 |     // Finish
  134 |     const finishbttn = page.locator("#finish");
  135 |     await finishbttn.click();
  136 | 
  137 | 
  138 |     // Thank you message
  139 |     const thnksmsg = await page
  140 |         .locator(".checkout_complete_container .complete-header")
  141 |         .textContent();
  142 | 
  143 |     console.log(thnksmsg);
  144 | 
  145 |     await expect(thnksmsg).toContain("Thank you");
  146 | 
  147 | 
  148 |     await page.pause();
  149 | });
  150 | 
  151 |     })
  152 | 
```