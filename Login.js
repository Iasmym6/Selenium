const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const service = () =>
chrome.setDefaultService(new chrome.serviceBuilder(chromedriver.path).build());


async function run(){
let driver = await new Builder().forBrowser('chrome').build();
await driver.get(' https://www.saucedemo.com/ ');
await driver.findElement(By.id('user-name')).sendKeys('standard_user');
await driver.findElement(By.id('password')).sendKeys('secret_sauce',Key.ENTER);


//await driver.quit();

}


run();



