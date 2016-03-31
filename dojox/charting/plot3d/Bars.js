//>>built
define("dojox/charting/plot3d/Bars",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/Color","dojo/has","./Base"],function(e,t,i,a,r){var n=function(t,i,a){t="string"==typeof t?t.split(""):t,a=a||e.global;for(var r=t[0],n=1;n<t.length;r=i.call(a,r,t[n++]));return r};return t("dojox.charting.plot3d.Bars",r,{constructor:function(e,t,a){if(this.depth="auto",this.gap=0,this.data=[],this.material={type:"plastic",finish:"dull",color:"lime"},a&&("depth"in a&&(this.depth=a.depth),"gap"in a&&(this.gap=a.gap),"material"in a)){var r=a.material;"string"==typeof r||r instanceof i?this.material.color=r:this.material=r}},getDepth:function(){if("auto"==this.depth){var e=this.width;return this.data&&this.data.length&&(e/=this.data.length),e-2*this.gap}return this.depth},generate:function(e,t){if(!this.data)return this;var i=this.width/this.data.length,r=0,o="auto"==this.depth?i-2*this.gap:this.depth,d=this.height/n(this.data,Math.max);t||(t=e.view);for(var s=0;s<this.data.length;++s,r+=i)t.createCube({bottom:{x:r+this.gap,y:0,z:0},top:{x:r+i-this.gap,y:this.data[s]*d,z:o}}).setFill(this.material);a("dojo-bidi")&&this._checkOrientation(e)}})});//# sourceMappingURL=Bars.js.map