//>>built
define("dojox/treemap/ScaledLabel",["dojo/_base/declare","dojo/dom-geometry","dojo/dom-construct","dojo/dom-style"],function(e,t,i,a){return e("dojox.treemap.ScaledLabel",null,{onRendererUpdated:function(e){if("leaf"==e.kind){var i=e.renderer,n=a.get(i,"fontSize");a.set(i.firstChild,"fontSize",n),n=parseInt(n);for(var r=.75*t.getContentBox(i).w/t.getMarginBox(i.firstChild).w,o=t.getContentBox(i).h/t.getMarginBox(i.firstChild).h,s=t.getContentBox(i).w-t.getMarginBox(i.firstChild).w,l=t.getContentBox(i).h-t.getMarginBox(i.firstChild).h,d=Math.floor(n*Math.min(r,o));l>0&&s>0;)a.set(i.firstChild,"fontSize",d+"px"),s=t.getContentBox(i).w-t.getMarginBox(i.firstChild).w,l=t.getContentBox(i).h-t.getMarginBox(i.firstChild).h,n=d,d+=1;(0>l||0>s)&&a.set(i.firstChild,"fontSize",n+"px")}},createRenderer:function(e,t,n){var r=this.inherited(arguments);if("leaf"==n){var o=i.create("div");a.set(o,{position:"absolute",width:"auto"}),i.place(o,r)}return r},styleRenderer:function(e,t,i,n){"leaf"!=n?this.inherited(arguments):(a.set(e,"background",this.getColorForItem(t).toHex()),e.firstChild.innerHTML=this.getLabelForItem(t))}})});//# sourceMappingURL=ScaledLabel.js.map