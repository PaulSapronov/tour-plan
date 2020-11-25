var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button--next',
		prevEl: '.slider-button--prev',
	},
	keyboard: true,
	effect: 'slide',
});

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