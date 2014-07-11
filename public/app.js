angular.module('controllerAsExample', [])
  .controller('HelloController', HelloController);

function HelloController($scope) {
 $scope.letter = 'o';
}