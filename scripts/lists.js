// JavaScript Document

$('h3 a').click(function(e)
{
	"use strict";
	var closed = $(this).parent().parent().parent().attr('aria-expanded');
	if (closed === "false")
	{
		$('.selection').attr('aria-expanded',false).find('a').not('.selectionButton').attr('tabindex','-1');
		$(this).parent().parent().attr('aria-hidden',false).parent().attr('aria-expanded',true).find('a').not('.selectionButton').attr('tabindex','0');
		//e.preventDefault();
	}
	else
	{
		$(this).parent().parent().attr('aria-hidden',true).parent().attr('aria-expanded',false).find('a').not('.selectionButton').attr('tabindex','-1');
		e.preventDefault();
	}
});




$(window).on('scroll', function() 
{
	"use strict";
	var y = $('main').position().top;
	//var y = 208;
	if (y <= $(window).scrollTop()) 
	{
		// if so, add the fixed class
		$('.scroll').addClass('fixed');
	} 
	else 
	{
		// otherwise remove it
		$('.scroll').removeClass('fixed');
	}
});