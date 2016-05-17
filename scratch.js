	var options = [
		{selector: '.landing-container', offset: 200, callback: function() {
	    	$('nav').find('#coaches').removeClass('link-scroll');
	    	$('nav').find('#schedule').removeClass('link-scroll');
	    	$('nav').find('#contact').removeClass('link-scroll');
	    	$('nav').find('#mission').removeClass('link-scroll');
	    } },
	    {selector: '.about-container', offset: 500, callback: function() {
	    	$('nav').find('#coaches').removeClass('link-scroll');
	    	$('nav').find('#schedule').removeClass('link-scroll');
	    	$('nav').find('#contact').removeClass('link-scroll');
	    	$('nav').find('#mission').addClass('link-scroll');
	    } },
	    {selector: '.coaches-container', offset: 200, callback: function() {
	    	$('nav').find('#schedule').removeClass('link-scroll');
	    	$('nav').find('#contact').removeClass('link-scroll');
	    	$('nav').find('#mission').removeClass('link-scroll');
	    	$('nav').find('#coaches').addClass('link-scroll');
	    } },
	    {selector: '.schedule-container', offset: 200, callback: function() {
	    	$('nav').find('#contact').removeClass('link-scroll');
	    	$('nav').find('#mission').removeClass('link-scroll');
	    	$('nav').find('#coaches').removeClass('link-scroll');
	    	$('nav').find('#schedule').addClass('link-scroll');
	    } },
	     {selector: 'footer', offset: 200, callback: function() {
	    	$('nav').find('#schedule').removeClass('link-scroll');
	    	$('nav').find('#mission').removeClass('link-scroll');
	    	$('nav').find('#coaches').removeClass('link-scroll');
	    	$('nav').find('#contact').addClass('link-scroll');
	    } },
	    ];
	  Materialize.scrollFire(options);