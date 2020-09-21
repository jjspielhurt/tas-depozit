var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideElement");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    x[x.length - 1].style.display = "block";
  } else {
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 30);
  } // Change image every 2 seconds
}
