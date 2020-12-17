const puppeteer = require('puppeteer')


module.exports = async function GetRuHTML(req){
    try{
    req = "atmosphere method cleaning".split(" ").join("+AND+")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
        width: 1280,
        height: 800
    })


    let link = "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect" +
        "2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=0&f=S&l=50&d=PTXT&RS=TTL%2Fatmosphere+AND+ABST%2Fmethod&Refine=Refine+Search&" +
        "Query=TTL%2F" + req
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
    await page.goto(link).catch(() => console.log("Promise catch"))
    await page.waitForSelector("tr:nth-of-type(2) > td:nth-of-type(4) > a")
    // страница ответа
    let headers = []
    let havePage = true
    let key = 2
    while (havePage) {
        await page.waitForSelector("tr:nth-of-type(2) > td:nth-of-type(4) > a")
        for (let i = 2; i <= 51; i++) {
            headers.push({
                header: await page.$eval("tr:nth-of-type(" + i + ") > td:nth-of-type(4) > a", el => el.innerText).catch(() => havePage = false),
                patentNumber: await page.$eval("tr:nth-of-type(" + i + ") > td:nth-of-type(2) > a", el => el.innerText).catch(() => havePage = false),
                Database: "USbase"
            })
        }
        await page.click("form[name='srchForm'] > input[name='NextList" + key + "']").catch(() => havePage = false)
        await page.waitForSelector("form[name='srchForm'] > input[name='NextList" + key + "']").catch(() => console.log("Promise rejected on wait"))
        key++
    }
    headers = headers.filter((el) => el.header != false)
    await page.screenshot({path: 'lastEupage.png'})
    // headers.forEach((el) => console.log(el))


    await browser.close()
    return headers

    }catch(err){
        console.log(err)
    }
}