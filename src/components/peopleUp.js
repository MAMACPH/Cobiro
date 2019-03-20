window.peopleClickHandler = function(event) {

	const el = event.target;

	if ( el.parentNode.classList.contains('expand') ) {
		el.innerText = 'View full profile';
	} else {
		el.innerText = 'Hide full profile';
	}

	el.parentNode.classList.toggle('expand');

}
