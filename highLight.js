(function($){
	var defaults = {
        foreground: 'red',
        background: 'yellow'
    };
	$.fn.extend({
		"highLight":function(options){
			 if (!isValid(options))
                return this;

			var opt=$.extend({},defaults,options);
			return this.each(
				function(){
					var $this=$(this);
					$this.css({
						backgroundColor: opt.background,
						color: opt.foreground
					});
					var markup = $this.html();
                markup = $.fn.highLight.format(markup);
                $this.html(markup);

				});
		}
	});
	$.fn.highLight.format=function(str){
		return '<strong>'+str+'</strong>';
		
	}
	 function isValid(options) {
        return !options || (options && typeof options === "object") ? true : false;
    }

})($);