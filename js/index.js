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

  // $('.centered-y > p > a').click(function(e){
  //   e.preventDefault();
  //   var url = $(this).attr('href');
  //   window.open(url, '_blank');
  // });

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
