//>>built
define("dojox/validate/ca",["dojo/_base/lang","./_base","./regexp","./us"],function(e,t,i,a){var r=e.getObject("ca",!0,t);return e.mixin(r,{isPhoneNumber:function(e){return a.isPhoneNumber(e)},isProvince:function(e){return new RegExp("^"+i.ca.province()+"$","i").test(e)},isSocialInsuranceNumber:function(e){var i={format:["###-###-###","### ### ###","#########"]};return t.isNumberFormat(e,i)},isPostalCode:function(e){return new RegExp("^"+i.ca.postalCode()+"$","i").test(e)}}),r});//# sourceMappingURL=ca.js.map