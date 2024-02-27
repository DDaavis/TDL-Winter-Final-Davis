import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import homePage from '../page-objects/home.page.js';
import searchPage from '../page-objects/search.page.js';

When('I search for {word}', async function(search) {
    await expect(homePage.searchBar).toBeDisplayed();
    await homePage.searchBar.waitForClickable();
    await homePage.searchBar.setValue(search);
});

When ('I press the search button', async function() {
    await expect(homePage.searchButton).toBeDisplayed();
    await homePage.searchButton.click();
});

Then('I should only see results including the {word} keyword', async function(search) {
    // Just to make sure I'm on the correct page
    await expect(searchPage.searchedItem).
    toHaveText(expect.stringContaining(search.toUpperCase()));
    
    const products = await searchPage.allProducts;
    for (let product of products) {
        const productText = await product.getText();
        await expect(productText.toLowerCase()).toContain(search.toLowerCase());
    }
});