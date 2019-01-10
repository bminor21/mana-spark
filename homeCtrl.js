app.controller("homeCtrl", function($scope){
	$scope.siteName = "Veltorak.io";
});

app.controller("aboutCtrl", function($scope){

	$scope.aboutMe = [
	{ question: "What is Veltorak?", answer: "Veltorak is the name of my first World of Warcraft character.\
	Since then the name has stuck with me and I have used it for a lot of different things." },
	{ question: "What is the point of this site?", answer : "The whole point of this site is for me to get more\
	familiar with Node, AngularJS, and web development in general." }
	];
});
