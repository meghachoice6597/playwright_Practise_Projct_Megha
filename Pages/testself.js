/*export class productpage {

    // Constructor is used to store locators
    constructor(page) {

        this.page = page;

        this.prdtTitle = page.locator(".inventory_item_name");

        this.myprdct = "Sauce Labs Backpack";

        this.inven_descr = page.locator(".inventory_item_description");

        this.cartbttn = page.locator(".shopping_cart_link");

        this.cartitem = page.locator(".cart_item_label .inventory_item_name");
    }

    async navigateproduct() {

        // Get all product names
        const titles = await this.prdtTitle.allTextContents();
        console.log(titles);

        // Get product count
        const count = await this.prdtTitle.count();
        console.log(count);

        // Find the required product
        for (let i = 0; i < count; i++) {

            const productName = await this.inven_descr.nth(i) .locator(".inventory_item_name") .textContent();

            if (productName === this.myprdct) {

                console.log(productName);

                await this.page
                    .locator(".inventory_item")
                    .nth(i)
                    .getByRole("button", { name: "Add to cart" })
                    .click();
            }
        }

        // Click cart
        await this.cartbttn.click();

        // Get cart item
        const cartItem = await this.cartitem.textContent();

        console.log(cartItem);
    }
}*/