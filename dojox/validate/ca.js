//>>built
define("dojox/validate/ca",["dojo/_base/lang","./_base","./regexp","./us"],function(e,t,i,a){var o=e.getObject("ca",!0,t);return e.mixin(o,{isPhoneNumber:function(e){return a.isPhoneNumber(e)},isProvince:function(e){var t=new RegExp("^"+i.ca.province()+"$","i");return t.test(e)},isSocialInsuranceNumber:function(e){var i={format:["###-###-###","### ### ###","#########"]};return t.isNumberFormat(e,i)},isPostalCode:function(e){var t=new RegExp("^"+i.ca.postalCode()+"$","i");return t.test(e)}}),o});//# sourceMappingURL=ca.js.map