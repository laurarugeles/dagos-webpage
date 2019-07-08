$(document).ready(function(){
	$('#submit').click(function(){
		$.post("http://www.aspsols.com/MailSender/MailSender",$("#contact-form").serialize());
		var $contactform = $("#contact-form");
	    $($contactform).find("input[type=text] , textarea ").each(function(){
	         $(this).val('');            
	    });
	});
});