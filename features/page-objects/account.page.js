import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AccountPage extends Page {
    get greetMessage() { return $('.info-account'); }
}

export default new AccountPage();