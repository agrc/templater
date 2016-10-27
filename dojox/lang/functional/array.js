//>>built
define("dojox/lang/functional/array",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","./lambda"],function(e,t,i,r){var a={};return t.mixin(r,{filter:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,l,d,u=[];if(t.isArray(i))for(l=0,d=i.length;d>l;++l)s=i[l],o.call(n,s,l,i)&&u.push(s);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(l=0;i.hasNext();)s=i.next(),o.call(n,s,l++,i)&&u.push(s);else for(l in i)l in a||(s=i[l],o.call(n,s,l,i)&&u.push(s));return u},forEach:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,l;if(t.isArray(i))for(s=0,l=i.length;l>s;o.call(n,i[s],s,i),++s);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(s=0;i.hasNext();o.call(n,i.next(),s++,i));else for(s in i)s in a||o.call(n,i[s],s,i);return n},map:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,l,d;if(t.isArray(i))for(s=new Array(l=i.length),d=0;l>d;s[d]=o.call(n,i[d],d,i),++d);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(s=[],d=0;i.hasNext();s.push(o.call(n,i.next(),d++,i)));else{s=[];for(d in i)d in a||s.push(o.call(n,i[d],d,i))}return s},every:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,l;if(t.isArray(i)){for(s=0,l=i.length;l>s;++s)if(!o.call(n,i[s],s,i))return!1}else if("function"==typeof i.hasNext&&"function"==typeof i.next){for(s=0;i.hasNext();)if(!o.call(n,i.next(),s++,i))return!1}else for(s in i)if(!(s in a||o.call(n,i[s],s,i)))return!1;return!0},some:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,l;if(t.isArray(i)){for(s=0,l=i.length;l>s;++s)if(o.call(n,i[s],s,i))return!0}else if("function"==typeof i.hasNext&&"function"==typeof i.next){for(s=0;i.hasNext();)if(o.call(n,i.next(),s++,i))return!0}else for(s in i)if(!(s in a)&&o.call(n,i[s],s,i))return!0;return!1}}),r});//# sourceMappingURL=array.js.map