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

$(document).ready(function(){
    $('.description').slick({
		dots: true,
		initialSlide: 1
    });
});

$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});