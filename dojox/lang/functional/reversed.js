//>>built
define("dojox/lang/functional/reversed",["dojo/_base/lang","dojo/_base/kernel","./lambda"],function(e,t,a){return e.mixin(a,{filterRev:function(e,i,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,i=a.lambda(i);for(var n,o=[],s=e.length-1;s>=0;--s)n=e[s],i.call(r,n,s,e)&&o.push(n);return o},forEachRev:function(e,i,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,i=a.lambda(i);for(var n=e.length-1;n>=0;i.call(r,e[n],n,e),--n);},mapRev:function(e,i,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,i=a.lambda(i);for(var n=e.length,o=new Array(n),s=n-1,l=0;s>=0;o[l++]=i.call(r,e[s],s,e),--s);return o},everyRev:function(e,i,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,i=a.lambda(i);for(var n=e.length-1;n>=0;--n)if(!i.call(r,e[n],n,e))return!1;return!0},someRev:function(e,i,r){"string"==typeof e&&(e=e.split("")),r=r||t.global,i=a.lambda(i);for(var n=e.length-1;n>=0;--n)if(i.call(r,e[n],n,e))return!0;return!1}}),a});//# sourceMappingURL=reversed.js.map