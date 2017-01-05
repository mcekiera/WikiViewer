"use strict";

var wikiViewer = angular.module("wikiViewer", []);

wikiViewer.controller("bodyController", ["$scope", "wikiConnection", function($scope, wikiConnection) {
	$scope.articles = [];

	$scope.fetchArticles = function(topic) {
		console.log(topic);
		wikiConnection.getArticlesAbout(topic).then(function(data){
			$scope.articles = data;
		});
	}

}]);
