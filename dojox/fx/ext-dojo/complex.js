//>>built
define("dojox/fx/ext-dojo/complex",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/connect","dojo/_base/Color","dojo/_base/fx","dojo/fx"],function(e,t,i,a,r,o,n,s){t.getObject("dojox.fx.ext-dojo.complex",!0);var d=n.animateProperty;return e.animateProperty=n.animateProperty=function(t){var i=d(t);return r.connect(i,"beforeBegin",function(){i.curve.getValue=function(t){var i={};for(var a in this._properties){var r=this._properties[a],o=r.start;o instanceof e.Color?i[a]=e.blendColors(o,r.end,t,r.tempColor).toCss():o instanceof dojox.fx._Complex?i[a]=o.getValue(t):e.isArray(o)||(i[a]=(r.end-o)*t+o+("opacity"!=a?r.units||"px":0))}return i};for(var t in this.properties){var a=this.properties[t];"string"==typeof a.start&&/\(/.test(a.start)&&(this.curve._properties[t].start=new dojox.fx._Complex(a))}}),i},a("dojox.fx._Complex",null,{PROP:/\([\w|,|+|\-|#|\.|\s]*\)/g,constructor:function(e){var t=e.start.match(this.PROP),a=e.end.match(this.PROP),r=i.map(t,this.getProps,this),o=i.map(a,this.getProps,this);this._properties={},this.strProp=e.start,i.forEach(r,function(e,t){i.forEach(e,function(e,i){this.strProp=this.strProp.replace(e,"PROP_"+t+i),this._properties["PROP_"+t+i]=this.makePropObject(e,o[t][i])},this)},this)},getValue:function(e){var t,i=this.strProp;for(var a in this._properties){var r,n=this._properties[a];"isColor"==n.units?(r=o.blendColors(n.beg,n.end,e).toCss(!1),t=""):(r=(n.end-n.beg)*e+n.beg,t=n.units),i=i.replace(a,r+t)}return i},makePropObject:function(e,t){var i=this.getNumAndUnits(e),a=this.getNumAndUnits(t);return{beg:i.num,end:a.num,units:i.units}},getProps:function(e){e=e.substring(1,e.length-1);var t;return/,/.test(e)?(e=e.replace(/\s/g,""),t=e.split(",")):(e=e.replace(/\s{2,}/g," "),t=e.split(" ")),t},getNumAndUnits:function(e){if(!e)return{};if(/#/.test(e))return{num:new o(e),units:"isColor"};var t={num:parseFloat(/-*[\d\.\d|\d]{1,}/.exec(e).join(""))};return t.units=/[a-z]{1,}/.exec(e),t.units=t.units&&t.units.length?t.units.join(""):"",t}})});//# sourceMappingURL=complex.js.map