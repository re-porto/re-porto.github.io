$(document).ready(function(){
	////////////////////////////////////////////
	//Tweets Rotator
	
	$('#twitter_update_list').show();
	
	var tweets = $('#twitter_update_list');
	
	tweets.children('li:not(:first)').hide();
				
	setInterval(function() {
	    tweets.children('li:visible').fadeOut(200, function() {
	    	$(this).index() === $(this).parent().children().length - 1
	    	? $(this).parent().children('li').eq(0).fadeIn(600)
	    	: $(this).next().fadeIn(600);
	    });
	}, 4500);
				
	////////////////////////////////////////////
	
	
	////////////////////////////////////////////
	//Input Placeholder
	$("#email").evoPlaceholder("type your email address");
	
	////////////////////////////////////////////
	
	////////////////////////////////////////////
	// Ajax Subscription
	$('#subscribe_form').submit(function(){
	
		var action = $(this).attr('action');
		
		$('#subscribe_btn').attr('disabled','disabled');
		$('#subscribe_form img.loader').show();		
		
		$.post(action, {
			email: $('#email').val()
		},
			function(data){
				$('#email').hide();
				$('#email').val(data);
				$('#email').fadeIn(800);
				$('#subscribe_form img.loader').fadeOut('fast',function(){$(this).hide()});
				$('#subscribe_form #subscribe_btn').attr('disabled',''); 
				
			});
		
		return false; 
	
	});
	
	////////////////////////////////////////////
	
	////////////////////////////////////////////
	// CV Overlay
	
	$('.cv_show').hover(function(){
		$(this).css('cursor','pointer');
		$('#more_info span').stop(true, true).fadeIn(200);
	}, function(){
		$('#more_info span').stop(true, true).fadeOut(200);
		$(this).css('cursor','auto');
	});
	
	$('#more_info img').hover(function(){
		$(this).attr("src","assets/images/btn_more-hover.png");
	}, function(){
		$(this).attr("src","assets/images/btn_more.png");
	});
	
	$('.cv_show').click(function(){
		$('#cv_overlay').fadeIn(400);
	});
	
	$('.cv_show_out').click(function(){
		$('#cv_overlay').fadeOut(400);
	});
	
	

});
//EvoGraphics Placeholder Plugin
//Copyright - All right reserved
$.fn.evoPlaceholder = function(placeholder){
	var element = this.eq(0);
	
	element.focus(function(){
		if(this.value == placeholder) this.value='';
	}).blur(function(){
		if(this.value.length == 0) this.value= placeholder;
		return(false);
	});
	
	return element.blur();
}