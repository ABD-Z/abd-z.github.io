(function() {
	jQuery(window)

	// Remove "loading" class once the page has fully loaded.
		.on('load', function() {
			jQuery('body').removeClass('loading');
		})

	// Prevent scrolling on touch.
		.on('touchmove', function() {
			return false;
		})
	
	// Fix scroll position on orientation change.
		.on('orientationchange', function() {
			jQuery('body').scrollTop(0);
		});

})();


function toggle_contact(social){
	$("#"+social+"_info").toggleClass("active");
	$("#black_layer").toggleClass("active");
}

function go_to(page){
	$(".active_page").toggleClass("hide active_page");
	$("#"+page).toggleClass("hide active_page")
}