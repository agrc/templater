//>>built
define("dojox/data/CssRuleStore",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/json","dojo/_base/kernel","dojo/_base/sniff","dojo/data/util/sorter","dojo/data/util/filter","./css"],function(e,t,a,i,r,o,n,d,s){return t("dojox.data.CssRuleStore",null,{_storeRef:"_S",_labelAttribute:"selector",_cache:null,_browserMap:null,_cName:"dojox.data.CssRuleStore",constructor:function(t){function a(){try{for(i.context=s.determineContext(i.context),i.gatherHandle&&(clearInterval(i.gatherHandle),i.gatherHandle=null);i._waiting.length;){var e=i._waiting.pop();s.rules.forEach(e.forFunc,null,i.context),e.finishFunc()}}catch(t){}}t&&e.mixin(this,t),this._cache={},this._allItems=null,this._waiting=[],this.gatherHandle=null;var i=this;this.gatherHandle=setInterval(a,250)},setContext:function(e){e&&(this.close(),this.context=s.determineContext(e))},getFeatures:function(){return{"dojo.data.api.Read":!0}},isItem:function(e){return!(!e||e[this._storeRef]!=this)},hasAttribute:function(e,t){this._assertIsItem(e),this._assertIsAttribute(t);var i=this.getAttributes(e);return-1!=a.indexOf(i,t)},getAttributes:function(e){this._assertIsItem(e);var t=["selector","classes","rule","style","cssText","styleSheet","parentStyleSheet","parentStyleSheetHref"],a=e.rule.style;if(a){var i;for(i in a)t.push("style."+i)}return t},getValue:function(e,t,a){var i=this.getValues(e,t);return i&&i.length>0?i[0]:a},getValues:function(t,a){this._assertIsItem(t),this._assertIsAttribute(a);var i=null;if("selector"===a)i=t.rule.selectorText,i&&e.isString(i)&&(i=i.split(","));else if("classes"===a)i=t.classes;else if("rule"===a)i=t.rule.rule;else if("style"===a)i=t.rule.style;else if("cssText"===a)o("ie")?t.rule.style&&(i=t.rule.style.cssText,i&&(i="{ "+i.toLowerCase()+" }")):(i=t.rule.cssText,i&&(i=i.substring(i.indexOf("{"),i.length)));else if("styleSheet"===a)i=t.rule.styleSheet;else if("parentStyleSheet"===a)i=t.rule.parentStyleSheet;else if("parentStyleSheetHref"===a)t.href&&(i=t.href);else if(0===a.indexOf("style.")){var r=a.substring(a.indexOf("."),a.length);i=t.rule.style[r]}else i=[];return void 0!==i&&(e.isArray(i)||(i=[i])),i},getLabel:function(e){return this._assertIsItem(e),this.getValue(e,this._labelAttribute)},getLabelAttributes:function(e){return[this._labelAttribute]},containsValue:function(e,t,a){var i=void 0;return"string"==typeof a&&(i=d.patternToRegExp(a,!1)),this._containsValue(e,t,a,i)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item)},fetch:function(e){e=e||{},e.store||(e.store=this);e.scope||r.global;return this._pending&&this._pending.length>0?this._pending.push({request:e,fetch:!0}):(this._pending=[{request:e,fetch:!0}],this._fetch(e)),e},_fetch:function(t){var a=t.scope||r.global;if(null===this._allItems){this._allItems={};try{this.gatherHandle?this._waiting.push({forFunc:e.hitch(this,this._handleRule),finishFunc:e.hitch(this,this._handleReturn)}):(s.rules.forEach(e.hitch(this,this._handleRule),null,this.context),this._handleReturn())}catch(i){t.onError&&t.onError.call(a,i,t)}}else this._handleReturn()},_handleRule:function(e,t,a){for(var i=e.selectorText,r=i.split(" "),o=[],n=0;n<r.length;n++){var d=r[n],s=d.indexOf(".");if(d&&d.length>0&&-1!==s){var l=d.indexOf(",")||d.indexOf("[");d=d.substring(s,-1!==l&&l>s?l:d.length),o.push(d)}}var m={};m.rule=e,m.styleSheet=t,m.href=a,m.classes=o,m[this._storeRef]=this,this._allItems[i]||(this._allItems[i]=[]),this._allItems[i].push(m)},_handleReturn:function(){var e=[],t=[],a=null;for(var i in this._allItems){a=this._allItems[i];for(var r in a)t.push(a[r])}for(var o;this._pending.length;)o=this._pending.pop(),o.request._items=t,e.push(o);for(;e.length;)o=e.pop(),this._handleFetchReturn(o.request)},_handleFetchReturn:function(t){var a,o=t.scope||r.global,s=[],l="all";if(t.query&&(l=i.toJson(t.query)),this._cache[l])s=this._cache[l];else if(t.query){for(a in t._items){var m,u,h=t._items[a],f=t.queryOptions?t.queryOptions.ignoreCase:!1,c={};for(m in t.query)u=t.query[m],"string"==typeof u&&(c[m]=d.patternToRegExp(u,f));var y=!0;for(m in t.query)u=t.query[m],this._containsValue(h,m,u,c[m])||(y=!1);y&&s.push(h)}this._cache[l]=s}else for(a in t._items)s.push(t._items[a]);var p=s.length;t.sort&&s.sort(n.createSortFunction(t.sort,this));var v=0,g=s.length;t.start>0&&t.start<s.length&&(v=t.start),t.count&&t.count&&(g=t.count);var M=v+g;if(M>s.length&&(M=s.length),s=s.slice(v,M),t.onBegin&&t.onBegin.call(o,p,t),t.onItem){if(e.isArray(s)){for(a=0;a<s.length;a++)t.onItem.call(o,s[a],t);t.onComplete&&t.onComplete.call(o,null,t)}}else t.onComplete&&t.onComplete.call(o,s,t);return t},close:function(){this._cache={},this._allItems=null},_assertIsItem:function(e){if(!this.isItem(e))throw new Error(this._cName+": Invalid item argument.")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error(this._cName+": Invalid attribute argument.")},_containsValue:function(t,i,r,o){return a.some(this.getValues(t,i),function(t){if(null!==t&&!e.isObject(t)&&o){if(t.toString().match(o))return!0}else if(r===t)return!0;return!1})}})});//# sourceMappingURL=CssRuleStore.js.map