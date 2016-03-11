angular.module("todoListApp", [])
//Second parameter defines the application's dependencies
//Must include [] so angular knows to create the app
    //Otherwise, it looks for the app instead of creating it

.controller('mainCtrl', function($scope) {
    $scope.learningNgChange = function() {
        console.log("An input changed!");
    };

    $scope.todos = [
        {"name": "clean the house"},
        {"name": "water the dog"},
        {"name": "feed the lawn"},
        {"name": "pay dem bills"},
        {"name": "run"},
        {"name": "swim"}
    ]
});
//mainCtrl's scope is inside the element it's attached to (ng-controller)