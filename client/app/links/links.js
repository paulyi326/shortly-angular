angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(links){
      $scope.data.links = links;
    });
  };
  $scope.changeView = function(route){
    $location.path(route);
  };
  $scope.getLinks();

});
