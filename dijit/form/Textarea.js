//>>built
define("dijit/form/Textarea",["dojo/_base/declare","dojo/dom-style","./_ExpandingTextAreaMixin","./SimpleTextarea"],function(e,t,i,o){return e("dijit.form.Textarea",[o,i],{baseClass:"dijitTextBox dijitTextArea dijitExpandingTextArea",cols:"",buildRendering:function(){this.inherited(arguments),t.set(this.textbox,{overflowY:"hidden",overflowX:"auto",boxSizing:"border-box",MsBoxSizing:"border-box",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box"})}})});//# sourceMappingURL=Textarea.js.map