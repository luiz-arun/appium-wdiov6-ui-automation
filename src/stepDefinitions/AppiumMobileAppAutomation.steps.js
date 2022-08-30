const {Given, When, Then} = require('cucumber');

const AppiumMobileAppAutomationPage = require('../pages/appiumMobileAppAutomation.page');

const appiumMobileAppAutomationPage = new AppiumMobileAppAutomationPage();

Given(/^I launch the app$/, () => {
    appiumMobileAppAutomationPage.launchApp();
});

And(/^I login$/, () => {
    landOnHomescreen.launchApp();
});