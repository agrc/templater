//>>built
define("dojox/grid/cells/_base",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/_base/connect","dojo/_base/array","dojo/_base/sniff","dojo/dom","dojo/dom-attr","dojo/dom-construct","dijit/_Widget","../util"],function(e,t,i,a,r,n,o,s,d,l,h,u){var c=t("dojox.grid._DeferredTextWidget",h,{deferred:null,_destroyOnRemove:!0,postCreate:function(){this.deferred&&this.deferred.addBoth(i.hitch(this,function(e){this.domNode&&(this.domNode.innerHTML=e)}))}}),m=function(e){try{u.fire(e,"focus"),u.fire(e,"select")}catch(t){}},f=function(){setTimeout(i.hitch.apply(e,arguments),0)},g=t("dojox.grid.cells._Base",null,{styles:"",classes:"",editable:!1,alwaysEditing:!1,formatter:null,defaultValue:"...",value:null,hidden:!1,noresize:!1,draggable:!0,_valueProp:"value",_formatPending:!1,constructor:function(e){this._props=e||{},i.mixin(this,e),void 0===this.draggable&&(this.draggable=!0)},_defaultFormat:function(e,t){var i=this.grid.formatterScope||this,a=this.formatter;a&&i&&"string"==typeof a&&(a=this.formatter=i[a]);var r=e!=this.defaultValue&&a?a.apply(i,t):e;return"undefined"==typeof r?this.defaultValue:(r&&r.addBoth&&(r=new c({deferred:r},l.create("span",{innerHTML:this.defaultValue}))),r&&r.declaredClass&&r.startup?"<div class='dojoxGridStubNode' linkWidget='"+r.id+"' cellIdx='"+this.index+"'>"+this.defaultValue+"</div>":r)},format:function(e,t){var i=this.grid.edit.info,a=this.get?this.get(e,t):this.value||this.defaultValue;return a=a&&a.replace&&this.grid.escapeHTMLInData?a.replace(/&/g,"&amp;").replace(/</g,"&lt;"):a,this.editable&&(this.alwaysEditing||i.rowIndex==e&&i.cell==this)?this.formatEditing(i.value?i.value:a,e):this._defaultFormat(a,[a,e,this])},formatEditing:function(e,t){},getNode:function(e){return this.view.getCellNode(e,this.index)},getHeaderNode:function(){return this.view.getHeaderCellNode(this.index)},getEditNode:function(e){return(this.getNode(e)||0).firstChild||0},canResize:function(){var e=this.unitWidth;return e&&"auto"!==e},isFlex:function(){var e=this.unitWidth;return e&&i.isString(e)&&("auto"==e||"%"==e.slice(-1))},applyEdit:function(e,t){this.getNode(t)&&this.grid.edit.applyCellEdit(e,this,t)},cancelEdit:function(e){this.grid.doCancelEdit(e)},_onEditBlur:function(e){this.grid.edit.isEditCell(e,this.index)&&this.grid.edit.apply()},registerOnBlur:function(e,t){this.commitOnBlur&&r.connect(e,"onblur",function(e){setTimeout(i.hitch(this,"_onEditBlur",t),250)})},needFormatNode:function(e,t){this._formatPending=!0,f(this,"_formatNode",e,t)},cancelFormatNode:function(){this._formatPending=!1},_formatNode:function(e,t){this._formatPending&&(this._formatPending=!1,o("ie")||s.setSelectable(this.grid.domNode,!0),this.formatNode(this.getEditNode(t),e,t))},formatNode:function(e,t,i){o("ie")?f(this,"focus",i,e):this.focus(i,e)},dispatchEvent:function(e,t){return e in this?this[e](t):void 0},getValue:function(e){return this.getEditNode(e)[this._valueProp]},setValue:function(e,t){var i=this.getEditNode(e);i&&(i[this._valueProp]=t)},focus:function(e,t){m(t||this.getEditNode(e))},save:function(e){this.value=this.value||this.getValue(e)},restore:function(e){this.setValue(e,this.value)},_finish:function(e){s.setSelectable(this.grid.domNode,!1),this.cancelFormatNode()},apply:function(e){this.applyEdit(this.getValue(e),e),this._finish(e)},cancel:function(e){this.cancelEdit(e),this._finish(e)}});g.markupFactory=function(e,t){var a=i.trim(d.get(e,"formatter")||"");a&&(t.formatter=i.getObject(a)||a);var r=i.trim(d.get(e,"get")||"");r&&(t.get=i.getObject(r));var n=function(t,a,r){var n=i.trim(d.get(e,t)||"");n&&(a[r||t]=!("false"==n.toLowerCase()))};n("sortDesc",t),n("editable",t),n("alwaysEditing",t),n("noresize",t),n("draggable",t);var o=i.trim(d.get(e,"loadingText")||d.get(e,"defaultValue")||"");o&&(t.defaultValue=o);var s=function(t,a,r){var n=i.trim(d.get(e,t)||"")||void 0;n&&(a[r||t]=n)};s("styles",t),s("headerStyles",t),s("cellStyles",t),s("classes",t),s("headerClasses",t),s("cellClasses",t)};var p=g.Cell=t("dojox.grid.cells.Cell",g,{constructor:function(){this.keyFilter=this.keyFilter},keyFilter:null,formatEditing:function(e,t){return this.needFormatNode(e,t),'<input class="dojoxGridInput" type="text" value="'+e+'">'},formatNode:function(e,t,i){this.inherited(arguments),this.registerOnBlur(e,i)},doKey:function(e){if(this.keyFilter){var t=String.fromCharCode(e.charCode);-1==t.search(this.keyFilter)&&a.stop(e)}},_finish:function(e){this.inherited(arguments);var t=this.getEditNode(e);try{u.fire(t,"blur")}catch(i){}}});p.markupFactory=function(e,t){g.markupFactory(e,t);var a=i.trim(d.get(e,"keyFilter")||"");a&&(t.keyFilter=new RegExp(a))};var y=g.RowIndex=t("dojox.grid.cells.RowIndex",p,{name:"Row",postscript:function(){this.editable=!1},get:function(e){return e+1}});y.markupFactory=function(e,t){p.markupFactory(e,t)};var v=g.Select=t("dojox.grid.cells.Select",p,{options:null,values:null,returnIndex:-1,constructor:function(e){this.values=this.values||this.options},formatEditing:function(e,t){this.needFormatNode(e,t);for(var i,a,r=['<select class="dojoxGridSelect">'],n=0;void 0!==(i=this.options[n])&&void 0!==(a=this.values[n]);n++)a=a.replace?a.replace(/&/g,"&amp;").replace(/</g,"&lt;"):a,i=i.replace?i.replace(/&/g,"&amp;").replace(/</g,"&lt;"):i,r.push("<option",e==a?" selected":"",' value="'+a+'"',">",i,"</option>");return r.push("</select>"),r.join("")},_defaultFormat:function(e,t){var i=this.inherited(arguments);if(!this.formatter&&this.values&&this.options){var a=n.indexOf(this.values,i);a>=0&&(i=this.options[a])}return i},getValue:function(e){var t=this.getEditNode(e);if(t){var i=t.selectedIndex,a=t.options[i];return this.returnIndex>-1?i:a.value||a.innerHTML}}});v.markupFactory=function(e,t){p.markupFactory(e,t);var a=i.trim(d.get(e,"options")||"");if(a){var r=a.split(",");r[0]!=a&&(t.options=r)}var n=i.trim(d.get(e,"values")||"");if(n){var o=n.split(",");o[0]!=n&&(t.values=o)}};var b=g.AlwaysEdit=t("dojox.grid.cells.AlwaysEdit",p,{alwaysEditing:!0,_formatNode:function(e,t){this.formatNode(this.getEditNode(t),e,t)},applyStaticValue:function(e){var t=this.grid.edit;t.applyCellEdit(this.getValue(e),this,e),t.start(this,e,!0)}});b.markupFactory=function(e,t){p.markupFactory(e,t)};var M=g.Bool=t("dojox.grid.cells.Bool",b,{_valueProp:"checked",formatEditing:function(e,t){return'<input class="dojoxGridInput" type="checkbox"'+(e?' checked="checked"':"")+' style="width: auto" />'},doclick:function(e){"INPUT"==e.target.tagName&&this.applyStaticValue(e.rowIndex)}});return M.markupFactory=function(e,t){b.markupFactory(e,t)},g});//# sourceMappingURL=_base.js.map