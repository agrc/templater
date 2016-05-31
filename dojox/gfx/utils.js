//>>built
define("dojox/gfx/utils",["dojo/_base/kernel","dojo/_base/lang","./_base","dojo/_base/html","dojo/_base/array","dojo/_base/window","dojo/_base/json","dojo/_base/Deferred","dojo/_base/sniff","require","dojo/_base/config"],function(e,t,i,a,n,o,r,s,l,d,u){var c=i.utils={};return t.mixin(c,{forEach:function(t,a,o){o=o||e.global,a.call(o,t),(t instanceof i.Surface||t instanceof i.Group)&&n.forEach(t.children,function(e){c.forEach(e,a,o)})},serialize:function(e){var t,a={},o=e instanceof i.Surface;if(o||e instanceof i.Group){if(a.children=n.map(e.children,c.serialize),o)return a.children}else a.shape=e.getShape();return e.getTransform&&(t=e.getTransform(),t&&(a.transform=t)),e.getStroke&&(t=e.getStroke(),t&&(a.stroke=t)),e.getFill&&(t=e.getFill(),t&&(a.fill=t)),e.getFont&&(t=e.getFont(),t&&(a.font=t)),a},toJson:function(e,t){return r.toJson(c.serialize(e),t)},deserialize:function(e,i){if(i instanceof Array)return n.map(i,t.hitch(null,c.deserialize,e));var a="shape"in i?e.createShape(i.shape):e.createGroup();return"transform"in i&&a.setTransform(i.transform),"stroke"in i&&a.setStroke(i.stroke),"fill"in i&&a.setFill(i.fill),"font"in i&&a.setFont(i.font),"children"in i&&n.forEach(i.children,t.hitch(null,c.deserialize,a)),a},fromJson:function(e,t){return c.deserialize(e,r.fromJson(t))},toSvg:function(e){var t=new s;if("svg"===i.renderer)try{var n=c._cleanSvg(c._innerXML(e.rawNode));t.callback(n)}catch(r){t.errback(r)}else{c._initSvgSerializerDeferred||c._initSvgSerializer();var l=c.toJson(e),d=function(){try{var i=e.getDimensions(),n=i.width,r=i.height,s=c._gfxSvgProxy.document.createElement("div");c._gfxSvgProxy.document.body.appendChild(s),o.withDoc(c._gfxSvgProxy.document,function(){a.style(s,"width",n),a.style(s,"height",r)},this);var d=c._gfxSvgProxy[dojox._scopeName].gfx.createSurface(s,n,r),u=function(e){try{c._gfxSvgProxy[dojox._scopeName].gfx.utils.fromJson(e,l);var i=c._cleanSvg(s.innerHTML);e.clear(),e.destroy(),c._gfxSvgProxy.document.body.removeChild(s),t.callback(i)}catch(a){t.errback(a)}};d.whenLoaded(null,u)}catch(m){t.errback(m)}};c._initSvgSerializerDeferred.fired>0?d():c._initSvgSerializerDeferred.addCallback(d)}return t},_gfxSvgProxy:null,_initSvgSerializerDeferred:null,_svgSerializerInitialized:function(){c._initSvgSerializerDeferred.callback(!0)},_initSvgSerializer:function(){if(!c._initSvgSerializerDeferred){c._initSvgSerializerDeferred=new s;var t=o.doc.createElement("iframe");a.style(t,{display:"none",position:"absolute",width:"1em",height:"1em",top:"-10000px"});var i;l("ie")?t.onreadystatechange=function(){"complete"==t.contentWindow.document.readyState&&(t.onreadystatechange=function(){},i=setInterval(function(){t.contentWindow[e.scopeMap.dojo[1]._scopeName]&&t.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx&&t.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx.utils&&(clearInterval(i),t.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._gfxSvgProxy=t.contentWindow,t.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._svgSerializerInitialized())},50))}:t.onload=function(){t.onload=function(){},i=setInterval(function(){t.contentWindow[e.scopeMap.dojo[1]._scopeName]&&t.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx&&t.contentWindow[e.scopeMap.dojox[1]._scopeName].gfx.utils&&(clearInterval(i),t.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._gfxSvgProxy=t.contentWindow,t.contentWindow.parent[e.scopeMap.dojox[1]._scopeName].gfx.utils._svgSerializerInitialized())},50)};var n=u.dojoxGfxSvgProxyFrameUrl||d.toUrl("dojox/gfx/resources/gfxSvgProxyFrame.html");t.setAttribute("src",n.toString()),o.body().appendChild(t)}},_innerXML:function(e){return e.innerXML?e.innerXML:e.xml?e.xml:"undefined"!=typeof XMLSerializer?(new XMLSerializer).serializeToString(e):null},_cleanSvg:function(e){return e&&(-1==e.indexOf('xmlns="http://www.w3.org/2000/svg"')&&(e=e.substring(4,e.length),e='<svg xmlns="http://www.w3.org/2000/svg"'+e),-1==e.indexOf('xmlns:xlink="http://www.w3.org/1999/xlink"')&&(e=e.substring(4,e.length),e='<svg xmlns:xlink="http://www.w3.org/1999/xlink"'+e),-1===e.indexOf("xlink:href")&&(e=e.replace(/href\s*=/g,"xlink:href=")),e=e.replace(/<img\b([^>]*)>/gi,"<image $1 />"),e=e.replace(/\bdojoGfx\w*\s*=\s*(['"])\w*\1/g,""),e=e.replace(/\b__gfxObject__\s*=\s*(['"])\w*\1/g,""),e=e.replace(/[=]([^"']+?)(\s|>)/g,'="$1"$2'),e=e.replace(/\bstroke-opacity\w*\s*=\s*(['"])undefined\1/g,"")),e}}),c});//# sourceMappingURL=utils.js.map