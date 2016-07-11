	var headerheight = $("header").height();

	$(".see-more").click(function(){
	 	$('html, body').animate({
        	scrollTop: $(".content-featured").offset().top - headerheight
    	}, 200);	
	});

	
	$(document).ready(function() {
		$(".fancybox").fancybox();
	});
