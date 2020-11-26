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

//! Edd Yandex Maps
ymaps.ready(init);

function init() {
	var map = new ymaps.Map('map', {
		center: [7.83817708, 98.29881664],
		zoom: 17
		/* type: 'yandex#satellite' */
	});
	var placemark = new ymaps.Placemark([7.83817708, 98.29881664], {
		balloonContent: 'Два часа потратил на долбаную метку!:)'
	}, {
		preset: 'islands#icon',
		iconColor: '#0095b6'
	});

	map.geoObjects.add(placemark);
}