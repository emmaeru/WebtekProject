class Header extends HTMLElement {
  constructor() {
    super();
  }
  
    connectedCallback() {
      this.innerHTML = `

      <header> <!-- NAVBAR -->

        <a class="Logo" href="home.html"><img src="images/logo.svg" height="37"></a> <!-- LOGO / HOME -->

        <ul> <!-- NAVBAR OPTIONS -->
          <li><a href="practiceHome.html" id="practice">PRACTICE</a></li>
          <li><a href="testHome.html" id="test">TEST</a></li>
          <li><a href="courses.html" id="courses">COURSES</a></li>
          <li><a href="about.html" id="about">ABOUT US</a></li>
          <li><a href="home.html" id="en">EN ▼</a></li>
        </ul>
        
      </header>
      `;
    }
  } 
  
customElements.define('header-component', Header);
