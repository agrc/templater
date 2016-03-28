//>>built
define("dijit/DialogUnderlay",["dojo/_base/declare","dojo/_base/lang","dojo/aspect","dojo/dom-attr","dojo/dom-style","dojo/on","dojo/window","./_Widget","./_TemplatedMixin","./BackgroundIframe","./Viewport","./main"],function(t,e,a,i,n,s,o,d,l,r,h,c){var u=t("dijit.DialogUnderlay",[d,l],{templateString:"<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' tabIndex='-1' data-dojo-attach-point='node'></div></div>",dialogId:"","class":"",_modalConnects:[],_setDialogIdAttr:function(t){i.set(this.node,"id",t+"_underlay"),this._set("dialogId",t)},_setClassAttr:function(t){this.node.className="dijitDialogUnderlay "+t,this._set("class",t)},postCreate:function(){this.ownerDocumentBody.appendChild(this.domNode),this.own(s(this.domNode,"keydown",e.hitch(this,"_onKeyDown"))),this.inherited(arguments)},layout:function(){var t=this.node.style,e=this.domNode.style;e.display="none";var a=o.getBox(this.ownerDocument);e.top=a.t+"px",e.left=a.l+"px",t.width=a.w+"px",t.height=a.h+"px",e.display="block"},show:function(){this.domNode.style.display="block",this.open=!0,this.layout(),this.bgIframe=new r(this.domNode);var t=o.get(this.ownerDocument);this._modalConnects=[h.on("resize",e.hitch(this,"layout")),s(t,"scroll",e.hitch(this,"layout"))]},hide:function(){for(this.bgIframe.destroy(),delete this.bgIframe,this.domNode.style.display="none";this._modalConnects.length;)this._modalConnects.pop().remove();this.open=!1},destroy:function(){for(;this._modalConnects.length;)this._modalConnects.pop().remove();this.inherited(arguments)},_onKeyDown:function(){}});return u.show=function(t,e){var a=u._singleton;!a||a._destroyed?a=c._underlay=u._singleton=new u(t):t&&a.set(t),n.set(a.domNode,"zIndex",e),a.open||a.show()},u.hide=function(){var t=u._singleton;t&&!t._destroyed&&t.hide()},u});//# sourceMappingURL=DialogUnderlay.js.map