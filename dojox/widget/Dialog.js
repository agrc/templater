//>>built
require({cache:{"url:dojox/widget/Dialog/Dialog.html":'<div class="dojoxDialog" tabindex="-1" role="dialog" aria-labelledby="${id}_title">\n	<div dojoAttachPoint="titleBar" class="dojoxDialogTitleBar">\n		<span dojoAttachPoint="titleNode" class="dojoxDialogTitle" id="${id}_title">${title}</span>\n	</div>\n	<div dojoAttachPoint="dojoxDialogWrapper">\n		<div dojoAttachPoint="containerNode" class="dojoxDialogPaneContent"></div>\n	</div>\n	<div dojoAttachPoint="closeButtonNode" class="dojoxDialogCloseIcon" dojoAttachEvent="onclick: onCancel">\n			<span dojoAttachPoint="closeText" class="closeText">x</span>\n	</div>\n</div>\n'}}),define("dojox/widget/Dialog",["dojo","dojox","dojo/text!./Dialog/Dialog.html","dijit/Dialog","dojo/window","dojox/fx","./DialogSimple"],function(e,t,i){return e.getObject("widget",!0,t),e.declare("dojox.widget.Dialog",t.widget.DialogSimple,{templateString:i,sizeToViewport:!1,viewportPadding:35,dimensions:null,easing:null,sizeDuration:dijit._defaultDuration,sizeMethod:"chain",showTitle:!1,draggable:!1,modal:!1,constructor:function(t,i){this.easing=t.easing||e._defaultEasing,this.dimensions=t.dimensions||[300,300]},_setup:function(){this.inherited(arguments),this._alreadyInitialized||(this._navIn=e.fadeIn({node:this.closeButtonNode}),this._navOut=e.fadeOut({node:this.closeButtonNode}),this.showTitle||e.addClass(this.domNode,"dojoxDialogNoTitle"))},layout:function(e){this._setSize(),this.inherited(arguments)},_setSize:function(){this._vp=e.window.getBox();var t=this.containerNode,i=this.sizeToViewport;return this._displaysize={w:i?t.scrollWidth:this.dimensions[0],h:i?t.scrollHeight:this.dimensions[1]}},show:function(){this.open||(this._setSize(),e.style(this.closeButtonNode,"opacity",0),e.style(this.domNode,{overflow:"hidden",opacity:0,width:"1px",height:"1px"}),e.style(this.containerNode,{opacity:0,overflow:"hidden"}),this.inherited(arguments),this.modal?this._modalconnects.push(e.connect(e.body(),"onkeypress",function(t){t.charOrCode==e.keys.ESCAPE&&e.stopEvent(t)})):this._modalconnects.push(e.connect(dijit._underlay.domNode,"onclick",this,"onCancel")),this._modalconnects.push(e.connect(this.domNode,"onmouseenter",this,"_handleNav")),this._modalconnects.push(e.connect(this.domNode,"onmouseleave",this,"_handleNav")))},_handleNav:function(e){var t="_navOut",i="_navIn",a="mouseout"==e.type?i:t,n="mouseout"==e.type?t:i;this[a].stop(),this[n].play()},_position:function(){if(this._started){this._sizing&&(this._sizing.stop(),this.disconnect(this._sizingConnect),delete this._sizing),this.inherited(arguments),this.open||e.style(this.containerNode,"opacity",0);var i=2*this.viewportPadding,a={node:this.domNode,duration:this.sizeDuration||dijit._defaultDuration,easing:this.easing,method:this.sizeMethod},n=this._displaysize||this._setSize();a.width=n.w=n.w+i>=this._vp.w||this.sizeToViewport?this._vp.w-i:n.w,a.height=n.h=n.h+i>=this._vp.h||this.sizeToViewport?this._vp.h-i:n.h,this._sizing=t.fx.sizeTo(a),this._sizingConnect=this.connect(this._sizing,"onEnd","_showContent"),this._sizing.play()}},_showContent:function(t){var i=this.containerNode;e.style(this.domNode,{overflow:"visible",opacity:1}),e.style(this.closeButtonNode,"opacity",1),e.style(i,{height:this._displaysize.h-this.titleNode.offsetHeight+"px",width:this._displaysize.w+"px",overflow:"auto"}),e.anim(i,{opacity:1})}})});//# sourceMappingURL=Dialog.js.map