//>>built
define("dojox/lang/functional/sequence",["dojo/_base/kernel","dojo/_base/lang","./lambda"],function(e,t,i){return t.mixin(i,{repeat:function(t,a,r,o){o=o||e.global,a=i.lambda(a);var n=new Array(t),s=1;for(n[0]=r;t>s;n[s]=r=a.call(o,r),++s);return n},until:function(t,a,r,o){o=o||e.global,a=i.lambda(a),t=i.lambda(t);for(var n=[];!t.call(o,r);n.push(r),r=a.call(o,r));return n}}),i});//# sourceMappingURL=sequence.js.map