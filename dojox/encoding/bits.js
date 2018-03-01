//>>built
define("dojox/encoding/bits",["dojo/_base/lang"],function(e){var t=e.getObject("dojox.encoding.bits",!0);return t.OutputStream=function(){this.reset()},e.extend(t.OutputStream,{reset:function(){this.buffer=[],this.accumulator=0,this.available=8},putBits:function(e,t){for(;t;){var a=Math.min(t,this.available),i=(a<=t?e>>>t-a:e)<<this.available-a;this.accumulator|=i&255>>>8-this.available,this.available-=a,this.available||(this.buffer.push(this.accumulator),this.accumulator=0,this.available=8),t-=a}},getWidth:function(){return 8*this.buffer.length+(8-this.available)},getBuffer:function(){var e=this.buffer;return this.available<8&&e.push(this.accumulator&255<<this.available),this.reset(),e}}),t.InputStream=function(e,t){this.buffer=e,this.width=t,this.bbyte=this.bit=0},e.extend(t.InputStream,{getBits:function(e){for(var t=0;e;){var a=Math.min(e,8-this.bit),i=this.buffer[this.bbyte]>>>8-this.bit-a;t<<=a,t|=i&~(-1<<a),this.bit+=a,8==this.bit&&(++this.bbyte,this.bit=0),e-=a}return t},getWidth:function(){return this.width-8*this.bbyte-this.bit}}),t});//# sourceMappingURL=bits.js.map