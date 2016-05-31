//>>built
define("dojox/lang/functional/lambda",["../..","dojo/_base/lang","dojo/_base/array"],function(e,t,i){var a=t.getObject("lang.functional",!0,e),o={},r="ab".split(/a*/).length>1?String.prototype.split:function(e){var t=this.split.call(this,e),i=e.exec(this);return i&&0==i.index&&t.unshift(""),t},n=function(e){var t=[],a=r.call(e,/\s*->\s*/m);if(a.length>1)for(;a.length;)e=a.pop(),t=a.pop().split(/\s*,\s*|\s+/m),a.length&&a.push("(function("+t.join(", ")+"){ return ("+e+"); })");else if(e.match(/\b_\b/))t=["_"];else{var o=e.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),n=e.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);if(o||n)o&&(t.push("$1"),e="$1"+e),n&&(t.push("$2"),e+="$2");else{var s=e.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*:|this|true|false|null|undefined|typeof|instanceof|in|delete|new|void|arguments|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|escape|eval|isFinite|isNaN|parseFloat|parseInt|unescape|dojo|dijit|dojox|window|document|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g,"").match(/([a-z_$][a-z_$\d]*)/gi)||[],d={};i.forEach(s,function(e){d.hasOwnProperty(e)||(t.push(e),d[e]=1)})}}return{args:t,body:e}},s=function(e){return e.length?function(){var t=e.length-1,i=a.lambda(e[t]).apply(this,arguments);for(--t;t>=0;--t)i=a.lambda(e[t]).call(this,i);return i}:function(e){return e}};return t.mixin(a,{rawLambda:function(e){return n(e)},buildLambda:function(e){var t=n(e);return"function("+t.args.join(",")+"){return ("+t.body+");}"},lambda:function(e){if("function"==typeof e)return e;if(e instanceof Array)return s(e);if(o.hasOwnProperty(e))return o[e];var t=n(e);return o[e]=new Function(t.args,"return ("+t.body+");")},clearLambdaCache:function(){o={}}}),a});//# sourceMappingURL=lambda.js.map