//>>built
define("dojo/hccss",["require","./_base/config","./dom-class","./dom-style","./has","./domReady","./_base/window"],function(t,e,i,n,o,s,a){return o.add("highcontrast",function(){var i=a.doc.createElement("div");try{i.style.cssText='border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url("'+(e.blankGif||t.toUrl("./resources/blank.gif"))+'");',a.body().appendChild(i);var s=n.getComputedStyle(i),r=s.backgroundImage;return s.borderTopColor==s.borderRightColor||r&&("none"==r||"url(invalid-url:)"==r)}catch(t){return!1}finally{o("ie")<=8?i.outerHTML="":a.body().removeChild(i)}}),s(function(){o("highcontrast")&&i.add(a.body(),"dj_a11y")}),o});//# sourceMappingURL=hccss.js.map