angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link ={};
  $scope.addLink = function(){
    if (!isFormValid($scope.link.url)) {
      console.log('sorry');
    } else {
      Links.addLink($scope.link)
      .success(function() {
        $scope.loading = false;
      });
    }
  };

  function isFormValid(url) {
    return url.match(/^https?:\/\/.*\..*/) !== null;
  }
});

