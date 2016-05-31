//>>built
define("dojo/NodeList-dom",["./_base/kernel","./query","./_base/array","./_base/lang","./dom-class","./dom-construct","./dom-geometry","./dom-attr","./dom-style"],function(e,t,i,o,n,s,r,a,d){function l(e){return function(t,i,o){return 2==arguments.length?e["string"==typeof i?"get":"set"](t,i):e.set(t,i,o)}}var h=function(e){return 1==e.length&&"string"==typeof e[0]},c=function(e){var t=e.parentNode;t&&t.removeChild(e)},u=t.NodeList,p=u._adaptWithCondition,f=u._adaptAsForEach,m=u._adaptAsMap;return o.extend(u,{_normalize:function(t,i){var n=t.parse===!0;if("string"==typeof t.template){var r=t.templateFunc||e.string&&e.string.substitute;t=r?r(t.template,t):t}var a=typeof t;return"string"==a||"number"==a?(t=s.toDom(t,i&&i.ownerDocument),t=11==t.nodeType?o._toArray(t.childNodes):[t]):o.isArrayLike(t)?o.isArray(t)||(t=o._toArray(t)):t=[t],n&&(t._runParse=!0),t},_cloneNode:function(e){return e.cloneNode(!0)},_place:function(t,i,o,n){if(1==i.nodeType||"only"!=o)for(var r,a=i,d=t.length,l=d-1;l>=0;l--){var h=n?this._cloneNode(t[l]):t[l];if(t._runParse&&e.parser&&e.parser.parse)for(r||(r=a.ownerDocument.createElement("div")),r.appendChild(h),e.parser.parse(r),h=r.firstChild;r.firstChild;)r.removeChild(r.firstChild);l==d-1?s.place(h,a,o):a.parentNode.insertBefore(h,a),a=h}},position:m(r.position),attr:p(l(a),h),style:p(l(d),h),addClass:f(n.add),removeClass:f(n.remove),toggleClass:f(n.toggle),replaceClass:f(n.replace),empty:f(s.empty),removeAttr:f(a.remove),marginBox:m(r.getMarginBox),place:function(e,i){var o=t(e)[0];return this.forEach(function(e){s.place(e,o,i)})},orphan:function(e){return(e?t._filterResult(this,e):this).forEach(c)},adopt:function(e,i){return t(e).place(this[0],i)._stash(this)},query:function(e){if(!e)return this;var i=new u;return this.map(function(o){t(e,o).forEach(function(e){void 0!==e&&i.push(e)})}),i._stash(this)},filter:function(e){var o=arguments,n=this,s=0;if("string"==typeof e){if(n=t._filterResult(this,o[0]),1==o.length)return n._stash(this);s=1}return this._wrap(i.filter(n,o[s],o[s+1]),this)},addContent:function(e,t){e=this._normalize(e,this[0]);for(var i,o=0;i=this[o];o++)e.length?this._place(e,i,t,o>0):s.empty(i);return this}}),u});//# sourceMappingURL=NodeList-dom.js.map