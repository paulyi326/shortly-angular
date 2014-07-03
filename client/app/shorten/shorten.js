angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = $location;
  $scope.addLink = function(){
    Links.addLink($scope.link)
    .success(function() {
      $scope.loading = false;
    });
  };
});
