const puppeteer = require('puppeteer')

try {
  (async () => {
    let req = "atmosphere method cleaning".split(" ").join("+AND+")
    console.log(req)
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
      width: 1280,
      height: 800
    })
    let link = "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect"+
    "2=HITOFF&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=0&f=S&l=50&d=PTXT&RS=TTL%2Fatmosphere+AND+ABST%2Fmethod&Refine=Refine+Search&"+
    "Query=TTL%2F"+req
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');
    await page.goto(link).catch( ()=> console.log("Promise catch"))
    await page.waitForSelector("tr:nth-of-type(2) > td:nth-of-type(4) > a")
    // страница ответа


    let headers = []
    for (let i = 2; i <= 51; i++) {
      headers.push({
        header: await page.$eval("tr:nth-of-type("+ i +") > td:nth-of-type(4) > a", el => el.innerText) ,
        patentNumber: await page.$eval("tr:nth-of-type("+ i+") > td:nth-of-type(2) > a", el => el.innerText) ,
        Database: "USbase"
      })
    }
    console.log(headers)
    await page.click("form[name='srchForm'] > input[name='NextList2']")
    await page.screenshot({ path: 'mouse_click.png' })

    await browser.close()
  })()
} catch (err) {
  console.error(err)
}