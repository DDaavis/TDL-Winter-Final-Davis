import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchPage extends Page {
    get searchedItem() { return $('.page-heading .lighter'); }
    get allProducts() { return $$('.product_list a.product-name[title]'); }
}

export default new SearchPage();