//>>built
define("dojox/mobile/_compat",["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/fx","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dojo/fx","dojo/fx/easing","dojo/ready","dojo/uacss","dijit/registry","dojox/fx","dojox/fx/flip","./EdgeToEdgeList","./IconContainer","./ProgressIndicator","./RoundRect","./RoundRectList","./ScrollableView","./Switch","./View","./Heading","require"],function(e,t,i,a,o,r,n,s,l,d,h,u,c,m,f,p,g,y,v,b,_,M,k,x,w,T,j,I,C){var F=o.getObject("dojox.mobile",!0);return r("webkit")||10===r("ie")||!r("ie")&&r("trident")>6||(o.extend(j,{_doTransition:function(e,t,o,r){var n;this.wakeUp(t);var l,d;if(o&&"none"!=o)if("slide"==o||"cover"==o||"reveal"==o){var u=e.offsetWidth;l=c.slideTo({node:e,duration:400,left:-u*r,top:h.get(e,"top")}),d=c.slideTo({node:t,duration:400,left:0,top:h.get(t,"top")}),t.style.position="absolute",t.style.left=u*r+"px",t.style.display="",n=c.combine([l,d]),i.connect(n,"onEnd",this,function(){if(this._inProgress){e.style.display="none",e.style.left="0px",t.style.position="relative";var i=g.byNode(t);i&&!s.contains(i.domNode,"out")&&(i.containerNode.style.paddingTop=""),this.invokeCallback()}}),n.play()}else if("slidev"==o||"coverv"==o||"reavealv"==o){var m=e.offsetHeight;l=c.slideTo({node:e,duration:400,left:0,top:-m*r}),d=c.slideTo({node:t,duration:400,left:0,top:0}),t.style.position="absolute",t.style.top=m*r+"px",t.style.left="0px",t.style.display="",n=c.combine([l,d]),i.connect(n,"onEnd",this,function(){this._inProgress&&(e.style.display="none",t.style.position="relative",this.invokeCallback())}),n.play()}else"flip"==o?(n=y.flip({node:e,dir:"right",depth:.5,duration:400}),t.style.position="absolute",t.style.left="0px",i.connect(n,"onEnd",this,function(){this._inProgress&&(e.style.display="none",t.style.position="relative",t.style.display="",this.invokeCallback())}),n.play()):(n=c.chain([a.fadeOut({node:e,duration:600}),a.fadeIn({node:t,duration:600})]),t.style.position="absolute",t.style.left="0px",t.style.display="",h.set(t,"opacity",0),i.connect(n,"onEnd",this,function(){this._inProgress&&(e.style.display="none",t.style.position="relative",h.set(e,"opacity",1),this.invokeCallback())}),n.play());else t.style.display="",e.style.display="none",t.style.left="0px",this.invokeCallback()},wakeUp:function(e){if(r("ie")&&!e._wokeup){e._wokeup=!0;var t=e.style.display;e.style.display="";for(var i=e.getElementsByTagName("*"),a=0,o=i.length;o>a;a++){var n=i[a].style.display;i[a].style.display="none",i[a].style.display="",i[a].style.display=n}e.style.display=t}}}),o.extend(M,{scale:function(e){if(r("ie")){var t={w:e,h:e};d.setMarginBox(this.domNode,t),d.setMarginBox(this.containerNode,t)}else if(r("ff")){var i=e/40;h.set(this.containerNode,{MozTransform:"scale("+i+")",MozTransformOrigin:"0 0"}),d.setMarginBox(this.domNode,{w:e,h:e}),d.setMarginBox(this.containerNode,{w:e/i,h:e/i})}}}),r("ie")&&(o.extend(k,{buildRendering:function(){F.createRoundRect(this),this.domNode.className="mblRoundRect"}}),x._addChild=x.prototype.addChild,x._postCreate=x.prototype.postCreate,o.extend(x,{buildRendering:function(){F.createRoundRect(this,!0),this.domNode.className="mblRoundRectList",r("ie")&&r("dojo-bidi")&&!this.isLeftToRight()&&(this.domNode.className="mblRoundRectList mblRoundRectListRtl")},postCreate:function(){x._postCreate.apply(this,arguments),this.redrawBorders()},addChild:function(e,t){x._addChild.apply(this,arguments),this.redrawBorders(),F.applyPngFilter&&F.applyPngFilter(e.domNode)},redrawBorders:function(){if(!(this instanceof b))for(var e=!1,t=this.containerNode.childNodes.length-1;t>=0;t--){var i=this.containerNode.childNodes[t];"LI"==i.tagName&&(i.style.borderBottomStyle=e?"solid":"none",e=!0)}}}),o.extend(b,{buildRendering:function(){this.domNode=this.containerNode=this.srcNodeRef||n.doc.createElement("ul"),this.domNode.className="mblEdgeToEdgeList"}}),_._addChild=_.prototype.addChild,o.extend(_,{addChild:function(e,t){_._addChild.apply(this,arguments),F.applyPngFilter&&F.applyPngFilter(e.domNode)}}),o.mixin(F,{createRoundRect:function(e,t){var i,a;if(e.domNode=n.doc.createElement("div"),e.domNode.style.padding="0px",e.domNode.style.backgroundColor="transparent",e.domNode.style.border="none",e.containerNode=n.doc.createElement(t?"ul":"div"),e.containerNode.className="mblRoundRectContainer",e.srcNodeRef){for(e.srcNodeRef.parentNode.replaceChild(e.domNode,e.srcNodeRef),i=0,a=e.srcNodeRef.childNodes.length;a>i;i++)e.containerNode.appendChild(e.srcNodeRef.removeChild(e.srcNodeRef.firstChild));e.srcNodeRef=null}for(e.domNode.appendChild(e.containerNode),i=0;5>=i;i++){var o=l.create("div");o.className="mblRoundCorner mblRoundCorner"+i+"T",e.domNode.insertBefore(o,e.containerNode);var r=l.create("div");r.className="mblRoundCorner mblRoundCorner"+i+"B",e.domNode.appendChild(r)}}}),o.extend(w,{postCreate:function(){var e=l.create("div",{className:"mblDummyForIE",innerHTML:"&nbsp;"},this.containerNode,"first");h.set(e,{position:"relative",marginBottom:"-2px",fontSize:"1px"})}})),r("ie")<=6&&(F.applyPngFilter=function(e){e=e||n.body();for(var t=e.getElementsByTagName("IMG"),i=C.toUrl("dojo/resources/blank.gif"),a=0,o=t.length;o>a;a++){var r=t[a],s=r.offsetWidth,l=r.offsetHeight;if(0===s||0===l){if("none"!=h.get(r,"display"))continue;if(r.style.display="",s=r.offsetWidth,l=r.offsetHeight,r.style.display="none",0===s||0===l)continue}var d=r.src;-1==d.indexOf("resources/blank.gif")&&(r.src=i,r.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+d+"')",r.style.width=s+"px",r.style.height=l+"px")}},!F._disableBgFilter&&F.createDomButton&&(F._createDomButton_orig=F.createDomButton,F.createDomButton=function(e,t,i){var a=F._createDomButton_orig.apply(this,arguments);if(a&&a.className&&-1!==a.className.indexOf("mblDomButton")){var o=function(){if(a.currentStyle&&a.currentStyle.backgroundImage.match(/url.*(mblDomButton.*\.png)/)){var e=RegExp.$1,t=C.toUrl("dojox/mobile/themes/common/domButtons/compat/")+e;a.runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"',sizingMethod='crop')",a.style.background="none"}};setTimeout(o,1e3),setTimeout(o,5e3)}return a})),F.loadCssFile=function(e){F.loadedCssFiles||(F.loadedCssFiles=[]),n.doc.createStyleSheet?setTimeout(function(e){return function(){var t=n.doc.createStyleSheet(e);t&&F.loadedCssFiles.push(t.owningElement)}}(e),0):F.loadedCssFiles.push(l.create("link",{href:e,type:"text/css",rel:"stylesheet"},n.doc.getElementsByTagName("head")[0]))},F.loadCss=function(t){if(!F._loadedCss){var i={};e.forEach(F.getCssPaths(),function(e){i[e]=!0}),F._loadedCss=i}o.isArray(t)||(t=[t]);for(var a=0;a<t.length;a++){var r=t[a];F._loadedCss[r]||(F._loadedCss[r]=!0,F.loadCssFile(r))}},F.getCssPaths=function(){var e,t,i,a=[],o=n.doc.styleSheets;for(e=0;e<o.length;e++)if(!o[e].href){var r=o[e].cssRules||o[e].imports;if(r)for(t=0;t<r.length;t++)r[t].href&&a.push(r[t].href)}var s=n.doc.getElementsByTagName("link");for(e=0,i=s.length;i>e;e++)s[e].href&&a.push(s[e].href);return a},F.loadCompatPattern=/\/mobile\/themes\/.*\.css$/,F.loadCompatCssFiles=function(e){if(r("ie")&&!e)return void setTimeout(function(){F.loadCompatCssFiles(!0)},0);F._loadedCss=void 0;var i=F.getCssPaths();r("dojo-bidi")&&(i=F.loadRtlCssFiles(i));for(var a=0;a<i.length;a++){var o=i[a];if((o.match(t.mblLoadCompatPattern||F.loadCompatPattern)||-1!==location.href.indexOf("mobile/tests/"))&&-1===o.indexOf("-compat.css")){var n=o.substring(0,o.length-4)+"-compat.css";F.loadCss(n)}}},r("dojo-bidi")&&(F.loadRtlCssFiles=function(e){for(var t=0;t<e.length;t++){var i=e[t];if(-1==i.indexOf("_rtl")){var a="android.css blackberry.css custom.css iphone.css holodark.css base.css Carousel.css ComboBox.css IconContainer.css IconMenu.css ListItem.css RoundRectCategory.css SpinWheel.css Switch.css TabBar.css ToggleButton.css ToolBarButton.css ProgressIndicator.css Accordion.css GridLayout.css FormLayout.css",o=i.substr(i.lastIndexOf("/")+1);if(-1!=a.indexOf(o)){var r=i.replace(".css","_rtl.css");e.push(r),F.loadCss(r)}}}return e}),F.hideAddressBar=function(e,t){t!==!1&&F.resizeAll()},f(function(){t.mblLoadCompatCssFiles!==!1&&F.loadCompatCssFiles(),F.applyPngFilter&&F.applyPngFilter()})),F});//# sourceMappingURL=_compat.js.map