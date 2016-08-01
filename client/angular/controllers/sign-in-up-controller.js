angular.module('therecruiter')
    .controller('SingInUpController', function($scope){
  
        $scope.login = {
            accountName : '',
            password : ''
        }

        $scope.createAccount = {
            accountName : '',
            password : '',
            repeatPassword : '',
            email : ''
        }

        $scope.cardLogin = true

        $scope.changeCard = function(actualCard){
            $scope.cardLogin = !actualCard
        }

        $scope.signIn = function(login){
            alert('password ' + login.password + ' account ' + login.accountName)
        }

        $scope.signUp = function(newAccount){
            alert('password ' + newAccount.password + ' account ' + newAccount.accountName + ' email ' + newAccount.email)
        }

    })