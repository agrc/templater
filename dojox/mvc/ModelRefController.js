//>>built
define("dojox/mvc/ModelRefController",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/Stateful","./_Controller"],function(e,t,i,a,o){return t("dojox.mvc.ModelRefController",o,{ownProps:null,_refModelProp:"model",_refInModelProp:"model",model:null,postscript:function(e,t){this._relTargetProp=(e||{})._refModelProp||this._refModelProp,this.inherited(arguments)},get:function(e){if(!this.hasControllerProperty(e)){var t=this[this._refModelProp];return t?t.get?t.get(e):t[e]:void 0}return this.inherited(arguments)},_set:function(e,t){if(!this.hasControllerProperty(e)){var i=this[this._refModelProp];return i&&(i.set?i.set(e,t):i[e]=t),this}return this.inherited(arguments)},watch:function(t,o){function n(e){l&&l.unwatch(),e&&i.isFunction(e.set)&&i.isFunction(e.watch)&&(l=e.watch.apply(e,(t?[t]:[]).concat([function(e,t,i){o.call(d,e,t,i)}])))}function r(i,a){var n={};t?n[t]=1:e.forEach([i,a],function(t){var i=t&&t.get("properties");if(i)e.forEach(i,function(e){d.hasControllerProperty(e)||(n[e]=1)});else for(var a in t)t.hasOwnProperty(a)&&!d.hasControllerProperty(a)&&(n[a]=1)});for(var r in n)o.call(d,r,i?i.get?i.get(r):i[r]:void 0,a?a.get?a.get(r):a[r]:void 0)}if(this.hasControllerProperty(t))return this.inherited(arguments);o||(o=t,t=null);var s=null,l=null,d=this;s=a.prototype.watch.call(this,this._refModelProp,function(e,t,i){t!==i&&(r(t,i),n(i))}),n(this.get(this._refModelProp));var h={};return h.unwatch=h.remove=function(){l&&(l.unwatch(),l=null),s&&(s.unwatch(),s=null)},h},hasControllerProperty:function(e){return"_watchCallbacks"==e||e==this._refModelProp||e==this._refInModelProp||e in(this.ownProps||{})||e in this.constructor.prototype||/^dojoAttach(Point|Event)$/i.test(e)}})});//# sourceMappingURL=ModelRefController.js.map