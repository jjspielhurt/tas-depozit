menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function () {
  setTimeout(function () {
    // show x button
    if (!document.getElementById("menu-btn").classList.contains("collapsed")) {
      $("#navbar-hamburger").addClass("hidden");
      $("#navbar-close").removeClass("hidden");
    } else {
      // show hamburger
      $("#navbar-hamburger").removeClass("hidden");
      $("#navbar-close").addClass("hidden");
    }
  }, 100);
});
$(".navbar-nav>li>a").on("click", function () {
  $("#menu-btn").trigger("click");
});
