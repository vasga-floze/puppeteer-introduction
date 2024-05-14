const puppeteer = require('puppeteer');

describe('Mi primer test en puppeteer', () => {
  it('Debe abrir y cerrar el navegador', async () => {
    const browser = await puppeteer.launch({ 
        headless: false,  //sin la interfaz del navegador o con la interfaz
        defaultViewport: null, // maximiza el viewport de la página al tamaño de la ventana que se ha pasado por args
    });
    const page = await browser.newPage();
    await page.goto('https://www.github.com/');
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('img');
    //recargar la pagina
    await page.reload();
    await page.waitForSelector('img');
    //navegar a otro sitio
    await page.goto('https://www.platzi.com/');
    await page.waitForSelector('body > main > header > div > figure > svg > g > path:nth-child(2)');
    //navegar hacia atras
    await page.goBack();
    //navegar hacia adelante
    await page.goForward();

    await browser.close();
  }, 120000); // Aumenta el tiempo de espera a 2 minutos
});