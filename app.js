/**
 * Created by divism on 7/30/2014.
 */
var codeApp = angular.module("codeApp",['ngRoute']).config(function($routeProvider){

    $routeProvider.when('/corejava',{

        templateUrl:'templates/corejava.html'

    });
    $routeProvider.when('/exception',{

        templateUrl:'templates/exception.html'

    });

    $routeProvider.otherwise({redirectTo:'/corejava'});

});