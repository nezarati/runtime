/*
 * TinyFeature
 * a fast, tiny, simple browser feature detection.
*/
;(function(window,document)
{
	"use strict";
	var utilities = 
	{
		create : function(value)
		{
			return document.createElement(value);
		},
		function : function(value)
		{
			try
			{
				Function(value);
				return true;
			}
			catch(why)
			{
				return false;
			}
		},
		reference : function(value)
		{
			if(window[value])
			{
				return true;
			}
			return false;
		},
	};
	var browser=
	{
		function_generator : utilities.function('function* g(){}'),
		function_async : utilities.function('async function f(){}'),
		function_generator_async : utilities.function('async function* fg(){}'),
		event_target : utilities.function('new EventTarget'),
		data_transfer_item : utilities.reference('DataTransferItem'),
		data_transfer_item_list : utilities.reference('DataTransferItemList'),
		broad_cast_channel : utilities.reference('BroadcastChannel'),
		viewport : utilities.reference('VisualViewport'),
		font : utilities.reference('FontFace'),
		custom_element : utilities.reference('customElements'),
		animate : utilities.reference('Element.prototype.animate'),
		svg : !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,
		touch : !!(("ontouchstart" in window) || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch),
		webgl : (function(element)
						{
							try
							{
								return !!(window.WebGLRenderingContext && (element.getContext("webgl") || element.getContext("experimental-webgl")));
							}
							catch(error)
							{
								return false;
							}
						})(utilities.create("canvas")),
	};
	window.browser = browser;
}(window,document));
