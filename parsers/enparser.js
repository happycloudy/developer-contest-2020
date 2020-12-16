const puppeteer = require('puppeteer')


module.exports = async function GetRuHTML(req){
    try{
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({
            width: 1280,
            height: 800
        })
        let link = "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=0&f=S&l=50&d=PTXT&RS=chemical&Refine=Refine+Search&Query=chemical+OR+reactions"
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

        await browser.close()

    }catch(err){
        console.log(err)
    }
}