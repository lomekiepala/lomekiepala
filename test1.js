const puppeteer = require('puppeteer');

(async () => {

const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.google.fr/maps/');
    await page.click('[jsname="higCR"]')                        //valide le bouton accepter les cookies(ou conditions d'utilisations)
    await page.waitForNavigation({waitUntil: 'networkidle0',}); //attend que la page charge totalement
  
    await page.click('[class="mapsTactileClientSettingsMain__widget-settings-button-label"]')  
//    await page.click('[class="mapsTactileClientSettingsMain__widget-settings-sub-button-label"]')
    
    
    
    await page.waitForSelector('body');          // wait for the selector to load
  const element = await page.$('body');        // declare a variable with an ElementHandle
  await element.screenshot({path: 'maptest1.png'});
})();
