//>>built
define("dojox/math/random/prng4",["dojo","dojox"],function(e,t){function i(){this.i=0,this.j=0,this.S=new Array(256)}return e.getObject("math.random.prng4",!0,t),e.extend(i,{init:function(e){var t,i,a,n=this.S,o=e.length;for(t=0;256>t;++t)n[t]=t;for(i=0,t=0;256>t;++t)i=i+n[t]+e[t%o]&255,a=n[t],n[t]=n[i],n[i]=a;this.i=0,this.j=0},next:function(){var e,t,i,a=this.S;return this.i=t=this.i+1&255,this.j=i=this.j+a[t]&255,e=a[t],a[t]=a[i],a[i]=e,a[e+a[t]&255]}}),t.math.random.prng4=function(){return new i},t.math.random.prng4.size=256,t.math.random.prng4});//# sourceMappingURL=prng4.js.map