import { Page } from './page.js';
import { browser } from '@wdio/globals';

class BrowsePage extends Page {
    // get filterInStock() { return $('#layered_form #ul_layered_quantity_0 a'); }
    get inStockCheckbox() { return $('#layered_form #ul_layered_quantity_0 .checkbox'); }
    get filterSidePanel() { return $('#layered_block_left'); }
    // I want to select only the first product - this is not a beautiful selector, but is unique
    get firstProduct() { return $('ul.product_list .ajax_block_product:first-child .product-name'); }
}

export default new BrowsePage();