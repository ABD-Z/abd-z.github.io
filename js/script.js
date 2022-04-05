(function () {
	jQuery(window)

		// Remove "loading" class once the page has fully loaded.
		.on('load', function () {
			jQuery('body').removeClass('loading');
		})

		// Prevent scrolling on touch.
		.on('touchmove', function () {
			return false;
		})

		// Fix scroll position on orientation change.
		.on('orientationchange', function () {
			jQuery('body').scrollTop(0);
		});

})();

var ignor_anchor = false;
var current_menu = "#home";


function toggle_contact(social, social2) {
	window.event.stopPropagation();//stop propagate click detection to outside of button
	$("#" + social).toggleClass("display");
	$("#" + social2).removeClass("display");
	$(document.body).on("click", function (e) { $("#" + social).removeClass("display"); }); //remove when click outside anywhere
}

function go_to(event) {
	var target = event.getAttribute("href");
	var origin = ($(".display", "#menu")[0].getAttribute("href"));
	if (target === origin) {
		return;
	} else {
		$(".display", "#menu").toggleClass("display")
		$(event).addClass("display");



		$(origin).toggleClass("display");
		$(target).toggleClass("display");

		ignor_anchor = true;
		current_menu = target;
	}
}

$(document).ready(function () {
	$('a').on("click", function (e) {
		if (ignor_anchor) {
			e.preventDefault();
			ignor_anchor = false;
		}
	});
});

function splash_to_menu() {
	$("#logo").toggleClass("display");
	$("#caption").toggleClass("display");
	$("#menu").toggleClass("display");
	$("#name_title").toggleClass("display");
	$(current_menu).toggleClass("display");
}
