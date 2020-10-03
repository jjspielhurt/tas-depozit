//Get the scrolling button
var mybutton = document.getElementById("goTopBtn");

function scrollFunction() {
  if (
    document.getElementById("parallax").scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    document.getElementById("scrollIndicator").style.display = "none";
  } else {
    mybutton.style.display = "none";
    document.getElementById("scrollIndicator").style.display = "inline-block";
  }
}
function scrollIndicator() {
  const c =
    document.documentElement.scrollTop ||
    document.getElementById("parallax").scrollTop;
  document.ge;
  if (c < 500) {
    window.requestAnimationFrame(scrollIndicator);
    document.getElementById("parallax").scrollTo(0, c + 500 / 30);
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  const c = document.getElementById("parallax").scrollTop;
  if (c > 1) {
    window.requestAnimationFrame(topFunction);
    document.getElementById("parallax").scrollTo(0, c - c / 10);
  }
}
