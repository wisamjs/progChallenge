angular.module('controllerAsExample', [])
  .controller('MainController', MainController);

function MainController($scope, $timeout) {
	$scope.letter = 'o';

	//the current string displayed onscreen
	$scope.currString = $scope.letter;


	$scope.onTimeout = function(){
		//add extra letter
    	$scope.currString+= $scope.letter;
    	mytimeout = $timeout($scope.onTimeout,5000);
    }
    
    //call timeout function
    var mytimeout = $timeout($scope.onTimeout,5000);

}