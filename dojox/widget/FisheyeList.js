//>>built
define("dojox/widget/FisheyeList",["dojo/_base/declare","dojo/_base/sniff","dojo/_base/lang","dojo/aspect","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/dom-construct","dojo/on","dojo/_base/window","dojo/mouse","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_Container","./FisheyeListItem"],function(e,t,i,a,o,n,r,s,d,l,h,c,u,m,f,g,p){return e("dojox.widget.FisheyeList",[m,f,g],{constructor:function(){this.pos={x:-1,y:-1},this.timerScale=1},EDGE:{CENTER:0,LEFT:1,RIGHT:2,TOP:3,BOTTOM:4},templateString:'<div class="dojoxFisheyeListBar" data-dojo-attach-point="containerNode"></div>',snarfChildDomOutput:!0,itemWidth:40,itemHeight:40,itemMaxWidth:150,itemMaxHeight:150,imgNode:null,orientation:"horizontal",isFixed:!1,conservativeTrigger:!1,effectUnits:2,itemPadding:10,attachEdge:"center",labelEdge:"bottom",postCreate:function(){var e=this.EDGE,t=this.isHorizontal="horizontal"==this.orientation;o.setSelectable(this.domNode,!1),this.selectedNode=-1,this.isOver=!1,this.hitX1=-1,this.hitY1=-1,this.hitX2=-1,this.hitY2=-1,this.anchorEdge=this._toEdge(this.attachEdge,e.CENTER),this.labelEdge=this._toEdge(this.labelEdge,e.TOP),this.labelEdge==e.CENTER&&(this.labelEdge=e.TOP),t?(this.anchorEdge==e.LEFT&&(this.anchorEdge=e.CENTER),this.anchorEdge==e.RIGHT&&(this.anchorEdge=e.CENTER),this.labelEdge==e.LEFT&&(this.labelEdge=e.TOP),this.labelEdge==e.RIGHT&&(this.labelEdge=e.TOP)):(this.anchorEdge==e.TOP&&(this.anchorEdge=e.CENTER),this.anchorEdge==e.BOTTOM&&(this.anchorEdge=e.CENTER),this.labelEdge==e.TOP&&(this.labelEdge=e.LEFT),this.labelEdge==e.BOTTOM&&(this.labelEdge=e.LEFT));var i=this.effectUnits;this.proximityLeft=this.itemWidth*(i-.5),this.proximityRight=this.itemWidth*(i-.5),this.proximityTop=this.itemHeight*(i-.5),this.proximityBottom=this.itemHeight*(i-.5),this.anchorEdge==e.LEFT&&(this.proximityLeft=0),this.anchorEdge==e.RIGHT&&(this.proximityRight=0),this.anchorEdge==e.TOP&&(this.proximityTop=0),this.anchorEdge==e.BOTTOM&&(this.proximityBottom=0),this.anchorEdge==e.CENTER&&(this.proximityLeft/=2,this.proximityRight/=2,this.proximityTop/=2,this.proximityBottom/=2)},startup:function(){this.children=this.getChildren(),this._initializePositioning(),this._onMouseMoveHandle=h.pausable(c.doc.documentElement,"mousemove",i.hitch(this,"_onMouseMove")),this.conservativeTrigger&&this._onMouseMoveHandle.pause(),this.isFixed&&this.own(h(c.doc,"scroll",i.hitch(this,this._onScroll))),this.own(h(c.doc.documentElement,u.leave,i.hitch(this,"_onBodyOut")),a.after(this,"addChild",i.hitch(this,"_initializePositioning"),!0),a.after(c.global,"onresize",i.hitch(this,"_initializePositioning"),!0))},_initializePositioning:function(){this.itemCount=this.children.length,this.barWidth=(this.isHorizontal?this.itemCount:1)*this.itemWidth,this.barHeight=(this.isHorizontal?1:this.itemCount)*this.itemHeight,this.totalWidth=this.proximityLeft+this.proximityRight+this.barWidth,this.totalHeight=this.proximityTop+this.proximityBottom+this.barHeight;for(var e=0;e<this.children.length;e++){this.children[e].posX=this.itemWidth*(this.isHorizontal?e:0),this.children[e].posY=this.itemHeight*(this.isHorizontal?0:e),this.children[e].cenX=this.children[e].posX+this.itemWidth/2,this.children[e].cenY=this.children[e].posY+this.itemHeight/2;var t=this.isHorizontal?this.itemWidth:this.itemHeight,i=this.effectUnits*t,a=this.isHorizontal?this.children[e].cenX:this.children[e].cenY,o=this.isHorizontal?this.proximityLeft:this.proximityTop,n=this.isHorizontal?this.proximityRight:this.proximityBottom,r=this.isHorizontal?this.barWidth:this.barHeight,s=i,l=i;s>a+o&&(s=a+o),l>r-a+n&&(l=r-a+n),this.children[e].effectRangeLeft=s/t,this.children[e].effectRangeRght=l/t}for(d.set(this.domNode,{width:this.barWidth+"px",height:this.barHeight+"px"}),e=0;e<this.children.length;e++){var h=this.children[e],c=h.domNode;d.set(c,{left:h.posX+"px",top:h.posY+"px",width:this.itemWidth+"px",height:this.itemHeight+"px"}),d.set(h.imgNode,{left:this.itemPadding+"%",top:this.itemPadding+"%",width:100-2*this.itemPadding+"%",height:100-2*this.itemPadding+"%"})}this._calcHitGrid()},_overElement:function(e,t){e=o.byId(e);var i={x:t.pageX,y:t.pageY},a=s.position(e,!0),n=a.y,r=n+a.h,d=a.x,l=d+a.w;return i.x>=d&&i.x<=l&&i.y>=n&&i.y<=r},_onBodyOut:function(e){this._overElement(c.body(),e)||this._setDormant(e)},_setDormant:function(e){this.isOver&&(this.isOver=!1,this.conservativeTrigger&&this._onMouseMoveHandle.pause(),this._onGridMouseMove(-1,-1))},_setActive:function(e){this.isOver||(this.isOver=!0,this.conservativeTrigger&&(this._onMouseMoveHandle.resume(),this.timerScale=0,this._onMouseMove(e),this._expandSlowly()))},_onMouseMove:function(e){e.pageX>=this.hitX1&&e.pageX<=this.hitX2&&e.pageY>=this.hitY1&&e.pageY<=this.hitY2?(this.isOver||this._setActive(e),this._onGridMouseMove(e.pageX-this.hitX1,e.pageY-this.hitY1)):this.isOver&&this._setDormant(e)},_onScroll:function(){this._calcHitGrid()},onResized:function(){this._calcHitGrid()},_onGridMouseMove:function(e,t){this.pos={x:e,y:t},this._paint()},_paint:function(){var e=this.pos.x,t=this.pos.y;if(!(this.itemCount<=0)){var i=this.isHorizontal?e:t,a=this.isHorizontal?this.proximityLeft:this.proximityTop,o=this.isHorizontal?this.itemWidth:this.itemHeight,n=this.isHorizontal?(1-this.timerScale)*this.itemWidth+this.timerScale*this.itemMaxWidth:(1-this.timerScale)*this.itemHeight+this.timerScale*this.itemMaxHeight,r=(i-a)/o-.5,s=n/o-.5;s>this.effectUnits&&(s=this.effectUnits);var d,l=0;this.anchorEdge==this.EDGE.BOTTOM&&(d=(t-this.proximityTop)/this.itemHeight,l=d>.5?1:t/(this.proximityTop+this.itemHeight/2)),this.anchorEdge==this.EDGE.TOP&&(d=(t-this.proximityTop)/this.itemHeight,l=.5>d?1:(this.totalHeight-t)/(this.proximityBottom+this.itemHeight/2)),this.anchorEdge==this.EDGE.RIGHT&&(d=(e-this.proximityLeft)/this.itemWidth,l=d>.5?1:e/(this.proximityLeft+this.itemWidth/2)),this.anchorEdge==this.EDGE.LEFT&&(d=(e-this.proximityLeft)/this.itemWidth,l=.5>d?1:(this.totalWidth-e)/(this.proximityRight+this.itemWidth/2)),this.anchorEdge==this.EDGE.CENTER&&(l=this.isHorizontal?t/this.totalHeight:e/this.totalWidth,l>.5&&(l=1-l),l*=2);for(var h=0;h<this.itemCount;h++){var c=this._weighAt(r,h);0>c&&(c=0),this._setItemSize(h,c*l)}var u=Math.round(r),m=0;0>r?u=0:r>this.itemCount-1?u=this.itemCount-1:m=(r-u)*((this.isHorizontal?this.itemWidth:this.itemHeight)-this.children[u].sizeMain),this._positionElementsFrom(u,m)}},_weighAt:function(e,t){var i=Math.abs(e-t),a=e-t>0?this.children[t].effectRangeRght:this.children[t].effectRangeLeft;return i>a?0:1-i/a},_setItemSize:function(e,t){if(this.children[e].scale!=t){this.children[e].scale=t,t*=this.timerScale;var i=Math.round(this.itemWidth+(this.itemMaxWidth-this.itemWidth)*t),a=Math.round(this.itemHeight+(this.itemMaxHeight-this.itemHeight)*t);if(this.isHorizontal){this.children[e].sizeW=i,this.children[e].sizeH=a,this.children[e].sizeMain=i,this.children[e].sizeOff=a;var o=0;o=this.anchorEdge==this.EDGE.TOP?this.children[e].cenY-this.itemHeight/2:this.anchorEdge==this.EDGE.BOTTOM?this.children[e].cenY-(a-this.itemHeight/2):this.children[e].cenY-a/2,this.children[e].usualX=Math.round(this.children[e].cenX-i/2),d.set(this.children[e].domNode,{top:o+"px",left:this.children[e].usualX+"px"})}else{this.children[e].sizeW=i,this.children[e].sizeH=a,this.children[e].sizeOff=i,this.children[e].sizeMain=a;var n=0;n=this.anchorEdge==this.EDGE.LEFT?this.children[e].cenX-this.itemWidth/2:this.anchorEdge==this.EDGE.RIGHT?this.children[e].cenX-(i-this.itemWidth/2):this.children[e].cenX-i/2,this.children[e].usualY=Math.round(this.children[e].cenY-a/2),d.set(this.children[e].domNode,{left:n+"px",top:this.children[e].usualY+"px"})}d.set(this.children[e].domNode,{width:i+"px",height:a+"px"}),this.children[e].svgNode&&this.children[e].svgNode.setSize(i,a)}},_positionElementsFrom:function(e,t){var i,a,o=0;this.isHorizontal?(i="usualX",a="left"):(i="usualY",a="top"),o=Math.round(this.children[e][i]+t),d.get(this.children[e].domNode,a)!=o+"px"&&(d.set(this.children[e].domNode,a,o+"px"),this._positionLabel(this.children[e]));for(var n=o,r=e-1;r>=0;r--)n-=this.children[r].sizeMain,d.get(this.children[e].domNode,a)!=n+"px"&&(d.set(this.children[r].domNode,a,n+"px"),this._positionLabel(this.children[r]));var s=o;for(r=e+1;r<this.itemCount;r++)s+=this.children[r-1].sizeMain,d.get(this.children[e].domNode,a)!=s+"px"&&(d.set(this.children[r].domNode,a,s+"px"),this._positionLabel(this.children[r]))},_positionLabel:function(e){var t=0,i=0,a=s.getMarginBox(e.lblNode);this.labelEdge==this.EDGE.TOP&&(t=Math.round(e.sizeW/2-a.w/2),i=-a.h),this.labelEdge==this.EDGE.BOTTOM&&(t=Math.round(e.sizeW/2-a.w/2),i=e.sizeH),this.labelEdge==this.EDGE.LEFT&&(t=-a.w,i=Math.round(e.sizeH/2-a.h/2)),this.labelEdge==this.EDGE.RIGHT&&(t=e.sizeW,i=Math.round(e.sizeH/2-a.h/2)),d.set(e.lblNode,{left:t+"px",top:i+"px"})},_calcHitGrid:function(){var e=s.position(this.domNode,!0);this.hitX1=e.x-this.proximityLeft,this.hitY1=e.y-this.proximityTop,this.hitX2=this.hitX1+this.totalWidth,this.hitY2=this.hitY1+this.totalHeight},_toEdge:function(e,t){return this.EDGE[e.toUpperCase()]||t},_expandSlowly:function(){this.isOver&&(this.timerScale+=.2,this._paint(),this.timerScale<1&&setTimeout(i.hitch(this,"_expandSlowly"),10))}})});//# sourceMappingURL=FisheyeList.js.map