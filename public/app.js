var myApp = angular.module('MyApp', ['LocalStorageModule']);

myApp.controller('MainController',
	['$scope',
	'$timeout',
	'localStorageService',

	function($scope,$timeout,localStorageService, genericServices) {
	$scope.letter = 'o';
	if (localStorageService.get('position') === null){
		$scope.position = 0;
	}else{
		$scope.position = Number(localStorageService.get('position'));
	}

	//the current string displayed onscreen
	$scope.currString = $scope.letter;

	//add extra letter
	$scope.addLetter = function(){

    	$scope.currString += $scope.letter;
    	$timeout($scope.addLetter,5000);
    }


    $scope.updatePosition = function(){

    	if ($scope.position === 4){

    		$scope.position = 0;
    	}else{

    		$scope.position += 1;
    	}
    		//update value to local storage
    		localStorageService.set('position',$scope.position);

	$timeout($scope.updatePosition,1000);
}


    //call timeout function
    var mytimeout = $timeout($scope.addLetter,5000);
    var mytimeout = $timeout($scope.updatePosition,1000);
}]);

angular.module('myModule', ['LocalStorageModule'])
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('newPrefix');
}]);


//timer function to add x and y values