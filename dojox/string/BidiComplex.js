//>>built
define("dojox/string/BidiComplex",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/sniff","dojo/keys"],function(e,t,i,o,a,r){e.experimental("dojox.string.BidiComplex");var n=t.getObject("string.BidiComplex",!0,dojox),s=[];n.attachInput=function(e,t){e.alt=t,o.connect(e,"onkeydown",this,"_ceKeyDown"),o.connect(e,"onkeyup",this,"_ceKeyUp"),o.connect(e,"oncut",this,"_ceCutText"),o.connect(e,"oncopy",this,"_ceCopyText"),e.value=n.createDisplayString(e.value,e.alt)},n.createDisplayString=function(e,t){e=n.stripSpecialCharacters(e);var o=n._parse(e,t),a="‪"+e,r=1;return i.forEach(o,function(e){if(null!=e){var t=a.substring(0,e+r),i=a.substring(e+r,a.length);a=t+"‎"+i,r++}}),a},n.stripSpecialCharacters=function(e){return e.replace(/[\u200E\u200F\u202A-\u202E]/g,"")},n._ceKeyDown=function(e){var t=a("ie")?e.srcElement:e.target;s=t.value},n._ceKeyUp=function(e){var t="‎",i=a("ie")?e.srcElement:e.target,o=i.value,l=e.keyCode;if(l!=r.HOME&&l!=r.END&&l!=r.SHIFT){var d,h,c=n._getCaretPos(e,i);if(c&&(d=c[0],h=c[1]),a("ie")){var u=d,m=h;if(l==r.LEFT_ARROW)return void(o.charAt(h-1)==t&&d==h&&n._setSelectedRange(i,d-1,h-1));if(l==r.RIGHT_ARROW)return o.charAt(h-1)==t&&(m=h+1,d==h&&(u=d+1)),void n._setSelectedRange(i,u,m)}else{if(l==r.LEFT_ARROW)return void(o.charAt(h-1)==t&&n._setSelectedRange(i,d-1,h-1));if(l==r.RIGHT_ARROW)return void(o.charAt(h-1)==t&&n._setSelectedRange(i,d+1,h+1))}var f=n.createDisplayString(o,i.alt);o!=f&&(window.status=o+" c="+h,i.value=f,l==r.DELETE&&f.charAt(h)==t&&(i.value=f.substring(0,h)+f.substring(h+2,f.length)),l==r.DELETE?n._setSelectedRange(i,d,h):l==r.BACKSPACE?s.length>=h&&s.charAt(h-1)==t?n._setSelectedRange(i,d-1,h-1):n._setSelectedRange(i,d,h):i.value.charAt(h)!=t&&n._setSelectedRange(i,d+1,h+1))}},n._processCopy=function(e,t,i){if(null==t)if(a("ie")){var o=document.selection.createRange();t=o.text}else t=e.value.substring(e.selectionStart,e.selectionEnd);var r=n.stripSpecialCharacters(t);return a("ie")&&window.clipboardData.setData("Text",r),!0},n._ceCopyText=function(e){return a("ie")&&(e.returnValue=!1),n._processCopy(e,null,!1)},n._ceCutText=function(e){var t=n._processCopy(e,null,!1);if(!t)return!1;if(a("ie"))document.selection.clear();else{var i=e.selectionStart;e.value=e.value.substring(0,i)+e.value.substring(e.selectionEnd),e.setSelectionRange(i,i)}return!0},n._getCaretPos=function(e,t){if(a("ie")){var i=0,o=document.selection.createRange().duplicate(),r=o.duplicate(),n=o.text.length;for("textarea"==t.type?r.moveToElementText(t):r.expand("textedit");o.compareEndPoints("StartToStart",r)>0;)o.moveStart("character",-1),++i;return[i,i+n]}return[e.target.selectionStart,e.target.selectionEnd]},n._setSelectedRange=function(e,t,i){if(a("ie")){var o=e.createTextRange();o&&("textarea"==e.type?o.moveToElementText(e):o.expand("textedit"),o.collapse(),o.moveEnd("character",i),o.moveStart("character",t),o.select())}else e.selectionStart=t,e.selectionEnd=i};var l=function(e){return e>="0"&&"9">=e||e>"ÿ"},d=function(e){return e>="A"&&"Z">=e||e>="a"&&"z">=e},h=function(e,t,i){for(;t>0;){if(t==i)return!1;if(t--,l(e.charAt(t)))return!0;if(d(e.charAt(t)))return!1}return!1};return n._parse=function(e,t){var o=-1,a=[],r={FILE_PATH:"/\\:.",URL:"/:.?=&#",XPATH:"/\\:.<>=[]",EMAIL:"<>@.,;"}[t];switch(t){case"FILE_PATH":case"URL":case"XPATH":i.forEach(e,function(t,i){r.indexOf(t)>=0&&h(e,i,o)&&(o=i,a.push(i))});break;case"EMAIL":;i.forEach(e,function(t,i){if('"'==t){h(e,i,o)&&(o=i,a.push(i)),i++;var n=e.indexOf('"',i);n>=i&&(i=n),h(e,i,o)&&(o=i,a.push(i))}r.indexOf(t)>=0&&h(e,i,o)&&(o=i,a.push(i))})}return a},n});//# sourceMappingURL=BidiComplex.js.map