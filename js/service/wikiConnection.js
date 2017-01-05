wikiViewer.factory('wikiConnection', ['$sce','$http', function($sce, $http) {
	var obj = {
		url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&extract&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=",
		getArticlesAbout: function (topic) {
			return $http.jsonp($sce.trustAsResourceUrl(this.url + topic), {jsonpCallbackParam: 'callback'}).then(function (data) {

				try {
					console.log(data.data.query.pages);
					return data.data.query.pages;
				} catch (err) {
					console.log(err);
					return undefined;
				}

			}, function (err) {
				console.log(err);
			});
		}
	};
	return obj;
}]);
