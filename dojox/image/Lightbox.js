//>>built
require({cache:{"url:dojox/image/resources/Lightbox.html":'<div class="dojoxLightbox" dojoAttachPoint="containerNode">\n	<div style="position:relative">\n		<div dojoAttachPoint="imageContainer" class="dojoxLightboxContainer" dojoAttachEvent="onclick: _onImageClick">\n			<img dojoAttachPoint="imgNode" src="${imgUrl}" class="${imageClass}" alt="${title}">\n			<div class="dojoxLightboxFooter" dojoAttachPoint="titleNode">\n				<div class="dijitInline LightboxClose" dojoAttachPoint="closeButtonNode"></div>\n				<div class="dijitInline LightboxNext" dojoAttachPoint="nextButtonNode"></div>	\n				<div class="dijitInline LightboxPrev" dojoAttachPoint="prevButtonNode"></div>\n				<div class="dojoxLightboxText" dojoAttachPoint="titleTextNode"><span dojoAttachPoint="textNode">${title}</span><span dojoAttachPoint="groupCount" class="dojoxLightboxGroupText"></span></div>\n			</div>\n		</div>\n	</div>\n</div>'}}),define("dojox/image/Lightbox",["require","dojo","dijit","dojox","dojo/text!./resources/Lightbox.html","dijit/Dialog","dojox/fx/_base"],function(e,t,i,a,r){t.experimental("dojox.image.Lightbox"),t.getObject("image",!0,a);var o=t.declare("dojox.image.Lightbox",i._Widget,{group:"",title:"",href:"",duration:500,modal:!1,_allowPassthru:!1,_attachedDialog:null,startup:function(){this.inherited(arguments);var e=i.byId("dojoxLightboxDialog");e?this._attachedDialog=e:(this._attachedDialog=new a.image.LightboxDialog({id:"dojoxLightboxDialog"}),this._attachedDialog.startup()),this.store||(this._addSelf(),this.connect(this.domNode,"onclick","_handleClick"))},_addSelf:function(){this._attachedDialog.addImage({href:this.href,title:this.title},this.group||null)},_handleClick:function(e){this._allowPassthru||(e.preventDefault(),this.show())},show:function(){this._attachedDialog.show(this)},hide:function(){this._attachedDialog.hide()},disable:function(){this._allowPassthru=!0},enable:function(){this._allowPassthru=!1},onClick:function(){},destroy:function(){this._attachedDialog.removeImage(this),this.inherited(arguments)}});return o.LightboxDialog=t.declare("dojox.image.LightboxDialog",i.Dialog,{title:"",inGroup:null,imgUrl:i._Widget.prototype._blankGif,errorMessage:"Image not found.",adjust:!0,modal:!1,imageClass:"dojoxLightboxImage",errorImg:e.toUrl("./resources/images/warning.png"),templateString:r,constructor:function(e){this._groups=this._groups||e&&e._groups||{XnoGroupX:[]}},startup:function(){return this.inherited(arguments),this._animConnects=[],this.connect(this.nextButtonNode,"onclick","_nextImage"),this.connect(this.prevButtonNode,"onclick","_prevImage"),this.connect(this.closeButtonNode,"onclick","hide"),this._makeAnims(),this._vp=t.window.getBox(),this},show:function(e){var a=this;if(this._lastGroup=e,a.open||(a.inherited(arguments),a._modalconnects.push(t.connect(t.global,"onscroll",this,"_position"),t.connect(t.global,"onresize",this,"_position"),t.connect(t.body(),"onkeypress",this,"_handleKey")),e.modal||a._modalconnects.push(t.connect(i._underlay.domNode,"onclick",this,"onCancel"))),this._wasStyled){var r=t.create("img",{className:a.imageClass},a.imgNode,"after");t.destroy(a.imgNode),a.imgNode=r,a._makeAnims(),a._wasStyled=!1}t.style(a.imgNode,"opacity","0"),t.style(a.titleNode,"opacity","0");var o=e.href;if(e.group&&"XnoGroupX"!==e||a.inGroup){if(a.inGroup||(a.inGroup=a._groups[e.group],t.forEach(a.inGroup,function(t,i){t.href==e.href&&(a._index=i)})),!a._index){a._index=0;var n=a.inGroup[a._index];o=n&&n.href||a.errorImg}a.groupCount.innerHTML=" ("+(a._index+1)+" of "+Math.max(1,a.inGroup.length)+")",a.prevButtonNode.style.visibility="visible",a.nextButtonNode.style.visibility="visible"}else a.groupCount.innerHTML="",a.prevButtonNode.style.visibility="hidden",a.nextButtonNode.style.visibility="hidden";e.leaveTitle||(a.textNode.innerHTML=e.title),a._ready(o)},_ready:function(e){var i=this;i._imgError=t.connect(i.imgNode,"error",i,function(){t.disconnect(i._imgError),i.imgNode.src=i.errorImg,i.textNode.innerHTML=i.errorMessage}),i._imgConnect=t.connect(i.imgNode,"load",i,function(e){i.resizeTo({w:i.imgNode.width,h:i.imgNode.height,duration:i.duration}),t.disconnect(i._imgConnect),i._imgError&&t.disconnect(i._imgError)}),i.imgNode.src=e},_nextImage:function(){this.inGroup&&(this._index+1<this.inGroup.length?this._index++:this._index=0,this._loadImage())},_prevImage:function(){this.inGroup&&(0==this._index?this._index=this.inGroup.length-1:this._index--,this._loadImage())},_loadImage:function(){this._loadingAnim.play(1)},_prepNodes:function(){this._imageReady=!1,this.inGroup&&this.inGroup[this._index]?this.show({href:this.inGroup[this._index].href,title:this.inGroup[this._index].title}):this.show({title:this.errorMessage,href:this.errorImg})},_calcTitleSize:function(){var e=t.map(t.query("> *",this.titleNode).position(),function(e){return e.h});return{h:Math.max.apply(Math,e)}},resizeTo:function(e,i){var r="border-box"==t.boxModel?t._getBorderExtents(this.domNode).w:0,o=i||this._calcTitleSize();this._lastTitleSize=o,this.adjust&&(e.h+o.h+r+80>this._vp.h||e.w+r+60>this._vp.w)&&(this._lastSize=e,e=this._scaleToFit(e)),this._currentSize=e;var n=a.fx.sizeTo({node:this.containerNode,duration:e.duration||this.duration,width:e.w+r,height:e.h+o.h+r});this.connect(n,"onEnd","_showImage"),n.play(15)},_scaleToFit:function(e){var t={},i={w:this._vp.w-80,h:this._vp.h-60-this._lastTitleSize.h},a=i.w/i.h,r=e.w/e.h;return r>=a?(t.h=i.w/r,t.w=i.w):(t.w=r*i.h,t.h=i.h),this._wasStyled=!0,this._setImageSize(t),t.duration=e.duration,t},_setImageSize:function(e){var t=this.imgNode;t.height=e.h,t.width=e.w},_size:function(){},_position:function(e){this._vp=t.window.getBox(),this.inherited(arguments),e&&"resize"==e.type&&(this._wasStyled?(this._setImageSize(this._lastSize),this.resizeTo(this._lastSize)):(this.imgNode.height+80>this._vp.h||this.imgNode.width+60>this._vp.h)&&this.resizeTo({w:this.imgNode.width,h:this.imgNode.height}))},_showImage:function(){this._showImageAnim.play(1)},_showNav:function(){var e=t.marginBox(this.titleNode);e.h>this._lastTitleSize.h?this.resizeTo(this._wasStyled?this._lastSize:this._currentSize,e):this._showNavAnim.play(1)},hide:function(){t.fadeOut({node:this.titleNode,duration:200,onEnd:t.hitch(this,function(){this.imgNode.src=this._blankGif})}).play(5),this.inherited(arguments),this.inGroup=null,this._index=null},addImage:function(e,t){var i=t;e.href&&(i?(this._groups[i]||(this._groups[i]=[]),this._groups[i].push(e)):this._groups.XnoGroupX.push(e))},removeImage:function(e){var i=e.group||"XnoGroupX";t.every(this._groups[i],function(t,i,a){return t.href==e.href?(a.splice(i,1),!1):!0})},removeGroup:function(e){this._groups[e]&&(this._groups[e]=[])},_handleKey:function(e){if(this.open){var i=t.keys;switch(e.charOrCode){case i.ESCAPE:this.hide();break;case i.DOWN_ARROW:case i.RIGHT_ARROW:case 78:this._nextImage();break;case i.UP_ARROW:case i.LEFT_ARROW:case 80:this._prevImage()}}},_makeAnims:function(){t.forEach(this._animConnects,t.disconnect),this._animConnects=[],this._showImageAnim=t.fadeIn({node:this.imgNode,duration:this.duration}),this._animConnects.push(t.connect(this._showImageAnim,"onEnd",this,"_showNav")),this._loadingAnim=t.fx.combine([t.fadeOut({node:this.imgNode,duration:175}),t.fadeOut({node:this.titleNode,duration:175})]),this._animConnects.push(t.connect(this._loadingAnim,"onEnd",this,"_prepNodes")),this._showNavAnim=t.fadeIn({node:this.titleNode,duration:225})},onClick:function(e){},_onImageClick:function(e){e&&e.target==this.imgNode&&(this.onClick(this._lastGroup),this._lastGroup.declaredClass&&this._lastGroup.onClick(this._lastGroup))}}),o});//# sourceMappingURL=Lightbox.js.map