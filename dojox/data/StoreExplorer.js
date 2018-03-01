//>>built
define("dojox/data/StoreExplorer",["dojo","dijit","dojox","dojo/require!dojox/grid/DataGrid,dojox/data/ItemExplorer,dijit/layout/BorderContainer,dijit/layout/ContentPane"],function(e,t,a){e.provide("dojox.data.StoreExplorer"),e.require("dojox.grid.DataGrid"),e.require("dojox.data.ItemExplorer"),e.require("dijit.layout.BorderContainer"),e.require("dijit.layout.ContentPane"),e.declare("dojox.data.StoreExplorer",t.layout.BorderContainer,{constructor:function(t){e.mixin(this,t)},store:null,columnWidth:"",stringQueries:!1,showAllColumns:!1,postCreate:function(){function i(e,a){var i=new t.form.Button({label:e});return o.containerNode.appendChild(i.domNode),i.onClick=a,i}var r=this;this.inherited(arguments);var o=new t.layout.ContentPane({region:"top"}).placeAt(this),n=o.containerNode.appendChild(document.createElement("span"));n.innerHTML="Enter query: &nbsp;",n.id="queryText";var d=o.containerNode.appendChild(document.createElement("input"));d.type="text",d.id="queryTextBox",i("Query",function(){var t=d.value;r.setQuery(r.stringQueries?t:e.fromJson(t))}),o.containerNode.appendChild(document.createElement("span")).innerHTML="&nbsp;&nbsp;&nbsp;";var l=i("Create New",e.hitch(this,"createNew")),s=i("Delete",function(){for(var e=u.selection.getSelected(),t=0;t<e.length;t++)r.store.deleteItem(e[t])});this.setItemName=function(t){l.attr("label","<img style='width:12px; height:12px' src='"+e.moduleUrl("dijit.themes.tundra.images","dndCopy.png")+"' /> Create New "+t),s.attr("label","Delete "+t)},i("Save",function(){r.store.save({onError:function(e){alert(e)}}),r.tree.refreshItem()}),i("Revert",function(){r.store.revert()}),i("Add Column",function(){var t=prompt("Enter column name:","property");t&&(r.gridLayout.push({field:t,name:t,formatter:e.hitch(r,"_formatCell"),editable:!0}),r.grid.attr("structure",r.gridLayout))});var m=new t.layout.ContentPane({region:"center"}).placeAt(this),u=this.grid=new a.grid.DataGrid({store:this.store});m.attr("content",u),u.canEdit=function(e,t){var a=this._copyAttr(t,e.field);return!(a&&"object"==typeof a)||a instanceof Date};var f=new t.layout.ContentPane({region:"trailing",splitter:!0,style:"width: 300px"}).placeAt(this),h=this.tree=new a.data.ItemExplorer({store:this.store});f.attr("content",h),e.connect(u,"onCellClick",function(){var e=u.selection.getSelected()[0];h.setItem(e)}),this.gridOnFetchComplete=u._onFetchComplete,this.setStore(this.store)},setQuery:function(e,t){this.grid.setQuery(e,t)},_formatCell:function(e){return this.store.isItem(e)?this.store.getLabel(e)||this.store.getIdentity(e):e},setStore:function(e){function t(e){return a._formatCell(e)}this.store=e;var a=this,i=this.grid;i._pending_requests[0]=!1;var r=this.gridOnFetchComplete;i._onFetchComplete=function(o,n){var d,l,s,m,u,f,h=a.gridLayout=[],c=e.getIdentityAttributes();for(m=0;m<c.length;m++)l=c[m],h.push({field:l,name:l,_score:100,formatter:t,editable:!1});for(m=0;s=o[m++];){var y=e.getAttributes(s);for(f=0;l=y[f++];){var v=!1;for(u=0;d=h[u++];)if(d.field==l){d._score++,v=!0;break}v||h.push({field:l,name:l,_score:1,formatter:t,styles:"white-space:nowrap; ",editable:!0})}}if(h=h.sort(function(e,t){return t._score-e._score}),!a.showAllColumns)for(u=0;d=h[u];u++)if(d._score<o.length/40*u){h.splice(u,h.length-u);break}for(u=0;d=h[u++];)d.width=a.columnWidth||Math.round(100/h.length)+"%";i._onFetchComplete=r,i.attr("structure",h);r.apply(this,arguments)},i.setStore(e),this.queryOptions={cache:!0},this.tree.setStore(e)},createNew:function(){var t=prompt("Enter any properties (in JSON literal form) to put in the new item (passed to the newItem constructor):","{ }");if(t)try{this.store.newItem(e.fromJson(t))}catch(e){alert(e)}}})});//# sourceMappingURL=StoreExplorer.js.map