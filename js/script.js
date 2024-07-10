const swiper = new Swiper('.team-slider', {
	// Optional parameters
	speed: 400,
	spaceBetween: 50,
	loop: true,
	// autoheight: true,
	slidesPerView: 3,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
const swiper2 = new Swiper('.slider-team', {
	// Optional parameters
	speed: 400,
	spaceBetween: 50,
	loop: true,
	// autoheight: true,
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
