//>>built
define("dojo/_base/NodeList",["./kernel","../query","./array","./html","../NodeList-dom"],function(e,t,i){var n=t.NodeList,o=n.prototype;return o.connect=n._adaptAsForEach(function(){return e.connect.apply(this,arguments)}),o.coords=n._adaptAsMap(e.coords),n.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"],i.forEach(n.events,function(e){var t="on"+e;o[t]=function(e,i){return this.connect(t,e,i)}}),e.NodeList=n,n});//# sourceMappingURL=NodeList.js.map