//>>built
define("dojo/sniff",["./has"],function(e){var t=navigator,i=t.userAgent,n=t.appVersion,o=parseFloat(n);if(e.add("air",i.indexOf("AdobeAIR")>=0),e.add("wp",parseFloat(i.split("Windows Phone")[1])||void 0),e.add("msapp",parseFloat(i.split("MSAppHost/")[1])||void 0),e.add("khtml",n.indexOf("Konqueror")>=0?o:void 0),e.add("edge",parseFloat(i.split("Edge/")[1])||void 0),e.add("opr",parseFloat(i.split("OPR/")[1])||void 0),e.add("webkit",!e("wp")&&!e("edge")&&parseFloat(i.split("WebKit/")[1])||void 0),e.add("chrome",!e("edge")&&!e("opr")&&parseFloat(i.split("Chrome/")[1])||void 0),e.add("android",!e("wp")&&parseFloat(i.split("Android ")[1])||void 0),e.add("safari",!(n.indexOf("Safari")>=0)||e("wp")||e("chrome")||e("android")||e("edge")||e("opr")?void 0:parseFloat(n.split("Version/")[1])),e.add("mac",n.indexOf("Macintosh")>=0),e.add("quirks","BackCompat"==document.compatMode),!e("wp")&&i.match(/(iPhone|iPod|iPad)/)){var s=RegExp.$1.replace(/P/,"p"),r=i.match(/OS ([\d_]+)/)?RegExp.$1:"1",a=parseFloat(r.replace(/_/,".").replace(/_/g,""));e.add(s,a),e.add("ios",a)}if(e.add("bb",(i.indexOf("BlackBerry")>=0||i.indexOf("BB10")>=0)&&parseFloat(i.split("Version/")[1])||void 0),e.add("trident",parseFloat(n.split("Trident/")[1])||void 0),e.add("svg","undefined"!=typeof SVGAngle),!e("webkit")){if(i.indexOf("Opera")>=0&&e.add("opera",o>=9.8?parseFloat(i.split("Version/")[1])||o:o),!(i.indexOf("Gecko")>=0)||e("wp")||e("khtml")||e("trident")||e("edge")||e.add("mozilla",o),e("mozilla")&&e.add("ff",parseFloat(i.split("Firefox/")[1]||i.split("Minefield/")[1])||void 0),document.all&&!e("opera")){var d=parseFloat(n.split("MSIE ")[1])||void 0,h=document.documentMode;h&&5!=h&&Math.floor(d)!=h&&(d=h),e.add("ie",d)}e.add("wii","undefined"!=typeof opera&&opera.wiiremote)}return e});//# sourceMappingURL=sniff.js.map