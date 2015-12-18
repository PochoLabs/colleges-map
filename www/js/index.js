$(document).ready(function(){
	// Change from style positioning to custom data attributes
	$('.map-point').each(function(){
		var top = $(this).attr('data-top') + '%';
		var left = $(this).attr('data-left') + '%';
		$(this).animate({
			top: top,
			left: left
		});
	});


  var activeClass = 'active';


  $('.map-point').click(function(e){
    $('.map-point').removeClass(activeClass);
    $(this).addClass(activeClass);
    e.stopPropagation();
		var useThis = $(this);


  });

  $('body').click(function(e){
    $('.map-point').removeClass(activeClass);
    e.stopPropagation();

  });
});
