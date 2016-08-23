const mongoose = require('mongoose')
const candidateSchema = mongoose.Schema({

    name : {
        type : String,
        default : 'User'
    },    
    account : {
        accountName : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        }
    },
    userType : {
        type : String,
        default : 'candidate'
    },
    bio : {
        type : String
    }
})

mongoose.model('Candidate', candidateSchema, 'user')
