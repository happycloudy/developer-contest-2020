const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const fs = require('fs')
const _ = require('lodash')

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const getRuData = require('./parsers/ruParser')
const getRuPatent = require('./parsers/getRuPage')
const getEnData = require('./parsers/enParser')
const getEnPatent = require('./parsers/getEnPage')
const translate = require('./parsers/translate')

app.prepare().then(() => {
    const server = express()
    // server.set('view engine', 'jade');
    server.use(bodyParser.urlencoded({ extended: false }))
    server.post('/input', async (req,res) =>{


        let SearchRequest = req.body.searchname
        console.log("Поисковый запрос: "+SearchRequest)
        console.log("Полученние данных с русской бд...")
        let ruResponse = await getRuData(SearchRequest)

        translateReq = await translate(SearchRequest)
        console.log("Полученние данных с американской бд...")
        enResponse = await getEnData(SearchRequest)
        let Resp = Object.assign(ruResponse,enResponse);
        res.send(Resp)


    })

    server.post('/patent', async (req,res) =>{
        let SearchRequest = req.body.patentnum
        let database = req.body.database
        if(database == "USbase"){
            console.log("Запрос на страницу: "+SearchRequest)
            let Response = await getEnPatent(SearchRequest)
            res.send(Response)
        }
        if(database == "RUbase"){
            console.log("Запрос на страницу: "+SearchRequest)
            let Response = await getRuPatent(SearchRequest)
            res.send(Response)
        }
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:' + port)
    })


})
