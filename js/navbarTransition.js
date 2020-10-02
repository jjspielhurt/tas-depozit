$(document).ready(function () {
  // Transition effect for navbar
  $(document.getElementById("parallax")).scroll(function () {
    // checks if window is scrolled more than 800px, adds/removes solid class
    if ($(this).scrollTop() > 700) {
      $(".navbar").addClass("solid");
      $(".navbar-collapse").addClass("solid");
    } else {
      $(".navbar").removeClass("solid");
      $(".navbar-collapse").removeClass("solid");
    }
  });
});
