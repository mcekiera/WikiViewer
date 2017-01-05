"use strict";

var wikiViewer = angular.module("wikiViewer", []);

wikiViewer.controller("bodyController", ["$scope", "wikiConnection", function($scope, wikiConnection) {
	$scope.topic = "";
	$scope.articles = [];

	$scope.fetchArticles = function() {
		console.log("fetch");
		wikiConnection.getArticlesAbout($scope.topic).then(function(data){
			$scope.articles = data;
		});
	}

}]);
