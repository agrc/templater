//>>built
define("dojox/lang/functional/zip",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.functional.zip"),function(){var t=i.lang.functional;e.mixin(t,{zip:function(){for(var e,t,i=arguments[0].length,a=arguments.length,o=1,r=new Array(i);a>o;i=Math.min(i,arguments[o++].length));for(o=0;i>o;++o){for(t=new Array(a),e=0;a>e;t[e]=arguments[e][o],++e);r[o]=t}return r},unzip:function(e){return t.zip.apply(null,e)}})}()});//# sourceMappingURL=zip.js.map