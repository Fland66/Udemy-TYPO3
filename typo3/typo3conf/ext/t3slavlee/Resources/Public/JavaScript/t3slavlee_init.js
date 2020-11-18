/**
 * @project Udemy Course: Learn to create a responsive TYPO3 Template
 * @author Kevin Chileong Lee
 * @copyright 2019. Kevin Chileong Lee. All rights reserved
 */

$(document).ready(function(){
	$(".bxslider").each(function(){
		$(this).bxSlider({
			pause: $(this).attr("data-displaytime"),
			minSlides: $(this).attr("data-imagecount"),
			maxSlides: $(this).attr("data-imagecount"),
			auto: true,
			slideWidth: parseInt($(this).parent().width() / $(this).attr("data-imagecount"), 10) 
		});
	});
});