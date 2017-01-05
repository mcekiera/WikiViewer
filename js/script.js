
var initEvents = function() {
	$("button").click(function () {
		console.log("click");
	});
	$(".search--deactivated, .search__exit").click(function () {
		$(this).toggleClass("search--deactivated");
		$(this).toggleClass("search--activated");
	})
};
initEvents();
