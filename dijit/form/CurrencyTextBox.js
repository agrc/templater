//>>built
define("dijit/form/CurrencyTextBox",["dojo/currency","dojo/_base/declare","dojo/_base/lang","./NumberTextBox"],function(e,t,n,i){var o=t("dijit.form.CurrencyTextBox",i,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",_formatter:e.format,_parser:e.parse,_regExpGenerator:e.regexp,parse:function(e,t){var o=this.inherited(arguments);return isNaN(o)&&/\d+/.test(e)&&(o=n.hitch(n.delegate(this,{_parser:i.prototype._parser}),"inherited")(arguments)),o},_setConstraintsAttr:function(t){!t.currency&&this.currency&&(t.currency=this.currency),this.inherited(arguments,[e._mixInDefaults(n.mixin(t,{exponent:!1}))])}});return o});//# sourceMappingURL=CurrencyTextBox.js.map