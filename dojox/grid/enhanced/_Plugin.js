//>>built
define("dojox/grid/enhanced/_Plugin",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/_base/connect","../EnhancedGrid"],function(e,t,a,i,r){return a("dojox.grid.enhanced._Plugin",null,{name:"plugin",grid:null,option:{},_connects:[],_subscribes:[],privates:{},constructor:function(e,a){this.grid=e,this.option=a,this._connects=[],this._subscribes=[],this.privates=t.mixin({},dojox.grid.enhanced._Plugin.prototype),this.init()},init:function(){},onPreInit:function(){},onPostInit:function(){},onStartUp:function(){},connect:function(e,t,a){var i=r.connect(e,t,this,a);return this._connects.push(i),i},disconnect:function(e){i.some(this._connects,function(t,a,i){return t==e&&(r.disconnect(e),i.splice(a,1),!0)})},subscribe:function(e,t){var a=r.subscribe(e,this,t);return this._subscribes.push(a),a},unsubscribe:function(e){i.some(this._subscribes,function(t,a,i){return t==e&&(r.unsubscribe(e),i.splice(a,1),!0)})},onSetStore:function(e){},destroy:function(){i.forEach(this._connects,r.disconnect),i.forEach(this._subscribes,r.unsubscribe),delete this._connects,delete this._subscribes,delete this.option,delete this.privates}})});//# sourceMappingURL=_Plugin.js.map