//>>built
define("dojox/image/SlideShow",["dojo","dijit","dojox","dojo/require!dojo/string,dojo/fx,dijit/_Widget,dijit/_Templated"],function(e,t,i){e.provide("dojox.image.SlideShow"),e.require("dojo.string"),e.require("dojo.fx"),e.require("dijit._Widget"),e.require("dijit._Templated"),e.declare("dojox.image.SlideShow",[t._Widget,t._Templated],{imageHeight:375,imageWidth:500,title:"",titleTemplate:'${title} <span class="slideShowCounterText">(${current} of ${total})</span>',noLink:!1,loop:!0,hasNav:!0,images:[],pageSize:20,autoLoad:!0,autoStart:!1,fixedHeight:!1,imageStore:null,linkAttr:"link",imageLargeAttr:"imageUrl",titleAttr:"title",slideshowInterval:3,templateString:e.cache("dojox.image","resources/SlideShow.html",'<div dojoAttachPoint="outerNode" class="slideShowWrapper">\n	<div style="position:relative;" dojoAttachPoint="innerWrapper">\n		<div class="slideShowNav" dojoAttachEvent="onclick: _handleClick">\n			<div class="dijitInline slideShowTitle" dojoAttachPoint="titleNode">${title}</div>\n		</div>\n		<div dojoAttachPoint="navNode" class="slideShowCtrl" dojoAttachEvent="onclick: _handleClick">\n			<span dojoAttachPoint="navPrev" class="slideShowCtrlPrev"></span>\n			<span dojoAttachPoint="navPlay" class="slideShowCtrlPlay"></span>\n			<span dojoAttachPoint="navNext" class="slideShowCtrlNext"></span>\n		</div>\n		<div dojoAttachPoint="largeNode" class="slideShowImageWrapper"></div>		\n		<div dojoAttachPoint="hiddenNode" class="slideShowHidden"></div>\n	</div>\n</div>'),_imageCounter:0,_tmpImage:null,_request:null,postCreate:function(){this.inherited(arguments);var t=document.createElement("img");t.setAttribute("width",this.imageWidth),t.setAttribute("height",this.imageHeight),this.hasNav&&(e.connect(this.outerNode,"onmouseover",this,function(e){try{this._showNav()}catch(t){}}),e.connect(this.outerNode,"onmouseout",this,function(e){try{this._hideNav(e)}catch(t){}})),this.outerNode.style.width=this.imageWidth+"px",t.setAttribute("src",this._blankGif);this.largeNode.appendChild(t),this._tmpImage=this._currentImage=t,this._fitSize(!0),this._loadImage(0,e.hitch(this,"showImage",0)),this._calcNavDimensions(),e.style(this.navNode,"opacity",0)},setDataStore:function(t,i,a){this.reset();var o=this;this._request={query:{},start:i.start||0,count:i.count||this.pageSize,onBegin:function(e,t){o.maxPhotos=e}},i.query&&e.mixin(this._request.query,i.query),a&&e.forEach(["imageLargeAttr","linkAttr","titleAttr"],function(e){a[e]&&(this[e]=a[e])},this);var r=function(e){o.maxPhotos=e.length,o._request.onComplete=null,o.autoStart?(o.imageIndex=-1,o.toggleSlideShow()):o.showImage(0)};this.imageStore=t,this._request.onComplete=r,this._request.start=0,this.imageStore.fetch(this._request)},reset:function(){e.query("> *",this.largeNode).orphan(),this.largeNode.appendChild(this._tmpImage),e.query("> *",this.hiddenNode).orphan(),e.forEach(this.images,function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}),this.images=[],this.isInitialized=!1,this._imageCounter=0},isImageLoaded:function(e){return this.images&&this.images.length>e&&this.images[e]},moveImageLoadingPointer:function(e){this._imageCounter=e},destroy:function(){this._slideId&&this._stop(),this.inherited(arguments)},showNextImage:function(t,i){if(t&&this._timerCancelled)return!1;if(this.imageIndex+1>=this.maxPhotos){if(!t||!this.loop&&!i)return this._slideId&&this._stop(),!1;this.imageIndex=-1}return this.showImage(this.imageIndex+1,e.hitch(this,function(){t&&this._startTimer()})),!0},toggleSlideShow:function(){if(this._slideId)this._stop();else{e.toggleClass(this.domNode,"slideShowPaused"),this._timerCancelled=!1;var t=this.imageIndex;if(0>t||this.images[t]&&this.images[t]._img.complete){var i=this.showNextImage(!0,!0);i||this._stop()}else{var a=e.subscribe(this.getShowTopicName(),e.hitch(this,function(i){setTimeout(e.hitch(this,function(){if(i.index==t){var o=this.showNextImage(!0,!0);o||this._stop(),e.unsubscribe(a)}}),1e3*this.slideshowInterval)}));e.publish(this.getShowTopicName(),[{index:t,title:"",url:""}])}}},getShowTopicName:function(){return(this.widgetId||this.id)+"/imageShow"},getLoadTopicName:function(){return(this.widgetId?this.widgetId:this.id)+"/imageLoad"},showImage:function(t,i){!i&&this._slideId&&this.toggleSlideShow();var a=this,o=this.largeNode.getElementsByTagName("div");this.imageIndex=t;var r=function(){if(a.images[t]){for(;a.largeNode.firstChild;)a.largeNode.removeChild(a.largeNode.firstChild);e.style(a.images[t],"opacity",0),a.largeNode.appendChild(a.images[t]),a._currentImage=a.images[t]._img,a._fitSize();var o=function(o,r,n){var s=a.images[t].firstChild;"img"!=s.tagName.toLowerCase()&&(s=s.firstChild);var l=s.getAttribute("title")||"";a._navShowing&&a._showNav(!0),e.publish(a.getShowTopicName(),[{index:t,title:l,url:s.getAttribute("src")}]),i&&i(o,r,n),a._setTitle(l)};e.fadeIn({node:a.images[t],duration:300,onEnd:o}).play()}else a._loadImage(t,function(){a.showImage(t,i)})};o&&o.length>0?e.fadeOut({node:o[0],duration:300,onEnd:function(){a.hiddenNode.appendChild(o[0]),r()}}).play():r()},_fitSize:function(t){if(!this.fixedHeight||t){var i=this._currentImage.height+(this.hasNav?20:0);return void e.style(this.innerWrapper,"height",i+"px")}e.style(this.largeNode,"paddingTop",this._getTopPadding()+"px")},_getTopPadding:function(){return this.fixedHeight?(this.imageHeight-this._currentImage.height)/2:0},_loadNextImage:function(){if(this.autoLoad){for(;this.images.length>=this._imageCounter&&this.images[this._imageCounter];)this._imageCounter++;this._loadImage(this._imageCounter)}},_loadImage:function(t,i){if(!this.images[t]&&this._request){var a=t-t%(this._request.count||this.pageSize);this._request.start=a,this._request.onComplete=function(e){var i=t-a;e&&e.length>i&&n(e[i])};var o=this,r=this.imageStore,n=function(a){var n=o.imageStore.getValue(a,o.imageLargeAttr),s=new Image,l=e.create("div",{id:o.id+"_imageDiv"+t});l._img=s;var d=o.imageStore.getValue(a,o.linkAttr);if(!d||o.noLink)l.appendChild(s);else{var h=e.create("a",{href:d,target:"_blank"},l);h.appendChild(s)}e.connect(s,"onload",function(){r==o.imageStore&&(o._fitImage(s),e.attr(l,{width:o.imageWidth,height:o.imageHeight}),e.publish(o.getLoadTopicName(),[t]),setTimeout(function(){o._loadNextImage()},1),i&&i())}),o.hiddenNode.appendChild(l);e.create("div",{className:"slideShowTitle"},l);o.images[t]=l,e.attr(s,"src",n);var u=o.imageStore.getValue(a,o.titleAttr);u&&e.attr(s,"title",u)};this.imageStore.fetch(this._request)}},_stop:function(){this._slideId&&clearTimeout(this._slideId),this._slideId=null,this._timerCancelled=!0,e.removeClass(this.domNode,"slideShowPaused")},_prev:function(){this.imageIndex<1||this.showImage(this.imageIndex-1)},_next:function(){this.showNextImage()},_startTimer:function(){var e=this.id;this._slideId=setTimeout(function(){t.byId(e).showNextImage(!0)},1e3*this.slideshowInterval)},_calcNavDimensions:function(){e.style(this.navNode,"position","absolute"),e.style(this.navNode,"top","-10000px"),e.style(this.navPlay,"marginLeft",0),this.navPlay._size=e.marginBox(this.navPlay),this.navPrev._size=e.marginBox(this.navPrev),this.navNext._size=e.marginBox(this.navNext),e.style(this.navNode,{position:"",top:""})},_setTitle:function(t){this.titleNode.innerHTML=e.string.substitute(this.titleTemplate,{title:t,current:1+this.imageIndex,total:this.maxPhotos||""})},_fitImage:function(e){var t=e.width,i=e.height;t>this.imageWidth&&(i=Math.floor(i*(this.imageWidth/t)),e.height=i,e.width=t=this.imageWidth),i>this.imageHeight&&(t=Math.floor(t*(this.imageHeight/i)),e.height=this.imageHeight,e.width=t)},_handleClick:function(e){switch(e.target){case this.navNext:this._next();break;case this.navPrev:this._prev();break;case this.navPlay:this.toggleSlideShow()}},_showNav:function(t){if(!this._navShowing||t){this._calcNavDimensions(),e.style(this.navNode,"marginTop","0px");var i=e.style(this.navNode,"width")/2-this.navPlay._size.w/2-this.navPrev._size.w;e.style(this.navPlay,"marginLeft",i+"px");var a=(e.marginBox(this.outerNode),this._currentImage.height-this.navPlay._size.h-10+this._getTopPadding());a>this._currentImage.height&&(a+=10),e[this.imageIndex<1?"addClass":"removeClass"](this.navPrev,"slideShowCtrlHide"),e[this.imageIndex+1>=this.maxPhotos?"addClass":"removeClass"](this.navNext,"slideShowCtrlHide");var o=this;this._navAnim&&this._navAnim.stop(),this._navShowing||(this._navAnim=e.fadeIn({node:this.navNode,duration:300,onEnd:function(){o._navAnim=null}}),this._navAnim.play(),this._navShowing=!0)}},_hideNav:function(t){if(!t||!this._overElement(this.outerNode,t)){var i=this;this._navAnim&&this._navAnim.stop(),this._navAnim=e.fadeOut({node:this.navNode,duration:300,onEnd:function(){i._navAnim=null}}),this._navAnim.play(),this._navShowing=!1}},_overElement:function(t,i){if("undefined"==typeof e)return!1;t=e.byId(t);var a={x:i.pageX,y:i.pageY},o=e.position(t,!0);return a.x>=o.x&&a.x<=o.x+o.w&&a.y>=o.y&&a.y<=top+o.h}})});//# sourceMappingURL=SlideShow.js.map