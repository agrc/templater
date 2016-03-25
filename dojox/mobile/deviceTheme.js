//>>built
("undefined"==typeof define?function(e,t){t()}:define)(["dojo/_base/config","dojo/_base/lang","dojo/_base/window","require"],function(config,lang,win,require){var dm=lang&&lang.getObject("dojox.mobile",!0)||{},DeviceTheme=function(){win||(win=window,win.doc=document,win._no_dojo_dm=dm),config=config||win.mblConfig||{};for(var scripts=win.doc.getElementsByTagName("script"),i=0;i<scripts.length;i++){var n=scripts[i],src=n.getAttribute("src")||"";if(src.match(/\/deviceTheme\.js/i)){config.baseUrl=src.replace("deviceTheme.js","../../dojo/");var conf=n.getAttribute("data-dojo-config")||n.getAttribute("djConfig");if(conf){var obj=eval("({ "+conf+" })");for(var key in obj)config[key]=obj[key]}break}if(src.match(/\/dojo\.js/i)){config.baseUrl=src.replace("dojo.js","");break}}this.loadCssFile=function(e){var t=win.doc.createElement("link");t.href=e,t.type="text/css",t.rel="stylesheet";var i=win.doc.getElementsByTagName("head")[0];i.insertBefore(t,i.firstChild),dm.loadedCssFiles.push(t)},this.toUrl=function(e){return require?require.toUrl(e):config.baseUrl+"../"+e},this.setDm=function(e){dm=e},this.themeMap=config.themeMap||[["Holodark","holodark",[]],["Android 3","holodark",[]],["Android 4","holodark",[]],["Android 5","holodark",[]],["Android 6","holodark",[]],["Android","android",[]],["BlackBerry","blackberry",[]],["BB10","blackberry",[]],["ios7","ios7",[]],["iPhone;.*OS 7_","ios7",[]],["iPhone;.*OS 8_","ios7",[]],["iPhone;.*OS 9_","ios7",[]],["iPad;.*OS 7_","ios7",[]],["iPad;.*OS 8_","ios7",[]],["iPad;.*OS 9_","ios7",[]],["iPhone","iphone",[]],["iPad","iphone",[this.toUrl("dojox/mobile/themes/iphone/ipad.css")]],["WindowsPhone","windows",[]],["Windows Phone","windows",[]],["Trident","iphone",[]],["Custom","custom",[]],[".*","iphone",[]]],dm.loadedCssFiles=[],this.loadDeviceTheme=function(e){var t,i,a=config.mblThemeFiles||dm.themeFiles||["@theme"],o=this.themeMap,n=e||config.mblUserAgent||(location.search.match(/theme=(\w+)/)?RegExp.$1:navigator.userAgent);for(t=0;t<o.length;t++)if(n.match(new RegExp(o[t][0]))){var r=o[t][1];if("windows"==r&&config.mblDisableWindowsTheme)continue;var s=win.doc.documentElement.className;s=s.replace(new RegExp(" *"+dm.currentTheme+"_theme"),"")+" "+r+"_theme",win.doc.documentElement.className=s,dm.currentTheme=r;var d=[].concat(o[t][2]);for(i=0;i<a.length;i++){var l,h=a[i]instanceof Array||"array"==typeof a[i];if(h||-1===a[i].indexOf("/")){var u=h?(a[i][0]||"").replace(/\./g,"/"):"dojox/mobile",c=(h?a[i][1]:a[i]).replace(/\./g,"/"),m="themes/"+r+"/"+("@theme"===c?r:c)+".css";l=u+"/"+m}else l=a[i];d.unshift(this.toUrl(l))}for(var f=0;f<dm.loadedCssFiles.length;f++){var g=dm.loadedCssFiles[f];g.parentNode.removeChild(g)}for(dm.loadedCssFiles=[],i=0;i<d.length;i++){var p=d[i].toString();if(1==config["dojo-bidi"]&&-1==p.indexOf("_rtl")){var y="android.css blackberry.css custom.css iphone.css holodark.css base.css Carousel.css ComboBox.css IconContainer.css IconMenu.css ListItem.css RoundRectCategory.css SpinWheel.css Switch.css TabBar.css ToggleButton.css ToolBarButton.css ProgressIndicator.css Accordion.css GridLayout.css FormLayout.css",v=p.substr(p.lastIndexOf("/")+1);-1!=y.indexOf(v)&&this.loadCssFile(p.replace(".css","_rtl.css"))}this.loadCssFile(d[i].toString())}e&&dm.loadCompatCssFiles&&dm.loadCompatCssFiles();break}}},deviceTheme=new DeviceTheme;return deviceTheme.loadDeviceTheme(),window.deviceTheme=dm.deviceTheme=deviceTheme,deviceTheme});//# sourceMappingURL=deviceTheme.js.map