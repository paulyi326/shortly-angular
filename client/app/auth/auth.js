// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    if (!signupIsValid($scope.user.username, $scope.user.password)) {
      console.log('you are a newb');
    } else {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.signup = function () {
    if (!signupIsValid($scope.user.username, $scope.user.password)) {
      console.log('you are a newb');
    } else {
      console.log('username: ', $scope.user.username);
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  var signupIsValid = function(username, password) {
    console.log(username);
    console.log(password);
    if (username === undefined) {
      return false;
    } else if (username === '') {
      return false;
    } else if (password === undefined) {
      return false;
    } else {
      return true;
    }
  };
});
