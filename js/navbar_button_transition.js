$(function () {
  $("#navbarResponsive")
    .on("shown.bs.collapse", function () {
      $("#navbar-hamburger").addClass("hidden");
      $("#navbar-close").removeClass("hidden");
    })
    .on("hidden.bs.collapse", function () {
      $("#navbar-hamburger").removeClass("hidden");
      $("#navbar-close").addClass("hidden");
    });
});
