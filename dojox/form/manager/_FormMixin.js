//>>built
define("dojox/form/manager/_FormMixin",["dojo/_base/lang","dojo/_base/kernel","dojo/_base/event","dojo/window","./_Mixin","dojo/_base/declare"],function(e,t,a,i,r,n){var o=e.getObject("dojox.form.manager",!0),l=o.actionAdapter;return n("dojox.form.manager._FormMixin",null,{name:"",action:"",method:"",encType:"","accept-charset":"",accept:"",target:"",startup:function(){this.isForm="form"==this.domNode.tagName.toLowerCase(),this.isForm&&(this.connect(this.domNode,"onreset","_onReset"),this.connect(this.domNode,"onsubmit","_onSubmit")),this.inherited(arguments)},_onReset:function(e){var t={returnValue:!0,preventDefault:function(){this.returnValue=!1},stopPropagation:function(){},currentTarget:e.currentTarget,target:e.target};return this.onReset(t)!==!1&&t.returnValue&&this.reset(),a.stop(e),!1},onReset:function(){return!0},reset:function(){return this.inspectFormWidgets(l(function(e,t){t.reset&&t.reset()})),this.isForm&&this.domNode.reset(),this},_onSubmit:function(e){this.onSubmit(e)===!1&&a.stop(e)},onSubmit:function(){return this.isValid()},submit:function(){this.isForm&&this.onSubmit()!==!1&&this.domNode.submit()},isValid:function(){for(var e in this.formWidgets){var t=!1;if(l(function(e,a){a.get("disabled")||!a.isValid||a.isValid()||(t=!0)}).call(this,null,this.formWidgets[e].widget),t)return!1}return!0},validate:function(){var e,t=!0,a=this.formWidgets,r=!1;for(e in a)l(function(e,a){a._hasBeenBlurred=!0;var n=a.disabled||!a.validate||a.validate();n||r||(i.scrollIntoView(a.containerNode||a.domNode),a.focus(),r=!0),t=t&&n}).call(this,null,a[e].widget);return t}})});//# sourceMappingURL=_FormMixin.js.map