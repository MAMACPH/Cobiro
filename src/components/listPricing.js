(function() {
	const priceCaptions = document.getElementsByClassName("price-caption");

	if( priceCaptions.length > 0 ) {

		if ( priceCaptions[0].offsetHeight > priceCaptions[1].offsetHeight) {

			priceCaptions[1].style.height = priceCaptions[0].offsetHeight + 'px';

		} else if ( priceCaptions[0].offsetHeight < priceCaptions[1].offsetHeight ) {

			priceCaptions[0].style.height = priceCaptions[1].offsetHeight + 'px';

		}
	}

})();
