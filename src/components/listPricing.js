(function() {
	const listPricing = document.getElementsByClassName("list-pricing");

	if (listPricing) {
		for (let i = 0; i < listPricing.length; i++) {

			const priceCaptions = listPricing[i].getElementsByClassName("price-caption");

			if ( priceCaptions[0].offsetHeight > priceCaptions[1].offsetHeight) {
				priceCaptions[1].style.height = priceCaptions[0].offsetHeight + 'px';

			} else if ( priceCaptions[0].offsetHeight < priceCaptions[1].offsetHeight ) {
				priceCaptions[0].style.height = priceCaptions[1].offsetHeight + 'px';
			}
		}
	}

})();
