//>>built
define("dijit/RadioMenuItem",["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/query!css2","./CheckedMenuItem","./registry"],function(e,t,i,o,n,r){return t("dijit.RadioButtonMenuItem",n,{baseClass:"dijitMenuItem dijitRadioMenuItem",role:"menuitemradio",checkedChar:"*",group:"",_setGroupAttr:"domNode",_setCheckedAttr:function(t){this.inherited(arguments),this._created&&t&&this.group&&e.forEach(this._getRelatedWidgets(),function(e){e!=this&&e.checked&&e.set("checked",!1)},this)},_onClick:function(e){this.disabled||this.checked||(this.set("checked",!0),this.onChange(!0)),this.onClick(e)},_getRelatedWidgets:function(){var e=[];return o("[group="+this.group+"][role="+this.role+"]").forEach(function(t){var i=r.getEnclosingWidget(t);i&&e.push(i)}),e}})});//# sourceMappingURL=RadioMenuItem.js.map