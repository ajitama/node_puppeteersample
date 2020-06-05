const puppeteer = require('puppeteer-core');


(async () => {
  const browser = await puppeteer.launch({
    headless: false,  // 動作確認するためheadlessモードにしない
    slowMo: 400,  // 動作確認しやすいようにpuppeteerの操作を遅延させる
    executablePath : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', //Chromeのあるパスを指定。 
  })
  const page = await browser.newPage()

await page.setViewport({
width: 1200,
height: 4600
})
  await page.goto('https://www.yahoo.co.jp/', {waitUntil: 'domcontentloaded'})
  await page.screenshot({ 
    path: 'screenshot/sample1.png',
    clip: {"width":376,"height":1271.609375,"x":1,"y":1}
   })

  await browser.close()
})()
