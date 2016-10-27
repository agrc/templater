//>>built
define("dojox/grid/enhanced/plugins/_SelectionPreserver",["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","../../_SelectionPreserver"],function(e,t,i,a){return e("dojox.grid.enhanced.plugins._SelectionPreserver",a,{constructor:function(e){var a=this.grid;a.onSelectedById=this.onSelectedById,this._oldClearData=a._clearData;var n=this;a._clearData=function(){n._updateMapping(!a._noInternalMapping),n._trustSelection=[],n._oldClearData.apply(a,arguments)},this._connects.push(i.connect(e,"selectRange",t.hitch(this,"_updateMapping",!0,!0,!1)),i.connect(e,"deselectRange",t.hitch(this,"_updateMapping",!0,!1,!1)),i.connect(e,"deselectAll",t.hitch(this,"_updateMapping",!0,!1,!0)))},destroy:function(){this.inherited(arguments),this.grid._clearData=this._oldClearData},reset:function(){this.inherited(arguments),this._idMap=[],this._trustSelection=[],this._defaultSelected=!1},_reSelectById:function(e,t){var i=this.selection,a=this.grid;if(e&&a._hasIdentity){var n=a.store.getIdentity(e);void 0===this._selectedById[n]?this._trustSelection[t]||(i.selected[t]=this._defaultSelected):i.selected[t]=this._selectedById[n],this._idMap.push(n),a.onSelectedById(n,t,i.selected[t])}},_selectById:function(e,t){this.inherited(arguments)||(this._trustSelection[t]=!0)},onSelectedById:function(e,t,i){},_updateMapping:function(e,t,i,a,n){var r,o,s=this.selection,l=this.grid,d=0,c=0;for(r=l.rowCount-1;r>=0;--r)l._by_idx[r]?(o=l._by_idx[r].idty,o&&(e||void 0===this._selectedById[o])&&(this._selectedById[o]=!!s.selected[r])):(++c,d+=s.selected[r]?1:-1);if(c&&(this._defaultSelected=d>0),i||void 0===a||void 0===n||(i=!l.usingPagination&&Math.abs(n-a+1)===l.rowCount),i&&(!l.usingPagination||"single"===l.selectionMode))for(r=this._idMap.length-1;r>=0;--r)this._selectedById[this._idMap[r]]=t}})});//# sourceMappingURL=_SelectionPreserver.js.map