//>>built
define("dojox/grid/enhanced/plugins/_RowMapLayer",["dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","./_StoreLayer"],function(e,t,i,r,a){var o=function(e){e.sort(function(e,t){return e-t});for(var t=[[e[0]]],i=1,r=0;i<e.length;++i)e[i]==e[i-1]+1?t[r].push(e[i]):t[++r]=[e[i]];return t},n=function(e,t){return t?r.hitch(e||i.global,t):function(){}};return t("dojox.grid.enhanced.plugins._RowMapLayer",a._StoreLayer,{tags:["reorder"],constructor:function(e){this._map={},this._revMap={},this.grid=e,this._oldOnDelete=e._onDelete;var t=this;e._onDelete=function(i){t._onDelete(i),t._oldOnDelete.call(e,i)},this._oldSort=e.sort,e.sort=function(){t.clearMapping(),t._oldSort.apply(e,arguments)}},uninitialize:function(){this.grid._onDelete=this._oldOnDelete,this.grid.sort=this._oldSort},setMapping:function(e){this._store.forEachLayer(function(t){return"rowmap"===t.name()?!1:(t.onRowMappingChange&&t.onRowMappingChange(e),!0)},!1);var t,i,r,a={};for(t in e)t=parseInt(t,10),i=e[t],"number"==typeof i&&(t in this._revMap?(r=this._revMap[t],delete this._revMap[t]):r=t,r==i?(delete this._map[r],a[i]="eq"):(this._map[r]=i,a[i]=r));for(i in a)"eq"===a[i]?delete this._revMap[parseInt(i,10)]:this._revMap[parseInt(i,10)]=a[i]},clearMapping:function(){this._map={},this._revMap={}},_onDelete:function(e){var t=this.grid._getItemIndex(e,!0);if(t in this._revMap){var i,r,a=[],o=this._revMap[t];delete this._map[o],delete this._revMap[t];for(i in this._revMap)i=parseInt(i,10),this._revMap[i]>o&&--this._revMap[i];for(i in this._revMap)i=parseInt(i,10),i>t&&a.push(i);for(a.sort(function(e,t){return t-e}),r=a.length-1;r>=0;--r)i=a[r],this._revMap[i-1]=this._revMap[i],delete this._revMap[i];this._map={};for(i in this._revMap)this._map[this._revMap[i]]=i}},_fetch:function(e){var t,i=0,a=e.start||0;for(t in this._revMap)t=parseInt(t,10),t>=a&&++i;if(i>0){var o,n=[],s={},l=e.count>0?e.count:-1;if(l>0)for(o=0;l>o;++o)t=a+o,t=t in this._revMap?this._revMap[t]:t,s[t]=o,n.push(t);else for(o=0;t=a+o,t in this._revMap&&(--i,t=this._revMap[t]),s[t]=o,n.push(t),!(0>=i);++o);return this._subFetch(e,this._getRowArrays(n),0,[],s,e.onComplete,a,l),e}return r.hitch(this._store,this._originFetch)(e)},_getRowArrays:function(e){return o(e)},_subFetch:function(t,i,r,a,o,s,l,d){var c=i[r],u=this,h=t.start=c[0];t.count=c[c.length-1]-c[0]+1,t.onComplete=function(c){e.forEach(c,function(e,t){var i=h+t;i in o&&(a[o[i]]=e)}),++r==i.length?d>0?(t.start=l,t.count=d,t.onComplete=s,n(t.scope,s)(a,t)):(t.start=t.start+c.length,delete t.count,t.onComplete=function(e){a=a.concat(e),t.start=l,t.onComplete=s,n(t.scope,s)(a,t)},u.originFetch(t)):u._subFetch(t,i,r,a,o,s,l,d)},u.originFetch(t)}})});//# sourceMappingURL=_RowMapLayer.js.map