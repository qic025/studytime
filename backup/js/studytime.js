/*
function verticalCenterStuff() {
  var windowHeight = $(window).height();
  var loginBoxHeight = $('#login-form').innerHeight();
  var mathLogin = (windowHeight / 2) - (loginBoxHeight / 2);
  $('#login-form').css('margin-top', mathLogin);
}

$(window).resize(function() {
  verticalCenterStuff();
});
verticalCenterStuff();
*/

$('#btn-login').click(function() {
  $(this).parent().fadeOut(function() {
    $('#login-form').fadeIn();
  })
});

