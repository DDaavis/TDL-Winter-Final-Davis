import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SignInPage extends Page {
    get signInButton() { return $('#SubmitLogin'); }
    get emailInput() { return $('#email')}
    get passwordInput() { return $('#passwd')}
}

export default new SignInPage();