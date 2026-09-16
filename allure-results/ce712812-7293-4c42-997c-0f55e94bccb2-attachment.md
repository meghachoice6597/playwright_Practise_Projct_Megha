# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowpop.spec.js >> alertmodalself
- Location: tests\windowpop.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Window Popup1' })

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - banner [ref=f1e2]:
    - link [ref=f1e8] [cursor=pointer]:
      - /url: index.php
      - img "logo" [ref=f1e9]
    - navigation [ref=f1e14]:
      - list [ref=f1e16]:
        - listitem [ref=f1e17]:
          - link "Home" [ref=f1e18] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=f1e19]:
          - link "Input Form" [ref=f1e20] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=f1e21]:
          - link "Date Pickers" [ref=f1e22] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=f1e23]:
          - link "Table" [ref=f1e24] [cursor=pointer]:
            - /url: table-pagination.php
        - listitem [ref=f1e25]:
          - link "Progress Bars" [ref=f1e26] [cursor=pointer]:
            - /url: jquery-progress-bar.php
        - listitem [ref=f1e27]:
          - link "Alerts and Modals" [ref=f1e28] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=f1e29]:
          - link "List Box" [ref=f1e30] [cursor=pointer]:
            - /url: bootstrap-dual-list.php
        - listitem [ref=f1e31]:
          - link "Others" [ref=f1e32] [cursor=pointer]:
            - /url: drag-drop.php
  - generic [ref=f1e35]:
    - generic [ref=f1e38]:
      - generic [ref=f1e39]: Menu
      - list [ref=f1e40]:
        - listitem [ref=f1e41]:
          - link "Bootstrap Alert" [ref=f1e42] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=f1e43]:
          - link "Bootstrap Modal" [ref=f1e44] [cursor=pointer]:
            - /url: bootstrap-modal.php
        - listitem [ref=f1e45]:
          - link "Window Popup" [ref=f1e46] [cursor=pointer]:
            - /url: window-popup.php
        - listitem [ref=f1e47]:
          - link "Progress Bar Modal" [ref=f1e48] [cursor=pointer]:
            - /url: bootstrap-modal-progress.php
        - listitem [ref=f1e49]:
          - link "Javascript Alert" [ref=f1e50] [cursor=pointer]:
            - /url: javascript-alert.php
        - listitem [ref=f1e51]:
          - link "File Download" [ref=f1e52] [cursor=pointer]:
            - /url: file-download.php
    - generic [ref=f1e55]:
      - generic [ref=f1e56]: Bootstrap Alert
      - generic [ref=f1e59]:
        - button "Autoclosable success" [ref=f1e60] [cursor=pointer]
        - button "Normal success" [ref=f1e61] [cursor=pointer]
        - button "Autoclosable warning" [ref=f1e62] [cursor=pointer]
        - button "Normal warning" [ref=f1e63] [cursor=pointer]
        - button "Autoclosable danger" [ref=f1e64] [cursor=pointer]
        - button "Normal danger" [ref=f1e65] [cursor=pointer]
        - button "Autoclosable info" [ref=f1e66] [cursor=pointer]
        - button "Normal info" [ref=f1e67] [cursor=pointer]
  - contentinfo [ref=f1e69]:
    - paragraph [ref=f1e72]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | //17-08-2026 - Monday
  2  | import test, {expect } from "@playwright/test"
  3  | test("alertmodalself", async ({ page, context }) => {
  4  |     await page.goto("https://selenium.qabible.in/index.php");
  5  |     const alertmodal= page.getByRole("link",{name : "Alerts and Modals"})  //link - href
  6  |     await alertmodal.click();
  7  |     const windowpop = page.getByRole("link", {name : "Window Popup1"})
> 8  |     await windowpop.click();
     |                     ^ Error: locator.click: Test timeout of 40000ms exceeded.
  9  |     console.log(await page.title())
  10 |     const likeFB = page.getByRole("link", {name : "Like us On Facebook "})
  11 |    // promise.all - handle multiple event at a time
  12 |     const [newchild] = await Promise.all([
  13 |         context.waitForEvent("page"), await likeFB.click()
  14 |     ])
  15 |     await newchild.waitForLoadState()  //for loading the page
  16 |     console.log(await newchild.title())
  17 | 
  18 |     await newchild.locator("#_r_5_").fill("megha")
  19 |     await newchild.close();
  20 |     await page.close();
  21 |     await page.pause();
  22 | 
  23 | })
```