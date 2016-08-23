module.exports = function(app){
    
    app.post("/account/new-account/company", function(require, response){
 
        console.log('entrou')
        console.log(require.body)
        response.end()

    })

    app.post("/account/new-account/candidate", function(require, response){
       
        console.log('entrou')
        console.log(require.body)
        response.end()
        
    })
    
}