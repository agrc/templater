//>>built
define("dojo/uacss",["./dom-geometry","./_base/lang","./domReady","./sniff","./_base/window"],function(e,t,i,o,n){var r=n.doc.documentElement,s=o("ie"),a=o("trident"),d=o("opera"),l=Math.floor,c=o("ff"),u=e.boxModel.replace(/-/,""),h={dj_quirks:o("quirks"),dj_opera:d,dj_khtml:o("khtml"),dj_webkit:o("webkit"),dj_safari:o("safari"),dj_chrome:o("chrome"),dj_edge:o("edge"),dj_gecko:o("mozilla"),dj_ios:o("ios"),dj_android:o("android")};s&&(h.dj_ie=!0,h["dj_ie"+l(s)]=!0,h.dj_iequirks=o("quirks")),a&&(h.dj_trident=!0,h["dj_trident"+l(a)]=!0),c&&(h["dj_ff"+l(c)]=!0),h["dj_"+u]=!0;var f="";for(var p in h)h[p]&&(f+=p+" ");return r.className=t.trim(r.className+" "+f),i(function(){if(!e.isBodyLtr()){var i="dj_rtl dijitRtl "+f.replace(/ /g,"-rtl ");r.className=t.trim(r.className+" "+i+"dj_rtl dijitRtl "+f.replace(/ /g,"-rtl "))}}),o});//# sourceMappingURL=uacss.js.map