//>>built
define("dojox/mobile/TextBox",["dojo/_base/declare","dojo/dom-construct","dijit/_WidgetBase","dijit/form/_FormValueMixin","dijit/form/_TextBoxMixin","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TextBox"],function(e,t,i,o,a,n,r){var s=e(n("dojo-bidi")?"dojox.mobile.NonBidiTextBox":"dojox.mobile.TextBox",[i,o,a],{baseClass:"mblTextBox",_setTypeAttr:null,_setPlaceHolderAttr:function(e){e=this._cv?this._cv(e):e,this._set("placeHolder",e),this.textbox.setAttribute("placeholder",e)},buildRendering:function(){this.srcNodeRef||(this.srcNodeRef=t.create("input",{type:this.type})),this.inherited(arguments),this.textbox=this.focusNode=this.domNode},postCreate:function(){this.inherited(arguments),this.connect(this.textbox,"onmouseup",function(){this._mouseIsDown=!1}),this.connect(this.textbox,"onmousedown",function(){this._mouseIsDown=!0}),this.connect(this.textbox,"onfocus",function(e){this._onFocus(this._mouseIsDown?"mouse":e),this._mouseIsDown=!1}),this.connect(this.textbox,"onblur","_onBlur")}});return n("dojo-bidi")?e("dojox.mobile.TextBox",[s,r]):s});//# sourceMappingURL=TextBox.js.map