//>>built
define("dojo/back",["./_base/config","./_base/lang","./sniff","./dom","./dom-construct","./_base/window","require"],function(t,e,i,o,n,s,r){function a(){var t=x.pop();if(t){var e=x[x.length-1];e||0!=x.length||(e=v),e&&(e.kwArgs.back?e.kwArgs.back():e.kwArgs.backButton?e.kwArgs.backButton():e.kwArgs.handle&&e.kwArgs.handle("back")),k.push(t)}}function d(){var t=k.pop();t&&(t.kwArgs.forward?t.kwArgs.forward():t.kwArgs.forwardButton?t.kwArgs.forwardButton():t.kwArgs.handle&&t.kwArgs.handle("forward"),x.push(t))}function l(t,e,i){return{url:t,kwArgs:e,urlHash:i}}function h(t){var e=t.split("?");return e.length<2?null:e[1]}function c(){var e=(t.dojoIframeHistoryUrl||r.toUrl("./resources/iframe_history.html"))+"?"+(new Date).getTime();return T=!0,C&&(i("webkit")?C.location=e:window.frames[C.name].location=e),e}function u(){if(!S){var t=x.length,e=g();if((e===b||window.location.href==_)&&1==t)return void a();if(k.length>0&&k[k.length-1].urlHash===e)return void d();t>=2&&x[t-2]&&x[t-2].urlHash===e&&a()}}var f={};e.setObject("dojo.back",f);var p,g=f.getHash=function(){var t=window.location.hash;return"#"==t.charAt(0)&&(t=t.substring(1)),i("mozilla")?t:decodeURIComponent(t)},m=f.setHash=function(t){t||(t=""),window.location.hash=encodeURIComponent(t),p=history.length},_="undefined"!=typeof window?window.location.href:"",b="undefined"!=typeof window?g():"",v=null,y=null,j=null,C=null,k=[],x=[],T=!1,S=!1;return f.goBack=a,f.goForward=d,f.init=function(){if(!o.byId("dj_history")){var e=t.dojoIframeHistoryUrl||r.toUrl("./resources/iframe_history.html");t.afterOnLoad||document.write('<iframe style="border:0;width:1px;height:1px;position:absolute;visibility:hidden;bottom:0;right:0;" name="dj_history" id="dj_history" src="'+e+'"></iframe>')}},f.setInitialState=function(t){v=l(_,t,b)},f.addToHistory=function(e){k=[];var o=null,r=null;if(C||(t.useXDomain&&t.dojoIframeHistoryUrl,C=window.frames.dj_history),j||(j=n.create("a",{style:{display:"none"}},s.body())),e.changeUrl){if(o=""+(!0!==e.changeUrl?e.changeUrl:(new Date).getTime()),0==x.length&&v.urlHash==o)return void(v=l(r,e,o));if(x.length>0&&x[x.length-1].urlHash==o)return void(x[x.length-1]=l(r,e,o));if(S=!0,setTimeout(function(){m(o),S=!1},1),j.href=o,i("ie")){r=c();var a=e.back||e.backButton||e.handle,d=function(t){""!=g()&&setTimeout(function(){m(o)},1),a.apply(this,[t])};e.back?e.back=d:e.backButton?e.backButton=d:e.handle&&(e.handle=d);var h=e.forward||e.forwardButton||e.handle,f=function(t){""!=g()&&m(o),h&&h.apply(this,[t])};e.forward?e.forward=f:e.forwardButton?e.forwardButton=f:e.handle&&(e.handle=f)}else i("ie")||y||(y=setInterval(u,200))}else r=c();x.push(l(r,e,o))},f._iframeLoaded=function(t,e){var i=h(e.href);return null==i?void(1==x.length&&a()):T?void(T=!1):void(x.length>=2&&i==h(x[x.length-2].url)?a():k.length>0&&i==h(k[k.length-1].url)&&d())},f});//# sourceMappingURL=back.js.map