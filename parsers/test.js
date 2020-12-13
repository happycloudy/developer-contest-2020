const puppeteer = require('puppeteer')

try {
  (async () => {
    let req = "химический"
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto("https://fips.ru/iiss/")


    await page.click('.arrow_2.top')
    await page.click("input[name='db-selection-form:dbsGrid1:0:dbsGrid1checkbox']")
    await page.click("input[name='db-selection-form:dbsGrid1:1:dbsGrid1checkbox']")
    await page.waitForSelector("input[name='db-selection-form:j_idt110']")
    await page.click("input[name='db-selection-form:j_idt110']")
    await page.waitForNavigation()
    await page.type('#j_idt89', req)
    await page.click("input[name='j_idt92']")
    await page.waitForNavigation()
    await page.waitForSelector("a:nth-of-type(1)>div:nth-of-type(5)")
    // страница ответа

    let headers = []
    let content = await page.content()
    const $ = require('cheerio').load(content)
    let numOfPages = await page.$eval("div:nth-of-type(1) > a:nth-of-type(5) > span", el => el.innerText) //количество страниц
    let iterArr = []
    for (let i = 1; i <= numOfPages; i++) {
      iterArr[i-1] = i
    }

    for (let j of iterArr) {
      for (let i = 1; i < 51; i++) {
        headers.push( await page.$eval("a:nth-of-type("+ i +") > div:nth-of-type(5)", el => el.innerText) ) /// TODO: РЕШИТЬ ПРОБЛЕМУ С ПОСЛЕДНЕЙ СТРАНИЦЕЙ
      }
      // await page.$eval("div:nth-of-type(1) > .ui-commandlink.ui-state-disabled.ui-widget", el => )
      await page.click("[onclick='PrimeFaces\.ab\(\{s\:\"j_idt98\:j_idt109\"\,u\:\"j_idt98\"\}\)\;return false\;']") // переключение страницы
      console.log(await page.$eval("div:nth-of-type(1) > .ui-commandlink.ui-state-disabled.ui-widget", el => el.innerText) )
      await page.screenshot({ path: 'mouse_click.png' })
      await page.waitForNavigation()
      await page.waitForSelector("a:nth-of-type(1)>div:nth-of-type(5)")
    }

    headers.forEach( (el)=> console.log(el))


    await browser.close()
  })()
} catch (err) {
  console.error(err)
}