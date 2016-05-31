//>>built
define("dojox/grid/enhanced/plugins/GridSource",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dnd/Source","./DnD"],function(e,t,i,a,r){var o=function(e){for(var t=e[0],i=1;i<e.length;++i)t=t.concat(e[i]);return t},n=i.getObject("dojox.grid.enhanced.plugins.GridDnDSource");return e("dojox.grid.enhanced.plugins.GridSource",a,{accept:["grid/cells","grid/rows","grid/cols","text"],insertNodesForGrid:!1,markupFactory:function(e,t){return cls=i.getObject("dojox.grid.enhanced.plugins.GridSource"),new cls(t,e)},checkAcceptance:function(e,i){if(e instanceof n){if(i[0]){var a=e.getItem(i[0].id);if(a&&(t.indexOf(a.type,"grid/rows")>=0||t.indexOf(a.type,"grid/cells")>=0)&&!e.dndPlugin._allDnDItemsLoaded())return!1}this.sourcePlugin=e.dndPlugin}return this.inherited(arguments)},onDraggingOver:function(){this.sourcePlugin&&(this.sourcePlugin._isSource=!0)},onDraggingOut:function(){this.sourcePlugin&&(this.sourcePlugin._isSource=!1)},onDropExternal:function(e,i,a){if(e instanceof n){var r,s=t.map(i,function(t){return e.getItem(t.id).data}),d=e.getItem(i[0].id),l=d.dndPlugin.grid,h=d.type[0];try{switch(h){case"grid/cells":i[0].innerHTML=this.getCellContent(l,s[0].min,s[0].max)||"",this.onDropGridCells(l,s[0].min,s[0].max);break;case"grid/rows":r=o(s),i[0].innerHTML=this.getRowContent(l,r)||"",this.onDropGridRows(l,r);break;case"grid/cols":r=o(s),i[0].innerHTML=this.getColumnContent(l,r)||"",this.onDropGridColumns(l,r)}this.insertNodesForGrid&&(this.selectNone(),this.insertNodes(!0,[i[0]],this.before,this.current)),d.dndPlugin.onDragOut(!a)}catch(u){}}else this.inherited(arguments)},getCellContent:function(e,t,i){},getRowContent:function(e,t){},getColumnContent:function(e,t){},onDropGridCells:function(e,t,i){},onDropGridRows:function(e,t){},onDropGridColumns:function(e,t){}})});//# sourceMappingURL=GridSource.js.map