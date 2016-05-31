//>>built
define("dojox/mobile/FixedSplitter",["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has","./common"],function(e,t,i,a,o,r,n,s,d){return t("dojox.mobile.FixedSplitter",[s,n,r],{orientation:"H",variablePane:-1,screenSizeAware:!1,screenSizeAwareClass:"dojox/mobile/ScreenSizeAware",baseClass:"mblFixedSplitter",startup:function(){if(!this._started){a.add(this.domNode,this.baseClass+this.orientation);var e,t=this.getParent();if(!t||!t.resize){var i=this;e=function(){i.defer(function(){i.resize()})}}this.screenSizeAware?require([this.screenSizeAwareClass],function(t){t.getInstance(),e&&e()}):e&&e(),this.inherited(arguments)}},resize:function(){var t,a,r,n=o.getPadExtents(this.domNode).t,s="H"===this.orientation?"w":"h",l="H"===this.orientation?"l":"t",h={},u={},c=[],m=0,f=0,g=e.filter(this.domNode.childNodes,function(e){return 1==e.nodeType}),p=-1==this.variablePane?g.length-1:this.variablePane;for(t=0;t<g.length;t++)t!=p&&(c[t]=o.getMarginBox(g[t])[s],f+=c[t]);"V"==this.orientation&&"BODY"==this.domNode.parentNode.tagName&&1==e.filter(i.body().childNodes,function(e){return 1==e.nodeType}).length&&(r=i.global.innerHeight||i.doc.documentElement.clientHeight);var y=(r||o.getMarginBox(this.domNode)[s])-f;if("V"===this.orientation&&(y-=n),u[s]=c[p]=y,a=g[p],o.setMarginBox(a,u),a.style["H"===this.orientation?"height":"width"]="",d("dojo-bidi")&&"H"==this.orientation&&!this.isLeftToRight())for(m=y,t=g.length-1;t>=0;t--)a=g[t],h[l]=y-m,o.setMarginBox(a,h),"H"===this.orientation?a.style.top=n+"px":a.style.left="",m-=c[t];else for("V"===this.orientation&&(m=m?m+n:n),t=0;t<g.length;t++)a=g[t],h[l]=m,o.setMarginBox(a,h),"H"===this.orientation?a.style.top=n+"px":a.style.left="",m+=c[t];e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},_setOrientationAttr:function(e){var t=this.baseClass;a.replace(this.domNode,t+e,t+this.orientation),this.orientation=e,this._started&&this.resize()}})});//# sourceMappingURL=FixedSplitter.js.map