window.accordionClickHandler = function(event) {

	// Setup variables
	const el = event.target;
	const sibling = el.parentNode.nextElementSibling;
	const activeBtn = document.getElementsByClassName("btn-accordion");
	const expandedAcc = document.getElementsByClassName("accordion-text");
	let expanded;

	// Set expanded state of event.target before removing class
	if (sibling.classList.contains('expanded-accordion')) {
		expanded = true;
	  } else {
		expanded = false;
	}

	// remove class active on all buttons
	if( activeBtn ) {
		for ( let i = 0; i < activeBtn.length; i++ ) {
			activeBtn[i].classList.remove('active');
		};
	}

	// remove class expanded-accordion on all accordion-text
	if( expandedAcc ) {
		for ( let i = 0; i < expandedAcc.length; i++ ) {
			expandedAcc[i].classList.remove('expanded-accordion');
			expandedAcc[i].style.maxHeight = null;
		};
	}

	// Set appropriate classes and maxHeight depending on state of event.target
	if (expanded) {
		sibling.style.maxHeight = null;
		el.classList.remove('active');
		sibling.classList.remove('expanded-accordion');
	  } else {
		sibling.style.maxHeight = sibling.scrollHeight + "px";
		el.classList.add('active');
		sibling.classList.add('expanded-accordion');
	}
}
