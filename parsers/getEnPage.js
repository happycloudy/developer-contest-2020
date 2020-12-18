const puppeteer = require('puppeteer')

//через номер патента ищет сам патент и вытаскивание в JSON все основное
module.exports = async function getEnPage(req){
    try{
        // req = "RE48,355"
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({
          width: 1280,
          height: 800
        })
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto("http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HIT"+
        "OFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&p=1&f=G&l=50&d=PTXT&S1="+
        req+"&OS="+req+"&RS="+req)
        await page.screenshot({ path: 'mouse_click.png' })

        // страница ответа
        await page.waitForSelector("table:nth-of-type(2) > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > b")

        let info = {
          patentNumber: await page.$eval("table:nth-of-type(2) > tbody > tr:nth-of-type(1) > td:nth-of-type(2) > b", el => el.innerText),
          country: await page.$eval("table:nth-of-type(2) > tbody > tr:nth-of-type(1) > td:nth-of-type(1) > b", el => el.innerText),
          mpk: await page.$$eval('p:nth-of-type(2) > table > tbody > tr:nth-of-type(3) > td:nth-of-type(2)', lis => lis.map(li => li.textContent)),
          application: await page.$eval("tr:nth-of-type(5) > td > b", el => el.innerText) + " "+await page.$eval("tr:nth-of-type(6) > td > b", el => el.innerText) ,
          publDate: await page.$eval("tr:nth-of-type(2) > td:nth-of-type(2) > b", el => el.innerText),
          author1: await page.$eval("table:nth-of-type(3) > tbody > tr:nth-of-type(1) > td", el=> el.innerText),
          abstract: await page.$eval("body > p:nth-of-type(1)", el => el.innerText),
          patentName: await page.$eval("body > font", el => el.innerText)
        }
        await browser.close()
        console.log(info)

        return info
    }catch(err){
        console.log(err)
    }
}
