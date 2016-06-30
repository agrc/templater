//>>built
define("dojo/query",["./_base/kernel","./has","./dom","./on","./_base/array","./_base/lang","./selector/_loader","./selector/_loader!default"],function(e,t,i,n,o,r,s,a){"use strict";function d(e,t){var n=function(n,o){if("string"==typeof o&&(o=i.byId(o),!o))return new t([]);var r="string"==typeof n?e(n,o):n?n.end&&n.on?n:[n]:[];return r.end&&r.on?r:new t(r)};if(n.matches=e.match||function(e,t,i){return n.filter([e],t,i).length>0},n.filter=e.filter||function(e,t,i){return n(t,i).filter(function(t){return o.indexOf(e,t)>-1})},"function"!=typeof e){var r=e.search;e=function(e,t){return r(t||document,e)}}return n}t.add("array-extensible",function(){return 1==r.delegate([],{length:1}).length&&!t("bug-for-in-skips-shadowed")});var l=Array.prototype,c=l.slice,u=l.concat,h=o.forEach,f=function(e,t,i){var n=new(i||this._NodeListCtor||y)(e);return t?n._stash(t):n},p=function(t,i,n){return i=[0].concat(c.call(i,0)),n=n||e.global,function(e){return i[0]=e,t.apply(n,i)}},g=function(e,t){return function(){return this.forEach(p(e,arguments,t)),this}},m=function(e,t){return function(){return this.map(p(e,arguments,t))}},v=function(e,t){return function(){return this.filter(p(e,arguments,t))}},b=function(t,i,n){return function(){var o=arguments,r=p(t,o,n);return i.call(n||e.global,o)?this.map(r):(this.forEach(r),this)}},_=function(e){var i=this instanceof y&&t("array-extensible");"number"==typeof e&&(e=Array(e));var n=e&&"length"in e?e:arguments;if(i||!n.sort){for(var o=i?this:[],s=o.length=n.length,a=0;s>a;a++)o[a]=n[a];if(i)return o;n=o}return r._mixin(n,j),n._NodeListCtor=function(e){return y(e)},n},y=_,j=y.prototype=t("array-extensible")?[]:{};y._wrap=j._wrap=f,y._adaptAsMap=m,y._adaptAsForEach=g,y._adaptAsFilter=v,y._adaptWithCondition=b,h(["slice","splice"],function(e){var t=l[e];j[e]=function(){return this._wrap(t.apply(this,arguments),"slice"==e?this:null)}}),h(["indexOf","lastIndexOf","every","some"],function(t){var i=o[t];j[t]=function(){return i.apply(e,[this].concat(c.call(arguments,0)))}}),r.extend(_,{constructor:y,_NodeListCtor:y,toString:function(){return this.join(",")},_stash:function(e){return this._parent=e,this},on:function(e,t){var i=this.map(function(i){return n(i,e,t)});return i.remove=function(){for(var e=0;e<i.length;e++)i[e].remove()},i},end:function(){return this._parent?this._parent:new this._NodeListCtor(0)},concat:function(e){var t=c.call(this,0),i=o.map(arguments,function(e){return c.call(e,0)});return this._wrap(u.apply(t,i),this)},map:function(e,t){return this._wrap(o.map(this,e,t),this)},forEach:function(e,t){return h(this,e,t),this},filter:function(e){var t=arguments,i=this,n=0;if("string"==typeof e){if(i=C._filterResult(this,t[0]),1==t.length)return i._stash(this);n=1}return this._wrap(o.filter(i,t[n],t[n+1]),this)},instantiate:function(e,t){var i=r.isFunction(e)?e:r.getObject(e);return t=t||{},this.forEach(function(e){new i(t,e)})},at:function(){var e=new this._NodeListCtor(0);return h(arguments,function(t){0>t&&(t=this.length+t),this[t]&&e.push(this[t])},this),e._stash(this)}});var C=d(a,_);return e.query=d(a,function(e){return _(e)}),C.load=function(e,t,i){s.load(e,t,function(e){i(d(e,_))})},e._filterQueryResult=C._filterResult=function(e,t,i){return new _(C.filter(e,t,i))},e.NodeList=C.NodeList=_,C});//# sourceMappingURL=query.js.map