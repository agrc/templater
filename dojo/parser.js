//>>built
define("dojo/parser",["require","./_base/kernel","./_base/lang","./_base/array","./_base/config","./dom","./_base/window","./_base/url","./aspect","./promise/all","./date/stamp","./Deferred","./has","./query","./on","./ready"],function(require,dojo,dlang,darray,config,dom,dwindow,_Url,aspect,all,dates,Deferred,has,query,don,ready){function myEval(text){return eval("("+text+")")}function getNameMap(e){var t=e._nameCaseMap,i=e.prototype;if(!t||t._extendCnt<extendCnt){t=e._nameCaseMap={};for(var n in i)"_"!==n.charAt(0)&&(t[n.toLowerCase()]=n);t._extendCnt=extendCnt}return t}function getCtor(e,t){var i=e.join();if(!_ctorMap[i]){for(var n=[],o=0,r=e.length;r>o;o++){var a=e[o];n[n.length]=_ctorMap[a]=_ctorMap[a]||dlang.getObject(a)||~a.indexOf("/")&&(t?t(a):require(a))}var s=n.shift();_ctorMap[i]=n.length?s.createSubclass?s.createSubclass(n):s.extend.apply(s,n):s}return _ctorMap[i]}new Date("X");var extendCnt=0;aspect.after(dlang,"extend",function(){extendCnt++},!0);var _ctorMap={},parser={_clearCache:function(){extendCnt++,_ctorMap={}},_functionFromScript:function(e,t){var i="",n="",o=e.getAttribute(t+"args")||e.getAttribute("args"),r=e.getAttribute("with"),a=(o||"").split(/\s*,\s*/);return r&&r.length&&darray.forEach(r.split(/\s*,\s*/),function(e){i+="with("+e+"){",n+="}"}),new Function(a,i+e.innerHTML+n)},instantiate:function(e,t,i){t=t||{},i=i||{};var n=(i.scope||dojo._scopeName)+"Type",o="data-"+(i.scope||dojo._scopeName)+"-",r=o+"type",a=o+"mixins",s=[];return darray.forEach(e,function(e){var i=n in t?t[n]:e.getAttribute(r)||e.getAttribute(n);if(i){var o=e.getAttribute(a),d=o?[i].concat(o.split(/\s*,\s*/)):[i];s.push({node:e,types:d})}}),this._instantiate(s,t,i)},_instantiate:function(e,t,i,n){function o(e){return t._started||i.noStart||darray.forEach(e,function(e){"function"!=typeof e.startup||e._started||e.startup()}),e}var r=darray.map(e,function(e){var n=e.ctor||getCtor(e.types,i.contextRequire);if(!n)throw new Error("Unable to resolve constructor for: '"+e.types.join()+"'");return this.construct(n,e.node,t,i,e.scripts,e.inherited)},this);return n?all(r).then(o):o(r)},construct:function(e,t,i,n,o,r){function a(e){for(m&&dlang.setObject(m,e),b=0;b<k.length;b++)aspect[k[b].advice||"after"](e,k[b].method,dlang.hitch(e,k[b].func),!0);for(b=0;b<B.length;b++)B[b].call(e);for(b=0;b<A.length;b++)e.watch(A[b].prop,A[b].func);for(b=0;b<R.length;b++)don(e,R[b].event,R[b].func);return e}var s=e&&e.prototype;n=n||{};var d={};n.defaults&&dlang.mixin(d,n.defaults),r&&dlang.mixin(d,r);var l;if(has("dom-attributes-explicit"))l=t.attributes;else if(has("dom-attributes-specified-flag"))l=darray.filter(t.attributes,function(e){return e.specified});else{var c=/^input$|^img$/i.test(t.nodeName)?t:t.cloneNode(!1),u=c.outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,"").replace(/\s*>.*$/,"");l=darray.map(u.split(/\s+/),function(e){var i=e.toLowerCase();return{name:e,value:"LI"==t.nodeName&&"value"==e||"enctype"==i?t.getAttribute(i):t.getAttributeNode(i).value}})}var h=n.scope||dojo._scopeName,f="data-"+h+"-",p={};"dojo"!==h&&(p[f+"props"]="data-dojo-props",p[f+"type"]="data-dojo-type",p[f+"mixins"]="data-dojo-mixins",p[h+"type"]="dojoType",p[f+"id"]="data-dojo-id");for(var g,m,v,b=0,_=[];g=l[b++];){var j=g.name,y=j.toLowerCase(),S=g.value;switch(p[y]||y){case"data-dojo-type":case"dojotype":case"data-dojo-mixins":break;case"data-dojo-props":v=S;break;case"data-dojo-id":case"jsid":m=S;break;case"data-dojo-attach-point":case"dojoattachpoint":d.dojoAttachPoint=S;break;case"data-dojo-attach-event":case"dojoattachevent":d.dojoAttachEvent=S;break;case"class":d["class"]=t.className;break;case"style":d.style=t.style&&t.style.cssText;break;default:if(!(j in s)){var C=getNameMap(e);j=C[y]||j}if(j in s)switch(typeof s[j]){case"string":d[j]=S;break;case"number":d[j]=S.length?Number(S):NaN;break;case"boolean":d[j]="false"!=S.toLowerCase();break;case"function":""===S||-1!=S.search(/[^\w\.]+/i)?d[j]=new Function(S):d[j]=dlang.getObject(S,!1)||new Function(S),_.push(j);break;default:var w=s[j];d[j]=w&&"length"in w?S?S.split(/\s*,\s*/):[]:w instanceof Date?""==S?new Date(""):"now"==S?new Date:dates.fromISOString(S):w instanceof _Url?dojo.baseUrl+S:myEval(S)}else d[j]=S}}for(var N=0;N<_.length;N++){var T=_[N].toLowerCase();t.removeAttribute(T),t[T]=null}if(v)try{v=myEval.call(n.propsThis,"{"+v+"}"),dlang.mixin(d,v)}catch(x){throw new Error(x.toString()+" in data-dojo-props='"+v+"'")}dlang.mixin(d,i),o||(o=e&&(e._noScript||s._noScript)?[]:query("> script[type^='dojo/']",t));var k=[],B=[],A=[],R=[];if(o)for(b=0;b<o.length;b++){var I=o[b];t.removeChild(I);var L=I.getAttribute(f+"event")||I.getAttribute("event"),P=I.getAttribute(f+"prop"),D=I.getAttribute(f+"method"),F=I.getAttribute(f+"advice"),E=I.getAttribute("type"),M=this._functionFromScript(I,f);L?"dojo/connect"==E?k.push({method:L,func:M}):"dojo/on"==E?R.push({event:L,func:M}):d[L]=M:"dojo/aspect"==E?k.push({method:D,advice:F,func:M}):"dojo/watch"==E?A.push({prop:P,func:M}):B.push(M)}var z=e.markupFactory||s.markupFactory,O=z?z(d,t,e):new e(d,t);return O.then?O.then(a):a(O)},scan:function(e,t){function i(e,t){return e.getAttribute&&e.getAttribute(t)||e.parentNode&&i(e.parentNode,t)}function n(e){if(!e.inherited){e.inherited={};var t=e.node,i=n(e.parent),o={dir:t.getAttribute("dir")||i.dir,lang:t.getAttribute("lang")||i.lang,textDir:t.getAttribute(c)||i.textDir};for(var r in o)o[r]&&(e.inherited[r]=o[r])}return e.inherited}var o=[],r=[],a={},s=(t.scope||dojo._scopeName)+"Type",d="data-"+(t.scope||dojo._scopeName)+"-",l=d+"type",c=d+"textdir",u=d+"mixins",h=e.firstChild,f=t.inherited;if(!f){f={dir:i(e,"dir"),lang:i(e,"lang"),textDir:i(e,c)};for(var p in f)f[p]||delete f[p]}for(var g,m,v={inherited:f};;)if(h)if(1==h.nodeType)if(g&&"script"==h.nodeName.toLowerCase())b=h.getAttribute("type"),b&&/^dojo\/\w/i.test(b)&&g.push(h),h=h.nextSibling;else if(m)h=h.nextSibling;else{var b=h.getAttribute(l)||h.getAttribute(s),_=h.firstChild;if(b||_&&(3!=_.nodeType||_.nextSibling)){var j,y=null;if(b){var S=h.getAttribute(u),C=S?[b].concat(S.split(/\s*,\s*/)):[b];try{y=getCtor(C,t.contextRequire)}catch(w){}y||darray.forEach(C,function(e){~e.indexOf("/")&&!a[e]&&(a[e]=!0,r[r.length]=e)});var N=y&&!y.prototype._noScript?[]:null;j={types:C,ctor:y,parent:v,node:h,scripts:N},j.inherited=n(j),o.push(j)}else j={node:h,scripts:g,parent:v};g=N,m=h.stopParser||y&&y.prototype.stopParser&&!t.template,v=j,h=_}else h=h.nextSibling}else h=h.nextSibling;else{if(!v||!v.node)break;h=v.node.nextSibling,m=!1,v=v.parent,g=v.scripts}var T=new Deferred;if(r.length){has("dojo-debug-messages");var x=t.contextRequire||require;x(r,function(){T.resolve(darray.filter(o,function(e){if(!e.ctor)try{e.ctor=getCtor(e.types,t.contextRequire)}catch(i){}for(var n=e.parent;n&&!n.types;)n=n.parent;var o=e.ctor&&e.ctor.prototype;return e.instantiateChildren=!(o&&o.stopParser&&!t.template),e.instantiate=!n||n.instantiate&&n.instantiateChildren,e.instantiate}))})}else T.resolve(o);return T.promise},_require:function(e,t){var i=myEval("{"+e.innerHTML+"}"),n=[],o=[],r=new Deferred,a=t&&t.contextRequire||require;for(var s in i)n.push(s),o.push(i[s]);return a(o,function(){for(var e=0;e<n.length;e++)dlang.setObject(n[e],arguments[e]);r.resolve(arguments)}),r.promise},_scanAmd:function(e,t){var i=new Deferred,n=i.promise;i.resolve(!0);var o=this;return query("script[type='dojo/require']",e).forEach(function(e){n=n.then(function(){return o._require(e,t)}),e.parentNode.removeChild(e)}),n},parse:function(e,t){var i;!t&&e&&e.rootNode?(t=e,i=t.rootNode):!e||!dlang.isObject(e)||"nodeType"in e?i=e:t=e,i=i?dom.byId(i):dwindow.body(),t=t||{};var n=t.template?{template:!0}:{},o=[],r=this,a=this._scanAmd(i,t).then(function(){return r.scan(i,t)}).then(function(e){return r._instantiate(e,n,t,!0)}).then(function(e){return o=o.concat(e)}).otherwise(function(e){throw e});return dlang.mixin(o,a),o}};return dojo.parser=parser,config.parseOnLoad&&ready(100,parser,"parse"),parser});//# sourceMappingURL=parser.js.map