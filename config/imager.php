<?php
return array(
	'optimizers' => ['jpegtran', 'optipng'],
	'allowUpscale' => false,
	'filenamePattern' => '{fullname}__{transformString|shorthash}.{extension}',
	'useCwebp' => true,
	'imagerSystemPath' => '@webroot/images/',
	'imagerUrl' => 'images/'
);
?>
