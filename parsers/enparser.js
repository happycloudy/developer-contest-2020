const puppeteer = require('puppeteer')


module.exports = async function GetEnHTML(req){
    try{
    req = "atmosphere method cleaning".split(" ").join("+AND+")
    // req = req.split(" ")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
        width: 1280,
        height: 800
    })


    let link = "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect" +
        "2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=0&f=S&l=50&d=PTXT&RS=TTL%2Fatmosphere+AND+ABST%2Fmethod&Refine=Refine+Search&" +
        "Query=TTL%2F" + req
    // let link = "http://patft.uspto.gov/netahtml/PTO/search-bool.html"
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
    await page.goto(link).catch(() => console.log("Promise catch"))
    // await page.type("input[name='TERM1']",req[0])
    // await page.type("input[name='TERM2']",req[1]+" "+ req[2])
    // await page.click("input[value='Search']")

    console.log("на странице запроса")
    // await page.waitForSelector("tr:nth-of-type(2) > td:nth-of-type(4) > a")
    // await page.waitForNavigation()
    await page.screenshot({path: 'lastEupage.png'})
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
        console.log("Now page is " + key)
        await page.click("form[name='srchForm'] > input[name='NextList" + key + "']").catch(() => havePage = false)
        await page.waitForSelector("form[name='srchForm'] > input[name='NextList" + key + "']").catch(() =>{
            console.log("Promise rejected on wait")
            havePage = false
        })
        key++
    }
    headers = headers.filter((el) => el.header != false)

    // headers.forEach((el) => console.log(el))


    await browser.close()
    return headers

    }catch(err){
        console.log(err)
    }
}