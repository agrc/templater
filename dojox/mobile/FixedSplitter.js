//>>built
define("dojox/mobile/FixedSplitter",["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has","./common"],function(e,t,i,a,o,n,r,s,l){return t("dojox.mobile.FixedSplitter",[s,r,n],{orientation:"H",variablePane:-1,screenSizeAware:!1,screenSizeAwareClass:"dojox/mobile/ScreenSizeAware",baseClass:"mblFixedSplitter",startup:function(){if(!this._started){a.add(this.domNode,this.baseClass+this.orientation);var e,t=this.getParent();if(!t||!t.resize){var i=this;e=function(){i.defer(function(){i.resize()})}}this.screenSizeAware?require([this.screenSizeAwareClass],function(t){t.getInstance(),e&&e()}):e&&e(),this.inherited(arguments)}},resize:function(){var t,a,n,r=o.getPadExtents(this.domNode).t,s="H"===this.orientation?"w":"h",d="H"===this.orientation?"l":"t",c={},u={},h=[],m=0,f=0,g=e.filter(this.domNode.childNodes,function(e){return 1==e.nodeType}),p=-1==this.variablePane?g.length-1:this.variablePane;for(t=0;t<g.length;t++)t!=p&&(h[t]=o.getMarginBox(g[t])[s],f+=h[t]);"V"==this.orientation&&"BODY"==this.domNode.parentNode.tagName&&1==e.filter(i.body().childNodes,function(e){return 1==e.nodeType}).length&&(n=i.global.innerHeight||i.doc.documentElement.clientHeight);var y=(n||o.getMarginBox(this.domNode)[s])-f;if("V"===this.orientation&&(y-=r),u[s]=h[p]=y,a=g[p],o.setMarginBox(a,u),a.style["H"===this.orientation?"height":"width"]="",l("dojo-bidi")&&"H"==this.orientation&&!this.isLeftToRight())for(m=y,t=g.length-1;t>=0;t--)a=g[t],c[d]=y-m,o.setMarginBox(a,c),"H"===this.orientation?a.style.top=r+"px":a.style.left="",m-=h[t];else for("V"===this.orientation&&(m=m?m+r:r),t=0;t<g.length;t++)a=g[t],c[d]=m,o.setMarginBox(a,c),"H"===this.orientation?a.style.top=r+"px":a.style.left="",m+=h[t];e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},_setOrientationAttr:function(e){var t=this.baseClass;a.replace(this.domNode,t+e,t+this.orientation),this.orientation=e,this._started&&this.resize()}})});//# sourceMappingURL=FixedSplitter.js.map