import { browser } from '@wdio/globals';

export class Page {

    // cart and browsing item categories can be accessed from every page
    // that's why I'm using the page.js file for these functions
    get cartIconButton() { return $('a[title="View my shopping cart"]'); }
    get cartEmpty() { return $('.shopping_cart > a'); }
    get cartCount() { return $('.shopping_cart .ajax_cart_quantity'); }

    async selectMenuItem(menuItems) {
        for (const [i, menuItem] of menuItems.entries()) {
            let el;
            await browser.waitUntil(async function() {
                const elements = await $$(`.sf-menu a[title="${menuItem}"]`);
                for (const element of elements) {
                    const isDisplayed = await element.isDisplayed();
                    if (isDisplayed) {
                        el = element;
                        return true;
                    }
                }
                return false;
            });
            if (i === menuItems.length-1) {
                await el.click();
            } else {
                await el.moveTo();
            }
        }
    }
}

export default new Page();