function openbox(id) {
	var all = document.querySelectorAll(".block-of-text");
	for (var i = 0; i < all.length; i++) {
		if (all[i].id == id) {
		all[i].style.display = (all[i].style.display == 'none')? 'block' : 'none';
		} else {
		all[i].style.display = 'none';
		}
	}
}

var swiper = new Swiper(".foodSwiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	initialSlide: 1
});

$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$("a.scroll").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
});