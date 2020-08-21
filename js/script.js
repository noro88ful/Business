$('.menu-header__icon').click(function(e){
	$(this).toggleClass('active')
	$('.menu-header__menu').toggleClass('active')
	if ($(this).hasClass('active')) {
		$('body').data('scroll',$(window).scrollTop())
	} 
	$('body').toggleClass('lock')
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	} 
})

function ibg(){
	$.each($('.ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

$('.tab__navitem').click(function(){
	let value = $(this).html()
	if ($('.nav-newsmedia').hasClass('one')) {
		$('.tab__navitem').not($(this)).removeClass('active')
	}
	$(this).addClass('active')
	if (value=="All") {
		$('.item-newsmedia__column').show('1000')
	} else {
		$.each($('.item-newsmedia__column'), function() {
			if($(this).find('.content-newsmediavalues__category').html()==value) {
			   $(this).show()
			} else {
				$(this).hide('1000')
			}
		});
	}
})

