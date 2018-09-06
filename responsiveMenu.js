$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(700);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 700 ) {			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});
$(document).ready(function() {
  $('.about-trigger').click(function() {
    $('.about ul').slideToggle(700);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 700 ) {			
			$('.about ul').removeAttr('style');
		 }
	});//end resize
});
$(document).ready(function() {
  $('.soisk-trigger').click(function() {
    $('.soisk ul').slideToggle(700);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 700 ) {			
			$('.soisk ul').removeAttr('style');
		 }
	});//end resize
});
$(document).ready(function() {
  $('.rabotod-trigger').click(function() {
    $('.rabotod ul').slideToggle(700);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 700 ) {			
			$('.rabotod ul').removeAttr('style');
		 }
	});//end resize
});
