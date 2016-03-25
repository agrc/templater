//>>built
define("dojox/charting/Element",["dojo/_base/array","dojo/dom-construct","dojo/_base/declare","dojox/gfx","dojox/gfx/shape"],function(e,t,i,a,r){return i("dojox.charting.Element",null,{chart:null,group:null,htmlElements:null,dirty:!0,renderingOptions:null,constructor:function(e,t){this.chart=e,this.group=null,this.htmlElements=[],this.dirty=!0,this.trailingSymbol="...",this._events=[],t&&t.renderingOptions&&(this.renderingOptions=t.renderingOptions)},purgeGroup:function(){if(this.destroyHtmlElements(),this.group){this.getGroup().removeShape();var i=this.getGroup().children;if(r.dispose)for(var a=0;a<i.length;++a)r.dispose(i[a],!0);this.getGroup().rawNode&&t.empty(this.getGroup().rawNode),this.getGroup().clear(),r.dispose&&r.dispose(this.getGroup(),!0),this.getGroup()!=this.group&&(this.group.rawNode&&t.empty(this.group.rawNode),this.group.clear(),r.dispose&&r.dispose(this.group,!0)),this.group=null}return this.dirty=!0,this._events.length&&(e.forEach(this._events,function(e){e.shape.disconnect(e.handle)}),this._events=[]),this},cleanGroup:function(e){if(this.destroyHtmlElements(),e||(e=this.chart.surface),this.group){var i,a=this.getGroup().children;if(r.dispose)for(var n=0;n<a.length;++n)r.dispose(a[n],!0);this.getGroup().rawNode&&(i=this.getGroup().bgNode,t.empty(this.getGroup().rawNode)),this.getGroup().clear(),i&&this.getGroup().rawNode.appendChild(i)}else if(this.group=e.createGroup(),this.renderingOptions&&this.group.rawNode&&"http://www.w3.org/2000/svg"==this.group.rawNode.namespaceURI)for(var o in this.renderingOptions)this.group.rawNode.setAttribute(o,this.renderingOptions[o]);return this.dirty=!0,this},getGroup:function(){return this.group},destroyHtmlElements:function(){this.htmlElements.length&&(e.forEach(this.htmlElements,t.destroy),this.htmlElements=[])},destroy:function(){this.purgeGroup()},getTextWidth:function(e,t){return a._base._getTextBox(e,{font:t}).w||0},getTextWithLimitLength:function(e,t,i,a){if(!e||e.length<=0)return{text:"",truncated:a||!1};if(!i||0>=i)return{text:e,truncated:a||!1};var r=2,n=.618,o=e.substring(0,1)+this.trailingSymbol,d=this.getTextWidth(o,t);if(d>=i)return{text:o,truncated:!0};var s=this.getTextWidth(e,t);if(i>=s)return{text:e,truncated:a||!1};for(var l=0,u=e.length;u>l;){if(r>=u-l){for(;this.getTextWidth(e.substring(0,l)+this.trailingSymbol,t)>i;)l-=1;return{text:e.substring(0,l)+this.trailingSymbol,truncated:!0}}var c=l+Math.round((u-l)*n),f=this.getTextWidth(e.substring(0,c),t);i>f?(l=c,u=u):(l=l,u=c)}},getTextWithLimitCharCount:function(e,t,i,a){return!e||e.length<=0?{text:"",truncated:a||!1}:!i||0>=i||e.length<=i?{text:e,truncated:a||!1}:{text:e.substring(0,i)+this.trailingSymbol,truncated:!0}},_plotFill:function(e,t,i){if(!e||!e.type||!e.space)return e;var r,n=e.space;switch(e.type){case"linear":"plot"!==n&&"shapeX"!==n&&"shapeY"!==n||(e=a.makeParameters(a.defaultLinearGradient,e),e.space=n,"plot"!==n&&"shapeX"!==n||(r=t.height-i.t-i.b,e.y1=i.t+r*e.y1/100,e.y2=i.t+r*e.y2/100),"plot"!==n&&"shapeY"!==n||(r=t.width-i.l-i.r,e.x1=i.l+r*e.x1/100,e.x2=i.l+r*e.x2/100));break;case"radial":if("plot"===n){e=a.makeParameters(a.defaultRadialGradient,e),e.space=n;var o=t.width-i.l-i.r,d=t.height-i.t-i.b;e.cx=i.l+o*e.cx/100,e.cy=i.t+d*e.cy/100,e.r=e.r*Math.sqrt(o*o+d*d)/200}break;case"pattern":"plot"!==n&&"shapeX"!==n&&"shapeY"!==n||(e=a.makeParameters(a.defaultPattern,e),e.space=n,"plot"!==n&&"shapeX"!==n||(r=t.height-i.t-i.b,e.y=i.t+r*e.y/100,e.height=r*e.height/100),"plot"!==n&&"shapeY"!==n||(r=t.width-i.l-i.r,e.x=i.l+r*e.x/100,e.width=r*e.width/100))}return e},_shapeFill:function(e,t){if(!e||!e.space)return e;var i,r=e.space;switch(e.type){case"linear":"shape"!==r&&"shapeX"!==r&&"shapeY"!==r||(e=a.makeParameters(a.defaultLinearGradient,e),e.space=r,"shape"!==r&&"shapeX"!==r||(i=t.width,e.x1=t.x+i*e.x1/100,e.x2=t.x+i*e.x2/100),"shape"!==r&&"shapeY"!==r||(i=t.height,e.y1=t.y+i*e.y1/100,e.y2=t.y+i*e.y2/100));break;case"radial":"shape"===r&&(e=a.makeParameters(a.defaultRadialGradient,e),e.space=r,e.cx=t.x+t.width/2,e.cy=t.y+t.height/2,e.r=e.r*t.width/200);break;case"pattern":"shape"!==r&&"shapeX"!==r&&"shapeY"!==r||(e=a.makeParameters(a.defaultPattern,e),e.space=r,"shape"!==r&&"shapeX"!==r||(i=t.width,e.x=t.x+i*e.x/100,e.width=i*e.width/100),"shape"!==r&&"shapeY"!==r||(i=t.height,e.y=t.y+i*e.y/100,e.height=i*e.height/100))}return e},_pseudoRadialFill:function(e,t,i,r,n){if(!e||"radial"!==e.type||"shape"!==e.space)return e;var o=e.space;if(e=a.makeParameters(a.defaultRadialGradient,e),e.space=o,arguments.length<4)return e.cx=t.x,e.cy=t.y,e.r=e.r*i/100,e;var d=arguments.length<5?r:(n+r)/2;return{type:"linear",x1:t.x,y1:t.y,x2:t.x+e.r*i*Math.cos(d)/100,y2:t.y+e.r*i*Math.sin(d)/100,colors:e.colors}}})});//# sourceMappingURL=Element.js.map