//>>built
define("lodash/random",["./_baseRandom","./_isIterateeCall","./toNumber"],function(e,t,i){function a(a,l,d){if(d&&"boolean"!=typeof d&&t(a,l,d)&&(l=d=n),d===n&&("boolean"==typeof l?(d=l,l=n):"boolean"==typeof a&&(d=a,a=n)),a===n&&l===n?(a=0,l=1):(a=i(a)||0,l===n?(l=a,a=0):l=i(l)||0),a>l){var h=a;a=l,l=h}if(d||a%1||l%1){var u=s();return o(a+u*(l-a+r("1e-"+((u+"").length-1))),l)}return e(a,l)}var n,r=parseFloat,o=Math.min,s=Math.random;return a});//# sourceMappingURL=random.js.map