//>>built
define("lodash/random",["./_baseRandom","./_isIterateeCall","./toNumber"],function(e,t,i){function a(a,l,d){if(d&&"boolean"!=typeof d&&t(a,l,d)&&(l=d=o),d===o&&("boolean"==typeof l?(d=l,l=o):"boolean"==typeof a&&(d=a,a=o)),a===o&&l===o?(a=0,l=1):(a=i(a)||0,l===o?(l=a,a=0):l=i(l)||0),a>l){var c=a;a=l,l=c}if(d||a%1||l%1){var u=s();return r(a+u*(l-a+n("1e-"+((u+"").length-1))),l)}return e(a,l)}var o,n=parseFloat,r=Math.min,s=Math.random;return a});//# sourceMappingURL=random.js.map