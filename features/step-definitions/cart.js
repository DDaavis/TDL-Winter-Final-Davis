import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import signinPage from '../page-objects/signin.page.js';
import cartPage from '../page-objects/cart.page.js';
import productPage from '../page-objects/product.page.js';
import homePage from '../page-objects/home.page.js';
import browsePage from '../page-objects/browse.page.js';
import page from '../page-objects/page.js';
import { parseMenuExpression } from '../utils/utils.js'
import { browser } from '@wdio/globals';

Given('I have no items in cart', async function() {
    await expect(page.cartEmpty).toBeDisplayed();
    const empty = 'empty'
    await expect(cartPage.cartEmpty).
    toHaveText(expect.stringContaining(empty));
});

When('I go to cart by pressing {string}', async function(cartButton) {

    if (cartButton === 'Proceed to checkout') {
        await expect(productPage.addtoCartPopup).toBeDisplayed();
        await productPage.addtoCartPopup.waitForClickable();
        await productPage.addtoCartPopup.click();
    } 

    else if (cartButton === 'Cart icon') {
        await expect(page.cartIconButton).toBeDisplayed();
        await page.cartIconButton.click();
    } 

    else {
        throw Error(`Cannot enter cart with ${cartButton} button.`);
    };
    
});

When('I press Proceed to checkout', async function() {
    await cartPage.checkoutButton.click();
});

When("I add an item to cart {int} times", async function(count) {

    // Navigating to the dresses section
    await expect(homePage.navigationBar).toBeDisplayed();
    await homePage.navigationBar.waitForClickable();
    const menuItems = parseMenuExpression('Women -> Dresses');
    await page.selectMenuItem(menuItems);
    // Selecting the 'In stock' filter
    await expect(browsePage.filterSidePanel).toBeDisplayed();
    await browsePage.inStockCheckbox.click();
    // Selecting the first item
    await expect (browsePage.allProducts).toBeDisplayed();
    await browsePage.allProducts[0].click();
    await expect (productPage.productOpenedConfirm).toBeDisplayed();
    // Selecting a size that is in stock
    const notInStock = "This product is no longer in stock with those attributes but is available with others.";
    let index = 1;
    while (await productPage.itemInStock.getText() === notInStock) {
        if (index > 3) { throw Error('No items are in stock!'); }
        await expect(productPage.sizeDropdown).toBeDisplayed();
        await productPage.sizeDropdown.waitForClickable();
        await productPage.sizeDropdown.click();
        const dropDownItem = await $(`#uniform-group_1 option[value="${index}"]`);
        await dropDownItem.click();
        index++;
    };

    // Adding the item to cart n times
    // I'm not sure if this is good practice, but it works.
    await expect(productPage.itemIsInStock).toBeDisplayed();
    for (let n = 0; n < count; n++) {
        await productPage.addToCart.waitForClickable();
        await productPage.addToCart.click();
        await expect(productPage.popupClose).toBeDisplayed();
        await productPage.popupClose.waitForClickable();
        await productPage.popupClose.click();
    }
});

When('I remove the item from cart', async function() {
    await expect(cartPage.removeFromCart).toBeDisplayed();
    await cartPage.removeFromCart.click();
});

Then('I am required to log in', async function () {
    await expect(signinPage.emailInput).toBeDisplayed();
});

Then ('I should see {int} items in cart',async function(count) {
    count = '' + count;
    await expect(page.cartCount).toBeDisplayed();
    await expect(page.cartCount).
    toHaveText(expect.stringContaining(count));
});

Then('The cart is empty', async function() {
    const warningMessage = 'Your shopping cart is empty';
    await expect(cartPage.cartEmptyWarning).toBeDisplayed();
    await expect(cartPage.cartEmptyWarning).
    toHaveText(expect.stringContaining(warningMessage));
});