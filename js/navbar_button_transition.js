menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", function () {
  // show x button
  if (document.getElementById("navbar-close").classList.contains("hidden")) {
    $("#navbar-hamburger").addClass("hidden");
    $("#navbar-close").removeClass("hidden");
  } else {
    // show hamburger
    $("#navbar-hamburger").removeClass("hidden");
    $("#navbar-close").addClass("hidden");
  }
});
