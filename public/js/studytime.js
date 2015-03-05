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

$(document).ready(function(){
    $(".version_a").click(function(event){
      console.log("A clicked");
    woopra.track("a_version_click");
  });

  $(".version_b").click(function(){
    console.log("B clicked");
    woopra.track("b_version_click");
  });
});

$('#btn-login').click(function() {
  $(this).parent().fadeOut(function() {
    $('#login-form').fadeIn();
  })
});