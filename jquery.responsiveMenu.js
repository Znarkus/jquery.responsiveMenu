(function ($) {
	
	$.fn.responsiveMenu = function (childrenSelector, $toggle) {
		var $nav = this,
			$first = $nav.find(childrenSelector).first(),
			$last = $nav.find(childrenSelector).last(),
			$body = $('body'),
			tooLarge = false,
			$window = $(window),
			tooLargeSize;
		
		$toggle.hide().click(function () {
			$body.toggleClass('menu_expanded');
		});
		
		$nav.find(childrenSelector + ' a').click(function () {
			$body.removeClass('menu_expanded');
		});
		
		$window.resize(function () {
			if (!tooLarge && $first.position().top != $last.position().top) {
				$body.addClass('menu_too_large');
				tooLarge = true;
				tooLargeSize = $window.width();
				$toggle.show();
			} else if (tooLargeSize && tooLargeSize < $window.width()) {
				$body.removeClass('menu_too_large');
				tooLarge = false;
				tooLargeSize = null;
				$toggle.hide();
			}
		});
		
		$window.resize();
		
		return this;
	};
	
	$.responsiveMenu = {
		createTriggerLink: function () {
			return $('<a>', { href: 'javascript:;' }).addClass('toggle').html('&#9776;');
		}
	}
	
}(jQuery));