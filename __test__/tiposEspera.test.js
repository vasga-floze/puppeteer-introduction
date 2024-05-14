const puppeteer = require('puppeteer');

describe('Tipos de espera', () => {

  it('Mostrar todos los diferentes tipos de espera', async () => {
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: null, 
        args: ['--start-maximized'], //ejecuta navegador en pantalla completa
    });
    const page = await browser.newPage();
    
    //espera hasta que la pagina termina de cargar
    await page.goto('https://platzi.com', {waitUntil: 'networkidle2'});

    // //espera explicita
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    
    // // espera por un selector    
    // await page.waitForSelector('body > main > header > div > figure > svg > g > path:nth-child(2)');
    
    // // espera por un xpath usando una pseudo-clase ('::-p-xpath(...)')
    // const element = await page.waitForSelector('::-p-xpath(/html/body/main/header/div)');
    
    //
    await page.goto('https://demoqa.com/modal-dialogs', {waitUntil: 'networkidle2'});
    await page.waitForSelector('#showSmallModal', { visible: true });
    await page.click('#showSmallModal');
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await browser.close();
  }, 60000); // tiempo de espera 1 minuto
});