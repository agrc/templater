//>>built
define("dojox/lang/functional/array",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","./lambda"],function(e,t,i,a){var o={};return t.mixin(a,{filter:function(i,n,r){"string"==typeof i&&(i=i.split("")),r=r||e.global,n=a.lambda(n);var s,d,l,h=[];if(t.isArray(i))for(d=0,l=i.length;l>d;++d)s=i[d],n.call(r,s,d,i)&&h.push(s);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(d=0;i.hasNext();)s=i.next(),n.call(r,s,d++,i)&&h.push(s);else for(d in i)d in o||(s=i[d],n.call(r,s,d,i)&&h.push(s));return h},forEach:function(i,n,r){"string"==typeof i&&(i=i.split("")),r=r||e.global,n=a.lambda(n);var s,d;if(t.isArray(i))for(s=0,d=i.length;d>s;n.call(r,i[s],s,i),++s);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(s=0;i.hasNext();n.call(r,i.next(),s++,i));else for(s in i)s in o||n.call(r,i[s],s,i);return r},map:function(i,n,r){"string"==typeof i&&(i=i.split("")),r=r||e.global,n=a.lambda(n);var s,d,l;if(t.isArray(i))for(s=new Array(d=i.length),l=0;d>l;s[l]=n.call(r,i[l],l,i),++l);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(s=[],l=0;i.hasNext();s.push(n.call(r,i.next(),l++,i)));else{s=[];for(l in i)l in o||s.push(n.call(r,i[l],l,i))}return s},every:function(i,n,r){"string"==typeof i&&(i=i.split("")),r=r||e.global,n=a.lambda(n);var s,d;if(t.isArray(i)){for(s=0,d=i.length;d>s;++s)if(!n.call(r,i[s],s,i))return!1}else if("function"==typeof i.hasNext&&"function"==typeof i.next){for(s=0;i.hasNext();)if(!n.call(r,i.next(),s++,i))return!1}else for(s in i)if(!(s in o||n.call(r,i[s],s,i)))return!1;return!0},some:function(i,n,r){"string"==typeof i&&(i=i.split("")),r=r||e.global,n=a.lambda(n);var s,d;if(t.isArray(i)){for(s=0,d=i.length;d>s;++s)if(n.call(r,i[s],s,i))return!0}else if("function"==typeof i.hasNext&&"function"==typeof i.next){for(s=0;i.hasNext();)if(n.call(r,i.next(),s++,i))return!0}else for(s in i)if(!(s in o)&&n.call(r,i[s],s,i))return!0;return!1}}),a});//# sourceMappingURL=array.js.map