

/*FUNCTION THAT MAKES IT POSSIBLE TO REUSE THE HTML OF HEADER/NAVBAR INN THE OTHER HTML FILES*/

class Header extends HTMLElement {
  constructor() {
    super();
  }
  
    connectedCallback() {
      this.innerHTML = `


      <!-- NAVIGATION BAR -->
      <header> <!-- NAVBAR -->
      
      
        <!-- NAVIGATION BAR -->
          <header class="header">
            <div class="container">
              <div class="mainHeader">
                <div class="logo">
                  <a href="home.html"><img src="images/logo.svg" height="37"> </a>
                </div>
                <div class="openMenu">
                  <span></span>
                </div>
                <div class="navbarOverlay">
                </div>
      
            <!-- MENU ELEMENTS, WITH DROPDOWN CONTENT -->
            <nav class="menu">
              <div class="closeMenu">
                <img src="images/close.svg" alt="close" height="16px">
              </div>
      
              <ul class="navbar">
      
                <li class="menuElement dropdown">
                  <a href="practiceHome.html" data-toggle="dropdownList">PRACTICE</a>
                  <ul class="dropdownList">
                    <li class="menuElement"><a href="practiceMarket.html">MARKET</a></li>
                    <li class="menuElement"><a href="#">KITCHEN</a></li>
                    <li class="menuElement"><a href="#">BAR</a></li>
                    <li class="menuElement"><a href="#">SCHOOL</a></li>
                  </ul>
                </li>
      
                <li class="menuElement dropdown">
                  <a href="testHome.html" data-toggle="dropdownList">TEST</a>
                  <ul class="dropdownList">
                    <li class="menuElement"><a href="testMarket.html">MARKET</a></li>
                    <li class="menuElement"><a href="#">KITCHEN</a></li>
                    <li class="menuElement"><a href="#">BAR</a></li>
                    <li class="menuElement"><a href="#">SCHOOL</a></li>
                  </ul>
                </li>
      
                <li class="menuElement">
                  <a href="courses.html">COURSES</a></li>
                
                <li class="menuElement">
                  <a href="about.html">ABOUT US</a></li>
                
                <li class="menuElement"> <a href="#">EN ▼ </a></li>
      
              </ul> <!--end navbar class-->
      
            </nav> <!--end nav class-->
          </div> <!--end container class-->
          </div> <!--end mainHeader class-->
        </header> <!--end header class-->
    
    
      `;
    }
  } 
  
customElements.define('header-component', Header);



/*NAVBAR FUNCTION AND BURGER MENU*/

(function () {

  const openMenu = document.querySelector(".openMenu");
  closeMenu = document.querySelector(".closeMenu");
  navBar = document.querySelector(".menu");
  menuOverlay = document.querySelector(".navbarOverlay");
  mediaSize = 785;
  
  
  openMenu.addEventListener("click", toggleNav);
  closeMenu.addEventListener("click", toggleNav);  // close the navBar by clicking outside menu
  menuOverlay.addEventListener("click", toggleNav);
  
  
  function toggleNav() {
  navBar.classList.toggle("open");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("hidden-scrolling");
  }
  
  navBar.addEventListener("click", (event) => 
  { //arrow operator! https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html
      if (event.target.hasAttribute("data-toggle") &&	window.innerWidth <= mediaSize) {
          event.preventDefault(); 	// prevent that goes directly to link when clicked
          const elementWithDropdown = event.target.parentElement;
      if (elementWithDropdown.classList.contains("active")) { // if elementWithDropdown expanded, close it
          closeDropdown();
      }
      else { 			// close expanded elementWithDropdown
          if (navBar.querySelector(".dropdown.active")) {
              closeDropdown();
      }
      elementWithDropdown.classList.add("active"); 				// expand the other elementWithDropdown
      const dropdown = elementWithDropdown.querySelector(".dropdownList");
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      }
  }
  });
  
  
  function closeDropdown() {  //close dropdown inside burger
  navBar.querySelector(".dropdown.active .dropdownList")
      .removeAttribute("style");
  navBar.querySelector(".dropdown.active")
      .classList.remove("active");
  }
  
  
  function resizeFix() {
  if (navBar.classList.contains("open")) {   // if navBar open; close it.
      toggleNav();
  }
  if (navBar.querySelector(".dropdown.active")) {   // close if elementWithDropdown open
      closeDropdown();
  }
  }
  
  window.addEventListener("resize", function () {
  if (this.innerWidth > mediaSize) {
      resizeFix();
  }
  });
  
  })
  
  ();
