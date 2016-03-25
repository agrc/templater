//>>built
define("dojox/lang/functional/array",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","./lambda"],function(e,t,i,r){var a={};return t.mixin(r,{filter:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,d,l,u=[];if(t.isArray(i))for(d=0,l=i.length;l>d;++d)s=i[d],o.call(n,s,d,i)&&u.push(s);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(d=0;i.hasNext();)s=i.next(),o.call(n,s,d++,i)&&u.push(s);else for(d in i)d in a||(s=i[d],o.call(n,s,d,i)&&u.push(s));return u},forEach:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,d;if(t.isArray(i))for(s=0,d=i.length;d>s;o.call(n,i[s],s,i),++s);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(s=0;i.hasNext();o.call(n,i.next(),s++,i));else for(s in i)s in a||o.call(n,i[s],s,i);return n},map:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,d,l;if(t.isArray(i))for(s=new Array(d=i.length),l=0;d>l;s[l]=o.call(n,i[l],l,i),++l);else if("function"==typeof i.hasNext&&"function"==typeof i.next)for(s=[],l=0;i.hasNext();s.push(o.call(n,i.next(),l++,i)));else{s=[];for(l in i)l in a||s.push(o.call(n,i[l],l,i))}return s},every:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,d;if(t.isArray(i)){for(s=0,d=i.length;d>s;++s)if(!o.call(n,i[s],s,i))return!1}else if("function"==typeof i.hasNext&&"function"==typeof i.next){for(s=0;i.hasNext();)if(!o.call(n,i.next(),s++,i))return!1}else for(s in i)if(!(s in a||o.call(n,i[s],s,i)))return!1;return!0},some:function(i,o,n){"string"==typeof i&&(i=i.split("")),n=n||e.global,o=r.lambda(o);var s,d;if(t.isArray(i)){for(s=0,d=i.length;d>s;++s)if(o.call(n,i[s],s,i))return!0}else if("function"==typeof i.hasNext&&"function"==typeof i.next){for(s=0;i.hasNext();)if(o.call(n,i.next(),s++,i))return!0}else for(s in i)if(!(s in a)&&o.call(n,i[s],s,i))return!0;return!1}}),r});//# sourceMappingURL=array.js.map