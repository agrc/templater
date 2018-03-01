//>>built
define("dojox/mobile/View",["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/_base/Deferred","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./ViewController","./common","./transition","./viewRegistry","./_css3"],function(e,t,i,a,o,r,n,s,l,d,h,u,c,m,f,p,g,v,y,b,_,M){o.getObject("dojox.mobile",!0);return a("dojox.mobile.View",[g,p,f],{selected:!1,keepScrollPos:!0,tag:"div",baseClass:"mblView",constructor:function(e,t){t&&(l.byId(t).style.visibility="hidden")},destroy:function(){_.remove(this.id),this.inherited(arguments)},buildRendering:function(){this.templateString||(this.domNode=this.containerNode=this.srcNodeRef||h.create(this.tag)),this._animEndHandle=this.connect(this.domNode,M.name("animationEnd"),"onAnimationEnd"),this._animStartHandle=this.connect(this.domNode,M.name("animationStart"),"onAnimationStart"),t.mblCSS3Transition||(this._transEndHandle=this.connect(this.domNode,M.name("transitionEnd"),"onAnimationEnd")),r("mblAndroid3Workaround")&&c.set(this.domNode,M.name("transformStyle"),"preserve-3d"),_.add(this),this.inherited(arguments)},startup:function(){if(!this._started){if(void 0===this._visible){var t,a,o,r=this.getSiblingViews(),n=location.hash&&location.hash.substring(1).split(/,/);e.forEach(r,function(i,r){-1!==e.indexOf(n,i.id)&&(t=i),0==r&&(o=i),i.selected&&(a=i),i._visible=!1},this),(t||a||o)._visible=!0}this._visible&&(this.show(!0,!0),this.defer(function(){this.onStartView(),i.publish("/dojox/mobile/startView",[this])})),"hidden"===this.domNode.style.visibility&&(this.domNode.style.visibility="inherit"),this.inherited(arguments);var s=this.getParent();s&&s.resize||this.resize(),this._visible||this.hide()}},resize:function(){e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},onStartView:function(){},onBeforeTransitionIn:function(e,t,i,a,o){},onAfterTransitionIn:function(e,t,i,a,o){},onBeforeTransitionOut:function(e,t,i,a,o){},onAfterTransitionOut:function(e,t,i,a,o){},_clearClasses:function(t){if(t){var i=[];e.forEach(o.trim(t.className||"").split(/\s+/),function(e){(e.match(/^mbl\w*View$/)||-1===e.indexOf("mbl"))&&i.push(e)},this),t.className=i.join(" ")}},_fixViewState:function(e){for(var t=this.domNode.parentNode.childNodes,i=0;i<t.length;i++){var a=t[i];1===a.nodeType&&d.contains(a,"mblView")&&this._clearClasses(a)}this._clearClasses(e);var o=m.byNode(e);o&&(o._inProgress=!1)},convertToId:function(e){return"string"==typeof e?e.replace(/^#?([^&?]+).*/,"$1"):e},_isBookmarkable:function(e){return e.moveTo&&(t.mblForceBookmarkable||"#"===e.moveTo.charAt(0))&&!e.hashchange},performTransition:function(e,a,s,h,u){if(!this._inProgress){this._inProgress=!0;var f,p;if(e&&"object"==typeof e)f=e,p=a;else{f={moveTo:e,transitionDir:a,transition:s,context:h,method:u},p=[];for(var g=5;g<arguments.length;g++)p.push(arguments[g])}if(this._detail=f,this._optArgs=p,this._arguments=[f.moveTo,f.transitionDir,f.transition,f.context,f.method],"#"!==f.moveTo){var v;f.moveTo?v=this.convertToId(f.moveTo):(this._dummyNode||(this._dummyNode=n.doc.createElement("div"),n.body().appendChild(this._dummyNode)),v=this._dummyNode),this.addTransitionInfo&&"string"==typeof f.moveTo&&this._isBookmarkable(f)&&this.addTransitionInfo(this.id,f.moveTo,{transitionDir:f.transitionDir,transition:f.transition});var b=this.domNode,_=b.offsetTop;if(v=this.toNode=l.byId(v)){v.style.visibility="hidden",v.style.display="",this._fixViewState(v);var w=m.byNode(v);if(w&&(!t.mblAlwaysResizeOnTransition&&w._resized||(y.resizeAll(null,w),w._resized=!0),f.transition&&"none"!=f.transition&&w._addTransitionPaddingTop(_),w.load&&w.load(),w.movedFrom=b.id),r("mblAndroidWorkaround")&&!t.mblCSS3Transition&&f.transition&&"none"!=f.transition&&(c.set(v,M.name("transformStyle"),"preserve-3d"),c.set(b,M.name("transformStyle"),"preserve-3d"),d.add(v,"mblAndroidWorkaround")),this.onBeforeTransitionOut.apply(this,this._arguments),i.publish("/dojox/mobile/beforeTransitionOut",[this].concat(o._toArray(this._arguments))),w){if(this.keepScrollPos&&!this.getParent()){var k=n.body().scrollTop||n.doc.documentElement.scrollTop||n.global.pageYOffset||0;b._scrollTop=k;var x=1==f.transitionDir?0:v._scrollTop||0;v.style.top="0px",(k>1||0!==x)&&(b.style.top=x-k+"px",r("ios")>=7||!1===t.mblHideAddressBar||this.defer(function(){n.global.scrollTo(0,x||1)}))}else v.style.top="0px";w.onBeforeTransitionIn.apply(w,this._arguments),i.publish("/dojox/mobile/beforeTransitionIn",[w].concat(o._toArray(this._arguments)))}v.style.display="none",v.style.visibility="inherit",y.fromView=this,y.toView=w,this._doTransition(b,v,f.transition,f.transitionDir)}}}},_addTransitionPaddingTop:function(e){this.containerNode.style.paddingTop=e+"px"},_removeTransitionPaddingTop:function(){this.containerNode.style.paddingTop=""},_toCls:function(e){return"mbl"+e.charAt(0).toUpperCase()+e.substring(1)},_doTransition:function(e,i,a,l){var h=-1==l?" mblReverse":"";if(i.style.display="",a&&"none"!=a)if(t.mblCSS3Transition)s.when(b,o.hitch(this,function(t){var r=c.get(i,"position");c.set(i,"position","absolute"),s.when(t(e,i,{transition:a,reverse:-1===l}),o.hitch(this,function(){c.set(i,"position",r),i.style.paddingTop="",this.invokeCallback()}))}));else{-1!=a.indexOf("cube")&&(r("ipad")?c.set(i.parentNode,{webkitPerspective:1600}):r("ios")&&c.set(i.parentNode,{webkitPerspective:800}));var m=this._toCls(a);if(r("mblAndroidWorkaround")){var f=this;f.defer(function(){d.add(e,m+" mblOut"+h),d.add(i,m+" mblIn"+h),d.remove(i,"mblAndroidWorkaround"),f.defer(function(){d.add(e,"mblTransition"),d.add(i,"mblTransition")},30)},70)}else d.add(e,m+" mblOut"+h),d.add(i,m+" mblIn"+h),this.defer(function(){d.add(e,"mblTransition"),d.add(i,"mblTransition")},100);var p,g,v,y="50% 50%",_="50% 50%";if(-1!=a.indexOf("swirl")||-1!=a.indexOf("zoom"))p=this.keepScrollPos&&!this.getParent()?n.body().scrollTop||n.doc.documentElement.scrollTop||n.global.pageYOffset||0:-u.position(e,!0).y,v=n.global.innerHeight/2+p,y="50% "+v+"px",_="50% "+v+"px";else if(-1!=a.indexOf("scale")){var w=u.position(e,!0);g=(void 0!==this.clickedPosX?this.clickedPosX:n.global.innerWidth/2)-w.x,p=this.keepScrollPos&&!this.getParent()?n.body().scrollTop||n.doc.documentElement.scrollTop||n.global.pageYOffset||0:-w.y,v=(void 0!==this.clickedPosY?this.clickedPosY:n.global.innerHeight/2)+p,y=g+"px "+v+"px",_=g+"px "+v+"px"}c.set(e,M.add({},{transformOrigin:y})),c.set(i,M.add({},{transformOrigin:_}))}else this.domNode.style.display="none",this.invokeCallback()},onAnimationStart:function(e){},onAnimationEnd:function(e){var t=e.animationName||e.target.className;if(-1!==t.indexOf("Out")||-1!==t.indexOf("In")||-1!==t.indexOf("Shrink")){var i=!1;if(d.contains(this.domNode,"mblOut")?(i=!0,this.domNode.style.display="none",d.remove(this.domNode,[this._toCls(this._detail.transition),"mblIn","mblOut","mblReverse"])):this._removeTransitionPaddingTop(),c.set(this.domNode,M.add({},{transformOrigin:""})),-1!==t.indexOf("Shrink")){var a=e.target;a.style.display="none",d.remove(a,"mblCloseContent");var o=_.getEnclosingScrollable(this.domNode);o&&o.onTouchEnd()}i&&this.invokeCallback(),this._clearClasses(this.domNode),this.clickedPosX=this.clickedPosY=void 0,-1!==t.indexOf("Cube")&&-1!==t.indexOf("In")&&r("ios")&&(this.domNode.parentNode.style[M.name("perspective")]="")}},invokeCallback:function(){this.onAfterTransitionOut.apply(this,this._arguments),i.publish("/dojox/mobile/afterTransitionOut",[this].concat(this._arguments));var e=m.byNode(this.toNode);e&&(e.onAfterTransitionIn.apply(e,this._arguments),i.publish("/dojox/mobile/afterTransitionIn",[e].concat(this._arguments)),e.movedFrom=void 0,this.setFragIds&&this._isBookmarkable(this._detail)&&this.setFragIds(e)),r("mblAndroidWorkaround")&&this.defer(function(){e&&c.set(this.toNode,M.name("transformStyle"),""),c.set(this.domNode,M.name("transformStyle"),"")});var t=this._detail.context,a=this._detail.method;(t||a)&&(a||(a=t,t=null),t=t||n.global,"string"==typeof a?t[a].apply(t,this._optArgs):"function"==typeof a&&a.apply(t,this._optArgs)),this._detail=this._optArgs=this._arguments=void 0,this._inProgress=!1},isVisible:function(e){var t=function(e){return"none"!==c.get(e,"display")};if(e){for(var i=this.domNode;"BODY"!==i.tagName;i=i.parentNode)if(!t(i))return!1;return!0}return t(this.domNode)},getShowingView:function(){for(var e=this.domNode.parentNode.childNodes,t=0;t<e.length;t++){var i=e[t];if(1===i.nodeType&&d.contains(i,"mblView")&&"none"!==i.style.display)return m.byNode(i)}return null},getSiblingViews:function(){return this.domNode.parentNode?e.map(e.filter(this.domNode.parentNode.childNodes,function(e){return 1===e.nodeType&&d.contains(e,"mblView")}),function(e){return m.byNode(e)}):[this]},show:function(t,a){var o=this.getShowingView();t||(o&&(o.onBeforeTransitionOut(o.id),i.publish("/dojox/mobile/beforeTransitionOut",[o,o.id])),this.onBeforeTransitionIn(this.id),i.publish("/dojox/mobile/beforeTransitionIn",[this,this.id])),a?this.domNode.style.display="":e.forEach(this.getSiblingViews(),function(e){e.domNode.style.display=e===this?"":"none"},this),this.load&&this.load(),t||(o&&(o.onAfterTransitionOut(o.id),i.publish("/dojox/mobile/afterTransitionOut",[o,o.id])),this.onAfterTransitionIn(this.id),i.publish("/dojox/mobile/afterTransitionIn",[this,this.id]))},hide:function(){this.domNode.style.display="none"}})});//# sourceMappingURL=View.js.map