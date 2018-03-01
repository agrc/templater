//>>built
define("dojox/mobile/lazyLoadUtils",["dojo/_base/kernel","dojo/_base/array","dojo/_base/config","dojo/_base/window","dojo/_base/Deferred","dojo/ready"],function(e,t,i,a,o,r){return new function(){this._lazyNodes=[];var n=this;i.parseOnLoad&&r(90,function(){var e,i,o,r,s=t.filter(a.body().getElementsByTagName("*"),function(e){return"true"===e.getAttribute("lazy")||(e.getAttribute("data-dojo-props")||"").match(/lazy\s*:\s*true/)});for(e=0;e<s.length;e++)t.forEach(["dojoType","data-dojo-type"],function(a){for(o=t.filter(s[e].getElementsByTagName("*"),function(e){return e.getAttribute(a)}),i=0;i<o.length;i++)r=o[i],r.setAttribute("__"+a,r.getAttribute(a)),r.removeAttribute(a),n._lazyNodes.push(r)})}),r(function(){for(var e=0;e<n._lazyNodes.length;e++){var i=n._lazyNodes[e];t.forEach(["dojoType","data-dojo-type"],function(e){i.getAttribute("__"+e)&&(i.setAttribute(e,i.getAttribute("__"+e)),i.removeAttribute("__"+e))})}delete n._lazyNodes}),this.instantiateLazyWidgets=function(i,a,r){for(var n=new o,s=a?a.split(/,/):[],d=i.getElementsByTagName("*"),l=d.length,h=0;h<l;h++){var c=d[h].getAttribute("dojoType")||d[h].getAttribute("data-dojo-type");if(c){s.push(c);var u=d[h].getAttribute("data-dojo-mixins"),m=u?u.split(/, */):[];s=s.concat(m)}}return 0===s.length||(e.require?(t.forEach(s,function(t){e.require(t)}),e.parser.parse(i),r&&r(i),!0):(s=t.map(s,function(e){return e.replace(/\./g,"/")}),require(s,function(){e.parser.parse(i),r&&r(i),n.resolve(!0)}),n))}}});//# sourceMappingURL=lazyLoadUtils.js.map