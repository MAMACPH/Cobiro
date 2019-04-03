(function() {

	// Initial variables
	const body = document.querySelector('body');
	const mainMenu = document.querySelector('nav.main-menu');
	const menuToggle = document.querySelector('.menu-toggle');
	const subMenu = document.getElementsByClassName('has-submenu');
	const navbarOverlay = document.querySelector('.navbar-overlay');
	let mainMenuHeight = mainMenu.offsetHeight;

	// Setting initial padding-top on body equal to height of navbar
	body.style.paddingTop = mainMenuHeight + 'px';

	// Event listeners for clicks and browser resize
	mainMenu.addEventListener( 'click', menuClickHandler, false );
	window.addEventListener( "resize", windowResizeHandler, false );

	// Handling resizing of the browser
	function windowResizeHandler () {

		mainMenuHeight = mainMenu.offsetHeight;
		body.style.paddingTop = mainMenuHeight + 'px';

	}

	// Handling all clicks on navbar
	function menuClickHandler (event) {

		// If the clicked element is the burger-menu
		if ( event.target ===  menuToggle ) {
			event.preventDefault();

			if( mainMenu.classList.contains('closed') ) {
				menuToggle.setAttribute("aria-expanded", 'true');
			} else {
				menuToggle.setAttribute("aria-expanded", 'false');
			}

			mainMenu.classList.toggle('closed');

		} else if ( event.target.classList.contains('has-submenu') ) {
		// Else loop over menu items within subMenu with submenus and check if the clicked element is equal to it
			for ( var i = 0; i <= subMenu.length; i++ ) {

				if ( subMenu[i] === event.target ) {
					event.preventDefault();

					// Add a class to the parent element of the clicked subMenu[i] item in the subMenu array
					expandSubMenu(i);
				}
			}
		} else if ( event.target.parentNode.classList.contains('has-subsubmenu') ) {
			event.preventDefault();
			event.target.parentNode.classList.toggle('expanded');
			if( event.target.parentNode.classList.contains('expanded') ) {
				event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.children[0].offsetHeight + 'px';
			} else {
				event.target.nextElementSibling.style.maxHeight = null;
			}
		}
	}
	function overlayClickHander() {
		console.log(subMenu);
		for ( var i = 0; i < subMenu.length; i++ ) {
			if ( subMenu[i].parentNode.classList.contains('expand') ) {
				expandSubMenu(i);
			}
		}
	}

	function expandSubMenu(i) {
		subMenu[i].parentNode.classList.toggle('expand');

		body.classList.toggle('submenu-expanded');

		subMenu[i].nextElementSibling.style.top = mainMenuHeight - 1 + 'px';

		if ( subMenu[i].parentNode.classList.contains('expand') ) {
			subMenu[i].nextElementSibling.style.maxHeight = subMenu[i].nextElementSibling.children[0].offsetHeight + 'px';
			setTimeout(() => subMenu[i].nextElementSibling.style.maxHeight = 'none', 400);
			navbarOverlay.addEventListener( 'click', overlayClickHander, false );
		} else {
			subMenu[i].nextElementSibling.style.maxHeight = subMenu[i].nextElementSibling.offsetHeight + 'px';
			setTimeout(() => subMenu[i].nextElementSibling.style.maxHeight = null, 0);
			navbarOverlay.removeEventListener( 'click', overlayClickHander);
		}
	}

}());
