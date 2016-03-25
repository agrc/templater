//>>built
define("dojox/encoding/compression/lzw",["dojo/_base/lang","../bits"],function(e,t){var a=e.getObject("dojox.encoding.compression.lzw",!0),i=function(e){for(var t=1,a=2;e>=a;a<<=1,++t);return t};return a.Encoder=function(e){this.size=e,this.init()},e.extend(a.Encoder,{init:function(){this.dict={};for(var e=0;e<this.size;++e)this.dict[String.fromCharCode(e)]=e;this.width=i(this.code=this.size),this.p=""},encode:function(e,t){var a=String.fromCharCode(e),i=this.p+a,r=0;return i in this.dict?(this.p=i,r):(t.putBits(this.dict[this.p],this.width),0==(this.code&this.code+1)&&t.putBits(this.code++,r=this.width++),this.dict[i]=this.code++,this.p=a,r+this.width)},flush:function(e){return 0==this.p.length?0:(e.putBits(this.dict[this.p],this.width),this.p="",this.width)}}),a.Decoder=function(e){this.size=e,this.init()},e.extend(a.Decoder,{init:function(){this.codes=new Array(this.size);for(var e=0;e<this.size;++e)this.codes[e]=String.fromCharCode(e);this.width=i(this.size),this.p=-1},decode:function(e){var t,a=e.getBits(this.width);if(a<this.codes.length)t=this.codes[a],this.p>=0&&this.codes.push(this.codes[this.p]+t.substr(0,1));else{if(0==(a&a+1))return this.codes.push(""),++this.width,"";var i=this.codes[this.p];t=i+i.substr(0,1),this.codes.push(t)}return this.p=a,t}}),a});//# sourceMappingURL=lzw.js.map