//>>built
define("dijit/form/_SearchMixin",["dojo/_base/declare","dojo/keys","dojo/_base/lang","dojo/query","dojo/string","dojo/when","../registry"],function(t,e,i,n,o,a,s){return t("dijit.form._SearchMixin",null,{pageSize:1/0,store:null,fetchProperties:{},query:{},list:"",_setListAttr:function(t){this._set("list",t)},searchDelay:200,searchAttr:"name",queryExpr:"${0}*",ignoreCase:!0,_patternToRegExp:function(t){return new RegExp("^"+t.replace(/(\\.)|(\*)|(\?)|\W/g,function(t,e,i,n){return i?".*":n?".":e?e:"\\"+t})+"$",this.ignoreCase?"mi":"m")},_abortQuery:function(){this.searchTimer&&(this.searchTimer=this.searchTimer.remove()),this._queryDeferHandle&&(this._queryDeferHandle=this._queryDeferHandle.remove()),this._fetchHandle&&(this._fetchHandle.abort&&(this._cancelingQuery=!0,this._fetchHandle.abort(),this._cancelingQuery=!1),this._fetchHandle.cancel&&(this._cancelingQuery=!0,this._fetchHandle.cancel(),this._cancelingQuery=!1),this._fetchHandle=null)},_processInput:function(t){if(!this.disabled&&!this.readOnly){var i=t.charOrCode,n=!1;switch(this._prev_key_backspace=!1,i){case e.DELETE:case e.BACKSPACE:this._prev_key_backspace=!0,this._maskValidSubsetError=!0,n=!0;break;default:n="string"==typeof i||229==i}n&&(this.store?this.searchTimer=this.defer("_startSearchFromInput",1):this.onSearch())}},onSearch:function(){},_startSearchFromInput:function(){this._startSearch(this.focusNode.value)},_startSearch:function(t){this._abortQuery();var e,n=this,s=i.clone(this.query),r={start:0,count:this.pageSize,queryOptions:{ignoreCase:this.ignoreCase,deep:!0}},d=o.substitute(this.queryExpr,[t.replace(/([\\\*\?])/g,"\\$1")]),l=function(){var t=n._fetchHandle=n.store.query(s,r);n.disabled||n.readOnly||e!==n._lastQuery||a(t,function(i){n._fetchHandle=null,n.disabled||n.readOnly||e!==n._lastQuery||a(t.total,function(t){i.total=t;var e=n.pageSize;(isNaN(e)||e>i.total)&&(e=i.total),i.nextPage=function(t){r.direction=t=t!==!1,r.count=e,t?(r.start+=i.length,r.start>=i.total&&(r.count=0)):(r.start-=e,r.start<0&&(r.count=Math.max(e+r.start,0),r.start=0)),r.count<=0?(i.length=0,n.onSearch(i,s,r)):l()},n.onSearch(i,s,r)})},function(t){n._fetchHandle=null,!n._cancelingQuery})};i.mixin(r,this.fetchProperties),this.store._oldAPI?e=d:(e=this._patternToRegExp(d),e.toString=function(){return d}),this._lastQuery=s[this.searchAttr]=e,this._queryDeferHandle=this.defer(l,this.searchDelay)},constructor:function(){this.query={},this.fetchProperties={}},postMixInProperties:function(){if(!this.store){var t=this.list;t&&(this.store=s.byId(t))}this.inherited(arguments)}})});//# sourceMappingURL=_SearchMixin.js.map