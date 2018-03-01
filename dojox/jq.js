//>>built
define("dojox/jq",["dojo","dijit","dojox","dojo/require!dojo/NodeList-traverse,dojo/NodeList-manipulate,dojo/io/script"],function(e,t,a){e.provide("dojox.jq"),e.require("dojo.NodeList-traverse"),e.require("dojo.NodeList-manipulate"),e.require("dojo.io.script"),function(){function t(t,a){return t+="",t=t.replace(/<\s*(\w+)([^\/\>]*)\/\s*>/g,function(e,t,a){return-1==v.indexOf("|"+t+"|")?"<"+t+a+"></"+t+">":e}),e._toDom(t,a)}function a(e){var t=e.indexOf("-");return-1!=t&&(0==t&&(e=e.substring(1)),e=e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})),e}function i(t,a){if(t==a)return t;var r={};for(var d in a)void 0!==r[d]&&r[d]==a[d]||void 0===a[d]||t==a[d]||(e.isObject(t[d])&&e.isObject(a[d])?e.isArray(a[d])?t[d]=a[d]:t[d]=i(t[d],a[d]):t[d]=a[d]);if(e.isIE&&a){var n=a.toString;"function"==typeof n&&n!=t.toString&&n!=r.toString&&"\nfunction toString() {\n    [native code]\n}\n"!=n&&(t.toString=a.toString)}return t}function r(e){return e.contentDocument||e.name&&e.document&&document.getElementsByTagName("iframe")[e.name].contentWindow&&document.getElementsByTagName("iframe")[e.name].contentWindow.document||e.name&&document.frames[e.name]&&document.frames[e.name].document||null}function d(t,a,i,r){if(r){var d={};return d[i]=r,t.forEach(function(t){e[a](t,d)}),t}return Math.abs(Math.round(e[a](t[0])[i]))}function n(t,a,i,r,d){var n=!1;(n="none"==t.style.display)&&(t.style.display="block");var o=e.getComputedStyle(t),l=Math.abs(Math.round(e._getContentBox(t,o)[a])),s=i?Math.abs(Math.round(e._getPadExtents(t,o)[a])):0,m=r?Math.abs(Math.round(e._getBorderExtents(t,o)[a])):0,f=d?Math.abs(Math.round(e._getMarginExtents(t,o)[a])):0;return n&&(t.style.display="none"),s+l+m+f}function o(e){e=e.split("$$")[0];var t=e.indexOf(".");return-1!=t&&(e=e.substring(0,t)),e}function l(t,a){return 0==a.indexOf("ajax")?e.subscribe(N[a],function(e,i){var r=new g.Event(a);-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(a)?m(t,[r,e.ioArgs.xhr,e.ioArgs.args]):"ajaxError"==a?m(t,[r,e.ioArgs.xhr,e.ioArgs.args,i]):m(t,[r])}):e.connect(t,"on"+a,function(e){m(t,arguments)})}function s(e,t){e=e||[],e=[].concat(e);var a=e[0];return a&&a.preventDefault||(a=t&&t.preventDefault?t:new g.Event(t),e.unshift(a)),e}function m(t,a,i){C=!0,a=a||G,i=i,9==t.nodeType&&(t=t.documentElement);var r=t.getAttribute(z);if(r){var d,n=a[0],l=n.type,s=o(l),m=S[r][s];if(i&&(d=i.apply(t,a)),!1!==d)for(var f in m)if("_connectId"!=f&&(!n._isStrict&&0==f.indexOf(l)||n._isStrict&&f==l)){n[e._scopeName+"callbackId"]=f;var u=m[f];void 0!==u.data?n.data=u.data:n.data=null,!1!==(d=u.fn.apply(n.target,a))||n._isFake||e.stopEvent(n),n.result=d}return d}}function f(e,t){var a=t.getAttribute(z),i=S[a];if(i){var r=r=_++;t.setAttribute(z,r);var d=S[r]={};for(var n in i){var o=d[n]={_connectId:l(t,n)},s=i[n];for(var m in s)o[m]={fn:s[m].fn,data:s[m].data}}}}function u(t,a,i,r,d){var n=t[a];if(n){var o=-1!=i.indexOf("."),l=!1;if(r)delete n[r];else if(o||d){if(o)if("."==i.charAt(0))for(var s in n)s.indexOf(i)==s.length-i.length&&delete n[s];else delete n[i];else for(var s in n)if(-1!=s.indexOf("$$")&&n[s].fn==d){delete n[s];break}}else l=!0;var m=!0;for(var s in n)if("_connectId"!=s){m=!1;break}(l||m)&&(-1!=a.indexOf("ajax")?e.unsubscribe(n._connectId):e.disconnect(n._connectId),delete t[a])}}function h(t){return e.isString(t)&&(t="slow"==t?700:"fast"==t?300:500),t}function y(e){for(var t in e)if(t.indexOf("callback")==t.length-8)return t;return null}e.config.ioPublish=!0;var v="|img|meta|hr|br|input|",M=e.global.$,c=e.global.jQuery,g=e.global.$=e.global.jQuery=function(){var a=arguments[0];if(!a)return g._wrap([],null,g);if(e.isString(a)){if("<"!=a.charAt(0)){var i=e._NodeListCtor;e._NodeListCtor=g;var r=arguments[1];r&&r._is$?r=r[0]:e.isString(r)&&(r=e.query(r)[0]);var d=e.query.call(this,a,r);return e._NodeListCtor=i,d}if(a=t(a),11!=a.nodeType)return g._wrap([a],null,g);a=a.childNodes}else{if(e.isFunction(a))return g.ready(a),g;if(a==document||a==window)return g._wrap([a],null,g);if(e.isArray(a)){for(var n=[],o=0;o<a.length;o++)-1==e.indexOf(n,a[o])&&n.push(a[o]);return g._wrap(a,null,g)}if("nodeType"in a)return g._wrap([a],null,g)}return g._wrap(e._toArray(a),null,g)},p=e.NodeList.prototype,b=g.fn=g.prototype=e.delegate(p);g._wrap=e.NodeList._wrap;var k=/^H\d/i,w=e.query.pseudos;e.mixin(w,{has:function(e,t){return function(e){return g(t,e).length}},visible:function(t,a){return function(t){return"hidden"!=e.style(t,"visible")&&"none"!=e.style(t,"display")}},hidden:function(t,a){return function(t){return"hidden"==t.type||"hidden"==e.style(t,"visible")||"none"==e.style(t,"display")}},selected:function(e,t){return function(e){return e.selected}},checked:function(e,t){return function(e){return"INPUT"==e.nodeName.toUpperCase()&&e.checked}},disabled:function(e,t){return function(e){return e.getAttribute("disabled")}},enabled:function(e,t){return function(e){return!e.getAttribute("disabled")}},input:function(e,t){return function(e){var t=e.nodeName.toUpperCase();return"INPUT"==t||"SELECT"==t||"TEXTAREA"==t||"BUTTON"==t}},button:function(e,t){return function(e){return"INPUT"==e.nodeName.toUpperCase()&&"button"==e.type||"BUTTON"==e.nodeName.toUpperCase()}},header:function(e,t){return function(e){return e.nodeName.match(k)}}});var F={};e.forEach(["text","password","radio","checkbox","submit","image","reset","file"],function(e){F[e]=function(t,a){return function(t){return"INPUT"==t.nodeName.toUpperCase()&&t.type==e}}}),e.mixin(w,F),g.browser={mozilla:e.isMoz,msie:e.isIE,opera:e.isOpera,safari:e.isSafari},g.browser.version=e.isIE||e.isMoz||e.isOpera||e.isSafari||e.isWebKit,g.ready=g.fn.ready=function(t){return e.addOnLoad(e.hitch(null,t,g)),this},b._is$=!0,b.size=function(){return this.length},g.prop=function(t,a){return e.isFunction(a)?a.call(t):a},g.className={add:e.addClass,remove:e.removeClass,has:e.hasClass},g.makeArray=function(t){return void 0===t?[]:!t.length||e.isString(t)||"location"in t?[t]:e._toArray(t)},g.merge=function(e,t){var a=[e.length,0];return a=a.concat(t),e.splice.apply(e,a),e},g.each=function(t,a){if(e.isArrayLike(t))for(var i=0;i<t.length&&!1!==a.call(t[i],i,t[i]);i++);else if(e.isObject(t))for(var r in t)if(!1===a.call(t[r],r,t[r]))break;return this},b.each=function(e){return g.each.call(this,this,e)},b.eq=function(){var t=g();return e.forEach(arguments,function(e){this[e]&&t.push(this[e])},this),t},b.get=function(e){return e||0==e?this[e]:this},b.index=function(e){return e._is$&&(e=e[0]),this.indexOf(e)};var I=[],E=0,j=e._scopeName+"DataId",T=function(e){var t=e.getAttribute(j);t||(t=E++,e.setAttribute(j,t))},A=function(e){var t={};if(1==e.nodeType){var a=T(e);t=I[a],t||(t=I[a]={})}return t};g.data=function(e,t,a){var i=null;if("events"==t){i=S[e.getAttribute(z)];var r=!0;if(i)for(var d in i){r=!1;break}return r?null:i}var n=A(e);return void 0!==a?n[t]=a:i=n[t],a?this:i},g.removeData=function(e,t){var a=A(e);if(delete a[t],1==e.nodeType){var i=!0;for(var r in a){i=!1;break}i&&e.removeAttribute(j)}return this},b.data=function(e,t){var a=null;return this.forEach(function(i){a=g.data(i,e,t)}),t?this:a},b.removeData=function(e){return this.forEach(function(t){g.removeData(t,e)}),this},b.extend=function(){var e=[this];return e=e.concat(arguments),g.extend.apply(g,e)},g.extend=function(){for(var t,a=arguments,r=0;r<a.length;r++){var d=a[r];d&&e.isObject(d)&&(t?i(t,d):t=d)}return t},g.noConflict=function(t){var a=g;return e.global.$=M,t&&(e.global.jQuery=c),a},b.attr=function(t,a){if(1==arguments.length&&e.isString(arguments[0])){var i=this[0];if(!i)return null;var r=arguments[0],d=e.attr(i,r),n=i[r];return r in i&&!e.isObject(n)&&"href"!=t?n:d||n}if(e.isObject(t)){for(var o in t)this.attr(o,t[o]);return this}var l=e.isFunction(a);return this.forEach(function(i,r){var d=i[t];t in i&&!e.isObject(d)&&"href"!=t?i[t]=l?a.call(i,r):a:1==i.nodeType&&e.attr(i,t,l?a.call(i,r):a)}),this},b.removeAttr=function(t){return this.forEach(function(a,i){var r=a[t];t in a&&!e.isObject(r)&&"href"!=t?delete a[t]:1==a.nodeType&&("class"==t?a.removeAttribute(t):e.removeAttr(a,t))}),this},b.toggleClass=function(t,a){var i=arguments.length>1;return this.forEach(function(r){e.toggleClass(r,t,i?a:!e.hasClass(r,t))}),this},b.toggle=function(){var t=arguments;if(arguments.length>1&&e.isFunction(arguments[0])){var a=0,i=function(){t[a].apply(this,arguments);(a+=1)>t.length-1&&(a=0)};return this.bind("click",i)}var r=1==arguments.length?arguments[0]:void 0;return this.forEach(function(a){var i=void 0===r?"none"==e.style(a,"display"):r,d=i?"show":"hide",n=g(a);n[d].apply(n,t)}),this},b.hasClass=function(t){return this.some(function(a){return e.hasClass(a,t)})},b.html=b.innerHTML,e.forEach(["filter","slice"],function(t){b[t]=function(){var a;if(e.isFunction(arguments[0])){var i=arguments[0];arguments[0]=function(e,t){return i.call(e,e,t)}}if("filter"==t&&e.isString(arguments[0]))var a=this._filterQueryResult(this,arguments[0]);else{var r=e._NodeListCtor;e._NodeListCtor=b,a=g(p[t].apply(this,arguments)),e._NodeListCtor=r}return a._stash(this)}}),b.map=function(e){return this._buildArrayFromCallback(e)},g.map=function(e,t){return b._buildArrayFromCallback.call(e,t)},g.inArray=function(t,a){return e.indexOf(a,t)},b.is=function(e){return!!e&&!!this.filter(e).length},b.not=function(){var e=g.apply(g,arguments);return g(p.filter.call(this,function(t){return-1==e.indexOf(t)}))._stash(this)},b.add=function(){return this.concat.apply(this,arguments)},b.contents=function(){var e=[];return this.forEach(function(t){if("IFRAME"==t.nodeName.toUpperCase()){var a=r(t);a&&e.push(a)}else for(var i=t.childNodes,d=0;d<i.length;d++)e.push(i[d])}),this._wrap(e)._stash(this)},b.find=function(t){var a=[];return this.forEach(function(i){1==i.nodeType&&(a=a.concat(e._toArray(g(t,i))))}),this._getUniqueAsNodeList(a)._stash(this)},b.andSelf=function(){return this.add(this._parent)},b.remove=function(e){var t=e?this._filterQueryResult(this,e):this;return t.removeData(),t.forEach(function(e){e.parentNode.removeChild(e)}),this},g.css=function(t,i,r){return i=a(i),r?e.style(t,i,r):e.style(t,i)},b.css=function(t,i){if(e.isString(t))return t=a(t),2==arguments.length?(e.isString(i)||"zIndex"==t||(i+="px"),this.forEach(function(a){1==a.nodeType&&e.style(a,t,i)}),this):(i=e.style(this[0],t),e.isString(i)||"zIndex"==t||(i+="px"),i);for(var r in t)this.css(r,t[r]);return this},b.height=function(e){return d(this,"contentBox","h",e)},b.width=function(e){return d(this,"contentBox","w",e)},b.innerHeight=function(){return n(this[0],"h",!0)},b.innerWidth=function(){return n(this[0],"w",!0)},b.outerHeight=function(e){return n(this[0],"h",!0,!0,e)},b.outerWidth=function(e){return n(this[0],"w",!0,!0,e)};var G,S=[],_=1,z=e._scopeName+"eventid";g.Event=function(t){if(this==g)return new g.Event(t);"string"==typeof t?this.type=t.replace(/!/,""):e.mixin(this,t),this.timeStamp=(new Date).getTime(),this._isFake=!0,this._isStrict=-1!=this.type.indexOf("!")};var x=g.Event.prototype={preventDefault:function(){this.isDefaultPrevented=this._true},stopPropagation:function(){this.isPropagationStopped=this._true},stopImmediatePropagation:function(){this.isPropagationStopped=this._true,this.isImmediatePropagationStopped=this._true},_true:function(){return!0},_false:function(){return!1}};e.mixin(x,{isPropagationStopped:x._false,isImmediatePropagationStopped:x._false,isDefaultPrevented:x._false});var C=!1;b.triggerHandler=function(e,t,a){var i=this[0];return i&&3!=i.nodeType&&8!=i.nodeType?(t=s(t,e),m(i,t,a)):void 0},b.trigger=function(e,t,a){t=s(t,e);var i=t[0],e=o(i.type);G=t,currentExtraFunc=a;var r=null,d=!i.target;return this.forEach(function(n){if(3!=n.nodeType&&8!=n.nodeType){if(9==n.nodeType&&(n=n.documentElement),i._isFake&&(i.currentTarget=n,d&&(i.target=n)),a){var o=t.slice(1);r=a.apply(n,r=o.concat(r))}if(!1!==r){if(C=!1,n[e])try{r=n[e]()}catch(e){}else if(n["on"+e])try{r=n["on"+e]()}catch(e){}C||(r=m(n,t));var l=n.parentNode;!1===r||i.isImmediatePropagationStopped()||i.isPropagationStopped()||!l||1!=l.nodeType||g(l).trigger(e,t,a)}}}),G=null,currentExtraFunc=null,this};var H=0;b.bind=function(e,t,a){return e=e.split(" "),a||(a=t,t=null),this.forEach(function(i){if(3!=i.nodeType&&8!=i.nodeType){9==i.nodeType&&(i=i.documentElement);var r=i.getAttribute(z);r||(r=_++,i.setAttribute(z,r),S[r]={});for(var d=0;d<e.length;d++){var n=e[d],s=o(n);s==n&&(n=s+"$$"+H++);var m=S[r];m[s]||(m[s]={_connectId:l(i,s)}),m[s][n]={fn:a,data:t}}}}),this},b.unbind=function(t,a){var i=t?t[e._scopeName+"callbackId"]:null;return t=t&&t.type?t.type:t,t=t?t.split(" "):t,this.forEach(function(e){if(3!=e.nodeType&&8!=e.nodeType){9==e.nodeType&&(e=e.documentElement);var r=e.getAttribute(z);if(r){var d=S[r];if(d){var n=t;if(!n){n=[];for(var l in d)n.push(l)}for(var s=0;s<n.length;s++){var m=n[s],f=o(m);if("."==m.charAt(0))for(var l in d)u(d,l,m,i,a);else u(d,f,m,i,a)}}}}}),this},b.one=function(e,t){var a=function(){return g(this).unbind(e,arguments.callee),t.apply(this,arguments)};return this.bind(e,a)},b._cloneNode=function(t){var a=t.cloneNode(!0);if(1==t.nodeType)for(var i,r=e.query("["+z+"]",a),d=0;i=r[d];d++){var n=e.query("["+z+'="'+i.getAttribute(z)+'"]',t)[0];n&&f(n,i)}return a},e.getObject("$.event.global",!0),e.forEach(["blur","focus","dblclick","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit","ajaxStart","ajaxSend","ajaxSuccess","ajaxError","ajaxComplete","ajaxStop"],function(e){b[e]=function(t){return t?this.bind(e,t):this.trigger(e),this}}),b.hide=function(t,a){return t=h(t),this.forEach(function(i){var r=i.style;"none"!=e.getComputedStyle(i).display&&(r.overflow="hidden",r.display="block",t?e.anim(i,{width:0,height:0,opacity:0},t,null,function(){return r.width="",r.height="",r.display="none",a&&a.call(i)}):(e.style(i,"display","none"),a&&a.call(i)))}),this},b.show=function(t,a){return t=h(t),this.forEach(function(i){var r=i.style;if("none"==e.getComputedStyle(i).display)if(t){var d=parseFloat(r.width),n=parseFloat(r.height);if(!d||!n){r.display="block";var o=e.marginBox(i);d=o.w,n=o.h}r.width=0,r.height=0,r.overflow="hidden",e.attr(i,"opacity",0),r.display="block",e.anim(i,{width:d,height:n,opacity:1},t,null,a?e.hitch(i,a):void 0)}else e.style(i,"display","block"),a&&a.call(i)}),this},g.ajaxSettings={},g.ajaxSetup=function(t){e.mixin(g.ajaxSettings,t)};var N={ajaxStart:"/dojo/io/start",ajaxSend:"/dojo/io/send",ajaxSuccess:"/dojo/io/load",ajaxError:"/dojo/io/error",ajaxComplete:"/dojo/io/done",ajaxStop:"/dojo/io/stop"};for(var Q in N)0==Q.indexOf("ajax")&&function(t){b[t]=function(a){return this.forEach(function(i){e.subscribe(N[t],function(){var e=new g.Event(t),r=arguments[0]&&arguments[0].ioArgs,d=r&&r.xhr,n=r&&r.args,o=arguments[1];return-1!="ajaxComplete|ajaxSend|ajaxSuccess".indexOf(t)?a.call(i,e,d,n):"ajaxError"==t?a.call(i,e,d,n,o):a.call(i,e)})}),this}}(Q);var P=e._xhrObj;e._xhrObj=function(t){var a=P.apply(e,arguments);return(!t||!t.beforeSend||!1!==t.beforeSend(a))&&a},g.ajax=function(t){var a=e.delegate(g.ajaxSettings);for(var i in t)if("data"==i&&e.isObject(t[i])&&e.isObject(a.data))for(var r in t[i])a.data[r]=t[i][r];else a[i]=t[i];t=a;var d=t.url;if("async"in t&&(t.sync=!t.async),!1===t.global&&(t.ioPublish=!1),t.data){var n=t.data;if(e.isString(n))t.content=e.queryToObject(n);else{for(var i in n)e.isFunction(n[i])&&(n[i]=n[i]());t.content=n}}var o=t.dataType;"dataType"in t?("script"==o?o="javascript":"html"==o&&(o="text"),t.handleAs=o):(o=t.handleAs="text",t.guessedType=!0),"cache"in t?t.preventCache=!t.cache:"script"!=t.dataType&&"jsonp"!=t.dataType||(t.preventCache=!0),t.error&&(t._jqueryError=t.error,delete t.error),t.handle=function(e,a){var i="success";if(e instanceof Error)i="timeout"==e.dojoType?"timeout":"error",t._jqueryError&&t._jqueryError(a.xhr,i,e);else{var r=a.args.guessedType&&a.xhr&&a.xhr.responseXML;r&&(e=r),t.success&&t.success(e,i,a.xhr)}return t.complete&&t.complete(e,i,a.xhr),e};var l="jsonp"==o;if("javascript"==o){var s=d.indexOf(":"),m=d.indexOf("/");if(s>0&&s<m){var f=d.indexOf("/",m+2);-1==f&&(f=d.length),location.protocol==d.substring(0,s+1)&&location.hostname==d.substring(m+2,f)||(l=!0)}}if(l){if("jsonp"==o){var u=t.jsonp;if(!u){var h=t.url.split("?")[1];if(h&&(h=e.queryToObject(h))&&(u=y(h))){var v=new RegExp("([&\\?])?"+u+"=?");t.url=t.url.replace(v+"=?")}u||(u=y(t.content))&&delete t.content[u]}t.jsonp=u||"callback"}var M=e.io.script.get(t);return M}var M=e.xhr(t.type||"GET",t);return!1!==M.ioArgs.xhr&&M.ioArgs.xhr},g.getpost=function(t,a,i,r,d){var n={url:a,type:t};return i&&(e.isFunction(i)&&!r?n.complete=i:n.data=i),r&&(e.isString(r)&&!d?d=r:n.complete=r),d&&(n.dataType=d),g.ajax(n)},g.get=e.hitch(g,"getpost","GET"),g.post=e.hitch(g,"getpost","POST"),g.getJSON=function(e,t,a){return g.getpost("GET",e,t,a,"json")},g.getScript=function(e,t){return g.ajax({url:e,success:t,dataType:"script"})},b.load=function(t,a,i){var r=this[0];if(!r||!r.nodeType||9==r.nodeType)return e.addOnLoad(t),this;var d=t.split(/\s+/);t=d[0];var n=d[1],o=i||a,l=e.hitch(this,function(t,a,i){var r=t.match(/\<\s*body[^>]+>.*<\/body\s*>/i);r&&(t=r);var d=e._toDom(t);if(n){var l=g(e.create("div"));l.append(d),d=l.find(n)}else d=g(11==d.nodeType?d.childNodes:d);this.html(d),o&&setTimeout(e.hitch(this,function(){this.forEach(function(e){o.call(e,t,a,i)})}),10)});i?i=l:a=l;var s="GET";return a&&e.isObject(a)&&(s="POST"),g.getpost(s,t,a,i,"html"),this},b.serialize=function(){return""+this.map(function(t){if("FORM"==t.nodeName.toUpperCase())return e.formToQuery(t);if(-1=="file|submit|image|reset|button|".indexOf((t.type||"").toLowerCase())){var a=e.fieldToObject(t);if(t.name&&null!=a){var i={};return i[t.name]=a,e.objectToQuery(i)}}}).join("&")},g.param=function(t){return t._is$&&t.serialize?t.serialize():e.isArray(t)?e.map(t,function(e){return g.param(e)}).join("&"):e.objectToQuery(t)},g.isFunction=function(){var t=e.isFunction.apply(e,arguments);return t&&(t="object"!=typeof arguments[0]),t}}()});//# sourceMappingURL=jq.js.map