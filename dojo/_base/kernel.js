//>>built
define("dojo/_base/kernel",["../global","../has","./config","require","module"],function(e,t,i,o,n){var s,a,r,d={},l={},c={config:i,global:e,dijit:d,dojox:l},u={dojo:["dojo",c],dijit:["dijit",d],dojox:["dojox",l]},h=o.map&&o.map[n.id.match(/[^\/]+/)[0]];for(a in h)u[a]?u[a][0]=h[a]:u[a]=[h[a],{}];for(a in u)r=u[a],r[1]._scopeName=r[0],i.noGlobals||(e[r[0]]=r[1]);c.scopeMap=u,c.baseUrl=c.config.baseUrl=o.baseUrl,c.isAsync=o.async,c.locale=i.locale;var f="$Rev: 2dae964 $".match(/[0-9a-f]{7,}/);c.version={major:1,minor:11,patch:5,flag:"",revision:f?f[0]:NaN,toString:function(){var e=c.version;return e.major+"."+e.minor+"."+e.patch+e.flag+" ("+e.revision+")"}},t("csp-restrictions")||Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(c),c.exit=function(){},t("host-webworker"),t.add("console-as-object",function(){return Function.prototype.bind&&console&&"object"==typeof console.log}),"undefined"!=typeof console||(console={});var p,g=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];for(s=0;p=g[s++];)console[p]?t("console-as-object")&&(console[p]=Function.prototype.bind.call(console[p],console)):function(){var e=p+"";console[e]="log"in console?function(){var t=Array.prototype.slice.call(arguments);t.unshift(e+":"),console.log(t.join(" "))}:function(){},console[e]._fake=!0}();if(t.add("dojo-debug-messages",!!i.isDebug),c.deprecated=c.experimental=function(){},t("dojo-debug-messages")&&(c.deprecated=function(e,t,i){var o="DEPRECATED: "+e;t&&(o+=" "+t),i&&(o+=" -- will be removed in version: "+i)},c.experimental=function(e,t){var i="EXPERIMENTAL: "+e+" -- APIs subject to change without notice.";t&&(i+=" "+t)}),i.modulePaths){c.deprecated("dojo.modulePaths","use paths configuration");var m={};for(a in i.modulePaths)m[a.replace(/\./g,"/")]=i.modulePaths[a];o({paths:m})}return c.moduleUrl=function(e,t){c.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");var i=null;return e&&(i=o.toUrl(e.replace(/\./g,"/")+(t?"/"+t:"")+"/*.*").replace(/\/\*\.\*/,"")+(t?"":"/")),i},c._hasResource={},c});//# sourceMappingURL=kernel.js.map