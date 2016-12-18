jQuery.extend(verge);
var desktop = true,
	tablet = false,
	tabletPortrait = false;
mobile = false;

$(window).resize(function() {
	if ($.viewportW() >= 1024) {
		desktop = true;
		tablet = false;
		tabletPortrait = false;
		mobile = false;
	}
	if ($.viewportW() >= 900 && $.viewportW() <= 1023) {
		desktop = false;
		tablet = true;
		tabletPortrait = false;
		mobile = false;
	}
	if ($.viewportW() >= 768 && $.viewportW() <= 899) {
		desktop = false;
		tablet = false;
		tabletPortrait = true;
		mobile = false;
	} else {
		if ($.viewportW() <= 767) {
			desktop = false;
			tablet = false;
			tabletPortrait = false;
			mobile = true;
		}
	}

}).resize();

function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(
		function() {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}


/*function fancyboxInit(btn) {
	$.fancybox.open({
		href: btn.attr('href'),
		type: 'inline',
		padding: '0',
		fitToView: false,
		wrapCSS: 'video-position',

		afterShow: function() {
			var player = $(this.href).find('video').get(0);
			player.play();
			var playerOff = function(){
				$.fancybox.close();
			}
			player.addEventListener('ended', playerOff);
			player.addEventListener('pause', playerOff);
			 $(player).on('videoPlayEnd', playerOff);
			 $(player).on('videoPlayPause', playerOff);

		},
		afterClose: function() {
			$('.home-header').removeClass('open-line');
		}
	});
}*/


$(document).ready(function() {


/*$('.green-text__btn').on('click', function(e){
e.preventDefault();

	
	$('.hide-info').fadeIn();
	setTimeout(function(){
		$('.hide-info .close .close_i').addClass('active');
	}, 1000)
   
})*/
	
	
$('.hide-info .close').on('click', function(e){
	e.preventDefault();
	$('.hide-info').fadeOut();
	 $('.hide-info .close .close_i').removeClass('active');
});

	if (mobile) {
	/*	var lawyerSlider = $('.practice-lawyer__list');
	if(lawyerSlider.children().length > 1) {
		lawyerSlider.on('initialized.owl.carousel', function () {
			lawyerSlider.css("opacity", 1);
		});
 
		lawyerSlider.owlCarousel({
		  margin: 0,
			loop: false,
		   // autoplay: 1000,
			touchDrag: true,
			mouseDrag: true,
			autoplayTimeout: 8000,
			smartSpeed: 2000,
			autoWidth: true,
			items: 1
		});
	}
	else{
		lawyerSlider.css("opacity", 1);
	}*/
	   
		var newsSlider = $('.news-bottom_i .list');
		if(newsSlider.children().length > 1) {
		newsSlider.on('initialized.owl.carousel', function () {
			newsSlider.css("opacity", 1);
		});
 
		newsSlider.owlCarousel({
		  margin: 10,
			loop: false,
			touchDrag: true,
			mouseDrag: true,
			autoWidth: true,
			items: 1
		});
	}
	else{
		newsSlider.css("opacity", 1);
	}
		
	}
	$(".tabs ul li").click(function() {
		var $this = $(this);
		var index = $this.index();
		$(".tabs ul li").removeClass("active");
		$this.addClass("active");
		$(".slider-contact_i ul li").removeClass("active").eq(index).addClass("active");
		$(".place-info .info").removeClass("active").eq(index).addClass("active");
	});

	$(".social__tab ul li").click(function(e) {
		e.preventDefault();
		var $this = $(this);
		var index = $this.index();
		$(".social__tab ul li").removeClass("active");
		$this.addClass("active");
		$(".social .list .list__item").removeClass("active").eq(index).addClass("active");
		if ($this.hasClass('vk') && !$this.data('loaded')) {
			VK.Widgets.Group("vk_groups", {
				mode: 0,
				width: "220",
				height: "400",
				color1: 'FFFFFF',
				color2: '2B587A',
				color3: '5B7FA6'
			}, 20003922);
			$this.data('loaded', 1);
		}
	});

	$(window).load(function() {
		setTimeout(function() {
			$('.preloader').fadeOut();
		}, 1500);
		if (!mobile) {
			setTimeout(function() {
				$('.line-h').addClass('active');
			}, 3000);
			setTimeout(function() {
				$('.line-i').addClass('active');
			}, 2000);
		}
	});

var columns = $(".content__857 .col");
setEqualHeight(columns);

/*$(window).resize(function(){
	columns.css("height", "auto")

}).resize();
	setEqualHeight(".content__857 .col");
*/
	$('.menu-transition').on('click', function(e) {
		e.preventDefault();
		$('body').addClass('menu-open');
		setTimeout(function() {
			$('.close_i').addClass('active')
		}, 1000);
	});

	
	$('.sub-menu .close').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('menu-open');
		$(this).find('.close_i').removeClass('active');
	});

	
	if (!mobile) {
		$('.item-woman, .col-right .name').on('click', function() {
			$(this).closest('.team').find('.drop-list-w').fadeIn();
			setTimeout(function() {
				$('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		$('.item-man, .col-left .name').on('click', function() {
			$(this).closest('.team').find('.drop-list-m').fadeIn();
			setTimeout(function() {
				$('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		$('.drop-list .close_i').on('click', function() {
			$(this).closest('.team').find('.drop-list').fadeOut();
			$(this).removeClass('active');
		});
	}
	if (mobile) {
		$('.item-woman, .col-right .name').on('click', function() {
			$(this).closest('.list').slideUp();
			$(this).closest('.team').find('.drop-list-w').slideDown();
			setTimeout(function() {
				$('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		$('.item-man, .col-left .name').on('click', function() {
			$(this).closest('.list').slideUp();
			$(this).closest('.team').find('.drop-list-m').slideDown();
			setTimeout(function() {
				$('.drop-list .close_i').addClass('active')
			}, 1000);
		});
		$('.drop-list .close_i').on('click', function() {
			$('.team .list').slideDown();
			$(this).closest('.team').find('.drop-list').slideUp();
			$(this).removeClass('active');
		});
	}


	$('.arrow-icon-up').on('click', function(e) {
		e.preventDefault();
		var body = $("html, body");
		body.animate({
			scrollTop: 0
		}, 2000);
	});
	
		$('.close_i.active').on('click', function(e) {
			$('.map').removeClass('active');
	});
	
	$('.arrow-icon').on('click', function(e) {
		e.preventDefault();
		$.scrollTo('.home-partners',600 );
	});

	$("body").on("click", function(e) {
		if (!$(e.target).closest(".sub-menu").length && !$(e.target).closest(".menu-transition").length) {
			$("body").removeClass('menu-open');
			$('.sub-menu .close .close_i').removeClass('active');
		}
	});

	$(window).scroll(function() {
		var scrolled = $(window).scrollTop();
		console.log(scrolled);
		if (scrolled > $(window).height()) {
			$("body").removeClass('menu-open');
		}
		if (scrolled > 300) {
			$(".home-header").addClass('active');
		}
		if(scrolled > 50){
			$(".btn-menu .text").addClass('active');
		}else{
			$(".btn-menu .text").removeClass('active');
		}

	});


	$('.play-home').on('click', function(e) {
		e.preventDefault();
		$('.home-header').addClass('open-line');
	});

	$('.list-menu__title').on('click', function(e) {
		e.preventDefault();
		if ($('.list-menu').hasClass("active")) {
			$('.list-menu').removeClass("active").find('.list-menu__drop').slideUp();
		} else {
			$('.list-menu').addClass("active").find('.list-menu__drop').slideDown();
		}
	});

	$('.contact-header .info .item').on('click', function(e) {
		e.preventDefault();
		var parent = $(this).closest('.info');
			jQuery('.map').addClass('show');
			if ($('.map').length) {
				//initi
			}
	
		$('.map .close_i').addClass('active');
	});

	$('.map .close_i').on('click', function(e) {
		e.preventDefault();
//		jQuery('.map').css({'opacity':0,'display':'none'});
		jQuery('.map').removeClass('show');
		$('.map .close_i').removeClass('active');
	});

	$('.list-menu__drop a').on('click', function(e) {
		e.preventDefault();
		var str = $(this).text();
		var text = $(this).closest(".list-menu").find('.list-menu__title');
		text.text(str);
		$(this).closest('.list-menu').removeClass("active").find('.list-menu__drop').slideUp();
	});
	$('.order .inp').on('click', function(e) {
		e.preventDefault();
		$('.order .tel').addClass('active');
		$('.order .inp').addClass('active');
	});



    if ($(window).width() > 1025) {
        var s = skrollr.init({
            forceHeight: false
        });
    };
	if (!mobile){

		$('.btn-menu').midnight();
	}

	$(window).resize(function() {
		var wh = $(window).height();
		$('.page-404').height(wh);
		if ($(window).width() > 1025){
			 $('.slider-home_i').css('top', (wh-$('.slider-home_i').height())-97);
		}
	}).resize();


	
	
	

	var inputs = document.getElementById('inputs');
	var addButton = document.getElementById('add-input');
	if (addButton) {
		addButton.onclick = function() {
			var input = document.createElement('input');
			input.type = 'text';
			input.placeholder = 'New Input';
			inputs.appendChild(input);
			document.placeholderPolyfill(input);
		};
	}
});

function initialize(lat, lng) {
	var myLatlng = new google.maps.LatLng(lat, lng);
	var mapOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true,
		panControl: false,
		styles: [
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "landscape",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 18
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 21
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 40
			}
		]
	},
	{
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 19
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
		]
	}
]
	};

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var image = 'img/icons/marker.png';
	var beachMarker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: map,
		icon: image
	});

}

jQuery(function($){
	$(".phone-mask").mask("+7 (999) 999-99-99");
});
