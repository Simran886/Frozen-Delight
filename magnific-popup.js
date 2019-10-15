$(document).ready(function() {
	//toggler
	$('.navbar-toggler').click(function(){
		$('.navbar-toggler').toggleClass('change')
		
	})

//sticky navbar less padddin
 $(window).scroll(function(){
	 
let position = $(this).scrollTop();
if(position >= 718){
	$('.navbar').addClass('navbar-background');
		$('.navbar').addClass('fixed-top');
	}
 	else{

		$('.navbar').removeClass('navbar-background');
		$('.navbar').removeClass('fixed-top');
	}
})






  // Custom function which toggles between sticky class (is-sticky)


// Sticky navbar
// =========================
$(document).ready(function () {
	// Custom function which toggles between sticky class (is-sticky)
	var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
		var stickyHeight = sticky.outerHeight();
		var stickyTop = stickyWrapper.offset().top;
		if (scrollElement.scrollTop() >= stickyTop) {
			stickyWrapper.height(stickyHeight);
			sticky.addClass("is-sticky");
		}
		else {
			sticky.removeClass("is-sticky");
			stickyWrapper.height('auto');
		}
	};

	// Find all data-toggle="sticky-onscroll" elements
	$('[data-toggle="sticky-onscroll"]').each(function () {
		var sticky = $(this);
		var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
		sticky.before(stickyWrapper);
		sticky.addClass('sticky');

		// Scroll & resize events
		$(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
			stickyToggle(sticky, stickyWrapper, $(this));
		});

		// On page load
		stickyToggle(sticky, stickyWrapper, $(window));
	});
});





//smooth scroll
$('.nav-item a, .header-link, #back-to-top').click(function(){
	link.preventDefault();
	
	let target = $(this).attr('href')
	 
	$('html,body').stop().animate({
		scrollTop: $(target).offset().top - 25
	},3000);

})


//back to top
$(window).scroll(function() {
	
	let position = $(this).scrollTop();
     if(position >= 718){
		$('#back-to-top').addClass('scrollTop');
		
	}
	else{
		$('#back-to-top').removeClass('scrollTop');
	}


})



	//magnefic popup
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});



});
