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



//show and hide dropdown on hover click
function show_hide() {
    var hover = document.getElementById("list-items");
    if(hover.style.display ==="none") {
      hover.style.display ="block";
    } else {
      hover.style.display ="none";
    } 
}
