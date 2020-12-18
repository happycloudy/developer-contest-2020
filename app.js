const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const fs = require('fs')

const port = 3000
// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const getRuData = require('./parsers/ruParser')
const getEnData = require('./parsers/enparser')
const getRuPatent = require('./parsers/getRuPage')


app.prepare().then(() => {
    const server = express()
    // server.set('view engine', 'jade');

    server.use(bodyParser.urlencoded({ extended: false }))

    server.post('/input', async (req,res) =>{
        let AnswersRequest = []


        let SearchRequest = req.body.searchname
        console.log("Поисковый запрос: "+SearchRequest)
        console.log("Полученние данных с русской бд...")
        let Response = JSON.stringify(await getRuData(SearchRequest))
        
        // Response = await getEnData(SearchRequest)
        // AnswersRequest.push(...Response)

        // console.log("Полученние данных с американской бд...")

        // console.log(Response)
        // Response = fs.readFileSync("data.json")
        res.send(Response)
    })

    server.post('/patent', async (req,res) =>{
        let SearchRequest = req.body.patentnum
        console.log("Запрос на страницу: "+SearchRequest)
        let Response = await getRuPatent("2588239")
        res.send(Response)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:' + port)
    })


})
