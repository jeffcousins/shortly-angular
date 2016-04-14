angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink()
      .then(function() {
      })
      .catch(function(error){
        console.log(error);
      });
  };
});
