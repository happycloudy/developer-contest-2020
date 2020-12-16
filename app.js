const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const port = 3000
// eslint-disable-next-line no-undef
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const getRuData = require('./parsers/ruParser')
const getEnData = require('./parsers/enparser')


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
        console.log("Полученние данных с американской бд бд...")

        // Response = await getEnData(SearchRequest)
        console.log(Response)

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
