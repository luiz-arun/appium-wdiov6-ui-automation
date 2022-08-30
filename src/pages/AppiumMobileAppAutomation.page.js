const ActionHelper = require('../helpers/actionHelpers');
const chai = require('chai').should();

class AppiumMobileAppAutomation {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/AppiumMobileAppAutomation.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    landOnHomescreen() {
        ActionHelper.waitForElement(this.getObjectLocator().splashScreenSelector)

        ActionHelper.waitForEnabled(this.getObjectLocator().loginButton)
    }

}

module.exports = AppiumMobileAppAutomation;
