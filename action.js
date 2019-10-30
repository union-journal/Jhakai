$(document).ready(function() {
  $(window).scroll(function() {
    $(".poem").css("opacity", 1 - $(window).scrollTop() / $(".poem").height());
  });
});
