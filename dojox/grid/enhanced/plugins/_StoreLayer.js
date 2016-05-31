//>>built
define("dojox/grid/enhanced/plugins/_StoreLayer",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/_base/xhr"],function(e,t,i,a){var o=i.getObject("grid.enhanced.plugins",!0,dojox),r=function(e){for(var i=["reorder","sizeChange","normal","presentation"],a=i.length,o=e.length-1;o>=0;--o){var r=t.indexOf(i,e[o]);r>=0&&a>=r&&(a=r)}return a<i.length-1?i.slice(0,a+1):i},n=function(e){var t,i=this._layers,a=i.length;if(e){for(t=a-1;t>=0;--t)if(i[t].name()==e){i[t]._unwrap(i[t+1]);break}i.splice(t,1)}else for(t=a-1;t>=0;--t)i[t]._unwrap();return i.length||(delete this._layers,delete this.layer,delete this.unwrap,delete this.forEachLayer),this},s=function(e){var t,i=this._layers;if("undefined"==typeof e)return i.length;if("number"==typeof e)return i[e];for(t=i.length-1;t>=0;--t)if(i[t].name()==e)return i[t];return null},l=function(e,t){var i,a,o,r=this._layers.length;t?(i=0,a=r,o=1):(i=r-1,a=-1,o=-1);for(var n=i;n!=a;n+=o)if(e(this._layers[n],n)===!1)return n;return a};o.wrap=function(e,a,o,d){e._layers||(e._layers=[],e.layer=i.hitch(e,s),e.unwrap=i.hitch(e,n),e.forEachLayer=i.hitch(e,l));var u=r(o.tags);return t.some(e._layers,function(i,r){return t.some(i.tags,function(e){return t.indexOf(u,e)>=0})?!1:(e._layers.splice(r,0,o),o._wrap(e,a,d,i),!0)})||(e._layers.push(o),o._wrap(e,a,d)),e};var d=e("dojox.grid.enhanced.plugins._StoreLayer",null,{tags:["normal"],layerFuncName:"_fetch",constructor:function(){this._store=null,this._originFetch=null,this.__enabled=!0},initialize:function(e){},uninitialize:function(e){},invalidate:function(){},_wrap:function(e,t,a,o){this._store=e,this._funcName=t;var r=i.hitch(this,function(){return(this.enabled()?this[a||this.layerFuncName]:this.originFetch).apply(this,arguments)});o?(this._originFetch=o._originFetch,o._originFetch=r):(this._originFetch=e[t]||function(){},e[t]=r),this.initialize(e)},_unwrap:function(e){this.uninitialize(this._store),e?e._originFetch=this._originFetch:this._store[this._funcName]=this._originFetch,this._originFetch=null,this._store=null},enabled:function(e){return"undefined"!=typeof e&&(this.__enabled=!!e),this.__enabled},name:function(){if(!this.__name){var e=this.declaredClass.match(/(?:\.(?:_*)([^\.]+)Layer$)|(?:\.([^\.]+)$)/i);this.__name=e?(e[1]||e[2]).toLowerCase():this.declaredClass}return this.__name},originFetch:function(){return i.hitch(this._store,this._originFetch).apply(this,arguments)}}),u=e("dojox.grid.enhanced.plugins._ServerSideLayer",d,{constructor:function(e){e=e||{},this._url=e.url||"",this._isStateful=!!e.isStateful,this._onUserCommandLoad=e.onCommandLoad||function(){},this.__cmds={cmdlayer:this.name(),enable:!0},this.useCommands(this._isStateful)},enabled:function(e){var t=this.inherited(arguments);return this.__cmds.enable=this.__enabled,t},useCommands:function(e){return"undefined"!=typeof e&&(this.__cmds.cmdlayer=e&&this._isStateful?this.name():null),!!this.__cmds.cmdlayer},_fetch:function(e){return this.__cmds.cmdlayer?a.post({url:this._url||this._store.url,content:this.__cmds,load:i.hitch(this,function(t){this.onCommandLoad(t,e),this.originFetch(e)}),error:i.hitch(this,this.onCommandError)}):(this.onCommandLoad("",e),this.originFetch(e)),e},command:function(e,t){var i=this.__cmds;return null===t?delete i[e]:"undefined"!=typeof t&&(i[e]=t),i[e]},onCommandLoad:function(e,t){this._onUserCommandLoad(this.__cmds,t,e)},onCommandError:function(e){throw e}});return{_StoreLayer:d,_ServerSideLayer:u,wrap:o.wrap}});//# sourceMappingURL=_StoreLayer.js.map