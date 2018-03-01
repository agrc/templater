//>>built
define("dojox/mobile/app/AlertDialog",["dojo","dijit","dojox","dojo/require!dijit/_WidgetBase"],function(e,t,i){e.provide("dojox.mobile.app.AlertDialog"),e.experimental("dojox.mobile.app.AlertDialog"),e.require("dijit._WidgetBase"),e.declare("dojox.mobile.app.AlertDialog",t._WidgetBase,{title:"",text:"",controller:null,buttons:null,defaultButtonLabel:"OK",onChoose:null,constructor:function(){this.onClick=e.hitch(this,this.onClick),this._handleSelect=e.hitch(this,this._handleSelect)},buildRendering:function(){this.domNode=e.create("div",{class:"alertDialog"});var t=e.create("div",{class:"alertDialogBody"},this.domNode);e.create("div",{class:"alertTitle",innerHTML:this.title||""},t),e.create("div",{class:"alertText",innerHTML:this.text||""},t);var a=e.create("div",{class:"alertBtns"},t);this.buttons&&0!=this.buttons.length||(this.buttons=[{label:this.defaultButtonLabel,value:"ok",class:"affirmative"}]);var r=this;e.forEach(this.buttons,function(t){var n=new i.mobile.Button({btnClass:t.class||"",label:t.label});n._dialogValue=t.value,e.place(n.domNode,a),r.connect(n,"onClick",r._handleSelect)});var n=this.controller.getWindowSize();this.mask=e.create("div",{class:"dialogUnderlayWrapper",innerHTML:'<div class="dialogUnderlay"></div>',style:{width:n.w+"px",height:n.h+"px"}},this.controller.assistant.domNode),this.connect(this.mask,"onclick",function(){r.onChoose&&r.onChoose(),r.hide()})},postCreate:function(){this.subscribe("/dojox/mobile/app/goback",this._handleSelect)},_handleSelect:function(e){var i;if(e&&e.target)for(i=e.target;!t.byNode(i);)i=i.parentNode;this.onChoose&&this.onChoose(i?t.byNode(i)._dialogValue:void 0),this.hide()},show:function(){this._doTransition(1)},hide:function(){this._doTransition(-1)},_doTransition:function(t){var i,a=e.marginBox(this.domNode.firstChild).h,r=this.controller.getWindowSize().h,n=r-a,o=r,s=e.fx.slideTo({node:this.domNode,duration:400,top:{start:t<0?n:o,end:t<0?o:n}}),l=e[t<0?"fadeOut":"fadeIn"]({node:this.mask,duration:400}),i=e.fx.combine([s,l]),d=this;e.connect(i,"onEnd",this,function(){t<0&&(d.domNode.style.display="none",e.destroy(d.domNode),e.destroy(d.mask))}),i.play()},destroy:function(){this.inherited(arguments),e.destroy(this.mask)},onClick:function(){}})});//# sourceMappingURL=AlertDialog.js.map