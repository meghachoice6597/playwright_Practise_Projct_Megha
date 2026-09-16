# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoPrjct.spec.js >> loop login
- Location: tests\DemoPrjct.spec.js:162:8

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Products') to be visible

```

# Test source

```ts
  80  |             .nth(i)
  81  |             .textContent();
  82  | 
  83  |         if (productName?.trim() === myprdct) {
  84  | 
  85  |             console.log(productName);
  86  | 
  87  |             const addcart_btn = page.getByText("Add to cart").nth(i);
  88  | 
  89  |             await addcart_btn.click();
  90  | 
  91  |             break;
  92  |         }
  93  |     }
  94  | 
  95  | 
  96  |     // Cart
  97  |     const cartbttn = page.locator(".shopping_cart_link");
  98  |     await cartbttn.click();
  99  | 
  100 |     const cartitem = page.locator(
  101 |         ".cart_item_label .inventory_item_name"
  102 |     );
  103 | 
  104 |     const cartItemText = await cartitem.textContent();
  105 | 
  106 |     console.log(cartItemText);
  107 | 
  108 |     await expect(cartItemText).toContain(myprdct);
  109 | 
  110 | 
  111 |     // Checkout
  112 |     await page.locator("#checkout").click();
  113 | 
  114 | 
  115 |     // Customer details from fixture
  116 |     const firstname = page.locator("#first-name");
  117 |     await firstname.fill(loginFixture.firstname);
  118 | 
  119 |     const lastname = page.locator("#last-name");
  120 |     await lastname.fill(loginFixture.lastname);
  121 | 
  122 |     const zip = page.locator("#postal-code");
  123 |     await zip.fill(loginFixture.zip);
  124 | 
  125 | 
  126 |     // Continue
  127 |     const continuebttn = page.locator("#continue");
  128 |     await continuebttn.click();
  129 | 
  130 | 
  131 |     // Finish
  132 |     const finishbttn = page.locator("#finish");
  133 |     await finishbttn.click();
  134 | 
  135 | 
  136 |     // Thank you message
  137 |     const thnksmsg = await page
  138 |         .locator(".checkout_complete_container .complete-header")
  139 |         .textContent();
  140 | 
  141 |     console.log(thnksmsg);
  142 | 
  143 |     await expect(thnksmsg).toContain("Thank you");
  144 | 
  145 | 
  146 |     await page.pause();
  147 | });
  148 | 
  149 | 
  150 | 
  151 |   /*myTest("loop login", async({page, userList})=>{
  152 |     await page.goto("https://www.saucedemo.com/");
  153 |    for( const user of userList){ 
  154 |     const username = await page.locator("#user-name")
  155 |     await username.fill(user.username);
  156 |     const password = await page.locator("#password")
  157 |     await password.fill(user.password);
  158 |     const loginbtn = await page.getByRole("button", {name: "Login"})
  159 |     await loginbtn.click() 
  160 |    } 
  161 |   })*/
  162 |  myTest("loop login", async ({ page, userList }) => {
  163 | 
  164 |     for (const user of userList) {
  165 | 
  166 |         await page.goto("https://www.saucedemo.com/");
  167 | 
  168 |         const username = page.locator("#user-name");
  169 |         await username.fill(user.username);
  170 | 
  171 |         const password = page.locator("#password");
  172 |         await password.fill(user.password);
  173 | 
  174 |         const loginbtn = page.getByRole("button", { name: "Login" });
  175 |         await loginbtn.click();
  176 | 
  177 |         console.log("Logged in with:", user.username);
  178 | 
  179 |         // If you need to perform actions after login
> 180 |         await page.getByText("Products").waitFor();
      |                                          ^ Error: locator.waitFor: Target page, context or browser has been closed
  181 | 
  182 |         // Logout before next user
  183 |         await page.getByRole("button", { name: "Open Menu" }).click();
  184 |         await page.getByText("Logout").click();
  185 |     }
  186 | });
```