var myApp = angular.module('MyApp', ['LocalStorageModule']);

myApp.controller('MainController',
	['$scope',
	'$timeout',
	'localStorageService',

	function($scope,$timeout,localStorageService, genericServices) {
	$scope.letter = 'o';
	$scope.obj = { 'position':0, 'top':'50%','left':'0%'};

	//the current string displayed onscreen
	$scope.currString = $scope.letter;

	//add extra letter
	$scope.addLetter = function(){

    	$scope.currString += $scope.letter;
    	$timeout($scope.addLetter,5000);
    }


    //call timeout function
    var mytimeout = $timeout($scope.addLetter,5000);
}]);

angular.module('myModule', ['LocalStorageModule'])
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('newPrefix');
}]);


//timer function to add x and y values