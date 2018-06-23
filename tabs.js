$(function () {
    var tabContainers = $('div.content > div'); 
    tabContainers.hide().filter(':first').show(); 
    $('div.content ul.tabNavigation a').click(function () {
        tabContainers.hide(); 
        tabContainers.filter(this.hash).show(); 
        $('div.content ul.tabNavigation a').removeClass('selected'); 
        $(this).addClass('selected'); 
        return false;
    }).filter(':first').click();
    $('.tabNavigation li').click(function(){
		var active = $('.tabNavigation ul').find('.active');
		active.removeClass('active');
		$(this).addClass("active");
	});
});

