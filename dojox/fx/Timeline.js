//>>built
define("dojox/fx/Timeline",["dojo/_base/lang","dojo/fx/easing","dojo/_base/fx","dojo/dom","./_base","dojo/_base/connect","dojo/_base/html","dojo/_base/array","dojo/_base/Color"],function(e,t,a,i,r,n,o,s,l){r.animateTimeline=function(e,r){var s=new d(e.keys),l=a.animateProperty({node:i.byId(r||e.node),duration:e.duration||1e3,properties:s._properties,easing:t.linear,onAnimate:function(e){}});return n.connect(l,"onEnd",function(e){var t=l.curve.getValue(l.reversed?0:1);o.style(e,t)}),n.connect(l,"beforeBegin",function(){l.curve&&delete l.curve,l.curve=s,s.ani=l}),l};var d=function(t){this.keys=e.isArray(t)?this.flatten(t):t};return d.prototype.flatten=function(e){var a=function(t,a){return"from"==t?0:"to"==t?1:void 0===t?0==a?0:a/(e.length-1):.01*parseInt(t,10)},i={},r={};return s.forEach(e,function(e,n){var o=a(e.step,n),s=t[e.ease]||t.linear;for(var d in e)"step"!=d&&"ease"!=d&&"from"!=d&&"to"!=d&&(r[d]||(r[d]={steps:[],values:[],eases:[],ease:s},i[d]={},/#/.test(e[d])?i[d].units=r[d].units="isColor":i[d].units=r[d].units=/\D{1,}/.exec(e[d]).join("")),r[d].eases.push(t[e.ease||"linear"]),r[d].steps.push(o),"isColor"==i[d].units?r[d].values.push(new l(e[d])):r[d].values.push(parseInt(/\d{1,}/.exec(e[d]).join(""))),void 0===i[d].start?i[d].start=r[d].values[r[d].values.length-1]:i[d].end=r[d].values[r[d].values.length-1])}),this._properties=i,r},d.prototype.getValue=function(e){e=this.ani._reversed?1-e:e;var t={},a=this,i=function(e,t){return"isColor"!=a._properties[e].units?a.keys[e].values[t]+a._properties[e].units:a.keys[e].values[t].toCss()};for(var r in this.keys)for(var n=this.keys[r],o=0;o<n.steps.length;o++){var s=n.steps[o],d=n.steps[o+1],u=o<n.steps.length,m=n.eases[o]||function(e){return e};if(e==s){if(t[r]=i(r,o),!u||u&&this.ani._reversed)break}else if(e>s){if(u&&e<n.steps[o+1]){var c=n.values[o+1],h=n.values[o],f=1/(d-s)*(e-s);if(f=m(f),h instanceof l)t[r]=l.blendColors(h,c,f).toCss(!1);else{var p=c-h;t[r]=h+f*p+this._properties[r].units}break}t[r]=i(r,o)}else(u&&!this.ani._reversed||!u&&this.ani._reversed)&&(t[r]=i(r,o))}return t},r._Timeline=d,r});//# sourceMappingURL=Timeline.js.map