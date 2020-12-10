$(document).ready(function () {
	//! Add slider
	var hotelSlider = new Swiper('.hotel-slider', {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.hotel-slider__button--next',
			prevEl: '.hotel-slider__button--prev',
		},
		keyboard: true,
	});

	var reviewsSlider = new Swiper('.reviews-slider', {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: '.reviews-slider__button--next',
			prevEl: '.reviews-slider__button--prev',
		},
		keyboard: true,
	});

	var menuButton = $('.menu-button');
	menuButton.on('click', function () {
		$('.navbar-bottom').toggleClass('navbar-bottom--visible');
	});

	var modelButton = $('[data-toggle=modal]');
	var closeModalButton = $('.modal__close');
	modelButton.on('click', openModal);
	closeModalButton.on('click', closeModal);

	function openModal() {
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		modalOverlay.addClass('modal__overlay--visible');
		modalDialog.addClass('modal__dialog--visible');
	}

	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
	}

	$(document).on('keyup', function (e) {
		var modalOverlay = $('.modal__overlay');
		var modalDialog = $('.modal__dialog');
		if (e.keyCode === 27) {
			modalOverlay.removeClass('modal__overlay--visible');
			modalDialog.removeClass('modal__dialog--visible');
		}
	});

	$('.form').each(function () {
		$(this).validate({
			errorClass: 'invalid',
			messages: {
				name: {
					required: 'Please specify your name',
				},
				email: {
					required: 'We need your email address to contact you',
					email: 'Your email address must be in the format of name@domain.com',
				},
				phone: {
					required: 'Please specify your phone number',
					minlength: 'Your phone must be in the format of +7(XXX)XXX-XX-XX"'
				},
			},
		});
	});



	AOS.init();
});