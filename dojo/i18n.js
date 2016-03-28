//>>built
define("dojo/i18n",["./_base/kernel","require","./has","./_base/array","./_base/config","./_base/lang","./_base/xhr","./json","module"],function(e,t,n,i,o,r,a,s,d){n.add("dojo-preload-i18n-Api",1);var c=e.i18n={},l=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,u=function(e,t,n,i){for(var o=[n+i],r=t.split("-"),a="",s=0;s<r.length;s++)a+=(a?"-":"")+r[s],e&&!e[a]||(o.push(n+a+"/"+i),o.specificity=a);return o},h={},f=function(t,n,i){return i=i?i.toLowerCase():e.locale,t=t.replace(/\./g,"/"),n=n.replace(/\./g,"/"),/root/i.test(i)?t+"/nls/"+n:t+"/nls/"+i+"/"+n},p=e.getL10nName=function(e,t,n){return e=d.id+"!"+f(e,t,n)},m=function(e,t,n,i,o,a){e([t],function(s){var d=r.clone(s.root||s.ROOT),c=u(!s._v1x&&s,o,n,i);e(c,function(){for(var e=1;e<c.length;e++)d=r.mixin(r.clone(d),arguments[e]);var n=t+"/"+o;h[n]=d,d.$locale=c.specificity,a()})})},g=function(e,t){return/^\./.test(e)?t(e):e},v=function(e){var t=o.extraLocale||[];return t=r.isArray(t)?t:[t],t.push(e),t},y=function(t,o,a){if(n("dojo-preload-i18n-Api")){var d=t.split("*"),c="preload"==d[1];if(c&&(h[t]||(h[t]=1,x(d[2],s.parse(d[3]),1,o)),a(1)),c||N(t,o,a))return}var u=l.exec(t),f=u[1]+"/",p=u[5]||u[4],g=f+p,y=u[5]&&u[4],b=y||e.locale||"",_=g+"/"+b,j=y?[b]:v(b),w=j.length,C=function(){--w||a(r.delegate(h[_]))};i.forEach(j,function(e){var t=g+"/"+e;n("dojo-preload-i18n-Api")&&k(t),h[t]?C():m(o,g,f,p,e,C)})};if(n("dojo-unit-tests"))var b=c.unitTests=[];if(n("dojo-preload-i18n-Api"),!0)var _=c.normalizeLocale=function(t){var n=t?t.toLowerCase():e.locale;return"root"==n?"ROOT":n},j=function(e,t){return!0},w=0,C=[],x=c._preloadLocalizations=function(n,o,a,s){function d(e,t){j(e,s)||a?s([e],t):S([e],t,s)}function c(e,t){for(var n=e.split("-");n.length;){if(t(n.join("-")))return;n.pop()}t("ROOT")}function l(){w++}function u(){for(--w;!w&&C.length;)y.apply(null,C.shift())}function f(e,t,n,i){return i.toAbsMid(e+t+"/"+n)}function p(e){e=_(e),c(e,function(a){if(i.indexOf(o,a)>=0){var p=n.replace(/\./g,"/")+"_"+a;return l(),d(p,function(n){function i(n,i,o,a){var d=[],p=[];c(e,function(e){a[e]&&(d.push(t.toAbsMid(n+e+"/"+i)),p.push(f(n,i,e,t)))}),d.length?(l(),s(d,function(){for(var a=d.length-1;a>=0;a--)o=r.mixin(r.clone(o),arguments[a]),h[p[a]]=o;h[f(n,i,e,t)]=r.clone(o),u()})):h[f(n,i,e,t)]=o}for(var o in n){var d,p,m=n[o],g=o.match(/(.+)\/([^\/]+)$/);if(g&&(d=g[2],p=g[1]+"/",m._localized)){var v;if("ROOT"===a){var y=v=m._localized;delete m._localized,y.root=m,h[t.toAbsMid(o)]=y}else v=m._localized,h[f(p,d,a,t)]=m;a!==e&&i(p,d,m,v)}}u()}),!0}return!1})}s=s||t,p(),i.forEach(e.config.extraLocale,p)},N=function(e,t,n){return w&&C.push([e,t,n]),w},k=function(){};var T={},E=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},	   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),S=function(e,t,n){var o=[];i.forEach(e,function(e){function t(t){var n=E(t,k,e,T);n===T?o.push(h[i]=T.result):(n instanceof Error&&(n={}),o.push(h[i]=/nls\/[^\/]+\/[^\/]+$/.test(i)?n:{root:n,_v1x:1}))}var i=n.toUrl(e+".js");if(h[i])o.push(h[i]);else{var r=n.syncLoadNls(e);if(r||(r=k(e.replace(/nls\/([^\/]*)\/([^\/]*)$/,"nls/$2/$1"))),r)o.push(r);else if(a)a.get({url:i,sync:!0,load:t,error:function(){o.push(h[i]={})}});else try{n.getText(i,!0,t)}catch(s){o.push(h[i]={})}}}),t&&t.apply(null,o)};return k=function(t){for(var n,i=t.split("/"),o=e.global[i[0]],r=1;o&&r<i.length-1;o=o[i[r++]]);return o&&(n=o[i[r]],n||(n=o[i[r].replace(/-/g,"_")]),n&&(h[t]=n)),n},c.getLocalization=function(e,n,i){var o,r=f(e,n,i);return y(r,j(r,t)?t:function(e,n){S(e,n,t)},function(e){o=e}),o},n("dojo-unit-tests")&&b.push(function(e){e.register("tests.i18n.unit",function(e){var t;t=E("{prop:1}",k,"nonsense",T),e.is({prop:1},t),e.is(void 0,t[1]),t=E("({prop:1})",k,"nonsense",T),e.is({prop:1},t),e.is(void 0,t[1]),t=E("{'prop-x':1}",k,"nonsense",T),e.is({"prop-x":1},t),e.is(void 0,t[1]),t=E("({'prop-x':1})",k,"nonsense",T),e.is({"prop-x":1},t),e.is(void 0,t[1]),t=E("define({'prop-x':1})",k,"nonsense",T),e.is(T,t),e.is({"prop-x":1},T.result),t=E("define('some/module', {'prop-x':1})",k,"nonsense",T),e.is(T,t),e.is({"prop-x":1},T.result),t=E("this is total nonsense and should throw an error",k,"nonsense",T),e.is(t instanceof Error,!0)})}),r.mixin(c,{dynamic:!0,normalize:g,load:y,cache:h,getL10nName:p})});//# sourceMappingURL=i18n.js.map