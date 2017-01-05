wikiViewer.directive("searchInput", function () {
	return {
		restrict: "E",
		templateUrl: "tamplates/searchInput.html",
		scope: {
			fetchArticles: "=",
			topic: "@"
		},
		link: function(scope, elem) {
			scope.topic = "";
			angular.element(".search--deactivated").on("click", function (event) {
				elem.children().addClass("search--activated");
				elem.children().removeClass("search--deactivated");
				scope.topic = "";
			});
			angular.element(".search__exit").on("click", function (event) {
				event.stopPropagation();
				elem.children().removeClass("search--activated");
				elem.children().addClass("search--deactivated");
				scope.topic = "";

			});
		}

	}
});
