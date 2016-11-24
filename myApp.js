var app = angular.module("myApp", ["ngRoute"] );

app.config(function($routeProvider) {
   $routeProvider
    .when("/projects", {
        templateUrl : "/public/projects.html"
    })
    .when("/about", {
        templateUrl : "/public/about.html"
    })
    .otherwise({
    	templateUrl : "/public/welcome.html"
    });
});