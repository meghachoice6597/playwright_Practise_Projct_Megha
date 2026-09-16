# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: First.spec.js >> First Test
- Location: tests\First.spec.js:3:5

# Error details

```
TypeError: page.goto is not a function
```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | // create a test ( title, function)
  3  | test("First Test", async({browser})=>{     // here browser is a fixture, we can use it to create a new context and page
  4  | const context = await browser.newContext();  // need in all test
  5  | const page =  context.newPage();  // need in all test
> 6  | await page.goto("https://www.google.com/");  // navigate to google.com    
     |            ^ TypeError: page.goto is not a function
  7  | })
  8  | 
  9  | 
  10 | 
```