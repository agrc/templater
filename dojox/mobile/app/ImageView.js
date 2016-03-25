//>>built
define("dojox/mobile/app/ImageView",["dojo","dijit","dojox","dojo/require!dojox/mobile/app/_Widget,dojo/fx/easing"],function(e,t,i){e.provide("dojox.mobile.app.ImageView"),e.experimental("dojox.mobile.app.ImageView"),e.require("dojox.mobile.app._Widget"),e.require("dojo.fx.easing"),e.declare("dojox.mobile.app.ImageView",i.mobile.app._Widget,{zoom:1,zoomCenterX:0,zoomCenterY:0,maxZoom:5,autoZoomLevel:3,disableAutoZoom:!1,disableSwipe:!1,autoZoomEvent:null,_leftImg:null,_centerImg:null,_rightImg:null,_leftSmallImg:null,_centerSmallImg:null,_rightSmallImg:null,constructor:function(){this.panX=0,this.panY=0,this.handleLoad=e.hitch(this,this.handleLoad),this._updateAnimatedZoom=e.hitch(this,this._updateAnimatedZoom),this._updateAnimatedPan=e.hitch(this,this._updateAnimatedPan),this._onAnimPanEnd=e.hitch(this,this._onAnimPanEnd)},buildRendering:function(){this.inherited(arguments),this.canvas=e.create("canvas",{},this.domNode),e.addClass(this.domNode,"mblImageView")},postCreate:function(){this.inherited(arguments),this.size=e.marginBox(this.domNode),e.style(this.canvas,{width:this.size.w+"px",height:this.size.h+"px"}),this.canvas.height=this.size.h,this.canvas.width=this.size.w;var t=this;this.connect(this.domNode,"onmousedown",function(e){t.isAnimating()||(t.panX&&t.handleDragEnd(),t.downX=e.targetTouches?e.targetTouches[0].clientX:e.clientX,t.downY=e.targetTouches?e.targetTouches[0].clientY:e.clientY)}),this.connect(this.domNode,"onmousemove",function(e){if(!t.isAnimating()&&(t.downX||0===t.downX)&&(t.downY||0===t.downY)&&(!t.disableSwipe&&1==t.zoom||!t.disableAutoZoom&&1!=t.zoom)){var i=e.targetTouches?e.targetTouches[0].clientX:e.pageX,a=e.targetTouches?e.targetTouches[0].clientY:e.pageY;t.panX=i-t.downX,t.panY=a-t.downY,1==t.zoom?Math.abs(t.panX)>10&&t.render():(Math.abs(t.panX)>10||Math.abs(t.panY)>10)&&t.render()}}),this.connect(this.domNode,"onmouseout",function(e){!t.isAnimating()&&t.panX&&t.handleDragEnd()}),this.connect(this.domNode,"onmouseover",function(e){t.downX=t.downY=null}),this.connect(this.domNode,"onclick",function(i){if(!t.isAnimating()&&null!=t.downX&&null!=t.downY){var a=i.targetTouches?i.targetTouches[0].clientX:i.pageX,r=i.targetTouches?i.targetTouches[0].clientY:i.pageY;if(Math.abs(t.panX)>14||Math.abs(t.panY)>14)return t.downX=t.downY=null,void t.handleDragEnd();if(t.downX=t.downY=null,!t.disableAutoZoom){if(!t._centerImg||!t._centerImg._loaded)return;if(1!=t.zoom)return void t.set("animatedZoom",1);var n=e._abs(t.domNode),o=t.size.w/t._centerImg.width,s=t.size.h/t._centerImg.height;t.zoomTo((a-n.x)/o-t.panX,(r-n.y)/s-t.panY,t.autoZoomLevel)}}}),e.connect(this.domNode,"flick",this,"handleFlick")},isAnimating:function(){return this._anim&&"playing"==this._anim.status()},handleDragEnd:function(){if(this.downX=this.downY=null,1==this.zoom){if(!this.panX)return;var t=this._leftImg&&this._leftImg._loaded||this._leftSmallImg&&this._leftSmallImg._loaded,i=this._rightImg&&this._rightImg._loaded||this._rightSmallImg&&this._rightSmallImg._loaded,a=!(Math.abs(this.panX)<this._centerImg._baseWidth/2)&&((this.panX>0&&t?1:0)||(this.panX<0&&i?1:0));a?this.moveTo(this.panX):this._animPanTo(0,e.fx.easing.expoOut,700)}else{if(!this.panX&&!this.panY)return;this.zoomCenterX-=this.panX/this.zoom,this.zoomCenterY-=this.panY/this.zoom,this.panX=this.panY=0}},handleFlick:function(e){1==this.zoom&&e.duration<500&&("ltr"==e.direction?this.moveTo(1):"rtl"==e.direction&&this.moveTo(-1),this.downX=this.downY=null)},moveTo:function(t){t=t>0?1:-1;var i;1>t?this._rightImg&&this._rightImg._loaded?i=this._rightImg:this._rightSmallImg&&this._rightSmallImg._loaded&&(i=this._rightSmallImg):this._leftImg&&this._leftImg._loaded?i=this._leftImg:this._leftSmallImg&&this._leftSmallImg._loaded&&(i=this._leftSmallImg),this._moveDir=t;var a=this;i&&i._loaded?this._animPanTo(this.size.w*t,null,500,function(){a.panX=0,a.panY=0,0>t?a._switchImage("left","right"):a._switchImage("right","left"),a.render(),a.onChange(-1*t)}):this._animPanTo(0,e.fx.easing.expoOut,700)},_switchImage:function(e,t){var i="_"+e+"SmallImg",a="_"+e+"Img",r="_"+t+"SmallImg",n="_"+t+"Img";this[a]=this._centerImg,this[i]=this._centerSmallImg,this[a]._type=e,this[i]&&(this[i]._type=e),this._centerImg=this[n],this._centerSmallImg=this[r],this._centerImg._type="center",this._centerSmallImg&&(this._centerSmallImg._type="center"),this[n]=this[r]=null},_animPanTo:function(t,i,a,r){return this._animCallback=r,this._anim=new e.Animation({curve:[this.panX,t],onAnimate:this._updateAnimatedPan,duration:a||500,easing:i,onEnd:this._onAnimPanEnd}),this._anim.play(),this._anim},onChange:function(e){},_updateAnimatedPan:function(e){this.panX=e,this.render()},_onAnimPanEnd:function(){this.panX=this.panY=0,this._animCallback&&this._animCallback()},zoomTo:function(e,t,i){this.set("zoomCenterX",e),this.set("zoomCenterY",t),this.set("animatedZoom",i)},render:function(){var e=this.canvas.getContext("2d");e.clearRect(0,0,this.canvas.width,this.canvas.height),this._renderImg(this._centerSmallImg,this._centerImg,1==this.zoom?this.panX<0?1:this.panX>0?-1:0:0),1==this.zoom&&0!=this.panX&&(this.panX>0?this._renderImg(this._leftSmallImg,this._leftImg,1):this._renderImg(this._rightSmallImg,this._rightImg,-1))},_renderImg:function(e,t,i){var a=t&&t._loaded?t:e;if(a&&a._loaded){var r=this.canvas.getContext("2d"),n=a._baseWidth,o=a._baseHeight,s=n*this.zoom,l=o*this.zoom,d=Math.min(this.size.w,s),u=Math.min(this.size.h,l),c=this.dispWidth=a.width*(d/s),h=this.dispHeight=a.height*(u/l),m=this.zoomCenterX-this.panX/this.zoom,f=this.zoomCenterY-this.panY/this.zoom,p=Math.floor(Math.max(c/2,Math.min(a.width-c/2,m))),g=Math.floor(Math.max(h/2,Math.min(a.height-h/2,f))),y=Math.max(0,Math.round((a.width-c)/2+(p-a._centerX))),v=Math.max(0,Math.round((a.height-h)/2+(g-a._centerY))),k=Math.round(Math.max(0,this.canvas.width-d)/2),b=Math.round(Math.max(0,this.canvas.height-u)/2),_=d,x=c;1==this.zoom&&i&&this.panX&&(this.panX<0?i>0?(d-=Math.abs(this.panX),k=0):0>i&&(d=Math.max(1,Math.abs(this.panX)-5),k=this.size.w-d):i>0?(d=Math.max(1,Math.abs(this.panX)-5),k=0):0>i&&(d-=Math.abs(this.panX),k=this.size.w-d),c=Math.max(1,Math.floor(c*(d/_))),i>0&&(y=y+x-c),y=Math.floor(y));try{r.drawImage(a,Math.max(0,y),v,Math.min(x,c),h,k,b,Math.min(_,d),u)}catch(w){}}},_setZoomAttr:function(e){this.zoom=Math.min(this.maxZoom,Math.max(1,e)),1==this.zoom&&this._centerImg&&this._centerImg._loaded&&(this.isAnimating()||(this.zoomCenterX=this._centerImg.width/2,this.zoomCenterY=this._centerImg.height/2),this.panX=this.panY=0),this.render()},_setZoomCenterXAttr:function(e){e!=this.zoomCenterX&&(this._centerImg&&this._centerImg._loaded&&(e=Math.min(this._centerImg.width,e)),this.zoomCenterX=Math.max(0,Math.round(e)))},_setZoomCenterYAttr:function(e){e!=this.zoomCenterY&&(this._centerImg&&this._centerImg._loaded&&(e=Math.min(this._centerImg.height,e)),this.zoomCenterY=Math.max(0,Math.round(e)))},_setZoomCenterAttr:function(e){e.x==this.zoomCenterX&&e.y==this.zoomCenterY||(this.set("zoomCenterX",e.x),this.set("zoomCenterY",e.y),this.render())},_setAnimatedZoomAttr:function(t){this._anim&&"playing"==this._anim.status()||(this._anim=new e.Animation({curve:[this.zoom,t],onAnimate:this._updateAnimatedZoom,onEnd:this._onAnimEnd}),this._anim.play())},_updateAnimatedZoom:function(e){this._setZoomAttr(e)},_setCenterUrlAttr:function(e){this._setImage("center",e)},_setLeftUrlAttr:function(e){this._setImage("left",e)},_setRightUrlAttr:function(e){this._setImage("right",e)},_setImage:function(t,i){var a=null,r=null;if(e.isString(i)?r=i:(r=i.large,a=i.small),!this["_"+t+"Img"]||this["_"+t+"Img"]._src!=r){var n=this["_"+t+"Img"]=new Image;if(n._type=t,n._loaded=!1,n._src=r,n._conn=e.connect(n,"onload",this.handleLoad),a){var o=this["_"+t+"SmallImg"]=new Image;o._type=t,o._loaded=!1,o._conn=e.connect(o,"onload",this.handleLoad),o._isSmall=!0,o._src=a,o.src=a}n.src=r}},handleLoad:function(t){var i=t.target;i._loaded=!0,e.disconnect(i._conn);var a=i._type;switch(a){case"center":this.zoomCenterX=i.width/2,this.zoomCenterY=i.height/2}var r=i.height,n=i.width;n/this.size.w<r/this.size.h?(i._baseHeight=this.canvas.height,i._baseWidth=n/(r/this.size.h)):(i._baseWidth=this.canvas.width,i._baseHeight=r/(n/this.size.w)),i._centerX=n/2,i._centerY=r/2,this.render(),this.onLoad(i._type,i._src,i._isSmall)},onLoad:function(e,t,i){}})});//# sourceMappingURL=ImageView.js.map