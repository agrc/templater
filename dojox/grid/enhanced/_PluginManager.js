//>>built
define("dojox/grid/enhanced/_PluginManager",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","./_Events","./_FocusManager","../util"],function(e,t,a,i,r,n,o,s){var l=a("dojox.grid.enhanced._PluginManager",null,{_options:null,_plugins:null,_connects:null,constructor:function(e){this.grid=e,this._store=e.store,this._options={},this._plugins=[],this._connects=[],this._parseProps(this.grid.plugins),e.connect(e,"_setStore",t.hitch(this,function(e){this._store!==e&&(this.forEach("onSetStore",[e,this._store]),this._store=e)}))},startup:function(){this.forEach("onStartUp")},preInit:function(){this.grid.focus.destroy(),this.grid.focus=new o(this.grid),new n(this.grid),this._init(!0),this.forEach("onPreInit")},postInit:function(){if(this._init(!1),i.forEach(this.grid.views.views,this._initView,this),this._connects.push(r.connect(this.grid.views,"addView",t.hitch(this,this._initView))),this._plugins.length>0){var e=this.grid.edit;e&&(e.styleRow=function(e){})}this.forEach("onPostInit")},forEach:function(e,t){i.forEach(this._plugins,function(a){a&&a[e]&&a[e].apply(a,t?t:[])})},_parseProps:function(e){if(e){var a,i={},r=this._options,n=this.grid,o=l.registry;for(a in e)e[a]&&this._normalize(a,e,o,i);r.dnd&&(r.columnReordering=!1),t.mixin(n,r)}},_normalize:function(e,a,r,n){if(!r[e])throw new Error("Plugin "+e+" is required.");if(n[e])throw new Error("Recursive cycle dependency is not supported.");var o=this._options;if(o[e])return o[e];n[e]=!0,o[e]=t.mixin({},r[e],t.isObject(a[e])?a[e]:{});var s=o[e].dependency;return s&&(t.isArray(s)||(s=o[e].dependency=[s]),i.forEach(s,function(e){if(!this._normalize(e,a,r,n))throw new Error("Plugin "+e+" is required.")},this)),delete n[e],o[e]},_init:function(e){var t,a,i=this._options;for(t in i)a=i[t].preInit,(e?a:!a)&&i[t]["class"]&&!this.pluginExisted(t)&&this.loadPlugin(t)},loadPlugin:function(e){var t=this._options[e];if(!t)return null;var a=this.getPlugin(e);if(a)return a;var r=t.dependency;i.forEach(r,function(e){if(!this.loadPlugin(e))throw new Error("Plugin "+e+" is required.")},this);var n=t["class"];return delete t["class"],a=new this.getPluginClazz(n)(this.grid,t),this._plugins.push(a),a},_initView:function(e){e&&(s.funnelEvents(e.contentNode,e,"doContentEvent",["mouseup","mousemove"]),s.funnelEvents(e.headerNode,e,"doHeaderEvent",["mouseup"]))},pluginExisted:function(e){return!!this.getPlugin(e)},getPlugin:function(e){var t=this._plugins;e=e.toLowerCase();for(var a=0,i=t.length;i>a;a++)if(e==t[a].name.toLowerCase())return t[a];return null},getPluginClazz:function(e){if(t.isFunction(e))return e;var a='Please make sure Plugin "'+e+'" is existed.';try{var i=t.getObject(e);if(!i)throw new Error(a);return i}catch(r){throw new Error(a)}},isFixedCell:function(e){return e&&(e.isRowSelector||e.fixedPos)},destroy:function(){i.forEach(this._connects,r.disconnect),this.forEach("destroy"),this.grid.unwrap&&this.grid.unwrap(),delete this._connects,delete this._plugins,delete this._options}});return l.registerPlugin=function(e,a){if(e){var i=l;i.registry=i.registry||{},i.registry[e.prototype.name]=t.mixin({"class":e},a?a:{})}},l});//# sourceMappingURL=_PluginManager.js.map