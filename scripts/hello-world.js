/**
 * Created by Bai Chan on 7/03/2016.
 */
angular.module('todoListApp') //Tells angular to look for the existing app
.directive('helloWorld', function() {
    return {
        template: "This is the hello world directive!",
        restrict: "E" //Element only
    };
}); //Second param is callback function