//>>built
define("dojox/dtl/filter/logic",["dojo/_base/lang","../_base"],function(e,t){var i=e.getObject("filter.logic",!0,t);return e.mixin(i,{default_:function(e,t){return e||t||""},default_if_none:function(e,t){return null===e?t||"":e||""},divisibleby:function(e,t){return parseInt(e,10)%parseInt(t,10)===0},_yesno:/\s*,\s*/g,yesno:function(e,t){t||(t="yes,no,maybe");var i=t.split(dojox.dtl.filter.logic._yesno);return i.length<2?e:e?i[0]:!e&&null!==e||i.length<3?i[1]:i[2]}}),i});//# sourceMappingURL=logic.js.map