const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const service = () =>
chrome.setDefaultService(new chrome.serviceBuilder(chromedriver.path).build());


async function run(){
let driver = await new Builder().forBrowser('chrome').build();
await driver.get(' https://the-internet.herokuapp.com/');
await driver.findElement(By.linkText('A/B Testing')).click();

}


run();
