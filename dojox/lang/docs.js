//>>built
define("dojox/lang/docs",["dojo","dijit","dojox"],function(e,t,a){e.provide("dojox.lang.docs"),function(){function t(e){}var n={},o=[],r=a.lang.docs._loadedDocs={},s=function(e,t){n[t]=e},l=function(t){var i,a,n=t.type||"",o=!1,r=!1;return n=n.replace(/\?/,function(){return o=!0,""}),n=n.replace(/\[\]/,function(){return r=!0,""}),n.match(/HTML/)?n="string":"String"==n||"Number"==n||"Boolean"==n||"Object"==n||"Array"==n||"Integer"==n||"Function"==n?n=n.toLowerCase():"bool"==n?n="boolean":n?(i=e.getObject(n)||{},a=!0):i={},i=i||{type:n},r&&(i={items:i,type:"array"},a=!1),a||(o&&(i.optional=!0),/const/.test(t.tags)&&(i.readonly=!0)),i},d=function(t,i){var a=r[i];if(a){if(t.description=a.description,t.properties={},t.methods={},a.properties)for(var n=a.properties,o=0,s=n.length;s>o;o++)if("prototype"==n[o].scope){var d=t.properties[n[o].name]=l(n[o]);d.description=n[o].summary}if(a.methods){var c=a.methods;for(o=0,s=c.length;s>o;o++)if(i=c[o].name,i&&"prototype"==c[o].scope){var u=t.methods[i]={};u.description=c[o].summary;var h=c[o].parameters;if(h){u.parameters=[];for(var m=0,f=h.length;f>m;m++){var p=h[m],g=u.parameters[m]=l(p);g.name=p.name,g.optional="optional"==p.usage}}var v=c[o]["return-types"];if(v&&v[0]){var y=l(v[0]);y.type&&(u.returns=y)}}}var k=a.superclass;k&&(t["extends"]=e.getObject(k))}},c=function(e){o.push(e)},u=e.declare;e.declare=function(e){var t=u.apply(this,arguments);return s(t,e),t},e.mixin(e.declare,u);var h,m=e.require;e.require=function(e){c(e);var t=m.apply(this,arguments);return t},a.lang.docs.init=function(a){function l(){e.require=m,o=null;try{e.xhrGet({sync:!a,url:e.baseUrl+"../util/docscripts/api.json",handleAs:"text"}).addCallbacks(function(e){r=new Function("return "+e)(),e=null,s=d;for(var t in n)s(n[t],t);n=null},t)}catch(i){t(i)}}if(h)return null;h=!0;var u=function(t,i){return e.xhrGet({sync:i||!a,url:e.baseUrl+"../util/docscripts/api/"+t+".json",handleAs:"text"}).addCallback(function(e){e=new Function("return "+e)();for(var t in e)r[t]||(r[t]=e[t])})};try{var f=o.shift();u(f,!0).addCallbacks(function(){c=function(e){if(!r[e])try{u(e)}catch(t){r[e]={}}},e.forEach(o,function(e){c(e)}),o=null,s=d;for(i in n)s(n[i],i);n=null},l)}catch(p){l()}return null}}()});//# sourceMappingURL=docs.js.map