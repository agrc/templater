//>>built
define("dojox/widget/rotator/ThumbnailController",["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/_base/event","dojo/aspect","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/query"],function(e,t,i,o,a,n,r,s,d){var l="dojoxRotatorThumb",h=l+"Selected";return e("dojox.widget.rotator.ThumbnailController",null,{rotator:null,constructor:function(e,t){i.mixin(this,e),this._domNode=t;var r=this.rotator;if(r){for(;t.firstChild;)t.removeChild(t.firstChild);for(var d=0;d<r.panes.length;d++){var c=r.panes[d].node,u=n.get(c,"thumbsrc")||n.get(c,"src"),m=n.get(c,"alt")||"";/img/i.test(c.tagName)&&!function(e){s.create("a",{classname:l+" "+l+e+" "+(e==r.idx?h:""),href:u,onclick:function(t){o.stop(t),r&&r.control.apply(r,["go",e])},title:m,innerHTML:'<img src="'+u+'" alt="'+m+'"/>'},t)}(d)}a.after(r,"onUpdate",i.hitch(this,"_onUpdate"),!0)}},destroy:function(){s.destroy(this._domNode)},_onUpdate:function(e){var t=this.rotator;if("onAfterTransition"==e){var i=d("."+l,this._domNode).removeClass(h);t.idx<i.length&&r.add(i[t.idx],h)}}})});//# sourceMappingURL=ThumbnailController.js.map