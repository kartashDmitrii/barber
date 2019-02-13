$(document).ready(function() {
//Slider
	var width = $('.gallery_content').width();

	$('.slidewrapper>li').width(width);
	$('.slidewrapper').width(width*$('.slidewrapper>li').length);

	$('.slidewrapper').css('left',-width);
	$('.slidewrapper>li:last-child').prependTo('.slidewrapper');

	function nextSlide() {
		$('.gallery_next').unbind('click');
		$('.slidewrapper').animate({
			'margin-left': -width
		},400, function() {
			$('.slidewrapper>li:first-child').appendTo('.slidewrapper');
			$('.slidewrapper').css('margin-left', 0);
			$('.gallery_next').bind('click', nextSlide);
		});
	}
	function prevSlide() {
		$('.gallery_prev').unbind('click');
		$('.slidewrapper').animate({
			'margin-left':width
		},400, function() {
			$('.slidewrapper>li:last-child').prependTo('.slidewrapper');
			$('.slidewrapper').css('margin-left', 0);
			$('.gallery_prev').bind('click', prevSlide);
		});
	}
	var SlideInterval = setInterval(nextSlide, 10000);

	$('.gallery_next').click(nextSlide);
	$('.gallery_prev').click(prevSlide);

//ScrollAncor
/*
$("#menu").on("click","a", function (event) {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }); 
*/
//MaskedInput


	$(".date").mask('00/00/0000');
	$(".time").mask('00:00');
	$(".phone").mask('(000)000-00-00');
//magnificPopup
	$.extend(true, $.magnificPopup.defaults, {
  tClose: 'Close (Esc)',
  tLoading: 'Loading...',
  gallery: {
  	tPrev: 'Previous (Left arrow key)',
   tNext: 'Next (Right arrow key)',
   tCounter: ''
  }
 });
	$('.slidewrapper').magnificPopup({
  	delegate: 'a',
  	type:'image',
  	midClick: true,
  	gallery: {
  		enabled: true,
  	},
  	removalDelay: 300,
  	mainClass: 'mfp-fade'
  });

	$('.popup_map').magnificPopup({
	items: {
		src: '<div style="text-align: center"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.010443134366!2d30.37878209169462!3d50.42227706087677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb93976affc1%3A0xf2c29d0490ac175e!2z0LHRg9C7LiDQmtC-0LvRjNGG0L7QstCwLCAxNNCjLCDQmtC40LXQsiwgMDMxOTQ!5e0!3m2!1sru!2sua!4v1521900334855" width="1144" height="656" frameborder="0" style="border:0" allowfullscreen></iframe></div>',
		type: 'inline'
	},
	closeBtnInside: true,
  	removalDelay: 300,
  	mainClass: 'mfp-fade'
	});
//Logo Scroll
	$(window).scroll(function() {
		if ($(this).scrollTop() > 20){
			$('.logo').removeClass('logo_big').addClass('logo_small');
		}else {
			$('.logo').removeClass('logo_small').addClass('logo_big');
		}
	});
//Offline Button
	$('.disabled').click(function(event) {
		event.preventDefault();
	});
//Overlay
	$('.login').click(function(event) {
		$('.overlay').fadeIn(400,
		 function() {
			$('.modal_frame')
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('.modal_close, .overlay').click( function() {
		$('.modal_frame')
			.animate({opacity: 0, top: '45%'}, 200,
				function() {
					$(this).css('display', 'none');
					$('.overlay').fadeOut(400);
				}
			);	
	});
//signup,Signin
	$('.signin').click(function(event) {
		$('.login_form').delay(100).fadeIn(100);
 		$('.register_form').fadeOut(100);
		$('.signup').removeClass('form_active');
		$(this).addClass('form_active');
	});
	$('.signup').click(function(event) {
		$('.register_form').delay(100).fadeIn(100);
 		$('.login_form').fadeOut(100);
		$('.signin').removeClass('form_active');
		$(this).addClass('form_active');
	});
});