//>>built
define("lodash/_insertWrapDetails",[],function(){function e(e,i){var a=i.length;if(!a)return e;var o=a-1;return i[o]=(a>1?"& ":"")+i[o],i=i.join(a>2?", ":" "),e.replace(t,"{\n/* [wrapped with "+i+"] */\n")}var t=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;return e});//# sourceMappingURL=_insertWrapDetails.js.map