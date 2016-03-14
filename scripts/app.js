angular.module("todoListApp", [])
//Second parameter defines the application's dependencies
//Must include [] so angular knows to create the app
    //Otherwise, it looks for the app instead of creating it

.controller('mainCtrl', function($scope, dataService) {
    $scope.addTodo = function() {
        var todo = {"name": "This is a new todo."};
        $scope.todos.push(todo); // Push into the array
    };

    $scope.helloConsole = dataService.helloConsole;

    $scope.learningNgChange = function() {
        console.log("An input changed!");
    };

    dataService.getTodos(function (response) {
        console.log(response.data);
        $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1); // Deletes the indexed item
    };

    $scope.saveTodo = function(todo) {
        dataService.saveTodo(todo);
    };
})
//mainCtrl's scope is inside the element it's attached to (ng-controller)

//$http is a provider
.service('dataService', function($http) {

    //this refers to the dataService
    this.helloConsole = function () {
        console.log('This is the hello console service!');
    };

    // Get REST data
    this.getTodos = function (callback) {
        $http.get('mock/todos.json')
        .then(callback);
    };

    // Delete data
    this.deleteTodo = function(todo) {
        console.log("The " + todo.name + " has been deleted!");
        // Simulate communication with REST api
    };

    this.saveTodo = function(todo) {
        console.log("The " + todo.name + " has been saved!");
    };

});