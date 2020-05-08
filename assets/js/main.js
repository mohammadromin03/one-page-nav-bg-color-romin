(function ($) {
 "use strict";
 
	 /*=====================
	       Header Menu
      ===================== */
     $(window).scroll(function() {
      if ($(document).scrollTop() > 100) {
        $('.navbar').addClass('scrolling-header');
      } else {
        $('.navbar').removeClass('scrolling-header');
      }
    });
	   
	   
		var topoffset = 73; //variable for menu height
		  //Use smooth scrolling when clicking on navigation
		  $('.navbar-nav a').click(function() {
			if (location.pathname.replace(/^\//,'') === 
			  this.pathname.replace(/^\//,'') && 
			  location.hostname === this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top-topoffset
				}, 800);
				return false;
			  } //target.length
			} //click function
		  }); //smooth scrolling	   
	   

 
 

  
   /*=============== 
		Counter 
	=================*/
  $('.counter').countUp();

  



	
    /*========== 
	scroll_up 
  ============*/
  var web  = $(".scroll_up");
		$(window).scroll(function(){		
			if($(this).scrollTop() > 300){
				web.addClass("weblift");
			}else{
				web.removeClass("weblift");
			}		
		});
		
		web.on('click',function(){
			$("html, body").animate({scrollTop:0}, 2000)
		});
				

  
})(jQuery); 