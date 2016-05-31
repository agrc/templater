//>>built
define("dojox/drawing/stencil/Text",["dojo","../util/oo","./_Base","../manager/_registry","../util/typeset"],function(e,t,a,i,r){var o=t.declare(a,function(e){},{type:"dojox.drawing.stencil.Text",anchorType:"none",baseRender:!0,align:"start",valign:"top",_lineHeight:1,typesetter:function(e){return this._rawText=e,r.convertLaTeX(e)},setText:function(e){this.enabled&&(e=this.typesetter(e)),this._text=e,this._textArray=[],this.created&&this.render(e)},getText:function(){return this._rawText||this._text},dataToPoints:function(e){e=e||this.data;var t="auto"==e.width?1:e.width,a=e.height||this._lineHeight;return this.points=[{x:e.x,y:e.y},{x:e.x+t,y:e.y},{x:e.x+t,y:e.y+a},{x:e.x,y:e.y+a}],this.points},pointsToData:function(e){e=e||this.points;var t=e[0],a=e[2];return this.data={x:t.x,y:t.y,width:a.x-t.x,height:a.y-t.y},this.data},render:function(t){this.remove(this.shape,this.hit),!this.annotation&&this.renderHit&&this._renderOutline(),void 0!=t&&(this._text=t,this._textArray=this._text.split("\n"));var a=this.pointsToData(),i=this._lineHeight,r=a.x+2*this.style.text.pad,o=a.y+this._lineHeight-.4*this.textSize;"middle"==this.valign&&(o-=i/2),this.shape=this.container.createGroup(),e.forEach(this._textArray,function(e,t){var a=this.shape.createText({x:r,y:o+i*t,text:unescape(e),align:this.align}).setFont(this.style.currentText).setFill(this.style.currentText.color);this._setNodeAtts(a)},this),this._setNodeAtts(this.shape)},_renderOutline:function(){if(!this.annotation){var e=this.pointsToData();"middle"==this.align?e.x-=e.width/2-2*this.style.text.pad:"start"==this.align?e.x+=this.style.text.pad:"end"==this.align&&(e.x-=e.width-3*this.style.text.pad),"middle"==this.valign&&(e.y-=this._lineHeight/2-this.style.text.pad),this.hit=this.container.createRect(e).setStroke(this.style.currentHit).setFill(this.style.currentHit.fill),this._setNodeAtts(this.hit),this.hit.moveToBack()}},makeFit:function(t,a){var i=e.create("span",{innerHTML:t,id:"foo"},document.body),r=1;e.style(i,"fontSize",r+"px");for(var o=30;e.marginBox(i).w<a&&(r++,e.style(i,"fontSize",r+"px"),!(o--<=0)););r--;var n=e.marginBox(i);return e.destroy(i),{size:r,box:n}}});return e.setObject("dojox.drawing.stencil.Text",o),i.register({name:"dojox.drawing.stencil.Text"},"stencil"),o});//# sourceMappingURL=Text.js.map