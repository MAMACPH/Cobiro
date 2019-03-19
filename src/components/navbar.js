(function() {
	const body = document.querySelector('body');
	const mainMenu = document.querySelector('nav.main-menu');
	const mainMenuHeight = mainMenu.offsetHeight;
	const menuToggle = document.querySelector('.menu-toggle');
	const subMenu = document.getElementsByClassName('has-submenu');

	body.style.paddingTop = mainMenuHeight + 'px';
	console.log(body.style)
	mainMenu.addEventListener( 'click', menuClickHandler );

	function menuClickHandler (event) {

		if ( event.target ===  menuToggle ) {

			mainMenu.classList.toggle('closed');
			console.log('clicked menu toggle');

		} else {

			for ( var i = 0; i <= subMenu.length; i++ ) {
				if ( subMenu[i] === event.target ) {
					console.log('clicked submenu', subMenu[i].nextElementSibling);
					subMenu[i].parentNode.classList.toggle('expand');
					subMenu[i].nextElementSibling.style.top = mainMenuHeight - 1 + 'px';
				}
			}
		}
	}
}());
