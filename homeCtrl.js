app.controller("homeCtrl", function($scope){

	$scope.navigationItems = [ 
	{ display : "Home", link : "#home"},
	{ display : "About", link : "#about" }, 
	{ display : "Projects", link : "#projects" }
	];
	
	$scope.siteName = "Veltorak.io";
}); 