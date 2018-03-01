//>>built
define("dojo/i18n",["./_base/kernel","require","./has","./_base/array","./_base/config","./_base/lang","./_base/xhr","./json","module"],function(t,e,i,n,o,r,s,a,d){i.add("dojo-preload-i18n-Api",1);var l=t.i18n={},h=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,c=function(t,e,i,n){for(var o=[i+n],r=e.split("-"),s="",a=0;a<r.length;a++)s+=(s?"-":"")+r[a],t&&!t[s]||(o.push(i+s+"/"+n),o.specificity=s);return o},u={},f=function(e,i,n){return n=n?n.toLowerCase():t.locale,e=e.replace(/\./g,"/"),i=i.replace(/\./g,"/"),/root/i.test(n)?e+"/nls/"+i:e+"/nls/"+n+"/"+i},p=t.getL10nName=function(t,e,i){return t=d.id+"!"+f(t,e,i)},m=function(t,e,i,n,o,s){t([e],function(a){var d=r.clone(a.root||a.ROOT),l=c(!a._v1x&&a,o,i,n);t(l,function(){for(var t=1;t<l.length;t++)d=r.mixin(r.clone(d),arguments[t]);u[e+"/"+o]=d,d.$locale=l.specificity,s()})})},g=function(t,e){return/^\./.test(t)?e(t):t},_=function(t){var e=o.extraLocale||[];return e=r.isArray(e)?e:[e],e.push(t),e},b=function(e,o,s){var d=h.exec(e),l=d[1]+"/",c=d[5]||d[4],f=l+c,p=d[5]&&d[4],g=p||t.locale||"",b=f+"/"+g,v=p?[g]:_(g),j=v.length,y=function(){--j||s(r.delegate(u[b]))},N=e.split("*"),T="preload"==N[1];if(i("dojo-preload-i18n-Api")){if(T&&(u[e]||(u[e]=1,C(N[2],a.parse(N[3]),1,o)),s(1)),T||x(e,o,s)&&!u[b])return}else if(T)return void s(1);n.forEach(v,function(t){var e=f+"/"+t;i("dojo-preload-i18n-Api")&&w(e),u[e]?y():m(o,f,l,c,t,y)})};if(i("dojo-preload-i18n-Api"),!0)var v=l.normalizeLocale=function(e){var i=e?e.toLowerCase():t.locale;return"root"==i?"ROOT":i},j=function(t,e){return!0},y=0,N=[],C=l._preloadLocalizations=function(i,o,s,a){function d(t,e){j(t,a)||s?a([t],e):D([t],e,a)}function l(t,e){for(var i=t.split("-");i.length;){if(e(i.join("-")))return;i.pop()}e("ROOT")}function h(){y++}function c(){for(--y;!y&&N.length;)b.apply(null,N.shift())}function f(t,e,i,n){return n.toAbsMid(t+e+"/"+i)}function p(t){t=v(t),l(t,function(s){if(n.indexOf(o,s)>=0){var p=i.replace(/\./g,"/")+"_"+s;return h(),d(p,function(i){function n(i,n,o,s){var d=[],p=[];l(t,function(t){s[t]&&(d.push(e.toAbsMid(i+t+"/"+n)),p.push(f(i,n,t,e)))}),d.length?(h(),a(d,function(){for(var s=d.length-1;s>=0;s--)o=r.mixin(r.clone(o),arguments[s]),u[p[s]]=o;u[f(i,n,t,e)]=r.clone(o),c()})):u[f(i,n,t,e)]=o}for(var o in i){var d,p,m=i[o],g=o.match(/(.+)\/([^\/]+)$/);if(g&&(d=g[2],p=g[1]+"/",m._localized)){var _;if("ROOT"===s){var b=_=m._localized;delete m._localized,b.root=m,u[e.toAbsMid(o)]=b}else _=m._localized,u[f(p,d,s,e)]=m;s!==t&&n(p,d,m,_)}}c()}),!0}return!1})}a=a||e,p(),n.forEach(t.config.extraLocale,p)},x=function(t,e,i){return y&&N.push([t,e,i]),y},w=function(){};var T,k={},D=function(t,e,i){var o=[];n.forEach(t,function(t){function e(e){T||(T=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},\t   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"));var i=T(e,w,t,k);i===k?o.push(u[n]=k.result):(i instanceof Error&&(i={}),o.push(u[n]=/nls\/[^\/]+\/[^\/]+$/.test(n)?i:{root:i,_v1x:1}))}var n=i.toUrl(t+".js");if(u[n])o.push(u[n]);else{var r=i.syncLoadNls(t);if(r||(r=w(t.replace(/nls\/([^\/]*)\/([^\/]*)$/,"nls/$2/$1"))),r)o.push(r);else if(s)s.get({url:n,sync:!0,load:e,error:function(){o.push(u[n]={})}});else try{i.getText(n,!0,e)}catch(t){o.push(u[n]={})}}}),e&&e.apply(null,o)};return w=function(e){for(var i,n=e.split("/"),o=t.global[n[0]],r=1;o&&r<n.length-1;o=o[n[r++]]);return o&&(i=o[n[r]],i||(i=o[n[r].replace(/-/g,"_")]),i&&(u[e]=i)),i},l.getLocalization=function(t,i,n){var o,r=f(t,i,n);return b(r,j(r,e)?e:function(t,i){D(t,i,e)},function(t){o=t}),o},r.mixin(l,{dynamic:!0,normalize:g,load:b,cache:u,getL10nName:p})});//# sourceMappingURL=i18n.js.map