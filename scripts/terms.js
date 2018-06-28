// JavaScript Document

$('#TERMS').click(function()
{
	"use strict";
	var termsOpen = $('#COMMON_TERMS').is('.open');
	if (!termsOpen)
	{
		$('#COMMON_TERMS').addClass('open').attr('aria-hidden',false);
		$('#CLOSE_TERMS').attr('disabled',false);
	}
	else
	{
		$('#COMMON_TERMS').removeClass('open').attr('aria-hidden',true);
		$('#CLOSE_TERMS').attr('disabled',true);
	}
});

$('#CLOSE_TERMS').click(function()
{
	"use strict";
	var termsOpen = $('#COMMON_TERMS').is('.open');
	if (termsOpen)
	{
		$('#COMMON_TERMS').removeClass('open').attr('aria-hidden',true);
		$('#CLOSE_TERMS').attr('disabled',true);
		$('li').removeClass('clicked');
		window.location.hash=' ';
	}
	else
	{
		return false;
	}
});

$('nav li').click(function()
{
	"use strict";
	$('li').removeClass('clicked');
	$(this).addClass('clicked');
});