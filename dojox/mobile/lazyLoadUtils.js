//>>built
define("dojox/mobile/lazyLoadUtils",["dojo/_base/kernel","dojo/_base/array","dojo/_base/config","dojo/_base/window","dojo/_base/Deferred","dojo/ready"],function(e,t,i,a,n,o){var r=function(){this._lazyNodes=[];var r=this;i.parseOnLoad&&o(90,function(){var e,i,n,o,s=t.filter(a.body().getElementsByTagName("*"),function(e){return"true"===e.getAttribute("lazy")||(e.getAttribute("data-dojo-props")||"").match(/lazy\s*:\s*true/)});for(e=0;e<s.length;e++)t.forEach(["dojoType","data-dojo-type"],function(a){for(n=t.filter(s[e].getElementsByTagName("*"),function(e){return e.getAttribute(a)}),i=0;i<n.length;i++)o=n[i],o.setAttribute("__"+a,o.getAttribute(a)),o.removeAttribute(a),r._lazyNodes.push(o)})}),o(function(){for(var e=0;e<r._lazyNodes.length;e++){var i=r._lazyNodes[e];t.forEach(["dojoType","data-dojo-type"],function(e){i.getAttribute("__"+e)&&(i.setAttribute(e,i.getAttribute("__"+e)),i.removeAttribute("__"+e))})}delete r._lazyNodes}),this.instantiateLazyWidgets=function(i,a,o){for(var r=new n,s=a?a.split(/,/):[],l=i.getElementsByTagName("*"),d=l.length,u=0;d>u;u++){var c=l[u].getAttribute("dojoType")||l[u].getAttribute("data-dojo-type");if(c){s.push(c);var h=l[u].getAttribute("data-dojo-mixins"),m=h?h.split(/, */):[];s=s.concat(m)}}return 0===s.length?!0:e.require?(t.forEach(s,function(t){e.require(t)}),e.parser.parse(i),o&&o(i),!0):(s=t.map(s,function(e){return e.replace(/\./g,"/")}),require(s,function(){e.parser.parse(i),o&&o(i),r.resolve(!0)}),r)}};return new r});//# sourceMappingURL=lazyLoadUtils.js.map