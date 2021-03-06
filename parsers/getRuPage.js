const puppeteer = require('puppeteer')

//через номер патента ищет сам патент и вытаскивание в JSON все основное
module.exports = async function getRuPage(req){
    try{
        // let req = "2588239"
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({
          width: 1280,
          height: 800
        })
        await page.goto("https://fips.ru/iiss/")
        await page.click('.arrow_2.top')
        await page.click("input[name='db-selection-form:dbsGrid1:0:dbsGrid1checkbox']")
        await page.click("input[name='db-selection-form:dbsGrid1:1:dbsGrid1checkbox']")
        await page.waitForSelector("input[name='db-selection-form:j_idt90']")
        await page.click("input[name='db-selection-form:j_idt90']")
        await page.waitForNavigation()
        await page.type("input[name='fields:1:j_idt109']", req)
        await page.click("input[name='j_idt92']")
        await page.waitForNavigation()
        await page.waitForSelector("a:nth-of-type(1)>div:nth-of-type(5)")
        let info = {}
        await page.click("[href] .td:nth-of-type(5)")

        // страница ответа
        await page.waitForSelector("#mainDoc .tp:nth-child(2) tr:nth-of-type(1) [target]")

        info = {
          patentNumber: await page.$eval("#mainDoc .tp:nth-child(2) tr:nth-of-type(1) [target]", el => el.innerText.replace(/\s+/g, '')),
          country: await page.$eval("td:nth-of-type(2) > div:nth-of-type(2)", el => el.innerText),
          mpk: await page.$$eval('.ipc>li', lis => lis.map(li => li.textContent)),
          application: await page.$eval("td:nth-of-type(1) > p:nth-of-type(1) > b", el => el.innerText),
          author1: await page.$$eval("td#bibl > p:nth-of-type(1) > b", els => els.map( el => el.textContent )),
          author2: await page.$$eval("td#bibl > p:nth-of-type(2) > b", els => els.map( el => el.textContent )),
          abstract: await page.$eval("#Abs p:nth-of-type(2)", el => el.innerText)
        }
        await page.goBack()
        await page.screenshot({ path: 'screenNow.png' })
        info.patentName = await page.$eval("[href] .td:nth-of-type(5)", el => el.innerText)
        info.publDate = await page.$eval("[href] .td:nth-of-type(3)", el => el.innerText)
        await browser.close()
        //console.log(info)
        return info
    }catch(err){
        console.log(err)
    }
}
