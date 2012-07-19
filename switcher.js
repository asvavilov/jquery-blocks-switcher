/**
 * author: Alexander Vavilov (asvavilov)
 * www: yasla.net
 * ver: 1.0 (20120720)
 * 
 * TODO radio|checkbox
 * 
 * options:
 * 	childrenSelector:String
 * 	activeClass:String
 * 	selectCallback:Function
 */
(function($){  
	$.fn.switcher = function(options){  
		var defaults = {
			childrenSelector: '> *',
			activeClass: 'active',
			selectCallback: null
		};
		var options = $.extend(defaults, options);
		return this.each(function(){
			var group = $(this);
			var children = group.find(options.childrenSelector);
			var current_active = children.filter('.'+options.activeClass);
			children.on('click', function(event){
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