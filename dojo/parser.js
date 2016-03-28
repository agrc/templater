//>>built
define("dojo/parser",["require","./_base/kernel","./_base/lang","./_base/array","./_base/config","./dom","./_base/window","./_base/url","./aspect","./promise/all","./date/stamp","./Deferred","./has","./query","./on","./ready"],function(require,dojo,dlang,darray,config,dom,dwindow,_Url,aspect,all,dates,Deferred,has,query,don,ready){function myEval(text){return eval("("+text+")")}function getNameMap(t){var e=t._nameCaseMap,i=t.prototype;if(!e||e._extendCnt<extendCnt){e=t._nameCaseMap={};for(var n in i)"_"!==n.charAt(0)&&(e[n.toLowerCase()]=n);e._extendCnt=extendCnt}return e}function getCtor(t,e){var i=t.join();if(!_ctorMap[i]){for(var n=[],o=0,r=t.length;r>o;o++){var a=t[o];n[n.length]=_ctorMap[a]=_ctorMap[a]||dlang.getObject(a)||~a.indexOf("/")&&(e?e(a):require(a))}var s=n.shift();_ctorMap[i]=n.length?s.createSubclass?s.createSubclass(n):s.extend.apply(s,n):s}return _ctorMap[i]}new Date("X");var extendCnt=0;aspect.after(dlang,"extend",function(){extendCnt++},!0);var _ctorMap={},parser={_clearCache:function(){extendCnt++,_ctorMap={}},_functionFromScript:function(t,e){var i="",n="",o=t.getAttribute(e+"args")||t.getAttribute("args"),r=t.getAttribute("with"),a=(o||"").split(/\s*,\s*/);return r&&r.length&&darray.forEach(r.split(/\s*,\s*/),function(t){i+="with("+t+"){",n+="}"}),new Function(a,i+t.innerHTML+n)},instantiate:function(t,e,i){e=e||{},i=i||{};var n=(i.scope||dojo._scopeName)+"Type",o="data-"+(i.scope||dojo._scopeName)+"-",r=o+"type",a=o+"mixins",s=[];return darray.forEach(t,function(t){var i=n in e?e[n]:t.getAttribute(r)||t.getAttribute(n);if(i){var o=t.getAttribute(a),d=o?[i].concat(o.split(/\s*,\s*/)):[i];s.push({node:t,types:d})}}),this._instantiate(s,e,i)},_instantiate:function(t,e,i,n){function o(t){return e._started||i.noStart||darray.forEach(t,function(t){"function"!=typeof t.startup||t._started||t.startup()}),t}var r=darray.map(t,function(t){var n=t.ctor||getCtor(t.types,i.contextRequire);if(!n)throw new Error("Unable to resolve constructor for: '"+t.types.join()+"'");return this.construct(n,t.node,e,i,t.scripts,t.inherited)},this);return n?all(r).then(o):o(r)},construct:function(t,e,i,n,o,r){function a(t){for(m&&dlang.setObject(m,t),v=0;v<T.length;v++)aspect[T[v].advice||"after"](t,T[v].method,dlang.hitch(t,T[v].func),!0);for(v=0;v<D.length;v++)D[v].call(t);for(v=0;v<B.length;v++)t.watch(B[v].prop,B[v].func);for(v=0;v<L.length;v++)don(t,L[v].event,L[v].func);return t}var s=t&&t.prototype;n=n||{};var d={};n.defaults&&dlang.mixin(d,n.defaults),r&&dlang.mixin(d,r);var l;if(has("dom-attributes-explicit"))l=e.attributes;else if(has("dom-attributes-specified-flag"))l=darray.filter(e.attributes,function(t){return t.specified});else{var u=/^input$|^img$/i.test(e.nodeName)?e:e.cloneNode(!1),h=u.outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g,"").replace(/^\s*<[a-zA-Z0-9]*\s*/,"").replace(/\s*>.*$/,"");l=darray.map(h.split(/\s+/),function(t){var i=t.toLowerCase();return{name:t,value:"LI"==e.nodeName&&"value"==t||"enctype"==i?e.getAttribute(i):e.getAttributeNode(i).value}})}var c=n.scope||dojo._scopeName,f="data-"+c+"-",p={};"dojo"!==c&&(p[f+"props"]="data-dojo-props",p[f+"type"]="data-dojo-type",p[f+"mixins"]="data-dojo-mixins",p[c+"type"]="dojoType",p[f+"id"]="data-dojo-id");for(var g,m,b,v=0,_=[];g=l[v++];){var y=g.name,j=y.toLowerCase(),x=g.value;switch(p[j]||j){case"data-dojo-type":case"dojotype":case"data-dojo-mixins":break;case"data-dojo-props":b=x;break;case"data-dojo-id":case"jsid":m=x;break;case"data-dojo-attach-point":case"dojoattachpoint":d.dojoAttachPoint=x;break;case"data-dojo-attach-event":case"dojoattachevent":d.dojoAttachEvent=x;break;case"class":d["class"]=e.className;break;case"style":d.style=e.style&&e.style.cssText;break;default:if(!(y in s)){var w=getNameMap(t);y=w[j]||y}if(y in s)switch(typeof s[y]){case"string":d[y]=x;break;case"number":d[y]=x.length?Number(x):NaN;break;case"boolean":d[y]="false"!=x.toLowerCase();break;case"function":""===x||-1!=x.search(/[^\w\.]+/i)?d[y]=new Function(x):d[y]=dlang.getObject(x,!1)||new Function(x),_.push(y);break;default:var C=s[y];d[y]=C&&"length"in C?x?x.split(/\s*,\s*/):[]:C instanceof Date?""==x?new Date(""):"now"==x?new Date:dates.fromISOString(x):C instanceof _Url?dojo.baseUrl+x:myEval(x)}else d[y]=x}}for(var N=0;N<_.length;N++){var k=_[N].toLowerCase();e.removeAttribute(k),e[k]=null}if(b)try{b=myEval.call(n.propsThis,"{"+b+"}"),dlang.mixin(d,b)}catch(S){throw new Error(S.toString()+" in data-dojo-props='"+b+"'")}dlang.mixin(d,i),o||(o=t&&(t._noScript||s._noScript)?[]:query("> script[type^='dojo/']",e));var T=[],D=[],B=[],L=[];if(o)for(v=0;v<o.length;v++){var A=o[v];e.removeChild(A);var I=A.getAttribute(f+"event")||A.getAttribute("event"),M=A.getAttribute(f+"prop"),P=A.getAttribute(f+"method"),R=A.getAttribute(f+"advice"),O=A.getAttribute("type"),E=this._functionFromScript(A,f);I?"dojo/connect"==O?T.push({method:I,func:E}):"dojo/on"==O?L.push({event:I,func:E}):d[I]=E:"dojo/aspect"==O?T.push({method:P,advice:R,func:E}):"dojo/watch"==O?B.push({prop:M,func:E}):D.push(E)}var H=t.markupFactory||s.markupFactory,W=H?H(d,e,t):new t(d,e);return W.then?W.then(a):a(W)},scan:function(t,e){function i(t,e){return t.getAttribute&&t.getAttribute(e)||t.parentNode&&i(t.parentNode,e)}function n(t){if(!t.inherited){t.inherited={};var e=t.node,i=n(t.parent),o={dir:e.getAttribute("dir")||i.dir,lang:e.getAttribute("lang")||i.lang,textDir:e.getAttribute(u)||i.textDir};for(var r in o)o[r]&&(t.inherited[r]=o[r])}return t.inherited}var o=[],r=[],a={},s=(e.scope||dojo._scopeName)+"Type",d="data-"+(e.scope||dojo._scopeName)+"-",l=d+"type",u=d+"textdir",h=d+"mixins",c=t.firstChild,f=e.inherited;if(!f){f={dir:i(t,"dir"),lang:i(t,"lang"),textDir:i(t,u)};for(var p in f)f[p]||delete f[p]}for(var g,m,b={inherited:f};;)if(c)if(1==c.nodeType)if(g&&"script"==c.nodeName.toLowerCase())v=c.getAttribute("type"),v&&/^dojo\/\w/i.test(v)&&g.push(c),c=c.nextSibling;else if(m)c=c.nextSibling;else{var v=c.getAttribute(l)||c.getAttribute(s),_=c.firstChild;if(v||_&&(3!=_.nodeType||_.nextSibling)){var y,j=null;if(v){var x=c.getAttribute(h),w=x?[v].concat(x.split(/\s*,\s*/)):[v];try{j=getCtor(w,e.contextRequire)}catch(C){}j||darray.forEach(w,function(t){~t.indexOf("/")&&!a[t]&&(a[t]=!0,r[r.length]=t)});var N=j&&!j.prototype._noScript?[]:null;y={types:w,ctor:j,parent:b,node:c,scripts:N},y.inherited=n(y),o.push(y)}else y={node:c,scripts:g,parent:b};g=N,m=c.stopParser||j&&j.prototype.stopParser&&!e.template,b=y,c=_}else c=c.nextSibling}else c=c.nextSibling;else{if(!b||!b.node)break;c=b.node.nextSibling,m=!1,b=b.parent,g=b.scripts}var k=new Deferred;if(r.length){has("dojo-debug-messages");var S=e.contextRequire||require;S(r,function(){k.resolve(darray.filter(o,function(t){if(!t.ctor)try{t.ctor=getCtor(t.types,e.contextRequire)}catch(i){}for(var n=t.parent;n&&!n.types;)n=n.parent;var o=t.ctor&&t.ctor.prototype;return t.instantiateChildren=!(o&&o.stopParser&&!e.template),t.instantiate=!n||n.instantiate&&n.instantiateChildren,t.instantiate}))})}else k.resolve(o);return k.promise},_require:function(t,e){var i=myEval("{"+t.innerHTML+"}"),n=[],o=[],r=new Deferred,a=e&&e.contextRequire||require;for(var s in i)n.push(s),o.push(i[s]);return a(o,function(){for(var t=0;t<n.length;t++)dlang.setObject(n[t],arguments[t]);r.resolve(arguments)}),r.promise},_scanAmd:function(t,e){var i=new Deferred,n=i.promise;i.resolve(!0);var o=this;return query("script[type='dojo/require']",t).forEach(function(t){n=n.then(function(){return o._require(t,e)}),t.parentNode.removeChild(t)}),n},parse:function(t,e){var i;!e&&t&&t.rootNode?(e=t,i=e.rootNode):!t||!dlang.isObject(t)||"nodeType"in t?i=t:e=t,i=i?dom.byId(i):dwindow.body(),e=e||{};var n=e.template?{template:!0}:{},o=[],r=this,a=this._scanAmd(i,e).then(function(){return r.scan(i,e)}).then(function(t){return r._instantiate(t,n,e,!0)}).then(function(t){return o=o.concat(t)}).otherwise(function(t){throw t});return dlang.mixin(o,a),o}};return dojo.parser=parser,config.parseOnLoad&&ready(100,parser,"parse"),parser});//# sourceMappingURL=parser.js.map