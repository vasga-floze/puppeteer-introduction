const puppeteer = require('puppeteer');

describe('Interactuando con elementos', () => {

  it('Debe hacer doble click, aceptar alerta, cambiar de sitio, escribir en inputs, marcar checkbox, enviar formulario', async () => {
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: null, 
    });
    const page = await browser.newPage();
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    //click derecho
    // await page.click('#authentication > span', { button: 'right', delay: 500});
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    
    //doble click
    await page.click('#authentication > button', { clickCount: 2, delay: 500});
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    
    //escuchar cambios, como una alerta que se quiere aceptar
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });
    
    //ir a otro sitio para probar formularios
    await page.goto('https://devexpress.github.io/testcafe/example/');
    //escribir en input
    await page.type('#developer-name', 'Gabriela', { delay: 100 });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //dar clicks en inputs de tipo checkbox
    await page.click('#remote-testing');
    await page.click('#reusing-js-code');
    await page.click('#tried-test-cafe');
    //escribir en input
    await page.type('#comments', 'Esto es un humilde comentario xD', { delay: 100 });
    //click en boton
    await page.click('#submit-button');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await browser.close();
  }, 60000); // tiempo de espera 1 minuto
});