window.peopleClickHandler = function(event) {

	const el = event.target;
	const text = el.previousElementSibling;
	const textHeight = text.scrollHeight;

	if ( el.parentNode.classList.contains('expand') ) {
		el.innerText = 'View full profile';
		text.style.maxHeight = null;
	} else {
		el.innerText = 'Hide full profile';
		text.style.maxHeight = textHeight + 'px';
	}
	console.log(text, textHeight);
	el.parentNode.classList.toggle('expand');

}
