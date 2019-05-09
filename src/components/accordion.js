const elementsArray = document.getElementsByClassName("accordion-header");

for (var i = 0; i < elementsArray.length; i++){
    elementsArray[i].addEventListener('click', accordionClickHandler, false);
}

function accordionClickHandler(event) {

	// Setup variables
	let el;
	if(event.target.classList.contains('accordion-header')) {
		el = event.target;
	} else {
		el = event.target.parentNode;
	}
	const elBtn =  el.getElementsByClassName('btn-accordion')[0];
	const sibling = el.nextElementSibling;
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
		elBtn.classList.remove('active');
		sibling.classList.remove('expanded-accordion');
	  } else {
		sibling.style.maxHeight = sibling.scrollHeight + "px";
		elBtn.classList.add('active');
		sibling.classList.add('expanded-accordion');
	}
}
