//>>built
define("dojox/charting/plot3d/Bars",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/Color","dojo/has","./Base"],function(e,t,i,r,a){var n=function(t,i,r){t="string"==typeof t?t.split(""):t,r=r||e.global;for(var a=t[0],n=1;n<t.length;a=i.call(r,a,t[n++]));return a};return t("dojox.charting.plot3d.Bars",a,{constructor:function(e,t,r){if(this.depth="auto",this.gap=0,this.data=[],this.material={type:"plastic",finish:"dull",color:"lime"},r&&("depth"in r&&(this.depth=r.depth),"gap"in r&&(this.gap=r.gap),"material"in r)){var a=r.material;"string"==typeof a||a instanceof i?this.material.color=a:this.material=a}},getDepth:function(){if("auto"==this.depth){var e=this.width;return this.data&&this.data.length&&(e/=this.data.length),e-2*this.gap}return this.depth},generate:function(e,t){if(!this.data)return this;var i=this.width/this.data.length,a=0,o="auto"==this.depth?i-2*this.gap:this.depth,s=this.height/n(this.data,Math.max);t||(t=e.view);for(var d=0;d<this.data.length;++d,a+=i)t.createCube({bottom:{x:a+this.gap,y:0,z:0},top:{x:a+i-this.gap,y:this.data[d]*s,z:o}}).setFill(this.material);r("dojo-bidi")&&this._checkOrientation(e)}})});//# sourceMappingURL=Bars.js.map