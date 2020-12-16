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
    await page.goto(link)
    
    // страница ответа

    await browser.close()
  })()
} catch (err) {
  console.error(err)
}