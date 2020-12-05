const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const rp = require('request-promise');





const urlru = 'https://fips.ru/iiss/';  //патентный поиск fips.ru (русский)
const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({
        extended: false
    }))

    server.post('/input', (req,res) =>{
        
        rp(urlru)
        .then(function (html) {
            console.log(html);
        })
        .catch(function (err) {
            //ошибка
            console.log(err);
        });
    })


    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err



        console.log('> Read on http://localhost:' + port)
    })


})

