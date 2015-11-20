/* This function listens for a user to click event on a link which has the href containg a '#' wehere a animation 
	occurs where the top of user scroller is then moved to the top of target elemtn with the offSet().top method
*/
$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 40
	        }, 1000);
	        return false;
	      }
	    }
	  });
});
