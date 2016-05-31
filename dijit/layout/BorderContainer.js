//>>built
define("dijit/layout/BorderContainer",["dojo/_base/array","dojo/cookie","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/on","dojo/touch","../_WidgetBase","../_Widget","../_TemplatedMixin","./LayoutContainer","./utils"],function(e,t,i,o,n,s,r,a,d,l,h,c,u,m,f,p){var g=i("dijit.layout._Splitter",[u,m],{live:!0,templateString:'<div class="dijitSplitter" data-dojo-attach-event="onkeydown:_onKeyDown,press:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse" tabIndex="0" role="separator"><div class="dijitSplitterThumb"></div></div>',constructor:function(){this._handlers=[]},postMixInProperties:function(){this.inherited(arguments),this.horizontal=/top|bottom/.test(this.region),this._factor=/top|left/.test(this.region)?1:-1,this._cookieName=this.container.id+"_"+this.region},buildRendering:function(){if(this.inherited(arguments),o.add(this.domNode,"dijitSplitter"+(this.horizontal?"H":"V")),this.container.persist){var e=t(this._cookieName);e&&(this.child.domNode.style[this.horizontal?"height":"width"]=e)}},_computeMaxSize:function(){var t=this.horizontal?"h":"w",i=s.getMarginBox(this.child.domNode)[t],o=e.filter(this.container.getChildren(),function(e){return"center"==e.region})[0],n=s.getContentBox(o.domNode)[t]-10;return Math.min(this.child.maxSize,i+n)},_startDrag:function(e){this.cover||(this.cover=n.place("<div class=dijitSplitterCover></div>",this.child.domNode,"after")),o.add(this.cover,"dijitSplitterCoverActive"),this.fake&&n.destroy(this.fake),(this._resize=this.live)||((this.fake=this.domNode.cloneNode(!0)).removeAttribute("id"),o.add(this.domNode,"dijitSplitterShadow"),n.place(this.fake,this.domNode,"after")),o.add(this.domNode,"dijitSplitterActive dijitSplitter"+(this.horizontal?"H":"V")+"Active"),this.fake&&o.remove(this.fake,"dijitSplitterHover dijitSplitter"+(this.horizontal?"H":"V")+"Hover");var t=this._factor,i=this.horizontal,a=i?"pageY":"pageX",c=e[a],u=this.domNode.style,m=i?"h":"w",f=r.getComputedStyle(this.child.domNode),p=s.getMarginBox(this.child.domNode,f)[m],g=this._computeMaxSize(),_=Math.max(this.child.minSize,s.getPadBorderExtents(this.child.domNode,f)[m]+10),b=this.region,v="top"==b||"bottom"==b?"top":"left",y=parseInt(u[v],10),C=this._resize,N=d.hitch(this.container,"_layoutChildren",this.child.id),k=this.ownerDocument;this._handlers=this._handlers.concat([l(k,h.move,this._drag=function(e,i){var o=e[a]-c,n=t*o+p,s=Math.max(Math.min(n,g),_);(C||i)&&N(s),u[v]=o+y+t*(s-n)+"px"}),l(k,"dragstart",function(e){e.stopPropagation(),e.preventDefault()}),l(this.ownerDocumentBody,"selectstart",function(e){e.stopPropagation(),e.preventDefault()}),l(k,h.release,d.hitch(this,"_stopDrag"))]),e.stopPropagation(),e.preventDefault()},_onMouse:function(e){var t="mouseover"==e.type||"mouseenter"==e.type;o.toggle(this.domNode,"dijitSplitterHover",t),o.toggle(this.domNode,"dijitSplitter"+(this.horizontal?"H":"V")+"Hover",t)},_stopDrag:function(e){try{this.cover&&o.remove(this.cover,"dijitSplitterCoverActive"),this.fake&&n.destroy(this.fake),o.remove(this.domNode,"dijitSplitterActive dijitSplitter"+(this.horizontal?"H":"V")+"Active dijitSplitterShadow"),this._drag(e),this._drag(e,!0)}finally{this._cleanupHandlers(),delete this._drag}this.container.persist&&t(this._cookieName,this.child.domNode.style[this.horizontal?"height":"width"],{expires:365})},_cleanupHandlers:function(){for(var e;e=this._handlers.pop();)e.remove()},_onKeyDown:function(e){this._resize=!0;var t=this.horizontal,i=1;switch(e.keyCode){case t?a.UP_ARROW:a.LEFT_ARROW:i*=-1;case t?a.DOWN_ARROW:a.RIGHT_ARROW:break;default:return}var o=s.getMarginSize(this.child.domNode)[t?"h":"w"]+this._factor*i;this.container._layoutChildren(this.child.id,Math.max(Math.min(o,this._computeMaxSize()),this.child.minSize)),e.stopPropagation(),e.preventDefault()},destroy:function(){this._cleanupHandlers(),delete this.child,delete this.container,delete this.cover,delete this.fake,this.inherited(arguments)}}),_=i("dijit.layout._Gutter",[u,m],{templateString:'<div class="dijitGutter" role="presentation"></div>',postMixInProperties:function(){this.inherited(arguments),this.horizontal=/top|bottom/.test(this.region)},buildRendering:function(){this.inherited(arguments),o.add(this.domNode,"dijitGutter"+(this.horizontal?"H":"V"))}}),b=i("dijit.layout.BorderContainer",f,{gutters:!0,liveSplitters:!0,persist:!1,baseClass:"dijitBorderContainer",_splitterClass:g,postMixInProperties:function(){this.gutters||(this.baseClass+="NoGutter"),this.inherited(arguments)},_setupChild:function(e){this.inherited(arguments);var t=e.region,i=e.isLeftToRight();if("leading"==t&&(t=i?"left":"right"),"trailing"==t&&(t=i?"right":"left"),t&&"center"!=t&&(e.splitter||this.gutters)&&!e._splitterWidget){var o=e.splitter?this._splitterClass:_;d.isString(o)&&(o=d.getObject(o));var s=new o({id:e.id+"_splitter",container:this,child:e,region:t,live:this.liveSplitters});s.isSplitter=!0,e._splitterWidget=s;var r="bottom"==t||t==(this.isLeftToRight()?"right":"left");n.place(s.domNode,e.domNode,r?"before":"after"),s.startup()}},layout:function(){this._layoutChildren()},removeChild:function(e){var t=e._splitterWidget;t&&(t.destroy(),delete e._splitterWidget),this.inherited(arguments)},getChildren:function(){return e.filter(this.inherited(arguments),function(e){return!e.isSplitter})},getSplitter:function(t){return e.filter(this.getChildren(),function(e){return e.region==t})[0]._splitterWidget},resize:function(e,t){if(!this.cs||!this.pe){var i=this.domNode;this.cs=r.getComputedStyle(i),this.pe=s.getPadExtents(i,this.cs),this.pe.r=r.toPixelValue(i,this.cs.paddingRight),this.pe.b=r.toPixelValue(i,this.cs.paddingBottom),r.set(i,"padding","0px")}this.inherited(arguments)},_layoutChildren:function(t,i){if(this._borderBox&&this._borderBox.h){var o=[];e.forEach(this._getOrderedChildren(),function(e){o.push(e),e._splitterWidget&&o.push(e._splitterWidget)});var n={l:this.pe.l,t:this.pe.t,w:this._borderBox.w-this.pe.w,h:this._borderBox.h-this.pe.h};p.layoutChildren(this.domNode,n,o,t,i)}},destroyRecursive:function(){e.forEach(this.getChildren(),function(e){var t=e._splitterWidget;t&&t.destroy(),delete e._splitterWidget}),this.inherited(arguments)}});return b.ChildWidgetProperties={splitter:!1,minSize:0,maxSize:1/0},d.mixin(b.ChildWidgetProperties,f.ChildWidgetProperties),d.extend(c,b.ChildWidgetProperties),b._Splitter=g,b._Gutter=_,b});//# sourceMappingURL=BorderContainer.js.map