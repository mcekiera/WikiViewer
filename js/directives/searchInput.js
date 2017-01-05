wikiViewer.directive("searchInput", function () {
	return {
		restrict: "E",
		templateUrl: "tamplates/searchInput.html",
		scope: {
			fetchArticles: "=",
			articles: "="
		},
		link: function(scope, elem) {
			angular.element(".search--deactivated").on("click", function () {
				elem.children().addClass("search--activated");
				elem.children().removeClass("search--deactivated");
			});
			angular.element(".search__exit").on("click", function () {
				console.log("A")
				elem.children().removeClass("search--activated");
				elem.children().addClass("search--deactivated");
			});
		}

	}
});
