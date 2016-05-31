//>>built
define("dojox/mobile/_ContentPaneMixin",["dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/window","dojo/_base/xhr","./_ExecScriptMixin","./ProgressIndicator","./lazyLoadUtils"],function(e,t,i,r,a,o,n,s){return e("dojox.mobile._ContentPaneMixin",o,{href:"",lazy:!1,content:"",parseOnLoad:!0,prog:!0,executeScripts:!0,constructor:function(){this.prog&&(this._p=n.getInstance())},loadHandler:function(e){this.set("content",e)},errorHandler:function(e){this._p&&this._p.stop()},load:function(){this.lazy=!1,this.set("href",this.href)},onLoad:function(){return!0},_setHrefAttr:function(e){if(this.lazy||!e||e===this._loaded)return this.lazy=!1,null;var t=this._p;return t&&(r.body().appendChild(t.domNode),t.start()),this._set("href",e),this._loaded=e,a.get({url:e,handleAs:"text",load:i.hitch(this,"loadHandler"),error:i.hitch(this,"errorHandler")})},_setContentAttr:function(e){if(this.destroyDescendants(),"object"==typeof e?this.containerNode.appendChild(e):(this.executeScripts&&(e=this.execScript(e)),this.containerNode.innerHTML=e),this.parseOnLoad){var i=this;return t.when(s.instantiateLazyWidgets(i.containerNode),function(){return i._p&&i._p.stop(),i.onLoad()})}return this._p&&this._p.stop(),this.onLoad()}})});//# sourceMappingURL=_ContentPaneMixin.js.map