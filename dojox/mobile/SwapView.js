//>>built
define("dojox/mobile/SwapView",["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-class","dijit/registry","./View","./_ScrollableMixin","./sniff","./_css3","dojo/has!dojo-bidi?dojox/mobile/bidi/SwapView"],function(e,t,i,a,o,r,n,s,l,d,h){var u=i(l("dojo-bidi")?"dojox.mobile.NonBidiSwapView":"dojox.mobile.SwapView",[n,s],{scrollDir:"f",weight:1.2,_endOfTransitionTimeoutHandle:null,buildRendering:function(){this.inherited(arguments),o.add(this.domNode,"mblSwapView"),this.setSelectable(this.domNode,!1),this.containerNode=this.domNode,this.subscribe("/dojox/mobile/nextPage","handleNextPage"),this.subscribe("/dojox/mobile/prevPage","handlePrevPage"),this.noResize=!0},startup:function(){this._started||this.inherited(arguments)},resize:function(){this.inherited(arguments),e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},onTouchStart:function(e){if(this._siblingViewsInMotion())return void(this.propagatable?e.preventDefault():event.stop(e));var t=this.domNode.offsetTop,i=this.nextView(this.domNode);i&&(i.stopAnimation(),o.add(i.domNode,"mblIn"),i.containerNode.style.paddingTop=t+"px");var a=this.previousView(this.domNode);a&&(a.stopAnimation(),o.add(a.domNode,"mblIn"),a.containerNode.style.paddingTop=t+"px"),this._setSiblingViewsInMotion(!0),this.inherited(arguments)},onTouchEnd:function(e){e&&(this._moved?this._endOfTransitionTimeoutHandle=this.defer(function(){this._setSiblingViewsInMotion(!1)},1e3):this._setSiblingViewsInMotion(!1)),this.inherited(arguments)},handleNextPage:function(e){var t=e.refId&&a.byId(e.refId)||e.domNode;this.domNode.parentNode===t.parentNode&&this.getShowingView()===this&&this.goTo(1)},handlePrevPage:function(e){var t=e.refId&&a.byId(e.refId)||e.domNode;this.domNode.parentNode===t.parentNode&&this.getShowingView()===this&&this.goTo(-1)},goTo:function(e,i){var a=i?r.byId(i):1==e?this.nextView(this.domNode):this.previousView(this.domNode);a&&a!==this&&(this.stopAnimation(),a.stopAnimation(),this.domNode._isShowing=!1,a.domNode._isShowing=!0,this.performTransition(a.id,e,"slide",null,function(){t.publish("/dojox/mobile/viewChanged",[a])}))},isSwapView:function(e){return e&&1===e.nodeType&&o.contains(e,"mblSwapView")},nextView:function(e){for(var t=e.nextSibling;t;t=t.nextSibling)if(this.isSwapView(t))return r.byNode(t);return null},previousView:function(e){for(var t=e.previousSibling;t;t=t.previousSibling)if(this.isSwapView(t))return r.byNode(t);return null},scrollTo:function(e){if(!this._beingFlipped){var t,i;e.x&&(e.x<0?(t=this.nextView(this.domNode),i=e.x+this.domNode.offsetWidth):(t=this.previousView(this.domNode),i=e.x-this.domNode.offsetWidth)),t&&("none"===t.domNode.style.display&&(t.domNode.style.display="",t.resize()),t._beingFlipped=!0,t.scrollTo({x:i}),t._beingFlipped=!1)}this.inherited(arguments)},findDisp:function(e){if(!o.contains(e,"mblSwapView"))return this.inherited(arguments);if(!e.parentNode)return null;for(var t=e.parentNode.childNodes,i=0;i<t.length;i++){var a=t[i];if(1===a.nodeType&&o.contains(a,"mblSwapView")&&!o.contains(a,"mblIn")&&"none"!==a.style.display)return a}return e},slideTo:function(e,t,i,a){if(!this._beingFlipped){var o,r,n=this.domNode.offsetWidth,s=a||this.getPos();s.x<0?(o=this.nextView(this.domNode),s.x<-n/4?o&&(e.x=-n,r=0):o&&(r=n)):(o=this.previousView(this.domNode),s.x>n/4?o&&(e.x=n,r=0):o&&(r=-n)),o&&(o._beingFlipped=!0,o.slideTo({x:r},t,i),o._beingFlipped=!1,o.domNode._isShowing=o&&0===r),this.domNode._isShowing=!(o&&0===r)}this.inherited(arguments)},onAnimationEnd:function(e){e&&e.target&&o.contains(e.target,"mblScrollableScrollTo2")||this.inherited(arguments)},onFlickAnimationEnd:function(i){this._endOfTransitionTimeoutHandle&&(this._endOfTransitionTimeoutHandle=this._endOfTransitionTimeoutHandle.remove()),i&&i.target&&!o.contains(i.target,"mblScrollableScrollTo2")||(this.inherited(arguments),this.domNode._isShowing?(e.forEach(this.domNode.parentNode.childNodes,function(e){this.isSwapView(e)&&(o.remove(e,"mblIn"),e._isShowing||(e.style.display="none",e.style[d.name("transform")]="",e.style.left="0px",e.style.paddingTop=""))},this),t.publish("/dojox/mobile/viewChanged",[this]),this.containerNode.style.paddingTop=""):l("css3-animations")||(this.containerNode.style.left="0px"),this._setSiblingViewsInMotion(!1))},_setSiblingViewsInMotion:function(e){var t=e?"true":!1,i=this.domNode.parentNode;i&&i.setAttribute("data-dojox-mobile-swapview-inmotion",t)},_siblingViewsInMotion:function(){var e=this.domNode.parentNode;return e?"true"==e.getAttribute("data-dojox-mobile-swapview-inmotion"):!1}});return l("dojo-bidi")?i("dojox.mobile.SwapView",[u,h]):u});//# sourceMappingURL=SwapView.js.map