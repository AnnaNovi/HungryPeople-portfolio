function openbox(id) {
	var all = document.querySelectorAll(".menu-list-column");
  var act = document.querySelectorAll(".menu-line__item");
	for (var i = 0; i < all.length; i++) {
		if (all[i].id == id) {
		all[i].style.display = (all[i].style.display == 'none')? 'flex' : 'none';
    act[i].classList.toggle('menu-line__item_active');
		} else {
		  all[i].style.display = 'none';
      act[i].classList.remove('menu-line__item_active')
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
	$('.header-burger').on('click', function(event){
    $(this).toggleClass('header-burger_active');
    $('.header-menu').toggleClass('header-menu_active');
    $('.header-menu__item').toggleClass('header-menu__item_active');
	});
});

function windowSize(){
  if ($(window).width() >= '768'){
    $('.header-burger').removeClass('header-burger_active');
    $('.header-menu').removeClass('header-menu_active');
    $('.header-menu__item').removeClass('header-menu__item_active');
  } else {
  }
}
$(window).on('load resize',windowSize);

//Плавный скролл к якорям
$('a[href^="#"').on('click', function() {
    $('.header-burger').removeClass('header-burger_active');
    $('.header-menu').removeClass('header-menu_active');
    $('.header-menu__item').removeClass('header-menu__item_active');

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});
