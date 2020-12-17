const puppeteer = require('puppeteer')


module.exports = async function GetEnHTML(req){
    try{
    req = "atmosphere method cleaning".split(" ").join("+")
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
        width: 1280,
        height: 800
    })


    let link = "https://worldwide.espacenet.com/searchResults?ST=single"+
    "line&locale=en_EP&submitted=true&DB=&query="+req+"&Submit=Search"
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
    await page.goto(link).catch(() => console.log("Promise catch"))
    await page.waitForSelector(".noBottomMargin")
    // страница ответа
    let headers = []
    let havePage = true
    // while (havePage) {
        await page.waitForSelector(".noBottomMargin")
        for (let i = 1; i <= 49; i+=2) {
            headers.push({
                header: await page.$eval("tr:nth-of-type("+ i +")  .resNumber", el => {
                    let len = el.innerText.length
                    return el.innerText.substr(5,len-5).trim()
                }).catch(() => havePage = false),
                patentNumber: await page.$eval("tr:nth-of-type("+ (i+1) +") > .publicationInfoColumn", el => el.innerText.split(" ")[1] ).catch(() => havePage = false),
                Database: "EUbase",
                ref: "https://worldwide.espacenet.com/" +
                await page.$eval("tr:nth-of-type("+ i +") .publicationLinkClass", el => el.getAttribute("href") ).catch( () => havePage = false),
            })
        }
        await page.click("a#nextPageLinkTop").catch(() => havePage = false)
    // }
    headers.forEach((el) => console.log(el))
    console.log(await page.$eval("tr:nth-of-type(4) > .publicationInfoColumn", el => el.innerText.split(" ")[1] ).catch(() => havePage = false))
    await page.screenshot({path: 'lastEupage.png'})


    await browser.close()
    return headers

    }catch(err){
        console.log(err)
    }
}