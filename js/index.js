jQuery(document).ready(function($){
    
    $("#testimonial-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        autoPlay:true
    })
    
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

$("#section01, #section02, #section03, #section04, #section05").click(function(){
    var height = $(window).height();
    var hc = $(window).scrollTop()+height
    
        $('html, body').animate({
            scrollTop: $(window).scrollTop()+height +'px'
        }, 400)   
});


$("#scroll").click(function(){
    
    var height = $(window).height();
    var hc = $(window).scrollTop()+height
    if(hc <= 2*height){
        $('html, body').animate({
            scrollTop: $(window).scrollTop()+height +'px'
        }, 800)
    }
    else{
        $('html, body').animate({
            scrollTop: $(window).scrollTop()+height +'px'
        }, 800)
        $("#scroll").fadeOut();
        $("#scrollTop").fadeIn();
    }
});

$(".toggle-up").click(function(){
    $('html,body').animate({
        scrollTop:0
    },400)
});

