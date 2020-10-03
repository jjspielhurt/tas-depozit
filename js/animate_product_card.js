$(document).ready(function () {
  // Transition effect for navbar
  $(document.getElementById("parallax")).scroll(function () {
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
function flipCard(id) {
  console.log(id);
  if (document.getElementById(id).classList.contains("animate")) {
    $("#" + id).removeClass("animate");
  } else {
    $("#" + id).addClass("animate");
  }
}
