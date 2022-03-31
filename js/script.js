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

var ignor_anchor = false;

function go_to(event){
	console.log(event);
	var target = event.getAttribute("href");
	var origin = ($(".display", "#menu")[0].getAttribute("href"));
	if(target === origin){
		console.log("noting");
		return;
	}else{
		console.log("SWAP");
		$(".display", "#menu").toggleClass("display")
		$(event).addClass("display");
		

		
		$(origin).toggleClass("display");
		$(target).toggleClass("display");

		ignor_anchor = true;
		
	}
	
}

$(document).ready(function() {
    $('a').on("click", function(e) {
		if(ignor_anchor){
			console.log(e.target);
			e.preventDefault();
			ignor_anchor = false;
		}
		
    });
});

function splash_to_menu(){
    $("#logo").toggleClass("display");
    $("#caption").toggleClass("display");
	$("#menu").toggleClass("display");
	$("#name_title").toggleClass("display");
    $("#home").toggleClass("display");
  //  $("#logo").prop("onclick", null).off("click");
}
