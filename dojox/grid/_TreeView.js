//>>built
require({cache:{"url:dojox/grid/resources/Expando.html":'<div class="dojoxGridExpando"\n	><div class="dojoxGridExpandoNode" dojoAttachEvent="onclick:onToggle"\n		><div class="dojoxGridExpandoNodeInner" dojoAttachPoint="expandoInner"></div\n	></div\n></div>\n'}}),define("dojox/grid/_TreeView",["dijit/registry","../main","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/event","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/dom-construct","dojo/query","dojo/parser","dojo/text!./resources/Expando.html","dijit/_Widget","dijit/_TemplatedMixin","./_View","./_Builder","./util"],function(e,t,i,a,n,o,r,s,l,d,c,u,h,m,f,p,g,v){i("dojox.grid._Expando",[m,f],{open:!1,toggleClass:"",itemId:"",cellIdx:-1,view:null,rowNode:null,rowIdx:-1,expandoCell:null,level:0,templateString:h,_toggleRows:function(t,i){if(t&&this.rowNode){if(c("table.dojoxGridRowTableNeedsRowUpdate").length)return void(this._initialized&&this.view.grid.updateRow(this.rowIdx));var a=this,n=this.view.grid;if(n.treeModel){var o=this._tableRow?r.get(this._tableRow,"dojoxTreeGridPath"):"";o&&c('tr[dojoxTreeGridPath^="'+o+'/"]',this.rowNode).forEach(function(a){var n=c(".dojoxGridExpando",a)[0];if(n&&n.parentNode&&n.parentNode.parentNode&&!s.contains(n.parentNode.parentNode,"dojoxGridNoChildren")){var o=e.byNode(n);o&&o._toggleRows(t,o.open&&i)}a.style.display=i?"":"none"})}else c("tr."+t,this.rowNode).forEach(function(t){if(s.contains(t,"dojoxGridExpandoRow")){var n=c(".dojoxGridExpando",t)[0];if(n){var o=e.byNode(n),r=o?o.toggleClass:n.getAttribute("toggleClass"),l=o?o.open:a.expandoCell.getOpenState(n.getAttribute("itemId"));a._toggleRows(r,l&&i)}}t.style.display=i?"":"none"})}},setOpen:function(e){e&&s.contains(this.domNode,"dojoxGridExpandoLoading")&&(e=!1);var t=this.view,i=t.grid,a=i.store,o=i.treeModel,l=this,d=this.rowIdx,c=i._by_idx[d];if(c)if(o&&!this._loadedChildren)if(e){var u=i.getItem(r.get(this._tableRow,"dojoxTreeGridPath"));u?(this.expandoInner.innerHTML="o",s.add(this.domNode,"dojoxGridExpandoLoading"),o.getChildren(u,function(t){l._loadedChildren=!0,l._setOpen(e)})):this._setOpen(e)}else this._setOpen(e);else if(!o&&a)if(e){var h=i._by_idx[this.rowIdx];h&&!a.isItemLoaded(h.item)?(this.expandoInner.innerHTML="o",s.add(this.domNode,"dojoxGridExpandoLoading"),a.loadItem({item:h.item,onItem:n.hitch(this,function(t){var n=a.getIdentity(t);i._by_idty[n]=i._by_idx[this.rowIdx]={idty:n,item:t},this._setOpen(e)})})):this._setOpen(e)}else this._setOpen(e);else this._setOpen(e)},_setOpen:function(e){if(e&&this._tableRow&&s.contains(this._tableRow,"dojoxGridNoChildren"))return void this._setOpen(!1);if(this.expandoInner.innerHTML=e?"-":"+",s.remove(this.domNode,"dojoxGridExpandoLoading"),s.toggle(this.domNode,"dojoxGridExpandoOpened",e),this._tableRow){s.toggle(this._tableRow,"dojoxGridRowCollapsed",!e);var t=r.get(this._tableRow,"dojoxTreeGridBaseClasses"),i="";i=e?n.trim((" "+t+" ").replace(" dojoxGridRowCollapsed "," ")):(" "+t+" ").indexOf(" dojoxGridRowCollapsed ")<0?t+(t?" ":"")+"dojoxGridRowCollapsed":t,r.set(this._tableRow,"dojoxTreeGridBaseClasses",i)}var a=this.open!==e;this.open=e,this.expandoCell&&this.itemId&&(this.expandoCell.openStates[this.itemId]=e);var o=this.view,l=o.grid;this.toggleClass&&a&&(this._tableRow&&this._tableRow.style.display||this._toggleRows(this.toggleClass,e)),o&&this._initialized&&this.rowIdx>=0&&(l.rowHeightChanged(this.rowIdx),l.postresize(),o.hasVScrollbar(!0)),this._initialized=!0},onToggle:function(e){this.setOpen(!this.open),o.stop(e)},setRowNode:function(e,t,i){if(this.cellIdx<0||!this.itemId)return!1;this._initialized=!1,this.view=i,this.rowNode=t,this.rowIdx=e,this.expandoCell=i.structure.cells[0][this.cellIdx];var a=this.domNode;return a&&a.parentNode&&a.parentNode.parentNode&&(this._tableRow=a.parentNode.parentNode),this.open=this.expandoCell.getOpenState(this.itemId),i.grid.treeModel&&(l.set(this.domNode,"marginLeft",18*this.level+"px"),this.domNode.parentNode&&l.set(this.domNode.parentNode,"backgroundPosition",18*this.level+3+"px")),this.setOpen(this.open),!0}});var y=i("dojox.grid._TreeContentBuilder",g._ContentBuilder,{generateHtml:function(e,i){var n=this.getTableArray(),o=this.view,r=o.structure.cells[0],s=this.grid.getItem(i),l=this.grid,d=this.grid.store;v.fire(this.view,"onBeforeRow",[i,[r]]);var c=function(e,i,s,u,h,m){if(!m)return void(-1==n[0].indexOf("dojoxGridRowTableNeedsRowUpdate")&&(n[0]=n[0].replace("dojoxGridRowTable","dojoxGridRowTable dojoxGridRowTableNeedsRowUpdate")));var f=n.length;u=u||[];var p=u.join("|"),g=u[u.length-1],v=g+(s?" dojoxGridSummaryRow":""),y="";l.treeModel&&i&&!l.treeModel.mayHaveChildren(i)&&(v+=" dojoxGridNoChildren"),n.push('<tr style="'+y+'" class="'+v+'" dojoxTreeGridPath="'+h.join("/")+'" dojoxTreeGridBaseClasses="'+v+'">');for(var k,b=e+1,_=null,M=0;k=r[M];M++){var w=k.markup,x=k.customClasses=[],j=k.customStyles=[];w[5]=k.formatAtLevel(h,i,e,s,g,x),w[1]=x.join(" "),w[3]=j.join(";"),n.push.apply(n,w),!_&&k.level===b&&k.parentCell&&(_=k.parentCell)}if(n.push("</tr>"),i&&d&&d.isItem(i)){var I=d.getIdentity(i);"undefined"==typeof l._by_idty_paths[I]&&(l._by_idty_paths[I]=h.join("/"))}var z,A,E,S,C=h.concat([]);if(l.treeModel&&i)l.treeModel.mayHaveChildren(i)&&(z=o.structure.cells[0][l.expandoCell||0],A=z.getOpenState(i)&&m,E=new t.grid.TreePath(h.join("/"),l),S=E.children(!0)||[],a.forEach(S,function(e,t){var i=p.split("|");i.push(i[i.length-1]+"-"+t),C.push(t),c(b,e,!1,i,C,A),C.pop()}));else if(i&&_&&!s)if(z=o.structure.cells[0][_.level],A=z.getOpenState(i)&&m,d.hasAttribute(i,_.field)){var T=p.split("|");T.pop(),E=new t.grid.TreePath(h.join("/"),l),S=E.children(!0)||[],S.length?(n[f]='<tr class="'+T.join(" ")+' dojoxGridExpandoRow" dojoxTreeGridPath="'+h.join("/")+'">',a.forEach(S,function(e,t){var i=p.split("|");i.push(i[i.length-1]+"-"+t),C.push(t),c(b,e,!1,i,C,A),C.pop()}),C.push(S.length),c(e,i,!0,u,C,A)):n[f]='<tr class="'+g+' dojoxGridNoChildren" dojoxTreeGridPath="'+h.join("/")+'">'}else d.isItemLoaded(i)?n[f]='<tr class="'+g+' dojoxGridNoChildren" dojoxTreeGridPath="'+h.join("/")+'">':n[0]=n[0].replace("dojoxGridRowTable","dojoxGridRowTable dojoxGridRowTableNeedsRowUpdate");else i&&!s&&u.length>1&&(n[f]='<tr class="'+u[u.length-2]+'" dojoxTreeGridPath="'+h.join("/")+'">')};return c(0,s,!1,["dojoxGridRowToggle-"+i],[i],!0),n.push("</table>"),n.join("")},findTarget:function(e,t){for(var i=e;i&&i!=this.domNode&&(!i.tagName||"tr"!=i.tagName.toLowerCase());)i=i.parentNode;return i!=this.domNode?i:null},getCellNode:function(e,t){var i=c("td[idx='"+t+"']",e)[0];return i&&i.parentNode&&!s.contains(i.parentNode,"dojoxGridSummaryRow")?i:void 0},decorateEvent:function(e){return e.rowNode=this.findRowTarget(e.target),e.rowNode?(e.rowIndex=r.get(e.rowNode,"dojoxTreeGridPath"),this.baseDecorateEvent(e),e.cell=this.grid.getCell(e.cellIndex),!0):!1}});return i("dojox.grid._TreeView",p,{_contentBuilderClass:y,_onDndDrop:function(e,t,i){this.grid&&this.grid.aggregator&&this.grid.aggregator.clearSubtotalCache(),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this.connect(this.grid,"_cleanupExpandoCache","_cleanupExpandoCache")},_cleanupExpandoCache:function(e,i,n){if(-1!=e)if(a.forEach(this.grid.layout.cells,function(e){"undefined"!=typeof e.openStates&&i in e.openStates&&delete e.openStates[i]}),"string"==typeof e&&e.indexOf("/")>-1){for(var o=new t.grid.TreePath(e,this.grid),r=o.parent();r;)o=r,r=o.parent();var s=o.item();if(!s)return;var l=this.grid.store.getIdentity(s);if("undefined"!=typeof this._expandos[l]){for(var d in this._expandos[l]){var c=this._expandos[l][d];c&&c.destroy(),delete this._expandos[l][d]}delete this._expandos[l]}}else{for(var d in this._expandos)if("undefined"!=typeof this._expandos[d])for(var u in this._expandos[d]){var c=this._expandos[d][u];c&&c.destroy()}this._expandos={}}},postMixInProperties:function(){this.inherited(arguments),this._expandos={}},onBeforeRow:function(e,t){var i=this.grid;if(i._by_idx&&i._by_idx[e]&&i._by_idx[e].idty){var a=i._by_idx[e].idty;this._expandos[a]=this._expandos[a]||{}}this.inherited(arguments)},onAfterRow:function(e,t,i){a.forEach(c("span.dojoxGridExpando",i),function(t){if(t&&t.parentNode){var a,n,o=t.getAttribute("toggleClass"),r=this.grid;r._by_idx&&r._by_idx[e]&&r._by_idx[e].idty&&(a=r._by_idx[e].idty,n=this._expandos[a][o]),n?(d.place(n.domNode,t,"replace"),n.itemId=t.getAttribute("itemId"),n.cellIdx=parseInt(t.getAttribute("cellIdx"),10),isNaN(n.cellIdx)&&(n.cellIdx=-1)):a&&(n=u.parse(t.parentNode)[0],this._expandos[a][o]=n),n&&!n.setRowNode(e,i,this)&&n.domNode.parentNode.removeChild(n.domNode)}},this);var n=!1,o=this;c("tr[dojoxTreeGridPath]",i).forEach(function(e){s.toggle(e,"dojoxGridSubRowAlt",n),r.set(e,"dojoxTreeGridBaseClasses",e.className),n=!n,o.grid.rows.styleRowNode(r.get(e,"dojoxTreeGridPath"),e)}),this.inherited(arguments)},updateRowStyles:function(e){var t=c("tr[dojoxTreeGridPath='"+e+"']",this.domNode);t.length&&this.styleRowNode(e,t[0])},getCellNode:function(e,t){var i=c("tr[dojoxTreeGridPath='"+e+"']",this.domNode)[0];return i?this.content.getCellNode(i,t):void 0},destroy:function(){this._cleanupExpandoCache(),this.inherited(arguments)}})});//# sourceMappingURL=_TreeView.js.map