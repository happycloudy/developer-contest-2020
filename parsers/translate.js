const puppeteer = require('puppeteer')


module.exports = async function Translate(ruWords){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
        width: 1280,
        height: 800
    })
    let URL=`https://translate.google.ru/#view=home&op=translate&sl=ru&tl=en&text=${ruWords}`;
    await page.goto(URL)
    await page.waitForSelector(".ChMk0b.JLqJ4b > span")
    let words = await page.$eval(".ChMk0b.JLqJ4b > span", el => el.innerText).catch(() => console.log("Promise catched"))
    return words
}