//>>built
define("dijit/_AttachMixin",["require","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/mouse","dojo/on","dojo/touch","./_WidgetBase"],function(t,e,i,o,n,s,a,r,d){var h,l=n.delegate(r,{mouseenter:s.enter,mouseleave:s.leave,keypress:i._keypress}),c=o("dijit._AttachMixin",null,{constructor:function(){this._attachPoints=[],this._attachEvents=[]},buildRendering:function(){this.inherited(arguments),this._attachTemplateNodes(this.domNode),this._beforeFillContent()},_beforeFillContent:function(){},_attachTemplateNodes:function(t){for(var e=t;;)if(1==e.nodeType&&(this._processTemplateNode(e,function(t,e){return t.getAttribute(e)},this._attach)||this.searchContainerNode)&&e.firstChild)e=e.firstChild;else{if(e==t)return;for(;!e.nextSibling;)if(e=e.parentNode,e==t)return;e=e.nextSibling}},_processTemplateNode:function(t,e,i){var o=!0,s=this.attachScope||this,a=e(t,"dojoAttachPoint")||e(t,"data-dojo-attach-point");if(a)for(var r,d=a.split(/\s*,\s*/);r=d.shift();)n.isArray(s[r])?s[r].push(t):s[r]=t,o="containerNode"!=r,this._attachPoints.push(r);var h=e(t,"dojoAttachEvent")||e(t,"data-dojo-attach-event");if(h)for(var l,c=h.split(/\s*,\s*/),u=n.trim;l=c.shift();)if(l){var p=null;if(-1!=l.indexOf(":")){var f=l.split(":");l=u(f[0]),p=u(f[1])}else l=u(l);p||(p=l),this._attachEvents.push(i(t,l,n.hitch(s,p)))}return o},_attach:function(e,i,o){return i=i.replace(/^on/,"").toLowerCase(),i="dijitclick"==i?h||(h=t("./a11yclick")):l[i]||i,a(e,i,o)},_detachTemplateNodes:function(){var t=this.attachScope||this;e.forEach(this._attachPoints,function(e){delete t[e]}),this._attachPoints=[],e.forEach(this._attachEvents,function(t){t.remove()}),this._attachEvents=[]},destroyRendering:function(){this._detachTemplateNodes(),this.inherited(arguments)}});return n.extend(d,{dojoAttachEvent:"",dojoAttachPoint:""}),c});//# sourceMappingURL=_AttachMixin.js.map