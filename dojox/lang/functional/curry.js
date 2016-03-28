//>>built
define("dojox/lang/functional/curry",["dojo","dijit","dojox","dojo/require!dojox/lang/functional/lambda"],function(e,t,i){e.provide("dojox.lang.functional.curry"),e.require("dojox.lang.functional.lambda"),function(){var t=i.lang.functional,a=Array.prototype,r=function(e){return function(){var t=e.args.concat(a.slice.call(arguments,0));return arguments.length+e.args.length<e.arity?r({func:e.func,arity:e.arity,args:t}):e.func.apply(this,t)}};e.mixin(t,{curry:function(e,i){return e=t.lambda(e),i="number"==typeof i?i:e.length,r({func:e,arity:i,args:[]})},arg:{},partial:function(e){var i,r=arguments,o=r.length,n=new Array(o-1),s=[],l=1;for(e=t.lambda(e);o>l;++l)i=r[l],n[l-1]=i,i===t.arg&&s.push(l-1);return function(){for(var t=a.slice.call(n,0),i=0,r=s.length;r>i;++i)t[s[i]]=arguments[i];return e.apply(this,t)}},mixer:function(e,i){return e=t.lambda(e),function(){for(var t=new Array(i.length),a=0,r=i.length;r>a;++a)t[a]=arguments[i[a]];return e.apply(this,t)}},flip:function(e){return e=t.lambda(e),function(){for(var t=arguments,i=t.length-1,a=new Array(i+1),r=0;i>=r;++r)a[i-r]=t[r];return e.apply(this,a)}}})}()});//# sourceMappingURL=curry.js.map