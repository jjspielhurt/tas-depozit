//Get the button
var mybutton = document.getElementById("goTopBtn");

function scrollFunction() {
  if (
    document.getElementById("parallax").scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  const c =
    document.documentElement.scrollTop ||
    document.getElementById("parallax").scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(topFunction);
    document.getElementById("parallax").scrollTo(0, c - c / 8);
  }
}
