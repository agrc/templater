//>>built
define("dojo/_base/kernel",["../has","./config","require","module"],function(e,t,i,o){var n,a,s,r=function(){return this}(),d={},l={},c={config:t,global:r,dijit:d,dojox:l},h={dojo:["dojo",c],dijit:["dijit",d],dojox:["dojox",l]},u=i.map&&i.map[o.id.match(/[^\/]+/)[0]];for(a in u)h[a]?h[a][0]=u[a]:h[a]=[u[a],{}];for(a in h)s=h[a],s[1]._scopeName=s[0],t.noGlobals||(r[s[0]]=s[1]);c.scopeMap=h,c.baseUrl=c.config.baseUrl=i.baseUrl,c.isAsync=i.async,c.locale=t.locale;var p="$Rev: 68886c4 $".match(/[0-9a-f]{7,}/);c.version={major:1,minor:10,patch:5,flag:"",revision:p?p[0]:NaN,toString:function(){var e=c.version;return e.major+"."+e.minor+"."+e.patch+e.flag+" ("+e.revision+")"}},Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(c),c.exit=function(){},!e("host-webworker"),e.add("console-as-object",Function.prototype.bind&&console&&"object"==typeof console.log),"undefined"!=typeof console||(console={});var f,g=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];for(n=0;f=g[n++];)console[f]?e("console-as-object")&&(console[f]=Function.prototype.bind.call(console[f],console)):!function(){var e=f+"";console[e]="log"in console?function(){var t=Array.prototype.slice.call(arguments);t.unshift(e+":"),console.log(t.join(" "))}:function(){},console[e]._fake=!0}();if(e.add("dojo-debug-messages",!!t.isDebug),c.deprecated=c.experimental=function(){},e("dojo-debug-messages")&&(c.deprecated=function(e,t,i){var o="DEPRECATED: "+e;t&&(o+=" "+t),i&&(o+=" -- will be removed in version: "+i)},c.experimental=function(e,t){var i="EXPERIMENTAL: "+e+" -- APIs subject to change without notice.";t&&(i+=" "+t)}),t.modulePaths){c.deprecated("dojo.modulePaths","use paths configuration");var m={};for(a in t.modulePaths)m[a.replace(/\./g,"/")]=t.modulePaths[a];i({paths:m})}return c.moduleUrl=function(e,t){c.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");var o=null;return e&&(o=i.toUrl(e.replace(/\./g,"/")+(t?"/"+t:"")+"/*.*").replace(/\/\*\.\*/,"")+(t?"":"/")),o},c._hasResource={},c});//# sourceMappingURL=kernel.js.map