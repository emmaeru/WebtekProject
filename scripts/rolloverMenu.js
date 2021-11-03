/*

https://www.w3schools.com/howto/howto_css_dropdown.asp

https://blog.hubspot.com/website/html-dropdown
https://www.javatpoint.com/how-to-create-dropdown-list-using-javascript
*/

function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}