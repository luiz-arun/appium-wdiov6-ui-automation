
class AppiumMobileAppAutomation{
    constructor() {

        this.accountMenu = '//android.widget.TextView[@content-desc="text-landing.button.login"]',
        this.splashScreenSelector = '//android.widget.TextView[@resource-id="com.moneylion.beta:id/action_bar_root"]'
    }
}

module.exports = new AppiumMobileAppAutomation();
