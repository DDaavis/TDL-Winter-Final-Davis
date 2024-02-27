import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get checkoutButton() { return $('.icon-chevron-right'); }
    get productOpenedConfirm() { return $('#bigpic'); }
    get itemInStock() { return $('#availability_value'); }
    get itemIsInStock() { return $('.label-success'); }
    get sizeDropdown() { return $('#uniform-group_1'); }
    get addToCart() { return $('#add_to_cart button'); }
    get addtoCartPopup() { return $('#layer_cart[style*="display: block;"] a[title="Proceed to checkout"]'); }
    get popupClose() { return $('#layer_cart[style*="display: block;"] .cross'); }
}

export default new ProductPage();