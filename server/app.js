const http = require('http')
const app = require('./config/express.js')
require('./config/data-base.js')('mongodb://application:e3v83wee@ds031835.mlab.com:31835/recruiter-data-base')

http.createServer(app)

app.listen(process.env.PORT || 80, function(){
    console.log('Server up')
})