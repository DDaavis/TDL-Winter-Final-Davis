import { Page } from './page.js';
import { browser } from '@wdio/globals';

class BrowsePage extends Page {
    get inStockCheckbox() { return $('#layered_form #ul_layered_quantity_0 .checkbox'); }
    get filterSidePanel() { return $('#layered_block_left'); }
    get allProducts() { return $$('ul.product_list > li .product-name'); }
}

export default new BrowsePage();