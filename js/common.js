$(function() {
	var touch 	= $('#touch-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

$(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".main-mnu").slideToggle();
  return false;
});




	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: true,
		navText: "",
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		smartSpeed: 700,
		autoplaySpeed: 700
		});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	})



$(".product-name").equalHeights();

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
});
$(".next").click(function(){
	owl.trigger('next.owl.carousel');
})
$(".prev").click(function(){
	owl.trigger('prev.owl.carousel');
})

});
