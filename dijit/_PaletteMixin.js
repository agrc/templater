//>>built
define("dijit/_PaletteMixin",["dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/keys","dojo/_base/lang","dojo/on","./_CssStateMixin","./a11yclick","./focus","./typematic"],function(e,t,i,o,s,n,a,r,d,c,h){var u=e("dijit._PaletteMixin",r,{defaultTimeout:500,timeoutChangeRate:.9,value:"",_selectedCell:-1,tabIndex:"0",cellClass:"dijitPaletteCell",dyeClass:null,_dyeFactory:function(e){var t="string"==typeof this.dyeClass?n.getObject(this.dyeClass):this.dyeClass;return new t(e)},_preparePalette:function(e,t){this._cells=[];var i=this._blankGif;this.own(a(this.gridNode,d,n.hitch(this,"_onCellClick")));for(var r=0;r<e.length;r++)for(var c=o.create("tr",{tabIndex:"-1",role:"row"},this.gridNode),u=0;u<e[r].length;u++){var l=e[r][u];if(l){var f=this._dyeFactory(l,r,u,t[l]),_=o.create("td",{"class":this.cellClass,tabIndex:"-1",title:t[l],role:"gridcell"},c);f.fillCell(_,i),_.idx=this._cells.length,this._cells.push({node:_,dye:f})}}this._xDim=e[0].length,this._yDim=e.length;var g={UP_ARROW:-this._xDim,DOWN_ARROW:this._xDim,RIGHT_ARROW:this.isLeftToRight()?1:-1,LEFT_ARROW:this.isLeftToRight()?-1:1};for(var m in g)this.own(h.addKeyListener(this.domNode,{keyCode:s[m],ctrlKey:!1,altKey:!1,shiftKey:!1},this,function(){var e=g[m];return function(t){this._navigateByKey(e,t)}}(),this.timeoutChangeRate,this.defaultTimeout))},postCreate:function(){this.inherited(arguments),this._setCurrent(this._cells[0].node)},focus:function(){c.focus(this._currentFocus)},_onCellClick:function(e){for(var t=e.target;"TD"!=t.tagName;){if(!t.parentNode||t==this.gridNode)return;t=t.parentNode}var i=this._getDye(t).getValue();this._setCurrent(t),c.focus(t),this._setValueAttr(i,!0),e.stopPropagation(),e.preventDefault()},_setCurrent:function(e){"_currentFocus"in this&&t.set(this._currentFocus,"tabIndex","-1"),this._currentFocus=e,e&&t.set(e,"tabIndex",this.tabIndex)},_setValueAttr:function(e,t){if(this._selectedCell>=0&&i.remove(this._cells[this._selectedCell].node,this.cellClass+"Selected"),this._selectedCell=-1,e)for(var o=0;o<this._cells.length;o++)if(e==this._cells[o].dye.getValue()){this._selectedCell=o,i.add(this._cells[o].node,this.cellClass+"Selected");break}this._set("value",this._selectedCell>=0?e:null),(t||void 0===t)&&this.onChange(e)},onChange:function(){},_navigateByKey:function(e,t){if(-1!=t){var i=this._currentFocus.idx+e;if(i<this._cells.length&&i>-1){var o=this._cells[i].node;this._setCurrent(o),this.defer(n.hitch(c,"focus",o))}}},_getDye:function(e){return this._cells[e.idx].dye}});return u});//# sourceMappingURL=_PaletteMixin.js.map