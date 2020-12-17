const puppeteer = require('puppeteer')


module.exports = async function GetRuHTML(req){
    try{
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({
            width: 1280,
            height: 800
        })
        page.setDefaultNavigationTimeout(0)
        await page.goto("https://fips.ru/iiss/")
        await page.click('.arrow_2.top')
        await page.click("input[name='db-selection-form:dbsGrid1:0:dbsGrid1checkbox']")
        await page.click("input[name='db-selection-form:dbsGrid1:1:dbsGrid1checkbox']")
        await page.waitForSelector("input[name='db-selection-form:j_idt90']")
        await page.click("input[name='db-selection-form:j_idt90']")
        await page.waitForSelector('#j_idt89')
        await page.type('#j_idt89', req)
        await page.click("input[name='j_idt92']")
        await page.waitForSelector("a:nth-of-type(1)>div:nth-of-type(5)")

        // страница ответа

        let answers = []


        let hasPage = true
        let NumOfPage = 1
        while (hasPage) {
            for (let i = 1; i < 51; i++) {
                answers.push({
                    header: await page.$eval("a:nth-of-type(" + i + ") > div:nth-of-type(5)", el => el.innerText)
                        .catch(() => hasPage = false),
                    patentNumber: await page.$eval("a:nth-of-type(" + i + ") > div:nth-of-type(2)", el => el.innerText)
                        .catch(() => hasPage = false),
                    Database: "RUbase"
                })
            }
            console.log(NumOfPage++)
            await page.click(".modern-page-next") // переключение страницы
            if (hasPage == false) break
            await page.screenshot({ path: 'lastEupage.png' })
            await page.waitForNavigation()
            await page.waitForSelector("a:nth-of-type(1)>div:nth-of-type(5)")
        }

        answers = answers.filter((el) => el.header != false)
        answers = answers.filter((el) => el.header != false)
        // answers.forEach((el) => console.log(el))
        await browser.close()
        return answers



    }catch(err){
        console.log(err)
    }
}
