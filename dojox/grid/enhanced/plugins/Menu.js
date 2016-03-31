//>>built
define("dojox/grid/enhanced/plugins/Menu",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/html","dojo/_base/event","dojo/keys","../_Plugin","../../EnhancedGrid"],function(e,t,i,a,n,o,r,s){var l=e("dojox.grid.enhanced.plugins.Menu",r,{name:"menus",types:["headerMenu","rowMenu","cellMenu","selectedRegionMenu"],constructor:function(){var e=this.grid;e.showMenu=i.hitch(e,this.showMenu),e._setRowMenuAttr=i.hitch(this,"_setRowMenuAttr"),e._setCellMenuAttr=i.hitch(this,"_setCellMenuAttr"),e._setSelectedRegionMenuAttr=i.hitch(this,"_setSelectedRegionMenuAttr")},onStartUp:function(){var e,i=this.option;for(e in i)t.indexOf(this.types,e)>=0&&i[e]&&this._initMenu(e,i[e])},_initMenu:function(e,t){var i=this.grid;if(!i[e]){var a=this._getMenuWidget(t);if(!a)return;i.set(e,a),"headerMenu"!=e?a._scheduleOpen=function(){}:i.setupHeaderMenu()}},_getMenuWidget:function(e){return e instanceof dijit.Menu?e:dijit.byId(e)},_setRowMenuAttr:function(e){this._setMenuAttr(e,"rowMenu")},_setCellMenuAttr:function(e){this._setMenuAttr(e,"cellMenu")},_setSelectedRegionMenuAttr:function(e){this._setMenuAttr(e,"selectedRegionMenu")},_setMenuAttr:function(e,t){var i=this.grid,a=i.domNode;e&&e instanceof dijit.Menu&&(i[t]&&i[t].unBindDomNode(a),i[t]=e,i[t].bindDomNode(a))},showMenu:function(e){var t=e.cellNode&&a.hasClass(e.cellNode,"dojoxGridRowSelected")||e.rowNode&&(a.hasClass(e.rowNode,"dojoxGridRowSelected")||a.hasClass(e.rowNode,"dojoxGridRowbarSelected"));if(t&&this.selectedRegionMenu)return void this.onSelectedRegionContextMenu(e);var i={target:e.target,coords:e.keyCode!==o.F10&&"pageX"in e?{x:e.pageX,y:e.pageY}:null};return this.rowMenu&&(!this.cellMenu||this.selection.isSelected(e.rowIndex)||e.rowNode&&a.hasClass(e.rowNode,"dojoxGridRowbar"))?(this.rowMenu._openMyself(i),void n.stop(e)):(this.cellMenu&&this.cellMenu._openMyself(i),void n.stop(e))},destroy:function(){var e=this.grid;e.headerMenu&&e.headerMenu.unBindDomNode(e.viewsHeaderNode),e.rowMenu&&e.rowMenu.unBindDomNode(e.domNode),e.cellMenu&&e.cellMenu.unBindDomNode(e.domNode),e.selectedRegionMenu&&e.selectedRegionMenu.destroy(),this.inherited(arguments)}});return s.registerPlugin(l),l});//# sourceMappingURL=Menu.js.map