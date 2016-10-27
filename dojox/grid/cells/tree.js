//>>built
define("dojox/grid/cells/tree",["dojo/_base/kernel","../../main","dojo/_base/lang","../cells"],function(e,t,i){return t.grid.cells.TreeCell={formatAggregate:function(e,t,i){var a=this.grid,n=(a.edit.info,a.aggregator?a.aggregator.getForCell(this,t,e,t===this.level?"cnt":this.parentCell.aggregate):this.value||this.defaultValue),r=this._defaultFormat(n,[n,t-this.level,i,this]),o=this.textDir||this.grid.textDir;return o&&this._enforceTextDirWithUcc&&(r=this._enforceTextDirWithUcc(o,r)),r},formatIndexes:function(e,t){var i=this.grid,a=i.edit.info,n=this.get?this.get(e[0],t,e):this.value||this.defaultValue;if(this.editable&&(this.alwaysEditing||a.rowIndex==e[0]&&a.cell==this))return this.formatEditing(n,e[0],e);var r=this._defaultFormat(n,[n,e[0],e,this]),o=this.textDir||this.grid.textDir;return o&&this._enforceTextDirWithUcc&&(r=this._enforceTextDirWithUcc(o,r)),r},getOpenState:function(e){var t=this.grid,i=t.store,a=null;return i.isItem(e)&&(a=e,e=i.getIdentity(e)),this.openStates||(this.openStates={}),"string"==typeof e&&e in this.openStates||(this.openStates[e]=t.getDefaultOpenState(this,a)),this.openStates[e]},formatAtLevel:function(t,a,n,r,o,s){i.isArray(t)||(t=[t]);var l="";if(n>this.level||n===this.level&&r)s.push("dojoxGridSpacerCell"),n===this.level&&s.push("dojoxGridTotalCell"),l="<span></span>";else if(n<this.level)s.push("dojoxGridSummaryCell"),l='<span class="dojoxGridSummarySpan">'+this.formatAggregate(a,n,t)+"</span>";else{var d="";if(this.isCollapsable){var c=this.grid.store,u="";c.isItem(a)&&(u=c.getIdentity(a)),s.push("dojoxGridExpandoCell"),d="<span "+e._scopeName+'Type="dojox.grid._Expando" level="'+n+'" class="dojoxGridExpando"" toggleClass="'+o+'" itemId="'+u+'" cellIdx="'+this.index+'"></span>'}l=d+this.formatIndexes(t,a)}return this.grid.focus.cell&&this.index==this.grid.focus.cell.index&&t.join("/")==this.grid.focus.rowIndex&&s.push(this.grid.focus.focusClass),l}},t.grid.cells.TreeCell});//# sourceMappingURL=tree.js.map