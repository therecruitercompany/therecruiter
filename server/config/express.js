const express = require('express')
const app = express()
const consign = require('consign')
const bodyParser = require('body-parser')

app.use(express.static('../client'))
app.use(bodyParser.json())

consign({cwd: 'app'})
    .include('models')
    .then('routes')	
    .into(app);

module.exports = app