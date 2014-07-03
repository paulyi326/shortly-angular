angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link ={};
  $scope.addLink = function(){
    console.log($scope.link);
    Links.addLink($scope.link)
    .success(function() {
      $scope.loading = false;
    });
  };
});
