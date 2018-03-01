//>>built
define("dojox/mvc/sync",["dojo/_base/lang","dojo/_base/config","dojo/_base/array","dojo/has"],function(e,t,i,a){function r(t,i){return t===i||"number"==typeof t&&isNaN(t)&&"number"==typeof i&&isNaN(i)||e.isFunction((t||{}).getTime)&&e.isFunction((i||{}).getTime)&&t.getTime()==i.getTime()||(e.isFunction((t||{}).equals)?t.equals(i):!!e.isFunction((i||{}).equals)&&i.equals(t))}function o(t,r,o,n,s,l,u,h,c,m){if(!(o(c,h)||"*"==s&&i.indexOf(n.get("properties")||[u],u)<0||"*"==s&&u in(m||{}))){var f="*"==s?u:s;if(a("mvc-bindings-log-api")){d(n,f,l,u)}try{c=t?t(c,r):c}catch(e){return void a("mvc-bindings-log-api")}a("mvc-bindings-log-api"),e.isFunction(n.set)?n.set(f,c):n[f]=c}}var n=e.getObject("dojox.mvc",!0);a.add("mvc-bindings-log-api",(t.mvc||{}).debugBindings);var s,l,d=a("mvc-bindings-log-api")?function(e,t,i,a){return[[i.canConvertToLoggable||!i.declaredClass?i:i.declaredClass,a].join(":"),[e.canConvertToLoggable||!e.declaredClass?e:e.declaredClass,t].join(":")]}:"",u={from:1,to:2,both:3};return s=function(t,r,u,h,c){var m,f,g,p=(c||{}).converter;p&&(m={source:t,target:u},f=p.format&&e.hitch(m,p.format),g=p.parse&&e.hitch(m,p.parse));var y,v=[],b=[],k=e.mixin({},t.constraints,u.constraints),_=(c||{}).bindDirection||n.both,M=(c||{}).equals||s.equals;if(a("mvc-bindings-log-api")){d(t,r,u,h)}if("*"==h){if("*"!=r)throw new Error("Unmatched wildcard is specified between source and target.");if(!(y=u.get("properties"))){y=[];for(var x in u)u.hasOwnProperty(x)&&"_watchCallbacks"!=x&&y.push(x)}b=u.get("excludes")}else y=[r];_&n.from&&(e.isFunction(t.set)&&e.isFunction(t.watch)?v.push(t.watch.apply(t,("*"!=r?[r]:[]).concat([function(e,i,a){o(f,k,M,u,h,t,e,i,a,b)}]))):a("mvc-bindings-log-api"),i.forEach(y,function(i){if("*"!=h||!(i in(b||{}))){var a=e.isFunction(t.get)?t.get(i):t[i];o(f,k,M,u,"*"==h?i:h,t,i,l,a)}})),_&n.to&&(_&n.from||i.forEach(y,function(i){if("*"!=h||!(i in(b||{}))){var a=e.isFunction(u.get)?u.get(h):u[h];o(g,k,M,t,i,u,"*"==h?i:h,l,a)}}),e.isFunction(u.set)&&e.isFunction(u.watch)?v.push(u.watch.apply(u,("*"!=h?[h]:[]).concat([function(e,i,a){o(g,k,M,t,r,u,e,i,a,b)}]))):a("mvc-bindings-log-api")),a("mvc-bindings-log-api");var w={};return w.unwatch=w.remove=function(){for(var e=null;e=v.pop();)e.unwatch();a("mvc-bindings-log-api")},w},e.mixin(n,u),e.setObject("dojox.mvc.sync",e.mixin(s,{equals:r},u))});//# sourceMappingURL=sync.js.map