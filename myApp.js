var app = angular.module("myApp", [] );
app.directive("bmHeaderDirective", function(){
	return {
		template : "<h1>Welcome!</h1>"
	};
});