# jquery.cookieBar 

Forked from http://carlwoodhouse.github.com/jquery.cookieBar

A simple, lightweight jQuery plugin for creating a notification bar that is dismissable and dismiss is saved by cookie. Perfect for implementing the eu cookielaw! Automatically detects protocol and adjusts secure attribute accordingly. 

Uses: [jQuery.Cookie](https://github.com/carhartl/jquery-cookie) - bundled, no need to reference.

## Installation

Two scripts are included:
cookieBar.js script is the plugin.
custom.js script where the customizable parmetres are set and where protocol is detected.

    <script src="/path/jquery.cookieBar.js"></script>
    <script src="/path/jquery.custom.js"></script>

Include scripts *after* the jQuery library.
	
If you want the default styles also include the css, if not feel free to style it as you see wish!

	<link rel="stylesheet" type="text/css" href="cookiebar.css">


## Usage

Update $.cookieBar parametres within custom.js to customize plugin.


## Options

**cookieName** - Set the cookie name

*Default: 'cb-enabled'*

**cookieValue** - Set the cookie value

*Default: 'cb-accepted'*

**domain** - Define the domain the cookie operates on

    domain: 'domain.com'

**path** - Define the path the cookie is valid for
 
	path: '/path/for/cookie'

*Default: '/' (site wide)*

**expires** - Expiry time of cookie (Days)
    
*Default: '30'*

**secure** - Define if the cookie transmission requires secure protocal (https)

*Default: false*

**prependElement** - sets the attribute you want the cookieBar to append to.

*Default: 'body'*
   
## Authors
* [Ryan Gosden] (https://github.com/RyanGosde)

## Authors from original fork:
* [Carl Woodhouse](https://github.com/carlwoodhouse)
* [Craig Hamnett](https://github.com/craighamnett)
