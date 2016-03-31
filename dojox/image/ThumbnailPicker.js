//>>built
define("dojox/image/ThumbnailPicker",["dojo","dijit","dojox","dojo/require!dojox/fx/scroll,dojo/fx/easing,dojo/fx,dijit/_Widget,dijit/_Templated"],function(e,t,i){e.provide("dojox.image.ThumbnailPicker"),e.experimental("dojox.image.ThumbnailPicker"),e.require("dojox.fx.scroll"),e.require("dojo.fx.easing"),e.require("dojo.fx"),e.require("dijit._Widget"),e.require("dijit._Templated"),e.declare("dojox.image.ThumbnailPicker",[t._Widget,t._Templated],{imageStore:null,request:null,size:500,thumbHeight:75,thumbWidth:100,useLoadNotifier:!1,useHyperlink:!1,hyperlinkTarget:"new",isClickable:!0,isScrollable:!0,isHorizontal:!0,autoLoad:!0,linkAttr:"link",imageThumbAttr:"imageUrlThumb",imageLargeAttr:"imageUrl",pageSize:20,titleAttr:"title",templateString:e.cache("dojox.image","resources/ThumbnailPicker.html",'<div dojoAttachPoint="outerNode" class="thumbOuter">\n	<div dojoAttachPoint="navPrev" class="thumbNav thumbClickable">\n	  <img src="" dojoAttachPoint="navPrevImg"/>    \n	</div>\n	<div dojoAttachPoint="thumbScroller" class="thumbScroller">\n	  <div dojoAttachPoint="thumbsNode" class="thumbWrapper"></div>\n	</div>\n	<div dojoAttachPoint="navNext" class="thumbNav thumbClickable">\n	  <img src="" dojoAttachPoint="navNextImg"/>  \n	</div>\n</div>'),_thumbs:[],_thumbIndex:0,_maxPhotos:0,_loadedImages:{},baseClass:"ThumbnailPicker",cellClass:"Thumbnail",postCreate:function(){this.inherited(arguments),this.pageSize=Number(this.pageSize),this._scrollerSize=this.size-102;var t=this._sizeProperty=this.isHorizontal?"width":"height";e.style(this.outerNode,"textAlign","center"),e.style(this.outerNode,t,this.size+"px"),e.style(this.thumbScroller,t,this._scrollerSize+"px"),this.useHyperlink&&e.subscribe(this.getClickTopicName(),this,function(e){var t=(e.index,this.imageStore.getValue(e.data,this.linkAttr));t&&("new"==this.hyperlinkTarget?window.open(t):window.location=t)}),this.isClickable&&e.addClass(this.thumbsNode,"thumbClickable"),this._totalSize=0;var i=this.isHorizontal?"Horiz":"Vert";e.addClass(this.navPrev,"prev"+i),e.addClass(this.navNext,"next"+i),e.addClass(this.thumbsNode,"thumb"+i),e.addClass(this.outerNode,"thumb"+i),e.attr(this.navNextImg,"src",this._blankGif),e.attr(this.navPrevImg,"src",this._blankGif),this.connect(this.navPrev,"onclick","_prev"),this.connect(this.navNext,"onclick","_next"),this.isHorizontal?(this._sizeAttr="offsetWidth",this._scrollAttr="scrollLeft"):(this._sizeAttr="offsetHeight",this._scrollAttr="scrollTop"),this._updateNavControls(),this.init()},init:function(){return this.isInitialized?!1:(this.isInitialized=!0,this.imageStore&&this.request&&this._loadNextPage(),!0)},getClickTopicName:function(){return this.id+"/select"},getShowTopicName:function(){return this.id+"/show"},setDataStore:function(t,i,a){this.reset(),this.request={query:{},start:i.start||0,count:i.count||10,onBegin:e.hitch(this,function(e){this._maxPhotos=e})},i.query&&e.mixin(this.request.query,i.query),a&&e.forEach(["imageThumbAttr","imageLargeAttr","linkAttr","titleAttr"],function(e){a[e]&&(this[e]=a[e])},this),this.request.start=0,this.request.count=this.pageSize,this.imageStore=t,this._loadInProgress=!1,this.init()||this._loadNextPage()},reset:function(){this._loadedImages={},e.forEach(this._thumbs,function(t){t&&t.parentNode&&e.destroy(t)}),this._thumbs=[],this.isInitialized=!1,this._noImages=!0},isVisible:function(e){var t=this._thumbs[e];if(!t)return!1;var i=this.isHorizontal?"offsetLeft":"offsetTop",a=this.isHorizontal?"offsetWidth":"offsetHeight",r=this.isHorizontal?"scrollLeft":"scrollTop",o=t[i]-this.thumbsNode[i];return o>=this.thumbScroller[r]&&o+t[a]<=this.thumbScroller[r]+this._scrollerSize},resize:function(t){var i=this.isHorizontal?"w":"h",a=0;this._thumbs.length>0&&0==e.marginBox(this._thumbs[0]).w||(e.forEach(this._thumbs,e.hitch(this,function(t){var r=e.marginBox(t.firstChild),o=r[i];a+=Number(o)+10,this.useLoadNotifier&&r.w>0&&e.style(t.lastChild,"width",r.w-4+"px"),e.style(t,"width",r.w+"px")})),e.style(this.thumbsNode,this._sizeProperty,a+"px"),this._updateNavControls())},_next:function(){for(var e,t=this.isHorizontal?"offsetLeft":"offsetTop",i=this.isHorizontal?"offsetWidth":"offsetHeight",a=this.thumbsNode[t],r=this._thumbs[this._thumbIndex],o=r[t]-a,n=this._thumbIndex+1;n<this._thumbs.length;n++)if(e=this._thumbs[n],e[t]-a+e[i]-o>this._scrollerSize)return void this._showThumbs(n)},_prev:function(){if(0!=this.thumbScroller[this.isHorizontal?"scrollLeft":"scrollTop"]){for(var e,t=this.isHorizontal?"offsetLeft":"offsetTop",i=(this.isHorizontal?"offsetWidth":"offsetHeight",this._thumbs[this._thumbIndex]),a=i[t]-this.thumbsNode[t],r=this._thumbIndex-1;r>-1;r--)if(e=this._thumbs[r],a-e[t]>this._scrollerSize)return void this._showThumbs(r+1);this._showThumbs(0)}},_checkLoad:function(t,i){e.publish(this.getShowTopicName(),[{index:i}]),this._updateNavControls(),this._loadingImages={},this._thumbIndex=i,this.thumbsNode.offsetWidth-t.offsetLeft<2*this._scrollerSize&&this._loadNextPage()},_showThumbs:function(t){if(t=Math.min(Math.max(t,0),this._maxPhotos),!(t>=this._maxPhotos)){var a=this._thumbs[t];if(a){var r=a.offsetLeft-this.thumbsNode.offsetLeft,o=a.offsetTop-this.thumbsNode.offsetTop,n=this.isHorizontal?r:o;if(!(n>=this.thumbScroller[this._scrollAttr]&&n+a[this._sizeAttr]<=this.thumbScroller[this._scrollAttr]+this._scrollerSize))if(this.isScrollable){var s=this.isHorizontal?{x:r,y:0}:{x:0,y:o};i.fx.smoothScroll({target:s,win:this.thumbScroller,duration:300,easing:e.fx.easing.easeOut,onEnd:e.hitch(this,"_checkLoad",a,t)}).play(10)}else this.isHorizontal?this.thumbScroller.scrollLeft=r:this.thumbScroller.scrollTop=o,this._checkLoad(a,t)}}},markImageLoaded:function(t){var i=e.byId("loadingDiv_"+this.id+"_"+t);i&&this._setThumbClass(i,"thumbLoaded"),this._loadedImages[t]=!0},_setThumbClass:function(t,i){this.autoLoad&&e.addClass(t,i)},_loadNextPage:function(){if(!this._loadInProgress){this._loadInProgress=!0;for(var t=this.request.start+(this._noImages?0:this.pageSize),i=t;i<this._thumbs.length&&this._thumbs[i];)i++;var a=this.imageStore,r=function(t,r){if(a==this.imageStore)if(t&&t.length){var o=0,n=e.hitch(this,function(){if(o>=t.length)return void(this._loadInProgress=!1);var e=o++;this._loadImage(t[e],i+e,n)});n(),this._updateNavControls()}else this._loadInProgress=!1},o=function(){this._loadInProgress=!1};this.request.onComplete=e.hitch(this,r),this.request.onError=e.hitch(this,o),this.request.start=t,this._noImages=!1,this.imageStore.fetch(this.request)}},_loadImage:function(t,i,a){var r=this.imageStore,o=r.getValue(t,this.imageThumbAttr),n=e.create("div",{id:"img_"+this.id+"_"+i,"class":this.cellClass}),s=e.create("img",{},n);s._index=i,s._data=t,this._thumbs[i]=n;var l;this.useLoadNotifier&&(l=e.create("div",{id:"loadingDiv_"+this.id+"_"+i},n),this._setThumbClass(l,this._loadedImages[i]?"thumbLoaded":"thumbNotifier"));var d,h,c=e.marginBox(this.thumbsNode);this.isHorizontal?(d=this.thumbWidth,h="w"):(d=this.thumbHeight,h="h"),c=c[h];var u=this.thumbScroller.scrollLeft,m=this.thumbScroller.scrollTop;e.style(this.thumbsNode,this._sizeProperty,c+d+20+"px"),this.thumbScroller.scrollLeft=u,this.thumbScroller.scrollTop=m,this.thumbsNode.appendChild(n),e.connect(s,"onload",this,e.hitch(this,function(){return r!=this.imageStore?!1:(this.resize(),setTimeout(a,0),!1)})),e.connect(s,"onclick",this,function(i){return e.publish(this.getClickTopicName(),[{index:i.target._index,data:i.target._data,url:s.getAttribute("src"),largeUrl:this.imageStore.getValue(t,this.imageLargeAttr),title:this.imageStore.getValue(t,this.titleAttr),link:this.imageStore.getValue(t,this.linkAttr)}]),e.query("."+this.cellClass,this.thumbsNode).removeClass(this.cellClass+"Selected"),e.addClass(i.target.parentNode,this.cellClass+"Selected"),!1}),e.addClass(s,"imageGalleryThumb"),s.setAttribute("src",o);var f=this.imageStore.getValue(t,this.titleAttr);f&&s.setAttribute("title",f),this._updateNavControls()},_updateNavControls:function(){var t=function(t,i){var a=i?"addClass":"removeClass";e[a](t,"enabled"),e[a](t,"thumbClickable")},i=this.isHorizontal?"scrollLeft":"scrollTop",a=this.isHorizontal?"offsetWidth":"offsetHeight";t(this.navPrev,this.thumbScroller[i]>0);var r=this.thumbScroller[i]+this._scrollerSize<this.thumbsNode[a];t(this.navNext,r)}})});//# sourceMappingURL=ThumbnailPicker.js.map