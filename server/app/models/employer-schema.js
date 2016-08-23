const mongoose = require('mongoose')
const employerSchema = mongoose.Schema({

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
        default : 'employer'
    }
})

mongoose.model('Employer', employerSchema, 'user')