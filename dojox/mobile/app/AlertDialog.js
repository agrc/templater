//>>built
define("dojox/mobile/app/AlertDialog",["dojo","dijit","dojox","dojo/require!dijit/_WidgetBase"],function(e,t,i){e.provide("dojox.mobile.app.AlertDialog"),e.experimental("dojox.mobile.app.AlertDialog"),e.require("dijit._WidgetBase"),e.declare("dojox.mobile.app.AlertDialog",t._WidgetBase,{title:"",text:"",controller:null,buttons:null,defaultButtonLabel:"OK",onChoose:null,constructor:function(){this.onClick=e.hitch(this,this.onClick),this._handleSelect=e.hitch(this,this._handleSelect)},buildRendering:function(){this.domNode=e.create("div",{"class":"alertDialog"});var t=e.create("div",{"class":"alertDialogBody"},this.domNode);e.create("div",{"class":"alertTitle",innerHTML:this.title||""},t),e.create("div",{"class":"alertText",innerHTML:this.text||""},t);var a=e.create("div",{"class":"alertBtns"},t);this.buttons&&0!=this.buttons.length||(this.buttons=[{label:this.defaultButtonLabel,value:"ok","class":"affirmative"}]);var o=this;e.forEach(this.buttons,function(t){var r=new i.mobile.Button({btnClass:t["class"]||"",label:t.label});r._dialogValue=t.value,e.place(r.domNode,a),o.connect(r,"onClick",o._handleSelect)});var r=this.controller.getWindowSize();this.mask=e.create("div",{"class":"dialogUnderlayWrapper",innerHTML:'<div class="dialogUnderlay"></div>',style:{width:r.w+"px",height:r.h+"px"}},this.controller.assistant.domNode),this.connect(this.mask,"onclick",function(){o.onChoose&&o.onChoose(),o.hide()})},postCreate:function(){this.subscribe("/dojox/mobile/app/goback",this._handleSelect)},_handleSelect:function(e){var i;if(e&&e.target)for(i=e.target;!t.byNode(i);)i=i.parentNode;this.onChoose&&this.onChoose(i?t.byNode(i)._dialogValue:void 0),this.hide()},show:function(){this._doTransition(1)},hide:function(){this._doTransition(-1)},_doTransition:function(t){var i,a=e.marginBox(this.domNode.firstChild).h,o=this.controller.getWindowSize().h,r=o-a,n=o,s=e.fx.slideTo({node:this.domNode,duration:400,top:{start:0>t?r:n,end:0>t?n:r}}),l=e[0>t?"fadeOut":"fadeIn"]({node:this.mask,duration:400}),i=e.fx.combine([s,l]),d=this;e.connect(i,"onEnd",this,function(){0>t&&(d.domNode.style.display="none",e.destroy(d.domNode),e.destroy(d.mask))}),i.play()},destroy:function(){this.inherited(arguments),e.destroy(this.mask)},onClick:function(){}})});//# sourceMappingURL=AlertDialog.js.map