$(function(){
	$('.selected').click(function(){
		$(this).next('ul.hidden').toggle();	
	});
	$('.hidden li').click(function(){
		var txt = $(this).text();
		$(this).parents('.hidden').prev('.selected').children().text(txt);
		$(this).parents('.hidden').hide();
	});
	$('a.icon').click(function(){
		$('menu').toggleClass('gamburger');
		$('menu a#active').removeAttr('id');
	});
});