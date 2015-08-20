$(document).ready(function() {
	$(".fancybox").fancybox({
		width	: 600,
		helpers : {
			title : {
				type : 'over'
			},
			overlay : {
				css : {
					'background' : 'rgba(0, 0, 0, 0.7)'
				}
			}
		}
	});
	$(function () {
		$('.parentcats').tinyNav({
			active: 'selected'
		});
	});
	$('html').addClass('js');
	$(function() {
		$( ".parentcats" ).accordion({
			collapsible: true
		});
	});
	$( ".contactme" ).click(function() {
		$(this).next( ".links" ).slideToggle( "300" );
	});
	$(".chosen").chosen({
		create_option: true,
		persistent_create_option: true,
		create_option_text: 'add',
	});
});