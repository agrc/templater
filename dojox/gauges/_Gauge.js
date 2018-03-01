//>>built
define("dojox/gauges/_Gauge",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/array","dojo/_base/event","dojo/_base/connect","dojo/dom-construct","dijit/_Widget","dojox/gfx","./Range","dojo/fx/easing"],function(e,t,i,a,o,r,n,s,l,d,u){e.deprecated("dojox.gauges","Use the new extensible dojox.dgauges framework instead","2.0");var c=0;return t("dojox.gauges._Gauge",[l],{width:0,height:0,background:null,image:null,useRangeStyles:0,useTooltip:!0,majorTicks:null,minorTicks:null,_defaultIndicator:null,defaultColors:[[0,84,170,1],[68,119,187,1],[102,153,204,1],[153,187,238,1],[153,204,255,1],[204,238,255,1],[221,238,255,1]],min:null,max:null,surface:null,hideValues:!1,gaugeContent:void 0,_backgroundDefault:{color:"#E0E0E0"},_rangeData:null,_indicatorData:null,_drag:null,_img:null,_overOverlay:!1,_lastHover:"",startup:function(){null===this.image&&(this.image={}),this.connect(this.gaugeContent,"onmousedown",this.handleMouseDown),this.connect(this.gaugeContent,"onmousemove",this.handleMouseMove),this.connect(this.gaugeContent,"onmouseover",this.handleMouseOver),this.connect(this.gaugeContent,"onmouseout",this.handleMouseOut),this.connect(this.gaugeContent,"touchstart",this.handleTouchStart),this.connect(this.gaugeContent,"touchend",this.handleTouchEnd),this.connect(this.gaugeContent,"touchmove",this.handleTouchMove),i.isArray(this.ranges)||(this.ranges=[]),i.isArray(this.indicators)||(this.indicators=[]);var e,t=[],a=[];if(this.hasChildren()){var o=this.getChildren();for(e=0;e<o.length;e++)if(/.*Indicator/.test(o[e].declaredClass))a.push(o[e]);else switch(o[e].declaredClass){case u.prototype.declaredClass:t.push(o[e])}this.ranges=this.ranges.concat(t),this.indicators=this.indicators.concat(a)}for(this.background||(this.background=this._backgroundDefault),this.background=this.background.color||this.background,this.surface||this.createSurface(),this.addRanges(this.ranges),this.minorTicks&&this.minorTicks.interval&&this.setMinorTicks(this.minorTicks),this.majorTicks&&this.majorTicks.interval&&this.setMajorTicks(this.majorTicks),e=0;e<this.indicators.length;e++)this.addIndicator(this.indicators[e]);this.inherited(arguments)},hasChildren:function(){return this.getChildren().length>0},buildRendering:function(){var e=this.domNode=this.srcNodeRef?this.srcNodeRef:s.create("div");for(this.gaugeContent=s.create("div",{className:"dojoxGaugeContent"}),this.containerNode=s.create("div"),this.mouseNode=s.create("div");e.hasChildNodes();)this.containerNode.appendChild(e.firstChild);s.place(this.gaugeContent,e),s.place(this.containerNode,e),s.place(this.mouseNode,e)},_setTicks:function(e,t,a){var o;if(e&&i.isArray(e._ticks))for(o=0;o<e._ticks.length;o++)this._removeScaleTick(e._ticks[o]);var r={length:t.length,offset:t.offset,noChange:!0};for(t.color&&(r.color=t.color),t.font&&(r.font=t.font),t.labelPlacement&&(r.direction=t.labelPlacement),t._ticks=[],o=this.min;o<=this.max;o+=t.interval)if(o!=this.max||!this._isScaleCircular()){if(r.value=o,a){var n=this._getNumberModule();r.label=n?t.fixedPrecision&&t.precision?n.format(o,{places:t.precision}):n.format(o):t.fixedPrecision&&t.precision?o.toFixed(t.precision):o.toString()}t._ticks.push(this._addScaleTick(r,a))}return t},_isScaleCircular:function(){return!1},setMinorTicks:function(e){this.minorTicks=this._setTicks(this.minorTicks,e,!1)},setMajorTicks:function(e){this.majorTicks=this._setTicks(this.majorTicks,e,!0)},postCreate:function(){this.hideValues&&a.style(this.containerNode,"display","none"),a.style(this.mouseNode,"width","0"),a.style(this.mouseNode,"height","0"),a.style(this.mouseNode,"position","absolute"),a.style(this.mouseNode,"z-index","100"),this.useTooltip&&require(["dijit/Tooltip"],dojo.hitch(this,function(e){e.show("test",this.mouseNode,!this.isLeftToRight()),e.hide(this.mouseNode)}))},_getNumberModule:function(){if(0==c)try{c=require("dojo/number")}catch(e){c=null}return c},createSurface:function(){if(this.gaugeContent.style.width=this.width+"px",this.gaugeContent.style.height=this.height+"px",this.surface=d.createSurface(this.gaugeContent,this.width,this.height),this._backgroundGroup=this.surface.createGroup(),this._rangeGroup=this.surface.createGroup(),this._minorTicksGroup=this.surface.createGroup(),this._majorTicksGroup=this.surface.createGroup(),this._overlayGroup=this.surface.createGroup(),this._indicatorsGroup=this.surface.createGroup(),this._foregroundGroup=this.surface.createGroup(),this._background=this._backgroundGroup.createRect({x:0,y:0,width:this.width,height:this.height}),this._background.setFill(this.background),this.image.url){var e=this._backgroundGroup;this.image.overlay&&(e=this._overlayGroup),this._img=e.createImage({width:this.image.width||this.width,height:this.image.height||this.height,src:this.image.url}),(this.image.x||this.image.y)&&this._img.setTransform({dx:this.image.x||0,dy:this.image.y||0})}},draw:function(){var e;if(this.surface){if(this.drawBackground(this._backgroundGroup),this._rangeData)for(e=0;e<this._rangeData.length;e++)this.drawRange(this._rangeGroup,this._rangeData[e]);if(this._minorTicksData)for(e=0;e<this._minorTicksData.length;e++)this._minorTicksData[e].draw(this._minorTicksGroup);if(this._majorTicksData)for(e=0;e<this._majorTicksData.length;e++)this._majorTicksData[e].draw(this._majorTicksGroup);if(this._indicatorData)for(e=0;e<this._indicatorData.length;e++)this._indicatorData[e].draw(this._indicatorsGroup);this.drawForeground(this._foregroundGroup)}},drawBackground:function(e){},drawForeground:function(e){},setBackground:function(e){e||(e=this._backgroundDefault),this.background=e.color||e,this._background.setFill(this.background)},addRange:function(e){this.addRanges([e])},addRanges:function(e){this._rangeData||(this._rangeData=[]);for(var t,i=0;i<e.length;i++){if(t=e[i],(null===this.min||t.low<this.min)&&(this.min=t.low),(null===this.max||t.high>this.max)&&(this.max=t.high),!t.color){var a=this._rangeData.length%this.defaultColors.length;d.svg&&this.useRangeStyles>0?(a=this._rangeData.length%this.useRangeStyles+1,t.color={style:"dojoxGaugeRange"+a}):(a=this._rangeData.length%this.defaultColors.length,t.color=this.defaultColors[a])}this._rangeData[this._rangeData.length]=t}this.draw()},_addScaleTick:function(e,t){return e.declaredClass||(e=new this._defaultIndicator(e)),e._gauge=this,t?(this._majorTicksData||(this._majorTicksData=[]),this._majorTicksData[this._majorTicksData.length]=e,e.draw(this._majorTicksGroup)):(this._minorTicksData||(this._minorTicksData=[]),this._minorTicksData[this._minorTicksData.length]=e,e.draw(this._minorTicksGroup)),e},_removeScaleTick:function(e){var t;if(this._majorTicksData)for(t=0;t<this._majorTicksData.length;t++)if(this._majorTicksData[t]===e)return this._majorTicksData.splice(t,1),void e.remove();if(this._minorTicksData)for(t=0;t<this._minorTicksData.length;t++)if(this._minorTicksData[t]===e)return this._minorTicksData.splice(t,1),void e.remove()},addIndicator:function(e){return e.declaredClass||(e=new this._defaultIndicator(e)),e._gauge=this,e.hideValue||this.containerNode.appendChild(e.domNode),this._indicatorData||(this._indicatorData=[]),this._indicatorData[this._indicatorData.length]=e,e.draw(this._indicatorsGroup),e},removeIndicator:function(e){for(var t=0;t<this._indicatorData.length;t++)if(this._indicatorData[t]===e){this._indicatorData.splice(t,1),e.remove();break}},moveIndicatorToFront:function(e){e.shape&&e.shape.moveToFront()},drawText:function(e,t,i,a,o,r,n){var s=e.createText({x:i,y:a,text:t,align:o});return s.setFill(r||"black"),n&&s.setFont(n),s},removeText:function(e){e.parent&&e.parent.remove(e)},updateTooltip:function(e,t){this.useTooltip&&require(["dijit/Tooltip"],dojo.hitch(this,function(t){this._lastHover!=e&&(""!==e?(t.hide(this.mouseNode),t.show(e,this.mouseNode,!this.isLeftToRight())):t.hide(this.mouseNode),this._lastHover=e)}))},handleMouseOver:function(e){if(this.image&&this.image.overlay&&e.target==this._img.getEventSource()){var t;this._overOverlay=!0;var i=this.getRangeUnderMouse(e);i&&i.hover&&(t=i.hover),this.useTooltip&&!this._drag&&(t?this.updateTooltip(t,e):this.updateTooltip("",e))}},handleMouseOut:function(e){this._overOverlay=!1,this._hideTooltip()},handleMouseMove:function(e){if(this.useTooltip&&(e&&(a.style(this.mouseNode,"left",e.pageX+1+"px"),a.style(this.mouseNode,"top",e.pageY+1+"px")),this._overOverlay)){var t=this.getRangeUnderMouse(e);t&&t.hover?this.updateTooltip(t.hover,e):this.updateTooltip("",e)}},handleMouseDown:function(e){var t=this._getInteractiveIndicator();t&&this._handleMouseDownIndicator(t,e)},_handleDragInteractionMouseMove:function(e){this._drag&&(this._dragIndicator(this,e),r.stop(e))},_handleDragInteractionMouseUp:function(e){this._drag=null;for(var t=0;t<this._mouseListeners.length;t++)n.disconnect(this._mouseListeners[t]);this._mouseListeners=[],r.stop(e)},_handleMouseDownIndicator:function(e,t){e.noChange||(this._mouseListeners||(this._mouseListeners=[]),this._drag=e,this._mouseListeners.push(n.connect(document,"onmouseup",this,this._handleDragInteractionMouseUp)),this._mouseListeners.push(n.connect(document,"onmousemove",this,this._handleDragInteractionMouseMove)),this._mouseListeners.push(n.connect(document,"ondragstart",this,r.stop)),this._mouseListeners.push(n.connect(document,"onselectstart",this,r.stop)),this._dragIndicator(this,t),r.stop(t))},_handleMouseOverIndicator:function(e,t){this.useTooltip&&!this._drag&&(e.hover?require(["dijit/Tooltip"],dojo.hitch(this,function(i){a.style(this.mouseNode,"left",t.pageX+1+"px"),a.style(this.mouseNode,"top",t.pageY+1+"px"),i.show(e.hover,this.mouseNode,!this.isLeftToRight())})):this.updateTooltip("",t)),e.onDragMove&&!e.noChange&&(this.gaugeContent.style.cursor="pointer")},_handleMouseOutIndicator:function(e,t){this._hideTooltip(),this.gaugeContent.style.cursor="pointer"},_hideTooltip:function(){this.useTooltip&&this.mouseNode&&require(["dijit/Tooltip"],dojo.hitch(this,function(e){e.hide(this.mouseNode)}))},_handleMouseOutRange:function(e,t){this._hideTooltip()},_handleMouseOverRange:function(e,t){this.useTooltip&&!this._drag&&(e.hover?(a.style(this.mouseNode,"left",t.pageX+1+"px"),a.style(this.mouseNode,"top",t.pageY+1+"px"),require(["dijit/Tooltip"],dojo.hitch(this,function(t){t.show(e.hover,this.mouseNode,!this.isLeftToRight())}))):this.updateTooltip("",t))},handleTouchStartIndicator:function(e,t){e.noChange||(this._drag=e,r.stop(t))},handleTouchStart:function(e){this._drag=this._getInteractiveIndicator(),this.handleTouchMove(e)},handleTouchEnd:function(e){this._drag&&(this._drag=null,r.stop(e))},handleTouchMove:function(e){if(this._drag&&!this._drag.noChange){var t=e.touches,i=t[0];this._dragIndicatorAt(this,i.pageX,i.pageY),r.stop(e)}},_getInteractiveIndicator:function(){for(var e=0;e<this._indicatorData.length;e++){var t=this._indicatorData[e];if("gauge"==t.interactionMode&&!t.noChange)return t}return null}})});//# sourceMappingURL=_Gauge.js.map