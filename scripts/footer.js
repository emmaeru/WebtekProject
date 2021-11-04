class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `


      
		<footer> <!-- FOOTER -->

        <div class="contactInfo"> <!-- CONTACT INFO -->
            <p>Idiomas Por Idiotas
            <br>mail@outlook.com
            <br>+47 123 45 678</p>
        </div>

        <div class="socialMedia"> <!-- SOCIAL MEDIA ICON / LINKS -->
            <a href="http://www.facebook.com"> <img src="images/faceBook.svg"> </a>
            <a href="http://www.instagram.com"> <img src="images/instaGram.svg"> </a>
            <a href="mailto:mail@outlook.com"> <img src="images/mail.svg" target="_blank"> </a>
        </div>

        <div class="pageLinks"> <!-- LINK TO PAGES -->
            <a href="http://about.html">Contact us</a>
            <a href="http://courses.html">Join a physical course!</a>
        </div>
        
    </footer>
    
      `;
    }
  }
  
  customElements.define('footer-component', Footer);