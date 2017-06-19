$('.menu-hamburger').click(function(){
  $('.menu-panel').show();
  $('.menu-hamburger').hide();
});

$('.menu-close, .menu-list').click(function(){
  $('.menu-panel').hide();
  $('.menu-hamburger').show();
});

$('.top-menu').hide();

// var waypoints = $('#waypoint_menu_close').waypoint({
//   handler: function(direction) {
//     $('.menu-hamburger').show();
//   }
// })
