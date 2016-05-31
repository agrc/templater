//>>built
define("dojox/drawing/util/common",["dojo","dojox/math/round"],function(e,t){var a={},i=0;return{radToDeg:function(e){return 180*e/Math.PI},degToRad:function(e){return e*Math.PI/180},angle:function(e,a){if(a){a/=180;var i=this.radians(e),r=Math.PI*a,n=t(i/r),o=n*r;return t(this.radToDeg(o))}return this.radToDeg(this.radians(e))},oppAngle:function(e){return(e+=180)>360?e-=360:e,e},radians:function(e){return Math.atan2(e.start.y-e.y,e.x-e.start.x)},length:function(e){return Math.sqrt(Math.pow(e.start.x-e.x,2)+Math.pow(e.start.y-e.y,2))},lineSub:function(e,t,a,i,r){var n=this.distance(this.argsToObj.apply(this,arguments));n=r>n?r:n;var o=(n-r)/n,s=e-(e-a)*o,d=t-(t-i)*o;return{x:s,y:d}},argsToObj:function(){var e=arguments;return e.length<4?e[0]:{start:{x:e[0],y:e[1]},x:e[2],y:e[3]}},distance:function(){var e=this.argsToObj.apply(this,arguments);return Math.abs(Math.sqrt(Math.pow(e.start.x-e.x,2)+Math.pow(e.start.y-e.y,2)))},slope:function(e,t){return e.x-t.x?(e.y-t.y)/(e.x-t.x):0},pointOnCircle:function(e,t,a,i){var r=i*Math.PI/180,n=a*Math.cos(r),o=a*Math.sin(r);return{x:e+n,y:t-o}},constrainAngle:function(e,t,a){var i=this.angle(e);if(i>=t&&a>=i)return e;var r=this.length(e),n=i>a?a:100>t-i?t:a;return this.pointOnCircle(e.start.x,e.start.y,r,n)},snapAngle:function(e,t){var a=this.radians(e),i=this.length(e),r=Math.PI*t,n=Math.round(a/r),o=n*r,s=this.radToDeg(o),d=this.pointOnCircle(e.start.x,e.start.y,i,s);return d},idSetStart:function(e){i=e},uid:function(e){return e=e||"shape",a[e]=void 0===a[e]?i:a[e]+1,e+a[e]},abbr:function(e){return e.substring(e.lastIndexOf(".")+1).charAt(0).toLowerCase()+e.substring(e.lastIndexOf(".")+2)},mixin:function(e,t){},objects:{},register:function(e){this.objects[e.id]=e},byId:function(e){return this.objects[e]},attr:function(t,a,i,r){if(!t)return!1;try{if(t.shape&&t.util&&(t=t.shape),!i&&"id"==a&&t.target){for(var n=t.target;n&&!e.attr(n,"id");)n=n.parentNode;return n&&e.attr(n,"id")}if(t.rawNode||t.target){var o=Array.prototype.slice.call(arguments);return o[0]=t.rawNode||t.target,e.attr.apply(e,o)}return e.attr(t,"id")}catch(s){return!1}}}});//# sourceMappingURL=common.js.map