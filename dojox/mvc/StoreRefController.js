//>>built
define("dojox/mvc/StoreRefController",["dojo/_base/declare","dojo/_base/lang","dojo/when","./getStateful","./ModelRefController"],function(e,t,i,a,r){return e("dojox.mvc.StoreRefController",r,{store:null,getStatefulOptions:null,_refSourceModelProp:"model",queryStore:function(e,r){if((this.store||{}).query){this._queryObserveHandle&&this._queryObserveHandle.cancel();var o=this,n=this.store.query(e,r),s=i(n,function(e){return o._beingDestroyed?void 0:(e=a(e,o.getStatefulOptions),o.set(o._refSourceModelProp,e),e)});s.then&&(s=t.delegate(s));for(var l in n)isNaN(l)&&n.hasOwnProperty(l)&&t.isFunction(n[l])&&(s[l]=n[l]);return s}},getStore:function(e,t){if((this.store||{}).get){this._queryObserveHandle&&this._queryObserveHandle.cancel();var r=this;return result=i(this.store.get(e,t),function(e){return r._beingDestroyed?void 0:(e=a(e,r.getStatefulOptions),r.set(r._refSourceModelProp,e),e)}),result}},putStore:function(e,t){return(this.store||{}).put?this.store.put(e,t):void 0},addStore:function(e,t){return(this.store||{}).add?this.store.add(e,t):void 0},removeStore:function(e,t){return(this.store||{}).remove?this.store.remove(e,t):void 0}})});//# sourceMappingURL=StoreRefController.js.map