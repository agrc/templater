//>>built
define("dojo/_base/window",["./kernel","./lang","../sniff"],function(t,e,i){var n={global:t.global,doc:t.global.document||null,body:function(e){return e=e||t.doc,e.body||e.getElementsByTagName("body")[0]},setContext:function(e,i){t.global=n.global=e,t.doc=n.doc=i},withGlobal:function(e,i,o,s){var a=t.global;try{return t.global=n.global=e,n.withDoc.call(null,e.document,i,o,s)}finally{t.global=n.global=a}},withDoc:function(e,o,s,a){var r,d,l,u=n.doc,h=i("quirks"),c=i("ie");try{return t.doc=n.doc=e,t.isQuirks=i.add("quirks","BackCompat"==t.doc.compatMode,!0,!0),i("ie")&&(l=e.parentWindow)&&l.navigator&&(r=parseFloat(l.navigator.appVersion.split("MSIE ")[1])||void 0,d=e.documentMode,d&&5!=d&&Math.floor(r)!=d&&(r=d),t.isIE=i.add("ie",r,!0,!0)),s&&"string"==typeof o&&(o=s[o]),o.apply(s,a||[])}finally{t.doc=n.doc=u,t.isQuirks=i.add("quirks",h,!0,!0),t.isIE=i.add("ie",c,!0,!0)}}};return e.mixin(t,n),n});//# sourceMappingURL=window.js.map