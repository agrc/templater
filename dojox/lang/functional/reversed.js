//>>built
define("dojox/lang/functional/reversed",["dojo/_base/lang","dojo/_base/kernel","./lambda"],function(e,t,i){return e.mixin(i,{filterRev:function(e,a,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,a=i.lambda(a);for(var n,o=[],s=e.length-1;s>=0;--s)n=e[s],a.call(r,n,s,e)&&o.push(n);return o},forEachRev:function(e,a,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,a=i.lambda(a);for(var n=e.length-1;n>=0;a.call(r,e[n],n,e),--n);},mapRev:function(e,a,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,a=i.lambda(a);for(var n=e.length,o=new Array(n),s=n-1,l=0;s>=0;o[l++]=a.call(r,e[s],s,e),--s);return o},everyRev:function(e,a,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,a=i.lambda(a);for(var n=e.length-1;n>=0;--n)if(!a.call(r,e[n],n,e))return!1;return!0},someRev:function(e,a,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,a=i.lambda(a);for(var n=e.length-1;n>=0;--n)if(a.call(r,e[n],n,e))return!0;return!1}}),i});//# sourceMappingURL=reversed.js.map