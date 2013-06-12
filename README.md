jquery.responsiveMenu
=====================

Automatically fit navigation to container by adding appropriate classes.


## Features

Will add classes `menu_expanded` if the menu toggle button is clicked, and `menu_too_large` if the menu needs to be shrinked.


## Usage

	[the navigation container element, which will receive all classes].responsiveMenu('[menu item selector]', [menu toggle button element]);

You can use `$.responsiveMenu.createTriggerLink()` to create a menu toggle button. Example:

	$('#header').responsiveMenu(
		'#main_nav > ol > li', 
		$.responsiveMenu.createTriggerLink().addClass('button2').appendTo($('#header > .inner'))
	);


## License

Copyright 2012, [Markus Hedlund](http://markushedlund.com), [Snowfire](http://snowfireit.com).  
Licensed under the MIT License.  
Redistributions of files must retain the above copyright notice.