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

function go_to(event, page){
	/*$(".display").toggleClass("hide display");
	$("#"+page).toggleClass("hide display");*/
	console.log(event); console.log(page);
	console.log(event.getAttribute("href"));

}

function splash_to_menu(){
    $("#logo").toggleClass("display");
    $("#caption").toggleClass("display");
	$("#menu").toggleClass("display");
	$("#name_title").toggleClass("display");
    $("#home").toggleClass("display");
  //  $("#logo").prop("onclick", null).off("click");
}
