# TinyFeature
**a fast, tiny, simple browser feature detection**

# How Works?
open `demo.html` file on a browser.
it's a demo file.

# How to Use?
    <script type="text/javascript" src="TinyFeature.js"></script>
    <script type="text/javascript">
    window.onload=function()
    {
    	document.write("<b>" + "FunctionGenerator" + "</b> : " + browser.function_generator + "<br>");
    	document.write("<b>" + "FunctionAsync" + "</b> : " + browser.function_async + "<br>");
    	document.write("<b>" + "FunctionGeneratorAsync" + "</b> : " + browser.function_generator_async + "<br>");
    	document.write("<b>" + "EventTarget" + "</b> : " + browser.event_target + "<br>");
    	document.write("<b>" + "DataTransferItem" + "</b> : " + browser.data_transfer_item + "<br>");
    	document.write("<b>" + "DataTransferItemList" + "</b> : " + browser.data_transfer_item_list + "<br>");
    	document.write("<b>" + "BroadCastChannel" + "</b> : " + browser.broad_cast_channel + "<br>");
    	document.write("<b>" + "ViewPort" + "</b> : " + browser.viewport + "<br>");
    	document.write("<b>" + "Font" + "</b> : " + browser.font + "<br>");
    	document.write("<b>" + "CustomElement" + "</b> : " + browser.custom_element + "<br>");
    	document.write("<b>" + "Animate" + "</b> : " + browser.animate + "<br>");
    	document.write("<b>" + "SVG" + "</b> : " + browser.svg + "<br>");
    	document.write("<b>" + "Touch" + "</b> : " + browser.touch + "<br>");
    	document.write("<b>" + "WebGL" + "</b> : " + browser.webgl + "<br>");
    }
    </script>

# Sample Output of Demo :

    FunctionGenerator : true
    FunctionAsync : true
    FunctionGeneratorAsync : false
    EventTarget : true
    DataTransferItem : true
    DataTransferItemList : true
    BroadCastChannel : true
    ViewPort : false
    Font : true
    CustomElement : true
    Animate : false
    SVG : true
    Touch : false
    WebGL : true

