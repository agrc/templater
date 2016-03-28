//>>built
define("dojox/mobile/common",["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/lang","dojo/_base/window","dojo/_base/kernel","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/domReady","dojo/ready","dojo/touch","dijit/registry","./sniff","./uacss"],function(e,t,i,a,o,r,n,s,d,l,h,c,u,m){var f=a.getObject("dojox.mobile",!0);if(o.doc.dojoClick=!0,m("touch")&&(m.add("clicks-prevented",!(m("android")>=4.1||10===m("ie")||!m("ie")&&m("trident")>6)),m("clicks-prevented")&&(f._sendClick=function(e,t){for(var i=e;i;i=i.parentNode)if(i.dojoClick)return;var a=o.doc.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,o.global,1,t.screenX,t.screenY,t.clientX,t.clientY),e.dispatchEvent(a)})),f.getScreenSize=function(){return{h:o.global.innerHeight||o.doc.documentElement.clientHeight,w:o.global.innerWidth||o.doc.documentElement.clientWidth}},f.updateOrient=function(){var e=f.getScreenSize();s.replace(o.doc.documentElement,e.h>e.w?"dj_portrait":"dj_landscape",e.h>e.w?"dj_landscape":"dj_portrait")},f.updateOrient(),f.tabletSize=500,f.detectScreenSize=function(e){var t,a,r=f.getScreenSize(),n=Math.min(r.w,r.h);n>=f.tabletSize&&(e||!this._sz||this._sz<f.tabletSize)?(t="phone",a="tablet"):n<f.tabletSize&&(e||!this._sz||this._sz>=f.tabletSize)&&(t="tablet",a="phone"),a&&(s.replace(o.doc.documentElement,"dj_"+a,"dj_"+t),i.publish("/dojox/mobile/screenSize/"+a,[r])),this._sz=n},f.detectScreenSize(),f.hideAddressBarWait="number"==typeof t.mblHideAddressBarWait?t.mblHideAddressBarWait:1500,f.hide_1=function(){scrollTo(0,1),f._hidingTimer=0==f._hidingTimer?200:2*f._hidingTimer,setTimeout(function(){f.isAddressBarHidden()||f._hidingTimer>f.hideAddressBarWait?(f.resizeAll(),f._hiding=!1):setTimeout(f.hide_1,f._hidingTimer)},50)},f.hideAddressBar=function(e){if(!f.disableHideAddressBar&&!f._hiding){f._hiding=!0,f._hidingTimer=m("ios")?200:0;var t=screen.availHeight;m("android")&&(t=outerHeight/devicePixelRatio,0==t&&(f._hiding=!1,setTimeout(function(){f.hideAddressBar()},200)),t<=innerHeight&&(t=outerHeight),m("android")<3&&(o.doc.documentElement.style.overflow=o.body().style.overflow="visible")),o.body().offsetHeight<t&&(o.body().style.minHeight=t+"px",f._resetMinHeight=!0),setTimeout(f.hide_1,f._hidingTimer)}},f.isAddressBarHidden=function(){return 1===pageYOffset},f.resizeAll=function(t,a){if(!f.disableResizeAll){i.publish("/dojox/mobile/resizeAll",[t,a]),i.publish("/dojox/mobile/beforeResizeAll",[t,a]),f._resetMinHeight&&(o.body().style.minHeight=f.getScreenSize().h+"px"),f.updateOrient(),f.detectScreenSize();var r=function(e){var t=e.getParent&&e.getParent();return!(t&&t.resize||!e.resize)},n=function(t){e.forEach(t.getChildren(),function(e){r(e)&&e.resize(),n(e)})};a?(a.resize&&a.resize(),n(a)):e.forEach(e.filter(u.toArray(),r),function(e){e.resize()}),i.publish("/dojox/mobile/afterResizeAll",[t,a])}},f.openWindow=function(e,t){o.global.open(e,t||"_blank")},f._detectWindowsTheme=function(){navigator.userAgent.match(/IEMobile\/10\.0/)&&d.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"},o.doc.head);var e=function(){s.add(o.doc.documentElement,"windows_theme"),r.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.")},t=m("windows-theme");if(void 0!==t)return void(t&&e());var i,a,n=function(t){return t&&-1!==t.indexOf("/windows/")?(m.add("windows-theme",!0),e(),!0):!1},l=o.doc.styleSheets;for(i=0;i<l.length;i++)if(!l[i].href){var h=l[i].cssRules||l[i].imports;if(h)for(a=0;a<h.length;a++)if(n(h[a].href))return}var c=o.doc.getElementsByTagName("link");for(i=0;i<c.length;i++)if(n(c[i].href))return},t.mblApplyPageStyles!==!1&&s.add(o.doc.documentElement,"mobile"),m("chrome")&&s.add(o.doc.documentElement,"dj_chrome"),o.global._no_dojo_dm){var p=o.global._no_dojo_dm;for(var g in p)f[g]=p[g];f.deviceTheme.setDm(f)}m.add("mblAndroidWorkaround",t.mblAndroidWorkaround!==!1&&m("android")<3,void 0,!0),m.add("mblAndroid3Workaround",t.mblAndroid3Workaround!==!1&&m("android")>=3,void 0,!0),f._detectWindowsTheme(),f.setSelectable=function(e,t){var i,a;if(e=n.byId(e),m("ie")<=9)if(i=e.getElementsByTagName("*"),a=i.length,t)for(e.removeAttribute("unselectable");a--;)i[a].removeAttribute("unselectable");else for(e.setAttribute("unselectable","on");a--;)"INPUT"!==i[a].tagName&&i[a].setAttribute("unselectable","on");else s.toggle(e,"unselectable",!t)};var y=m("pointer-events")?"touchAction":m("MSPointer")?"msTouchAction":null;return f._setTouchAction=y?function(e,t){e.style[y]=t}:function(){},l(function(){s.add(o.body(),"mblBackground")}),h(function(){f.detectScreenSize(!0),t.mblAndroidWorkaroundButtonStyle!==!1&&m("android")&&d.create("style",{innerHTML:"BUTTON,INPUT[type='button'],INPUT[type='submit'],INPUT[type='reset'],INPUT[type='file']::-webkit-file-upload-button{-webkit-appearance:none;} audio::-webkit-media-controls-play-button,video::-webkit-media-controls-play-button{-webkit-appearance:media-play-button;} video::-webkit-media-controls-fullscreen-button{-webkit-appearance:media-fullscreen-button;}"},o.doc.head,"first"),m("mblAndroidWorkaround")&&d.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"},o.doc.head,"last");var e=f.resizeAll,a=-1!=navigator.appVersion.indexOf("Mobile")&&!(m("ios")>=7);(t.mblHideAddressBar!==!1&&a||t.mblForceHideAddressBar===!0)&&(f.hideAddressBar(),t.mblAlwaysHideAddressBar===!0&&(e=f.hideAddressBar));var r=m("ios")>=6;if((m("android")||r)&&void 0!==o.global.onorientationchange){var n,s,l,h=e;r?(s=o.doc.documentElement.clientWidth,l=o.doc.documentElement.clientHeight):(e=function(e){var t=i.connect(null,"onresize",null,function(e){i.disconnect(t),h(e)})},n=f.getScreenSize()),i.connect(null,"onresize",null,function(e){if(r){var t=o.doc.documentElement.clientWidth,i=o.doc.documentElement.clientHeight;t==s&&i!=l&&h(e),s=t,l=i}else{var a=f.getScreenSize();a.w==n.w&&Math.abs(a.h-n.h)>=100&&h(e),n=a}})}i.connect(null,void 0!==o.global.onorientationchange?"onorientationchange":"onresize",null,e),o.body().style.visibility="visible"}),f});//# sourceMappingURL=common.js.map