class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
    


    <header> <!-- NAVBAR -->

      <a class="Logo" href="home.html"><img src="images/logo.svg" height="37"></a> <!-- LOGO / HOME -->

      <ul> <!-- NAVBAR OPTIONS -->
          <li><a href="practice/practiceHome.html" id="practice">PRACTICE</a></li>
          <li><a href="test/testHome" id="test">TEST</a></li>
          <li><a href="courses.html" id="courses">COURSES</a></li>
          <li><a href="about.html" id="about">ABOUT US</a></li>
          <li style="line-height: 28px;">EN ▼</li>
      </ul>
      
    </header>
      
    
      `;
    }
  }
  
  customElements.define('header-component', Header);

//https://www.freecodecamp.org/news/reusable-html-components-how-to-reuse-a-header-and-footer-on-a-website/
