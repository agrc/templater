//>>built
define("dojox/form/manager/_ClassMixin",["dojo/_base/lang","dojo/_base/kernel","dojo/dom-class","./_Mixin","dojo/_base/declare"],function(e,t,i,a,o){var r=e.getObject("dojox.form.manager",!0),n=r.actionAdapter,d=r.inspectorAdapter;return o("dojox.form.manager._ClassMixin",null,{gatherClassState:function(e,t){var a=this.inspect(d(function(t,a){return i.contains(a,e)}),t);return a},addClass:function(e,t){return this.inspect(n(function(t,a){i.add(a,e)}),t),this},removeClass:function(e,t){return this.inspect(n(function(t,a){i.remove(a,e)}),t),this}})});//# sourceMappingURL=_ClassMixin.js.map