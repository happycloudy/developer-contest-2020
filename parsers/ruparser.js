const e = require('express');
const puppeteer = require('puppeteer')

module.exports = async function GetRuHTML(req){
    try{
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
        await page.waitForSelector("input[name='db-selection-form:j_idt110']")
        await page.click("input[name='db-selection-form:j_idt110']")
        await page.goto("https://fips.ru/iiss/search.xhtml")
        await page.type('#j_idt89', 'химический')
        await page.click("input[name='j_idt92']")
        await page.waitForNavigation()

        await page.screenshot({
            path: 'mouse_click.png'
        })

        await browser.close()
        


    }catch(err){
        console.log(err)
    }
}
