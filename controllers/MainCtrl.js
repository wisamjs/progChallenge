
myApp.controller('MainController',
	['$scope',
	'$timeout',
	'localStorageService',

	function($scope,$timeout,localStorageService, genericServices) {
	$scope.letter = 'o';
	$scope.currString = $scope.letter;

	//check local storage for last position
	//if it exists
	if (localStorageService.get('position') === null){

		$scope.position = 0;

	}else{

		$scope.position = Number(localStorageService.get('position'));

	}

	//add extra letter
	$scope.addLetter = function(){

    	$scope.currString += $scope.letter;
    	$timeout($scope.addLetter,4000);
    }

    //update position of letter
    $scope.updatePosition = function(){

    	if ($scope.position === 12){

    		$scope.position = 0;
    	}else{

    		$scope.position += 1;
    	}
    		//update value to local storage
    		localStorageService.set('position',$scope.position);

		$timeout($scope.updatePosition,300);
	}


    //call timeout functions
    var addLetter = $timeout($scope.addLetter,5000);
    var updatePosition = $timeout($scope.updatePosition,300);
}]);
