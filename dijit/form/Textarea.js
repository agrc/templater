//>>built
define("dijit/form/Textarea",["dojo/_base/declare","dojo/dom-style","./_ExpandingTextAreaMixin","./SimpleTextarea"],function(t,e,i,n){return t("dijit.form.Textarea",[n,i],{baseClass:"dijitTextBox dijitTextArea dijitExpandingTextArea",cols:"",buildRendering:function(){this.inherited(arguments),e.set(this.textbox,{overflowY:"hidden",overflowX:"auto",boxSizing:"border-box",MsBoxSizing:"border-box",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box"})}})});//# sourceMappingURL=Textarea.js.map