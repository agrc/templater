//>>built
define("dojox/encoding/compression/splay",["dojo/_base/lang","../bits"],function(e,t){var a=e.getObject("dojox.encoding.compression",!0);return a.Splay=function(e){this.up=new Array(2*e+1),this.left=new Array(e),this.right=new Array(e),this.reset()},e.extend(a.Splay,{reset:function(){for(var e=1;e<this.up.length;this.up[e]=Math.floor((e-1)/2),++e);for(var e=0;e<this.left.length;this.left[e]=2*e+1,this.right[e]=2*e+2,++e);},splay:function(e){var t=e+this.left.length;do{var a=this.up[t];if(a){var i=this.up[a],r=this.left[i];a==r?(r=this.right[i],this.right[i]=t):this.left[i]=t,this[t==this.left[a]?"left":"right"][a]=r,this.up[t]=i,this.up[r]=a,t=i}else t=a}while(t)},encode:function(e,t){var a=[],i=e+this.left.length;do a.push(this.right[this.up[i]]==i),i=this.up[i];while(i);this.splay(e);for(var r=a.length;a.length;)t.putBits(a.pop()?1:0,1);return r},decode:function(e){var t=0;do t=this[e.getBits(1)?"right":"left"][t];while(t<this.left.length);return t-=this.left.length,this.splay(t),t}}),a.Splay});//# sourceMappingURL=splay.js.map