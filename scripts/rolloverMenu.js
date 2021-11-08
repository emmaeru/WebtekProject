
(function () {

	const openMenu = document.querySelector(".openMenu");
	closeMenu = document.querySelector(".closeMenu");
	navBar = document.querySelector(".menu");
	menuOverlay = document.querySelector(".navbarOverlay");
	mediaSize = 785;


	openMenu.addEventListener("click", toggleNav);
	closeMenu.addEventListener("click", toggleNav);
	// close the navBar by clicking outside
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
		if (elementWithDropdown.classList.contains("active")) { // if elementWithDropdown expanded, collapse it
			closeDropdown();
		}
		else { 			// collapse expanded elementWithDropdown
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
	if (navBar.classList.contains("open")) {   // if navBar open. close
		toggleNav();
	}
	if (navBar.querySelector(".dropdown.active")) {   // collapse it if elementWithDropdown open
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
