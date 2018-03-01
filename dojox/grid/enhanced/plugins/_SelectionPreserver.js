//>>built
define("dojox/grid/enhanced/plugins/_SelectionPreserver",["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","../../_SelectionPreserver"],function(e,t,i,a){return e("dojox.grid.enhanced.plugins._SelectionPreserver",a,{constructor:function(e){var a=this.grid;a.onSelectedById=this.onSelectedById,this._oldClearData=a._clearData;var r=this;a._clearData=function(){r._updateMapping(!a._noInternalMapping),r._trustSelection=[],r._oldClearData.apply(a,arguments)},this._connects.push(i.connect(e,"selectRange",t.hitch(this,"_updateMapping",!0,!0,!1)),i.connect(e,"deselectRange",t.hitch(this,"_updateMapping",!0,!1,!1)),i.connect(e,"deselectAll",t.hitch(this,"_updateMapping",!0,!1,!0)))},destroy:function(){this.inherited(arguments),this.grid._clearData=this._oldClearData},reset:function(){this.inherited(arguments),this._idMap=[],this._trustSelection=[],this._defaultSelected=!1},_reSelectById:function(e,t){var i=this.selection,a=this.grid;if(e&&a._hasIdentity){var r=a.store.getIdentity(e);void 0===this._selectedById[r]?this._trustSelection[t]||(i.selected[t]=this._defaultSelected):i.selected[t]=this._selectedById[r],this._idMap.push(r),a.onSelectedById(r,t,i.selected[t])}},_selectById:function(e,t){this.inherited(arguments)||(this._trustSelection[t]=!0)},onSelectedById:function(e,t,i){},_updateMapping:function(e,t,i,a,r){var o,n,s=this.selection,l=this.grid,d=0,u=0;for(o=l.rowCount-1;o>=0;--o)l._by_idx[o]?(n=l._by_idx[o].idty)&&(e||void 0===this._selectedById[n])&&(this._selectedById[n]=!!s.selected[o]):(++u,d+=s.selected[o]?1:-1);if(u&&(this._defaultSelected=d>0),i||void 0===a||void 0===r||(i=!l.usingPagination&&Math.abs(r-a+1)===l.rowCount),i&&(!l.usingPagination||"single"===l.selectionMode))for(o=this._idMap.length-1;o>=0;--o)this._selectedById[this._idMap[o]]=t}})});//# sourceMappingURL=_SelectionPreserver.js.map