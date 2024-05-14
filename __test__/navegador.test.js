const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
  it('Debe abrir y cerrar el navegador', async () => {
    const browser = await puppeteer.launch({ 
        headless: false,  //sin la interfaz del navegador o con la interfaz
        slowMo: 0, //verlo como en camara lenta por pasos
        devtools: false, //abrir herramientas de desarrollador
        // defaultViewport es un objeto con las dimensioens del viewport
        // defaultViewport: {
        //     width: 2100,
        //     height: 1080,
        // },
        // args: [ '--window-size=1920,1080'], // tamaño de la ventana por args
        defaultViewport: null, // maximiza el viewport de la página al tamaño de la ventana que se ha pasado por args
    });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/');
    await browser.close();
  }, 60000); // Aumenta el tiempo de espera a 60 segundos
});