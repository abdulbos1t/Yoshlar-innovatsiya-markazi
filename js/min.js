$(document).ready(function(){
	$('#hamburger__menu').click(function(){
		$(this).toggleClass('open');
		
	});
	$('#hamburger__menu').click(function(){
		$("#nav__items").toggleClass('active');
	});
});





$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items:1,
      nav: false
    },
    600:{
      items:2,
      nav: false
    },
    1000:{
      items:3,
      nav: false
    }
  }
});