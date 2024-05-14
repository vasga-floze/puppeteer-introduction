const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
  it('Debe abrir y cerrar el navegador', async () => {
    const browser = await puppeteer.launch({ 
        headless: false,  //sin la interfaz del navegador o con la interfaz
        defaultViewport: null, // maximiza el viewport de la página al tamaño de la ventana que se ha pasado por args
    });
    const page = await browser.newPage();
    await page.goto('https://www.yahoo.com/');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('img');

    await page.reload();

    await browser.close();
  }, 60000); // Aumenta el tiempo de espera a 60 segundos
});