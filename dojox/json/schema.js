//>>built
define("dojox/json/schema",["dojo/_base/kernel","dojox","dojo/_base/array"],function(e,t){return e.getObject("json.schema",!0,t),t.json.schema.validate=function(e,t){return this._validate(e,t,!1)},t.json.schema.checkPropertyChange=function(e,t,i){return this._validate(e,t,i||"property")},t.json.schema.mustBeValid=function(t){if(!t.valid)throw new TypeError(e.map(t.errors,function(e){return"for property "+e.property+": "+e.message}).join(", "))},t.json.schema._validate=function(e,t,i){function r(e,t,o,s){function l(e){n.push({property:o,message:e})}function d(e,t){if(e){if(!("string"!=typeof e||"any"==e||("null"==e?null===t:typeof t==e)||t instanceof Array&&"array"==e||"integer"==e&&t%1==0))return[{property:o,message:typeof t+" value found, but a "+e+" is required"}];if(e instanceof Array){for(var i=[],a=0;a<e.length&&(i=d(e[a],t)).length;a++);if(i.length)return i}else if("object"==typeof e){var s=n;n=[],r(t,e,o);var l=n;return n=s,l}}return[]}var u;if(o+=o?"number"==typeof s?"["+s+"]":void 0===s?"":"."+s:s,("object"!=typeof t||t instanceof Array)&&(o||"function"!=typeof t))return"function"==typeof t?Object(e)instanceof t||l("is not an instance of the class/constructor "+t.name):t&&l("Invalid schema/property definition "+t),null;if(i&&t.readonly&&l("is a readonly field, it can not be changed"),t.extends&&r(e,t.extends,o,s),void 0===e)t.optional||l("is missing and it is not optional");else if(n=n.concat(d(t.type,e)),t.disallow&&!d(t.disallow,e).length&&l(" disallowed value was matched"),null!==e){if(e instanceof Array){if(t.items)if(t.items instanceof Array)for(s=0,u=e.length;s<u;s++)n.concat(r(e[s],t.items[s],o,s));else for(s=0,u=e.length;s<u;s++)n.concat(r(e[s],t.items,o,s));t.minItems&&e.length<t.minItems&&l("There must be a minimum of "+t.minItems+" in the array"),t.maxItems&&e.length>t.maxItems&&l("There must be a maximum of "+t.maxItems+" in the array")}else t.properties&&n.concat(a(e,t.properties,o,t.additionalProperties));if(t.pattern&&"string"==typeof e&&!e.match(t.pattern)&&l("does not match the regex pattern "+t.pattern),t.maxLength&&"string"==typeof e&&e.length>t.maxLength&&l("may only be "+t.maxLength+" characters long"),t.minLength&&"string"==typeof e&&e.length<t.minLength&&l("must be at least "+t.minLength+" characters long"),void 0!==typeof t.minimum&&typeof e==typeof t.minimum&&t.minimum>e&&l("must have a minimum value of "+t.minimum),void 0!==typeof t.maximum&&typeof e==typeof t.maximum&&t.maximum<e&&l("must have a maximum value of "+t.maximum),t.enum){var c=t.enum;u=c.length;for(var h,f=0;f<u;f++)if(c[f]===e){h=1;break}h||l("does not have a value in the enumeration "+c.join(", "))}"number"==typeof t.maxDecimal&&e.toString().match(new RegExp("\\.[0-9]{"+(t.maxDecimal+1)+",}"))&&l("may only have "+t.maxDecimal+" digits of decimal places")}return null}function a(e,t,a,o){if("object"==typeof t){("object"!=typeof e||e instanceof Array)&&n.push({property:a,message:"an object is required"});for(var s in t)if(t.hasOwnProperty(s)&&("_"!=s.charAt(0)||"_"!=s.charAt(1))){var l=e[s],d=t[s];r(l,d,a,s)}}for(s in e){!e.hasOwnProperty(s)||"_"==s.charAt(0)&&"_"==s.charAt(1)||!t||t[s]||!1!==o||n.push({property:a,message:typeof l+"The property "+s+" is not defined in the schema and the schema does not allow additional properties"});var u=t&&t[s]&&t[s].requires;!u||u in e||n.push({property:a,message:"the presence of the property "+s+" requires that "+u+" also be present"}),l=e[s],!t||"object"!=typeof t||s in t||r(l,o,a,s),!i&&l&&l.$schema&&(n=n.concat(r(l,l.$schema,a,s)))}return n}var n=[];return t&&r(e,t,"",i||""),!i&&e&&e.$schema&&r(e,e.$schema,"",""),{valid:!n.length,errors:n}},t.json.schema});//# sourceMappingURL=schema.js.map