//>>built
define("dojox/dtl/render/dom",["dojo/_base/lang","dojo/dom","../Context","../dom","../_base"],function(e,t,i,a,r){var o=e.getObject("render.dom",!0,r);return o.Render=function(e,i){this._tpl=i,this.domNode=t.byId(e)},e.extend(o.Render,{setAttachPoint:function(e){this.domNode=e},render:function(e,t,a){if(!this.domNode)throw new Error("You cannot use the Render object without specifying where you want to render it");this._tpl=t=t||this._tpl,a=a||t.getBuffer(),e=e||new i;var r=t.render(e,a).getParent();if(!r)throw new Error("Rendered template does not have a root node");this.domNode!==r&&(this.domNode.parentNode&&this.domNode.parentNode.replaceChild(r,this.domNode),this.domNode=r)}}),o});//# sourceMappingURL=dom.js.map