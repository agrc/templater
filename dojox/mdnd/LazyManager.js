//>>built
define("dojox/mdnd/LazyManager",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dojo/dnd/common","dojo/dnd/Manager","./PureSource","dojo/_base/unload"],function(e,t,i,a,r,o,n,s,l){return t("dojox.mdnd.LazyManager",null,{constructor:function(){this._registry={},this._fakeSource=new l(r.create("div"),{copyOnly:!1}),this._fakeSource.startup(),e.addOnUnload(i.hitch(this,"destroy")),this.manager=s.manager()},getItem:function(e){var t=e.getAttribute("dndType");return{data:e.getAttribute("dndData")||e.innerHTML,type:t?t.split(/\s*,\s*/):["text"]}},startDrag:function(e,t){if(t=t||e.target){var i=this.manager,r=this.getItem(t);""==t.id&&o.set(t,"id",n.getUniqueId()),a.add(t,"dojoDndItem"),this._fakeSource.setItem(t.id,r),i.startDrag(this._fakeSource,[t],!1),i.onMouseMove(e)}},cancelDrag:function(){var e=this.manager;e.target=null,e.onMouseUp()},destroy:function(){this._fakeSource.destroy()}})});//# sourceMappingURL=LazyManager.js.map