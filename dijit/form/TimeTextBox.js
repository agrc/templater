//>>built
define("dijit/form/TimeTextBox",["dojo/_base/declare","dojo/keys","dojo/query","dojo/_base/lang","../_TimePicker","./_DateTimeTextBox"],function(t,e,i,o,n,a){return t("dijit.form.TimeTextBox",a,{baseClass:"dijitTextBox dijitComboBox dijitTimeTextBox",popupClass:n,_selector:"time",value:new Date(""),maxHeight:-1,openDropDown:function(t){this.inherited(arguments);var e=i(".dijitTimePickerItemSelected",this.dropDown.domNode),n=this.dropDown.domNode.parentNode;e[0]?n.scrollTop=e[0].offsetTop-(n.clientHeight-e[0].clientHeight)/2:n.scrollTop=(n.scrollHeight-n.clientHeight)/2,this.dropDown.on("input",o.hitch(this,function(){this.set("value",this.dropDown.get("value"),!1)}))},_onInput:function(){this.inherited(arguments);var t=this.get("displayedValue");this.filterString=t&&!this.parse(t,this.constraints)?t.toLowerCase():"",this._opened&&this.closeDropDown(),this.openDropDown()}})});//# sourceMappingURL=TimeTextBox.js.map