angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $location) {
  // Your code here
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(links){
      $scope.data.links = links;
      for (var i = 0; i < $scope.data.links.length; i++) {
        var link = $scope.data.links[i];
        link.isVisible = true;
      }
    });
  };
  $scope.changeView = function(route){
    $location.path(route);
  };
  $scope.getLinks();


});
