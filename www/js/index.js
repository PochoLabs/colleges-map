$(document).ready(function(){
  var activeClass = 'active';

  $('.centered-y > p > a, a').click(function(e){
    e.preventDefault();
    var url = $(this).attr('href');
    console.log(url + ' clicked');
    window.open(url, '_blank');
  });

  $('.map-point').click(function(e){
    $('.map-point').removeClass(activeClass);
    $(this).addClass(activeClass);
    e.stopPropagation();
  });

  $('body').click(function(e){
    $('.map-point').removeClass(activeClass);
    e.stopPropagation();
  });
});
