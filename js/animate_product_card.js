$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 800px, adds/removes solid class
    if ($("#animatedCard").is(":visible")) {
      $("#animatedCard").delay(1000).addClass("animate");
      setTimeout(() => $("#animatedCard").removeClass("animate"), 4000);
    } else {
    }
  });
});
