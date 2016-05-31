//>>built
define("dojox/color/NeutralColorModel",["dojo/_base/array","dojo/_base/declare","./SimpleColorModel"],function(e,t,a){return t("dojox.color.NeutralColorModel",a,{_min:0,_max:0,_e:0,constructor:function(e,t){},initialize:function(t,a){var i=[],r=0,o=1e8,n=-o;e.forEach(t,function(e){var t=a(e);o=Math.min(o,t),n=Math.max(n,t),r+=t,i.push(t)}),i.sort(function(e,t){return e-t});var d=this.computeNeutral(o,n,r,i);this._min=o,this._max=n,this._min==this._max||d==this._min?this._e=-1:this._e=Math.log(.5)/Math.log((d-this._min)/(this._max-this._min))},computeNeutral:function(e,t,a,i){},getNormalizedValue:function(e){return this._e<0?0:(e=(e-this._min)/(this._max-this._min),Math.pow(e,this._e))}})});//# sourceMappingURL=NeutralColorModel.js.map