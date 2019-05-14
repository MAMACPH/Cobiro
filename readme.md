# CraftCMS Boilerplate - MAMA CPH
[![CircleCI](https://circleci.com/gh/MAMACPH/Cobiro.svg?style=svg)](https://circleci.com/gh/MAMACPH/Cobiro)

A boilerplate for Craft CMS using webpack, babel and postcss.
Uses scss-framework from [baseguide](https://basegui.de)

## Requirements
Local server and database using docker.

SSH into the server and install the following:

``` bash
apt-get install webp
```
``` bash
apt-get install jpegoptim​
```
``` bash
apt-get install optipng​
```

Needs [composer](https://getcomposer.org/download/) installed in the project directory - then run: `php composer.phar install`

The Craft setup page will be available at `http://<Hostname>/index.php?p=admin/install (substituting <Hostname>)`
To debug read more about the craft installation: [CraftCMS installation](https://docs.craftcms.com/v3/installation.html)

## Development

``` bash
$ npm install
$ npm run dev # compiles scss and js with hot reloading
```

``` bash
$ docker-compose up -d # starts mysql and craft containers
```

## Production

``` bash
$ npm install
$ npm run build # Compiles, minifies and autoprefixes scss into a seperate css-file and next-gen js
```
