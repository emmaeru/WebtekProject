function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}