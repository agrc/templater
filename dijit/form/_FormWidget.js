//>>built
define("dijit/form/_FormWidget",["dojo/_base/declare","dojo/sniff","dojo/_base/kernel","dojo/ready","../_Widget","../_CssStateMixin","../_TemplatedMixin","./_FormWidgetMixin"],function(t,e,i,o,n,s,r,a){return e("dijit-legacy-requires")&&o(0,function(){var t=["dijit/form/_FormValueWidget"];require(t)}),t("dijit.form._FormWidget",[n,r,s,a],{setDisabled:function(t){i.deprecated("setDisabled("+t+") is deprecated. Use set('disabled',"+t+") instead.","","2.0"),this.set("disabled",t)},setValue:function(t){i.deprecated("dijit.form._FormWidget:setValue("+t+") is deprecated.  Use set('value',"+t+") instead.","","2.0"),this.set("value",t)},getValue:function(){return i.deprecated(this.declaredClass+"::getValue() is deprecated. Use get('value') instead.","","2.0"),this.get("value")},postMixInProperties:function(){this.nameAttrSetting=this.name&&!e("msapp")?'name="'+this.name.replace(/"/g,"&quot;")+'"':"",this.inherited(arguments)}})});//# sourceMappingURL=_FormWidget.js.map