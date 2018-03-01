//>>built
define("dojox/drawing/plugins/drawing/GreekPalette",["dojo","dijit/popup","../../library/greek","dijit/focus","dijit/_Widget","dijit/_TemplatedMixin","dijit/_PaletteMixin","dojo/i18n!dojox/editor/plugins/nls/latinEntities"],function(e,t,a,i,r,o,n,d){var l=e.declare(null,{constructor:function(e){this._alias=e},getValue:function(){return this._alias},fillCell:function(e){e.innerHTML="&"+this._alias+";"}});return e.declare("dojox.drawing.plugins.drawing.GreekPalette",[r,o,n],{postMixInProperties:function(){var e,t=a,i=0;for(e in t)i++;var r=Math.floor(Math.sqrt(i)),o=r,n=0,d=[],l=[];for(e in t)n++,l.push(e),n%o==0&&(d.push(l),l=[]);l.length>0&&d.push(l),this._palette=d},show:function(a){e.mixin(a,{popup:this}),t.open(a)},onChange:function(e){var a=this._textBlock;t.hide(this),a.insertText(this._pushChangeTo,e),a._dropMode=!1},onCancel:function(e){t.hide(this),this._textBlock._dropMode=!1},templateString:'<div class="dojoxEntityPalette">\n\t<table>\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<table class="dijitPaletteTable">\n\t\t\t\t\t\t<tbody dojoAttachPoint="gridNode"></tbody>\n\t\t\t\t   </table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<table dojoAttachPoint="previewPane" class="dojoxEntityPalettePreviewTable">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td class="dojoxEntityPalettePreviewDetailEntity">Type: <span class="dojoxEntityPalettePreviewDetail" dojoAttachPoint="previewNode"></span></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>',baseClass:"dojoxEntityPalette",showPreview:!0,dyeClass:l,paletteClass:"editorLatinEntityPalette",cellClass:"dojoxEntityPaletteCell",buildRendering:function(){this.inherited(arguments);var t=d;this._preparePalette(this._palette,t);var a=e.query(".dojoxEntityPaletteCell",this.gridNode);e.forEach(a,function(e){this.connect(e,"onmouseenter","_onCellMouseEnter")},this)},_onCellMouseEnter:function(e){this.showPreview&&this._displayDetails(e.target)},_onCellClick:function(t){var a="click"==t.type?t.currentTarget:this._currentFocus,r=this._getDye(a).getValue();this._setCurrent(a),setTimeout(e.hitch(this,function(){i(a),this._setValueAttr(r,!0)})),e.removeClass(a,"dijitPaletteCellHover"),e.stopEvent(t)},postCreate:function(){this.inherited(arguments),this.showPreview||e.style(this.previewNode,"display","none"),t.moveOffScreen(this)},_setCurrent:function(t){"_currentFocus"in this&&(e.attr(this._currentFocus,"tabIndex","-1"),e.removeClass(this._currentFocus,"dojoxEntityPaletteCellHover")),this._currentFocus=t,t&&(e.attr(t,"tabIndex",this.tabIndex),e.addClass(this._currentFocus,"dojoxEntityPaletteCellHover")),this.showPreview&&this._displayDetails(t)},_displayDetails:function(e){var t=this._getDye(e);if(t){var a=t.getValue();t._alias;this.previewNode.innerHTML=a}else this.previewNode.innerHTML="",this.descNode.innerHTML=""},_preparePalette:function(t,a){this._cells=[];for(var i=this._blankGif,r="string"==typeof this.dyeClass?e.getObject(this.dyeClass):this.dyeClass,o=0;o<t.length;o++)for(var n=e.create("tr",{tabIndex:"-1"},this.gridNode),d=0;d<t[o].length;d++){var l=t[o][d];if(l){var s=new r(l),m=e.create("td",{class:this.cellClass,tabIndex:"-1",title:a[l]});s.fillCell(m,i),this.connect(m,"ondijitclick","_onCellClick"),this._trackMouseState(m,this.cellClass),e.place(m,n),m.idx=this._cells.length,this._cells.push({node:m,dye:s})}}this._xDim=t[0].length,this._yDim=t.length},_navigateByArrow:function(e){var t={38:-this._xDim,40:this._xDim,39:this.isLeftToRight()?1:-1,37:this.isLeftToRight()?-1:1},a=t[e.keyCode],i=this._currentFocus.idx+a;if(i<this._cells.length&&i>-1){var r=this._cells[i].node;this._setCurrent(r)}}})});//# sourceMappingURL=GreekPalette.js.map