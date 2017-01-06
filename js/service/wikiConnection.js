wikiViewer.factory('wikiConnection', ['$sce','$http', function($sce, $http) {
	return {
		url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=",
		getArticlesAbout: function (topic) {
			return $http.jsonp($sce.trustAsResourceUrl(this.url + topic), {jsonpCallbackParam: 'callback'}).then(function (data) {
				try {
					return data.data.query.pages;
				} catch (err) {
					return undefined;
				}

			}, function (err) {
				console.log(err);
			});
		}
	};
}]);
