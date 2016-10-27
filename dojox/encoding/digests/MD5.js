//>>built
define("dojox/encoding/digests/MD5",["./_base"],function(e){function t(e,t){return e<<t|e>>>32-t}function a(a,i,r,o,n,l){return e.addWords(t(e.addWords(e.addWords(i,a),e.addWords(o,l)),n),r)}function i(e,t,i,r,o,n,l){return a(t&i|~t&r,e,t,o,n,l)}function r(e,t,i,r,o,n,l){return a(t&r|i&~r,e,t,o,n,l)}function o(e,t,i,r,o,n,l){return a(t^i^r,e,t,o,n,l)}function n(e,t,i,r,o,n,l){return a(i^(t|~r),e,t,o,n,l)}function l(t,a){t[a>>5]|=128<<a%32,t[(a+64>>>9<<4)+14]=a;for(var l=1732584193,s=-271733879,d=-1732584194,u=271733878,m=0;m<t.length;m+=16){var h=l,c=s,f=d,g=u;l=i(l,s,d,u,t[m+0],7,-680876936),u=i(u,l,s,d,t[m+1],12,-389564586),d=i(d,u,l,s,t[m+2],17,606105819),s=i(s,d,u,l,t[m+3],22,-1044525330),l=i(l,s,d,u,t[m+4],7,-176418897),u=i(u,l,s,d,t[m+5],12,1200080426),d=i(d,u,l,s,t[m+6],17,-1473231341),s=i(s,d,u,l,t[m+7],22,-45705983),l=i(l,s,d,u,t[m+8],7,1770035416),u=i(u,l,s,d,t[m+9],12,-1958414417),d=i(d,u,l,s,t[m+10],17,-42063),s=i(s,d,u,l,t[m+11],22,-1990404162),l=i(l,s,d,u,t[m+12],7,1804603682),u=i(u,l,s,d,t[m+13],12,-40341101),d=i(d,u,l,s,t[m+14],17,-1502002290),s=i(s,d,u,l,t[m+15],22,1236535329),l=r(l,s,d,u,t[m+1],5,-165796510),u=r(u,l,s,d,t[m+6],9,-1069501632),d=r(d,u,l,s,t[m+11],14,643717713),s=r(s,d,u,l,t[m+0],20,-373897302),l=r(l,s,d,u,t[m+5],5,-701558691),u=r(u,l,s,d,t[m+10],9,38016083),d=r(d,u,l,s,t[m+15],14,-660478335),s=r(s,d,u,l,t[m+4],20,-405537848),l=r(l,s,d,u,t[m+9],5,568446438),u=r(u,l,s,d,t[m+14],9,-1019803690),d=r(d,u,l,s,t[m+3],14,-187363961),s=r(s,d,u,l,t[m+8],20,1163531501),l=r(l,s,d,u,t[m+13],5,-1444681467),u=r(u,l,s,d,t[m+2],9,-51403784),d=r(d,u,l,s,t[m+7],14,1735328473),s=r(s,d,u,l,t[m+12],20,-1926607734),l=o(l,s,d,u,t[m+5],4,-378558),u=o(u,l,s,d,t[m+8],11,-2022574463),d=o(d,u,l,s,t[m+11],16,1839030562),s=o(s,d,u,l,t[m+14],23,-35309556),l=o(l,s,d,u,t[m+1],4,-1530992060),u=o(u,l,s,d,t[m+4],11,1272893353),d=o(d,u,l,s,t[m+7],16,-155497632),s=o(s,d,u,l,t[m+10],23,-1094730640),l=o(l,s,d,u,t[m+13],4,681279174),u=o(u,l,s,d,t[m+0],11,-358537222),d=o(d,u,l,s,t[m+3],16,-722521979),s=o(s,d,u,l,t[m+6],23,76029189),l=o(l,s,d,u,t[m+9],4,-640364487),u=o(u,l,s,d,t[m+12],11,-421815835),d=o(d,u,l,s,t[m+15],16,530742520),s=o(s,d,u,l,t[m+2],23,-995338651),l=n(l,s,d,u,t[m+0],6,-198630844),u=n(u,l,s,d,t[m+7],10,1126891415),d=n(d,u,l,s,t[m+14],15,-1416354905),s=n(s,d,u,l,t[m+5],21,-57434055),l=n(l,s,d,u,t[m+12],6,1700485571),u=n(u,l,s,d,t[m+3],10,-1894986606),d=n(d,u,l,s,t[m+10],15,-1051523),s=n(s,d,u,l,t[m+1],21,-2054922799),l=n(l,s,d,u,t[m+8],6,1873313359),u=n(u,l,s,d,t[m+15],10,-30611744),d=n(d,u,l,s,t[m+6],15,-1560198380),s=n(s,d,u,l,t[m+13],21,1309151649),l=n(l,s,d,u,t[m+4],6,-145523070),u=n(u,l,s,d,t[m+11],10,-1120210379),d=n(d,u,l,s,t[m+2],15,718787259),s=n(s,d,u,l,t[m+9],21,-343485551),l=e.addWords(l,h),s=e.addWords(s,c),d=e.addWords(d,f),u=e.addWords(u,g)}return[l,s,d,u]}function s(t,a){var i=e.stringToWord(a);i.length>16&&(i=l(i,a.length*d));for(var r=[],o=[],n=0;16>n;n++)r[n]=909522486^i[n],o[n]=1549556828^i[n];var s=l(r.concat(e.stringToWord(t)),512+t.length*d);return l(o.concat(s),640)}var d=8;return e.MD5=function(t,a){var i=a||e.outputTypes.Base64,r=l(e.stringToWord(t),t.length*d);switch(i){case e.outputTypes.Raw:return r;case e.outputTypes.Hex:return e.wordToHex(r);case e.outputTypes.String:return e.wordToString(r);default:return e.wordToBase64(r)}},e.MD5._hmac=function(t,a,i){var r=i||e.outputTypes.Base64,o=s(t,a);switch(r){case e.outputTypes.Raw:return o;case e.outputTypes.Hex:return e.wordToHex(o);case e.outputTypes.String:return e.wordToString(o);default:return e.wordToBase64(o)}},e.MD5});//# sourceMappingURL=MD5.js.map