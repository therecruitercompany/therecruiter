angular.module('therecruiter')
    .controller('IndexController', function($scope, $state, $http){
  
        $scope.login = {
            accountName : '',
            password : ''
        }

        $scope.createAccount = {
            cnpj : '',
            nomeFantasia : '',
            accountName : '',
            password : '',
            repeatPassword : '',
            email : '',
            userType : ''
        }

        $scope.signIn = function(newAccount){
            if(newAccount.userType == 'candidate'){
                $http.post('/account/new-account/candidate', newAccount)
            }
            if(newAccount.userType == 'company'){
                $http.post('/account/new-account/company', newAccount)
            }
            $('#signIn').closeModal()
        }

        $scope.signUp = function(){
            $('#signUp').closeModal()
        }

    })