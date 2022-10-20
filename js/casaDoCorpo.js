$(document).ready(function(){
	
	alert($(window).scrollTop())
	
	$("#botao").fadeOut("fast");
	
	
		$("#botao").click(function() {
	$('html, body').animate({scrollTop: 0}, 800);
	return false;
});
	
	
	
	$(window).scroll(function(){
	if($(window).scrollTop() >100){
		$("#navegacao")
		.css("padding","0px")
		.addClass("navbar-fixed-top")
		.css("transition","linear 0.3s")
		
		
		
		
	} else {
			$("#navegacao").removeClass("navbar-fixed-top")
			.css("transition","linear 0.3s")
			.css("padding","10px")
			}
			
		
		if($(window).scrollTop() >=299){
			$("#botao").fadeIn(3000)
		}
		
		else {
			$("#botao").hide("slow")
		}
			
			
			
});




});