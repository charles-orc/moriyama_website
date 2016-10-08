$('.menu-hamburger').click(function(){
  $('.menu-panel').show();
  $('.menu-hamburger').hide();
});

$('.menu-close, .menu-list > a').click(function(){
  $('.menu-panel').hide();
  $('.menu-hamburger').show();
});
