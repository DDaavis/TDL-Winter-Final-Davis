import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get isInCart() { return $('#cart_title'); }
    get removeOneItem() { return $('.cart_quantity_down'); }
    get addOneItem() { return $('.cart_quantity_up'); }
    get checkoutButton() { return $('.standard-checkout'); }
    get removeFromCart() { return $('.cart_delete .cart_quantity_delete'); }
    get cartEmptyWarning() { return $('#center_column p.alert'); }
}

export default new CartPage();