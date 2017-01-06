wikiViewer.directive("wikiArticle", function () {
	return {
		restrict: "E",
		templateUrl: "tamplates/wikiArticle.html",
		scope: {
			article: "=",
			url: "@"
		},
		link: function (scope) {
			scope.url = "https://en.wikipedia.org/?curid=";
			scope.getUrl = function (id) {
				return scope.url + id;
			}
		}
	}
});
