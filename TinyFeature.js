/*
 * TinyFeature
 * a fast, tiny, simple browser feature detection.
*/
;(function(window,document,undefined)
{
	"use strict";
	var utilities = 
	{
		create : function(element)
		{
			return document.createElement(element);
		},
		bool : function(name,bool)
		{
			if(bool)
			{
				return true;
			}
			return false;
		},
		function : function(name,value)
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
		reference : function(name)
		{
			if(window[name])
			{
				return true;
			}
			return false;
		},
	};
	var browser=
	{
		function_generator : utilities.function('GeneratorFunction','function* g(){}'),
		function_async : utilities.function('AsyncFunction','async function f(){}'),
		function_generator_async : utilities.function('AsyncGeneratorFunction','async function* fg(){}'),
		event_target : utilities.function('EventTarget.constructor','new EventTarget'),
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
