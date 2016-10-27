//>>built
define("dojox/charting/plot3d/Bars",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/Color","dojo/has","./Base"],function(e,t,a,i,r){var o=function(t,a,i){t="string"==typeof t?t.split(""):t,i=i||e.global;for(var r=t[0],o=1;o<t.length;r=a.call(i,r,t[o++]));return r};return t("dojox.charting.plot3d.Bars",r,{constructor:function(e,t,i){if(this.depth="auto",this.gap=0,this.data=[],this.material={type:"plastic",finish:"dull",color:"lime"},i&&("depth"in i&&(this.depth=i.depth),"gap"in i&&(this.gap=i.gap),"material"in i)){var r=i.material;"string"==typeof r||r instanceof a?this.material.color=r:this.material=r}},getDepth:function(){if("auto"==this.depth){var e=this.width;return this.data&&this.data.length&&(e/=this.data.length),e-2*this.gap}return this.depth},generate:function(e,t){if(!this.data)return this;var a=this.width/this.data.length,r=0,n="auto"==this.depth?a-2*this.gap:this.depth,d=this.height/o(this.data,Math.max);t||(t=e.view);for(var s=0;s<this.data.length;++s,r+=a)t.createCube({bottom:{x:r+this.gap,y:0,z:0},top:{x:r+a-this.gap,y:this.data[s]*d,z:n}}).setFill(this.material);i("dojo-bidi")&&this._checkOrientation(e)}})});//# sourceMappingURL=Bars.js.map