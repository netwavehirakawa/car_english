$(function() {
	$('.slick-box').slick({

		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: false,
		responsive: [{
			breakpoint: 1024,settings: { //601px～1024pxでは3画像表示
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 600,settings: { //481px～600pxでは2画像表示
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,settings: {//480px以下では1画像表示
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]

	});
});