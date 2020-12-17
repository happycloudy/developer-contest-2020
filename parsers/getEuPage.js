const puppeteer = require('puppeteer')


module.exports = async function GetEnHTML(req){
    try{
        req = "https://worldwide.espacenet.com//publicationDetails/biblio?II=23&ND=3&adjacent=true&locale=en_EP&FT=D&date=20200807&CC=CN&NR=111500974A&KC=A"
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.setViewport({
            width: 1280,
            height: 800
        })

        // await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
        await page.goto(req)
        await page.screenshot({
            path: 'mouse_click.png'
        })

        // страница ответа
        await page.waitForSelector(".noBottomMargin")

        let info = {
            patentNumber: await page.$eval(".noBottomMargin", el => {
                let len = el.innerText.length
                return el.innerText.substr(20,len-5).trim()
            }),
            country: await page.$eval(".noBottomMargin", el => el.innerText.substr(20,2)),
            mpk: await page.$$eval('i b', lis => lis.map(li => li.textContent)),
            application: await page.$eval(".tableType3 tr:nth-of-type(6) td", el => el.innerText) ,
            publDate: await page.$eval("div#pagebody > .noBottomMargin", el => el.innerText.substr(-5,8)),
            author1: await page.$eval("span#inventors", el => el.innerText),
            abstract: await page.$eval(".printAbstract", el => el.innerText)
        }

        console.log(info)


        await page.screenshot({path: 'EuPage.png'})
        await browser.close()
        // return info
    }catch(err){
        console.log(err)
    }
}()