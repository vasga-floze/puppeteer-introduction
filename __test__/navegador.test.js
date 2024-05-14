const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
  it('Debe abrir y cerrar el navegador', async () => {
    const browser = await puppeteer.launch({ 
        headless: false,  //sin la interfaz del navegador o con la interfaz
    });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/');
    await browser.close();
  }, 60000); // Aumenta el tiempo de espera a 60 segundos
});