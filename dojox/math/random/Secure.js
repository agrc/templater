//>>built
define("dojox/math/random/Secure",["dojo"],function(e){return e.declare("dojox.math.random.Secure",null,{constructor:function(t,i){this.prng=t;var a=this.pool=new Array(t.size);this.pptr=0;for(var o=0,n=t.size;o<n;){var r=Math.floor(65536*Math.random());a[o++]=r>>>8,a[o++]=255&r}this.seedTime(),i||(this.h=[e.connect(e.body(),"onclick",this,"seedTime"),e.connect(e.body(),"onkeypress",this,"seedTime")])},destroy:function(){this.h&&e.forEach(this.h,e.disconnect)},nextBytes:function(e){var t=this.state;if(!t){this.seedTime(),t=this.state=this.prng(),t.init(this.pool);for(var i=this.pool,a=0,o=i.length;a<o;i[a++]=0);this.pptr=0}for(var a=0,o=e.length;a<o;++a)e[a]=t.next()},seedTime:function(){this._seed_int((new Date).getTime())},_seed_int:function(e){var t=this.pool,i=this.pptr;t[i++]^=255&e,t[i++]^=e>>8&255,t[i++]^=e>>16&255,t[i++]^=e>>24&255,i>=this.prng.size&&(i-=this.prng.size),this.pptr=i}}),dojox.math.random.Secure});//# sourceMappingURL=Secure.js.map