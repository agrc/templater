//>>built
define("dojox/mdnd/AutoScroll",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/sniff","dojo/ready","dojo/_base/window"],function(e,t,i,a,r,n){var o=t("dojox.mdnd.AutoScroll",null,{interval:3,recursiveTimer:10,marginMouse:50,constructor:function(){this.resizeHandler=a.connect(e.global,"onresize",this,function(){this.getViewport()}),n(i.hitch(this,"init"))},init:function(){this._html=r("webkit")?e.body():e.body().parentNode,this.getViewport()},getViewport:function(){var t=e.doc,i=t.documentElement,a=window,r=e.body();e.isMozilla?this._v={w:i.clientWidth,h:a.innerHeight}:!e.isOpera&&a.innerWidth?this._v={w:a.innerWidth,h:a.innerHeight}:!e.isOpera&&i&&i.clientWidth?this._v={w:i.clientWidth,h:i.clientHeight}:r.clientWidth&&(this._v={w:r.clientWidth,h:r.clientHeight})},setAutoScrollNode:function(e){this._node=e},setAutoScrollMaxPage:function(){this._yMax=this._html.scrollHeight,this._xMax=this._html.scrollWidth},checkAutoScroll:function(e){this._autoScrollActive&&this.stopAutoScroll(),this._y=e.pageY,this._x=e.pageX,e.clientX<this.marginMouse?(this._autoScrollActive=!0,this._autoScrollLeft(e)):e.clientX>this._v.w-this.marginMouse&&(this._autoScrollActive=!0,this._autoScrollRight(e)),e.clientY<this.marginMouse?(this._autoScrollActive=!0,this._autoScrollUp(e)):e.clientY>this._v.h-this.marginMouse&&(this._autoScrollActive=!0,this._autoScrollDown())},_autoScrollDown:function(){this._timer&&clearTimeout(this._timer),this._autoScrollActive&&this._y+this.marginMouse<this._yMax&&(this._html.scrollTop+=this.interval,this._node.style.top=parseInt(this._node.style.top)+this.interval+"px",this._y+=this.interval,this._timer=setTimeout(i.hitch(this,"_autoScrollDown"),this.recursiveTimer))},_autoScrollUp:function(){this._timer&&clearTimeout(this._timer),this._autoScrollActive&&this._y-this.marginMouse>0&&(this._html.scrollTop-=this.interval,this._node.style.top=parseInt(this._node.style.top)-this.interval+"px",this._y-=this.interval,this._timer=setTimeout(i.hitch(this,"_autoScrollUp"),this.recursiveTimer))},_autoScrollRight:function(){this._timer&&clearTimeout(this._timer),this._autoScrollActive&&this._x+this.marginMouse<this._xMax&&(this._html.scrollLeft+=this.interval,this._node.style.left=parseInt(this._node.style.left)+this.interval+"px",this._x+=this.interval,this._timer=setTimeout(i.hitch(this,"_autoScrollRight"),this.recursiveTimer))},_autoScrollLeft:function(e){this._timer&&clearTimeout(this._timer),this._autoScrollActive&&this._x-this.marginMouse>0&&(this._html.scrollLeft-=this.interval,this._node.style.left=parseInt(this._node.style.left)-this.interval+"px",this._x-=this.interval,this._timer=setTimeout(i.hitch(this,"_autoScrollLeft"),this.recursiveTimer))},stopAutoScroll:function(){this._timer&&clearTimeout(this._timer),this._autoScrollActive=!1},destroy:function(){a.disconnect(this.resizeHandler)}});return o.autoScroll=null,o.autoScroll=new o,o});//# sourceMappingURL=AutoScroll.js.map