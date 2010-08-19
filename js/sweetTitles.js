/*
Sweet Titles (c) Creative Commons 2009
http://creativecommons.org/licenses/by-nc-sa/3.0/
Author: Leeiio | http://leeiio.me
*/

/*
Something Special tipElements
Do not include href="#xxx" : a:not([href^='#'])
*/
var sweetTitles = {
	x : 10,								// @Number: x pixel value of current cursor position
	y : 20,								// @Number: y pixel value of current cursor position
	tipElements : "a",	    			// @Array: Allowable elements that can have the toolTip,split with ","
	init : function() {
		$(this.tipElements).mouseover(function(e){
			this.myTitle = this.title;
			this.myHref = this.href;
			this.myHref = (this.myHref.length > 30 ? this.myHref.toString().substring(0,30)+"..." : this.myHref);
			this.title = "";
			var tooltip = "<div id='tooltip'><p>"+this.myTitle+"<em>"+this.myHref+"</em>"+"</p></div>";
			$('body').append(tooltip);
			$('#tooltip')
				.css({
					"opacity":"0.8",
					"top":(e.pageY+20)+"px",
					"left":(e.pageX+10)+"px"
				}).show('fast');	
		}).mouseout(function(){
			this.title = this.myTitle;
			$('#tooltip').remove();
		}).mousemove(function(e){
			$('#tooltip')
			.css({
				"top":(e.pageY+20)+"px",
				"left":(e.pageX+10)+"px"
			});
		});
	}
};
$(function(){
	sweetTitles.init();
});