wikiViewer.directive("wikiArticle", function () {
	return {
		restrict: "E",
		templateUrl: "tamplates/articleList.html",
		scope: {
			article: "="
		}
	}
});
