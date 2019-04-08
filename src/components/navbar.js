(function() {

	// Initial variables
	const body = document.querySelector('body');
	const mainMenu = document.querySelector('nav.main-menu');
	const menuToggle = document.querySelector('.menu-toggle');
	// const subMenu = document.getElementsByClassName('has-submenu');
	// const navbarOverlay = document.querySelector('.navbar-overlay');
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
		if (window.innerWidth < '960') {
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
			// Else Check if the clicked element is equal to it
				event.preventDefault();
				// Add a class to the parent element of the clicked subMenu[i] item in the subMenu array
				expandSubMenu(event.target);

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
	}

	// function overlayClickHander() {
	// 	for ( var i = 0; i < subMenu.length; i++ ) {
	// 		if ( subMenu[i].parentNode.classList.contains('expand') ) {
	// 			expandSubMenu(subMenu[i]);
	// 		}
	// 	}
	// }

	function expandSubMenu(el) {


		// el.nextElementSibling.style.top = mainMenuHeight - 1 + 'px';

		if ( el.parentNode.classList.contains('expand') ) {
			el.nextElementSibling.style.maxHeight = el.nextElementSibling.offsetHeight + 'px';
			setTimeout(() => el.nextElementSibling.style.maxHeight = null, 0);
			// navbarOverlay.removeEventListener( 'click', overlayClickHander);
		} else {
			el.nextElementSibling.style.maxHeight = el.nextElementSibling.children[0].offsetHeight + 'px';
			setTimeout(() => el.nextElementSibling.style.maxHeight = 'none', 400);
			// navbarOverlay.addEventListener( 'click', overlayClickHander, false );
		}
		el.parentNode.classList.toggle('expand');
		body.classList.toggle('submenu-expanded');
	}

}());
