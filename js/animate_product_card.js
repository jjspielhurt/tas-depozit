$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 800px, adds/removes solid class
    if ($("#animatedCard").is(":visible")) {
      $("#animatedCard").delay(5000).addClass("animate");

      setTimeout(function () {
        $("#animatedCard").removeClass("animate");
      }, 3000);
    } else {
    }
  });
});
