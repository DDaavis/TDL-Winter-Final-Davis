import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {

    get signInButton() { return $('.login'); }
    get logoutButton() { return $('.header_user_info .logout'); }
    get navigationBar() { return $('.sf-menu'); }
    get searchBar() { return $('#searchbox #search_query_top'); }
    get searchButton() { return $('#searchbox .btn'); }
    // #facebook_block is only on the home page,
    // that's a nice way to verify that I'm on the home page
    get homePageFacebook() { return $('#facebook_block'); }

    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/');
    }
}

export default new HomePage();