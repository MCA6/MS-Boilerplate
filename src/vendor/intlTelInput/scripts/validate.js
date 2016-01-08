$('#contactForm').submit(function(e) {
	var telephone = $("#telephone"),
		mobile = $("#mobile");

	// initialise plugin
	telephone.intlTelInput({
		utilsScript : "vendor/telephone/js/utils.js",
	});
	mobile.intlTelInput({
		utilsScript : "vendor/telephone/js/utils.js",
	});
	if (telephone.intlTelInput("isValidNumber")) {
		return true;
	} else {
		telephone.addClass("error");
		$("#alertTelephone").removeClass("hide");
		e.preventDefault();
	}
	if (mobile.intlTelInput("isValidNumber")) {
		return true;
	} else {
		mobile.addClass("error");
		$("#alertMobile").removeClass("hide");
		e.preventDefault();
	}
});