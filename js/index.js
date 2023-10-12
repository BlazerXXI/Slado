$(document).ready(() => {

	// burger-menu
	$(".burger-menu").click(() => {
		$(".menu").toggleClass("active");
		$(".burger-menu").toggleClass("active-burger-menu");
		$("html").toggleClass("lock")
	});
});
