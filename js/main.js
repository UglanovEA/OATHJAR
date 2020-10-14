$(document).ready(function () {
  // Tabs
  $(".about__button").click(function (event) {
    event.preventDefault();
    $(".about-content-box").hide();
    var href = $(this).attr("href");
    $(href).fadeIn();
  });
  var windowHeight = $(window).height();


  // Button to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > windowHeight) {
      $("#scrollToTop").fadeIn();
    } else {
      $("#scrollToTop").fadeOut();
    }
  });
  // Click to top
  $("#scrollToTop").click(function (event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0 }, 800);
  });
  $("#scrollToTop").focus(function (event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0 }, 800);
  });
});
