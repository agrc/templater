//>>built
define("dojox/grid/enhanced/plugins/Search",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/data/util/filter","../../EnhancedGrid","../_Plugin"],function(e,t,i,a,n,r,o){var s=i("dojox.grid.enhanced.plugins.Search",o,{name:"search",constructor:function(e,i){this.grid=e,i=i&&t.isObject(i)?i:{},this._cacheSize=i.cacheSize||-1,e.searchRow=t.hitch(this,"searchRow")},searchRow:function(e,i){if(t.isFunction(i)){t.isString(e)&&(e=n.patternToRegExp(e));var a=!1;if(e instanceof RegExp)a=!0;else{if(!t.isObject(e))return;var r=!0;for(var o in e)t.isString(e[o])&&(e[o]=n.patternToRegExp(e[o])),r=!1;if(r)return}this._search(e,0,i,a)}},_search:function(e,t,i,n){var r=this,o=this._cacheSize,s={start:t,query:this.grid.query,sort:this.grid.getSortProps(),queryOptions:this.grid.queryOptions,onBegin:function(e){r._storeSize=e},onComplete:function(s){a.some(s,function(a,o){return r._checkRow(a,e,n)?(i(t+o,a),!0):!1})||(o>0&&t+o<r._storeSize?r._search(e,t+o,i,n):i(-1,null))}};o>0&&(s.count=o),this.grid._storeLayerFetch(s)},_checkRow:function(e,t,i){var n,r,o=this.grid,s=o.store,d=a.filter(o.layout.cells,function(e){return!e.hidden});if(i)return a.some(d,function(i){try{if(i.field)return String(s.getValue(e,i.field)).search(t)>=0}catch(a){}return!1});for(r in t)if(t[r]instanceof RegExp){for(n=d.length-1;n>=0;--n)if(d[n].field==r)try{if(String(s.getValue(e,r)).search(t[r])<0)return!1;break}catch(l){return!1}if(0>n)return!1}return!0}});return r.registerPlugin(s),s});//# sourceMappingURL=Search.js.map