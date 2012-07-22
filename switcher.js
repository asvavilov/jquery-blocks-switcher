/**
 * author: Alexander Vavilov (asvavilov)
 * www: yasla.net
 * 
 * simple switcher classes for blocks, plugin for jquery
 * work's with dynamicaly added children
 * 
 * TODO radio|checkbox
 * 
 * Changelog:
 * * 1.1 (20120722)
 * * * Support for dynamicaly added children
 * * 1.0 (20120720)
 * * * First version
 * 
 * options:
 * 	childrenSelector:String // '.item'
 * 	activeClass:String // 'active'
 * 	selectCallback:Function // null
 */
 
(function($){  
	$.fn.switcher = function(options){  
		var defaults = {
			childrenSelector: '.item',
			activeClass: 'active',
			selectCallback: null
		};
		var options = $.extend(defaults, options);
		return this.each(function(){
			var group = $(this);
			var current_active = group.find(options.childrenSelector).filter('.'+options.activeClass);
			group.on('click', options.childrenSelector, function(event){
				if (!current_active.is(this)) {
					current_active.removeClass(options.activeClass);
					var new_active = $(this);
					new_active.addClass(options.activeClass);
					if (options.selectCallback) {
						options.selectCallback.call(null, current_active, new_active);
					}
					current_active = new_active;
				}
			});
		});
	};
})(jQuery);