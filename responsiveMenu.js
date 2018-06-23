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
//$(function ($){
//   // $(window).resize(function() {
//    if($(document).width()<720){
//    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
//        var block = $("nav"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
//        if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
//            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
//            //$(window).resize(function() {		
//		//if (  $(window).width() < 720 ) {
//            //alert(1);
//            $("nav ul").hide(500); // если условия выполняются - скрываем наш элемент
//          //   };
//	};
//        });
//    };
//   // });
//});  
//
//
//$(document).ready(function() {
//  $('.menu-trigger').click(function() {
//    $('nav .menu').slideToggle(500);
//  });//end slide toggle
//    
//    //1
//        $('nav .b1').click(function() {
//    $('nav .b3').slideToggle(500);
//  });//end slide toggle
//    
//  //2
//        
//    $(' nav .b2').click(function() {
//    $('nav .b4').slideToggle(500);
//  });//end slide toggle
//    //end
//    $(window).resize(function() {		
//		if (  $(window).width() > 720 ) {			
//			$('nav ul').removeAttr('style');
//		 };
//	});//end resize
//});//end ready



//$(function() {
//  var pull    = $('#pull');
//    menu    = $('nav ul');
//    menuHeight  = menu.height();
// 
//  $(pull).on('click', function(e) {
//    e.preventDefault();
//    menu.slideToggle();
//  });
//});
//$(window).resize(function(){
//  var w = $(window).width();
//  if(w > 320 && menu.is(':hidden')) {
//    menu.removeAttr('style');
//  }
//});