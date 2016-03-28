//>>built
define("dojox/mobile/RoundRectList",["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase"],function(e,t,i,a,r,n,o,s,l,d){return t("dojox.mobile.RoundRectList",[d,l,s],{transition:"slide",iconBase:"",iconPos:"",select:"",stateful:!1,syncWithViews:!1,editable:!1,tag:"ul",editableMixinClass:"dojox/mobile/_EditableListMixin",baseClass:"mblRoundRectList",filterBoxClass:"mblFilteredRoundRectListSearchBox",buildRendering:function(){this.domNode=this.srcNodeRef||n.create(this.tag),this.select&&(o.set(this.domNode,"role","listbox"),"multiple"===this.select&&o.set(this.domNode,"aria-multiselectable","true")),this.inherited(arguments)},postCreate:function(){if(this.editable&&require([this.editableMixinClass],a.hitch(this,function(e){t.safeMixin(this,new e)})),this.connect(this.domNode,"onselectstart",i.stop),this.syncWithViews){var r=function(t,i,a,r,n,o){var s=e.filter(this.getChildren(),function(e){return e.moveTo==="#"+t.id||e.moveTo===t.id})[0];s&&s.set("selected",!0)};this.subscribe("/dojox/mobile/afterTransitionIn",r),this.subscribe("/dojox/mobile/startView",r)}},resize:function(){e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},onCheckStateChanged:function(){},_setStatefulAttr:function(t){this._set("stateful",t),this.selectOne=t,e.forEach(this.getChildren(),function(e){e.setArrow&&e.setArrow()})},deselectItem:function(e){e.set("selected",!1)},deselectAll:function(){e.forEach(this.getChildren(),function(e){e.set("selected",!1)})},selectItem:function(e){e.set("selected",!0)}})});//# sourceMappingURL=RoundRectList.js.map