//>>built
define("dojox/fx/ext-dojo/complex",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect","dojo/_base/Color","dojo/_base/fx","dojo/fx"],function(e,t,a,i,r,n,o,s){t.getObject("dojox.fx.ext-dojo.complex",!0);var l=o.animateProperty;return e.animateProperty=o.animateProperty=function(t){var a=l(t);return r.connect(a,"beforeBegin",function(){a.curve.getValue=function(t){var a={};for(var i in this._properties){var r=this._properties[i],n=r.start;n instanceof e.Color?a[i]=e.blendColors(n,r.end,t,r.tempColor).toCss():n instanceof dojox.fx._Complex?a[i]=n.getValue(t):e.isArray(n)||(a[i]=(r.end-n)*t+n+("opacity"!=i?r.units||"px":0))}return a};for(var t in this.properties){var i=this.properties[t];"string"==typeof i.start&&/\(/.test(i.start)&&(this.curve._properties[t].start=new dojox.fx._Complex(i))}}),a},i("dojox.fx._Complex",null,{PROP:/\([\w|,|+|\-|#|\.|\s]*\)/g,constructor:function(e){var t=e.start.match(this.PROP),i=e.end.match(this.PROP),r=a.map(t,this.getProps,this),n=a.map(i,this.getProps,this);this._properties={},this.strProp=e.start,a.forEach(r,function(e,t){a.forEach(e,function(e,a){this.strProp=this.strProp.replace(e,"PROP_"+t+a),this._properties["PROP_"+t+a]=this.makePropObject(e,n[t][a])},this)},this)},getValue:function(e){var t,a=this.strProp;for(var i in this._properties){var r,o=this._properties[i];"isColor"==o.units?(r=n.blendColors(o.beg,o.end,e).toCss(!1),t=""):(r=(o.end-o.beg)*e+o.beg,t=o.units),a=a.replace(i,r+t)}return a},makePropObject:function(e,t){var a=this.getNumAndUnits(e),i=this.getNumAndUnits(t);return{beg:a.num,end:i.num,units:a.units}},getProps:function(e){e=e.substring(1,e.length-1);var t;return/,/.test(e)?(e=e.replace(/\s/g,""),t=e.split(",")):(e=e.replace(/\s{2,}/g," "),t=e.split(" ")),t},getNumAndUnits:function(e){if(!e)return{};if(/#/.test(e))return{num:new n(e),units:"isColor"};var t={num:parseFloat(/-*[\d\.\d|\d]{1,}/.exec(e).join(""))};return t.units=/[a-z]{1,}/.exec(e),t.units=t.units&&t.units.length?t.units.join(""):"",t}})});//# sourceMappingURL=complex.js.map