import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import { parseMenuExpression } from '../utils/utils.js';
import page from '../page-objects/page.js';

Given ('I am on the home page', async function() {
    await homePage.open();
    await expect(homePage.homePageFacebook).toBeDisplayed();
});

When('I select {string} menu item', async function(menuExpression) {
    await expect(homePage.navigationBar).toBeDisplayed();
    await homePage.navigationBar.waitForClickable();
    const menuItems = parseMenuExpression(menuExpression);
    await page.selectMenuItem(menuItems);
});
