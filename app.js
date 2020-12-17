const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const fs = require("fs");

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
    server.set('view engine', 'jade');

    server.use(bodyParser.urlencoded({ extended: false }))

    server.post('/input', async (req,res) =>{
        let AnswersRequest = []
        let SearchRequest = "изготовление нано"


        console.log("Полученние данных с русской бд...")
        let Response = await getRuData(SearchRequest)
        // AnswersRequest.push(...Response)

        // console.log("Полученние данных с американской бд...")
        // Response = await getEnData(SearchRequest)
        
        // let Response = await getRuPatent("2588239")
        console.log(Response)


        // fs.unlinkSync("./rudata.json")
        // fs.appendFileSync("rudata.json", JSON.stringify(Response));
        fs.appendFileSync("patent.json", JSON.stringify(Response));

        const jsonRuData = require('./patent.json');
        res.send(jsonRuData)
    })


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:' + port)
    })


})
