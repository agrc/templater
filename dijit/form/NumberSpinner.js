//>>built
define("dijit/form/NumberSpinner",["dojo/_base/declare","dojo/keys","./_Spinner","./NumberTextBox"],function(t,e,i,n){return t("dijit.form.NumberSpinner",[i,n.Mixin],{baseClass:"dijitTextBox dijitSpinner dijitNumberTextBox",adjust:function(t,e){var i=this.constraints,n=isNaN(t),o=!isNaN(i.max),a=!isNaN(i.min);n&&0!=e&&(t=e>0?a?i.min:o?i.max:0:o?this.constraints.max:a?i.min:0);var s=t+e;return n||isNaN(s)?t:(o&&s>i.max&&(s=i.max),a&&s<i.min&&(s=i.min),s)},_onKeyDown:function(t){if(!(this.disabled||this.readOnly||t.keyCode!=e.HOME&&t.keyCode!=e.END||t.ctrlKey||t.altKey||t.metaKey||"undefined"==typeof this.get("value"))){var i=this.constraints[t.keyCode==e.HOME?"min":"max"];"number"==typeof i&&this._setValueAttr(i,!1),t.stopPropagation(),t.preventDefault()}}})});//# sourceMappingURL=NumberSpinner.js.map