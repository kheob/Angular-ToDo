'use strict'; // Run file in strict variant
              // JS engine is more picky about code
angular.module('todoListApp').controller('mainCtrl', function($scope, dataService) {
    $scope.addTodo = function() {
        var todo = {"name": "This is a new todo."};
        $scope.todos.unshift(todo); // Push into the array
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

    $scope.saveTodos = function() {
        var filteredTodos = $scope.todos.filter(function(todo) {
           if (todos.edited) {
               return todo;
           }
        });
        dataService.saveTodos(filteredTodos);
    };
})

