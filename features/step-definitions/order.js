import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import browsePage from '../page-objects/browse.page.js';
import productPage from '../page-objects/product.page.js';

When('I select the {string} filter', async function(filterApplied) {

    await expect(browsePage.filterSidePanel).toBeDisplayed();

    // Currently only checking the in stock filter
    if (filterApplied == 'In stock') {
        await browsePage.inStockCheckbox.click();
    } else {
        throw Error(`Cannot apply the ${filterApplied} filter. Only 'In stock' supported.`)
    }

});

When('I choose the first product', async function() {
    await expect (browsePage.allProducts).toBeDisplayed();
    await browsePage.allProducts[0].click();
    await expect (productPage.productOpenedConfirm).toBeDisplayed();
});

When('I search for a size that is in stock', async function() {

    const notInStock = "This product is no longer in stock with those attributes but is available with others.";
    let index = 1;
    // This loop is for checking if item is in stock, if not, the size gets changed
    // until a size that the item is in stock with is found
    while (await productPage.itemInStock.getText() === notInStock) {
        // REVIEW: I wouldn't be so sure about indexes.
        // Better to fetch all available size options and see check the count.
        if (index > 3) { // maximum index is 3, no need to go futher
            throw Error('No items are in stock!'); 
        };
        // changing the dropdown value to index value
        await expect(productPage.sizeDropdown).toBeDisplayed();
        await productPage.sizeDropdown.waitForClickable();
        await productPage.sizeDropdown.click();
        const dropDownItem = await $(`#uniform-group_1 option[value="${index}"]`);
        await dropDownItem.click();
        index++;
    };
});

When('I add the item to cart', async function() {
    await expect(productPage.itemIsInStock).toBeDisplayed();
    await productPage.addToCart.click();
});

