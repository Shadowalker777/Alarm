
var app = angular.module('clock', ['ngClock']);

angular.module('ngClock', [])

// filters


.filter('pad', function() {

  return function(num) {

    return (num < 10 ? '0' + num : num); 

  };

})



.directive('ngClock', ["$timeout", function($timeout){

  return {

    restrict: 'E',

    template:'<span class="time">'

        + '<span class="hours">'

        + ' {{date.getHours() | pad}}'

        + '</span>:<span class="minutes">'

        + ' {{date.getMinutes() | pad}}'

        + '</span>:<span class="seconds">'

        + ' {{date.getSeconds() | pad}}'

        + '</span>'

        + '</span>',

    controller: function($scope, $element) {

      $scope.date = new Date();

      

      var tick = function() {

        $scope.date = new Date();

        $timeout(tick, 1000);

      };

      $timeout(tick, 1000);


	
$scope.todos = [];


$scope.addTodo = function(){


   $scope.todos.push({'hours':$scope.newTodo1,'minutes':$scope.newTodo2,'ampm':$scope.ampm,'done':false})
	$scope.newTodo1 = ''
	$scope.newTodo2 = ''
		}
$scope.clearCompleted = function(item){
	$scope.todos = $scope.todos.filter(function(item){

			return !item.done
		})

		}



    }

  }

  

}]);
