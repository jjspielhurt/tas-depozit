$(document).ready(function () {
  // Transition effect for navbar
  $(window).scroll(function () {
    // checks if window is scrolled more than 800px, adds/removes solid class
    if ($(this).scrollTop() > 800) {
      $(".navbar").addClass("solid");
      $(".navbar-collapse").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
      $(".navbar-collapse").removeClass("solid");
    }
  });
});
