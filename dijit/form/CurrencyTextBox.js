//>>built
define("dijit/form/CurrencyTextBox",["dojo/currency","dojo/_base/declare","dojo/_base/lang","./NumberTextBox"],function(e,t,o,n){var i=t("dijit.form.CurrencyTextBox",n,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",_formatter:e.format,_parser:e.parse,_regExpGenerator:e.regexp,parse:function(e,t){var i=this.inherited(arguments);return isNaN(i)&&/\d+/.test(e)&&(i=o.hitch(o.delegate(this,{_parser:n.prototype._parser}),"inherited")(arguments)),i},_setConstraintsAttr:function(t){!t.currency&&this.currency&&(t.currency=this.currency),this.inherited(arguments,[e._mixInDefaults(o.mixin(t,{exponent:!1}))])}});return i});//# sourceMappingURL=CurrencyTextBox.js.map