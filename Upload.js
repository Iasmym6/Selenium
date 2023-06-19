const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const path = require('path');

const service = () =>
chrome.setDefaultService(new chrome.serviceBuilder(chromedriver.path).build());


async function run(){
let driver = await new Builder().forBrowser('chrome').build();
await driver.get(' https://the-internet.herokuapp.com/');
await driver.findElement(By.linkText('File Upload')).click();
const inputFile = await driver.findElement(By.css('input[type="file"]'));
const caminhoArquivo = path.resolve('C:\\Users\\iasmy\\IntroducaoLogica\\Teste\\oi.txt');
await inputFile.sendKeys('C:\\Users\\iasmy\\IntroducaoLogica\\Teste\\oi.txt');

const buttonElement=await driver.findElement(By.className('button'));
await driver.sleep(3000);
await buttonElement.click();

}


run();
