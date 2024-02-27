import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import { users } from '../test-data/users.js';
import homePage from '../page-objects/home.page.js';
import signinPage from '../page-objects/signin.page.js';
import accountPage from '../page-objects/account.page.js';
import AllureReporter from '@wdio/allure-reporter';

Given('I haven\'t logged in', async function() {
    await expect(homePage.signInButton).toBeDisplayed();
});


// Made this Given statement before doing the task, 
// turns out I didn't need it, so I just commented it :)


// Given('I have logged in as {word}', async function(name) {

//     if (!Object.keys(users).includes(name)) {
//         throw Error(`User ${name} is not recognized`);
//     };

//     if (await homePage.logoutButton.isDisplayed()) {
//         await homePage.logoutButton.click();
//     }

//     const user = users[name];
//     AllureReporter.addArgument('user', user);

//     await expect(homePage.signInButton).toBeDisplayed();
//     await homePage.signInButton.click();
//     await expect(signinPage.emailInput).toBeDisplayed();
//     await signinPage.emailInput.setValue(user.email);
//     await signinPage.passwordInput.setValue(user.password);
//     await signinPage.signInButton.click();

//     const greetText = 'Welcome to your account.'
//     await expect(accountPage.greetMessage).
//     toHaveText(expect.stringContaining(greetText));

//     // The user is automatically redirected to the profile page,
//     // so I have to open home page again
//     await homePage.open();

// });