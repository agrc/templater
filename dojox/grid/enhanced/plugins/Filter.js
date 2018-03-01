//>>built
define("dojox/grid/enhanced/plugins/Filter",["dojo/_base/declare","dojo/_base/lang","../_Plugin","./Dialog","./filter/FilterLayer","./filter/FilterBar","./filter/FilterDefDialog","./filter/FilterStatusTip","./filter/ClearFilterConfirm","../../EnhancedGrid","dojo/i18n!../nls/Filter"],function(e,t,i,a,o,n,r,s,l,d,u){var c=e("dojox.grid.enhanced.plugins.Filter",i,{name:"filter",constructor:function(e,i){this.grid=e,this.nls=u,i=this.args=t.isObject(i)?i:{},("number"!=typeof i.ruleCount||i.ruleCount<0)&&(i.ruleCount=3),void 0===(this.ruleCountToConfirmClearFilter=i.ruleCountToConfirmClearFilter)&&(this.ruleCountToConfirmClearFilter=2),this._wrapStore();var o={plugin:this};this.clearFilterDialog=new a({refNode:this.grid.domNode,title:this.nls.clearFilterDialogTitle,content:new l(o)}),this.filterDefDialog=new r(o),this.filterBar=new n(o),this.filterStatusTip=new s(o),e.onFilterDefined=function(){},this.connect(e.layer("filter"),"onFilterDefined",function(t){e.onFilterDefined(e.getFilter(),e.getFilterRelation())})},destroy:function(){this.inherited(arguments);try{this.grid.unwrap("filter"),this.filterBar.destroyRecursive(),this.filterBar=null,this.clearFilterDialog.destroyRecursive(),this.clearFilterDialog=null,this.filterStatusTip.destroy(),this.filterStatusTip=null,this.filterDefDialog.destroy(),this.filterDefDialog=null,this.grid=null,this.args=null}catch(e){}},_wrapStore:function(){var e=this.grid,i=this.args,a=i.isServerSide?new o.ServerSideFilterLayer(i):new o.ClientSideFilterLayer({cacheSize:i.filterCacheSize,fetchAll:i.fetchAllOnFirstFilter,getter:this._clientFilterGetter});o.wrap(e,"_storeLayerFetch",a),this.connect(e,"_onDelete",t.hitch(a,"invalidate"))},onSetStore:function(e){this.filterDefDialog.clearFilter(!0)},_clientFilterGetter:function(e,t,i){return t.get(i,e)}});return d.registerPlugin(c),c});//# sourceMappingURL=Filter.js.map