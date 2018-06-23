$(delete).onclick(function(){
var parent = $(this).closest('div[id^="let_1"]');
parent.next().remove()
parent.remove()
})
