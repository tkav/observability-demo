const express = require('express')
const app = express()

function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.get('/', function (req, res) {
    res.send('Use /metrics instead')
})

app.get('/metrics', function (req, res) {
    var value = randomInt(5,30)
    res.send('my_nodejs_metric '+value)
})

app.listen(9101)