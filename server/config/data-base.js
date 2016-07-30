module.exports = function(uri) {

    const mongoose = require('mongoose')

    mongoose.connect(uri)

    mongoose.connection.on('connected', function(){
        console.log('Connected to the MongoDB')
    })

    mongoose.connection.on('error', function(error){
        console.log('Error in connection with MongoDB: ')
    })

    mongoose.connection.on('disconnected', function(){
        console.log('Disconnected to the MongoDB')
    })

    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Application ended')
            process.exit(0)
        })
    })

}