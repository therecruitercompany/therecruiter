const http = require('http')
const app = require('./config/express.js')
const path = require('path')

require('./config/data-base.js')('mongodb://application:e3v83wee@ds031835.mlab.com:31835/recruiter-data-base')

const server = http.createServer(app)

server.listen(80, function(){
    console.log('Server up')
})