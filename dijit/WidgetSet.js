//>>built
define("dijit/WidgetSet",["dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","./registry"],function(t,e,o,n){var i=e("dijit.WidgetSet",null,{constructor:function(){this._hash={},this.length=0},add:function(t){if(this._hash[t.id])throw new Error("Tried to register widget with id=="+t.id+" but that id is already registered");this._hash[t.id]=t,this.length++},remove:function(t){this._hash[t]&&(delete this._hash[t],this.length--)},forEach:function(t,e){e=e||o.global;var n,i=0;for(n in this._hash)t.call(e,this._hash[n],i++,this._hash);return this},filter:function(t,e){e=e||o.global;var n,a=new i,r=0;for(n in this._hash){var d=this._hash[n];t.call(e,d,r++,this._hash)&&a.add(d)}return a},byId:function(t){return this._hash[t]},byClass:function(t){var e,o,n=new i;for(e in this._hash)o=this._hash[e],o.declaredClass==t&&n.add(o);return n},toArray:function(){var t=[];for(var e in this._hash)t.push(this._hash[e]);return t},map:function(e,o){return t.map(this.toArray(),e,o)},every:function(t,e){e=e||o.global;var n,i=0;for(n in this._hash)if(!t.call(e,this._hash[n],i++,this._hash))return!1;return!0},some:function(t,e){e=e||o.global;var n,i=0;for(n in this._hash)if(t.call(e,this._hash[n],i++,this._hash))return!0;return!1}});return t.forEach(["forEach","filter","byClass","map","every","some"],function(t){n[t]=i.prototype[t]}),i});//# sourceMappingURL=WidgetSet.js.map