//>>built
define("dojox/form/manager/_DisplayMixin",["dojo/_base/kernel","dojo/dom-style","dojo/_base/declare"],function(e,t,a){return a("dojox.form.manager._DisplayMixin",null,{gatherDisplayState:function(e){return this.inspectAttachedPoints(function(e,a){return"none"!=t.get(a,"display")},e)},show:function(e,a){return arguments.length<2&&(a=!0),this.inspectAttachedPoints(function(e,a,i){t.set(a,"display",i?"":"none")},e,a),this},hide:function(e){return this.show(e,!1)}})});//# sourceMappingURL=_DisplayMixin.js.map