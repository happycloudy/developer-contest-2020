const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const rp = require('request-promise');

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const getruHTML = require('./parsers/ruParser')


app.prepare().then(() => {
    const server = express()
    server.set('view engine', 'jade');

    server.use(bodyParser.urlencoded({ extended: false }))

    server.post('/input', async (req,res) =>{
        SearchRequest = "Химический"
        let AnswersRequest = []

        let Response = await getruHTML(SearchRequest)
        // AnswersRequest.push(...Response)
        res.render("/")
    })


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:' + port)
    })


})
