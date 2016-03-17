'use strict';

angular.module('todoListApp').service('dataService', function($http) {

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

    this.saveTodos = function(todos) {
        console.log(todos.length + " Todos have been saved!");
    };

});