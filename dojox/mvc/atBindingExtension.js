//>>built
define("dojox/mvc/atBindingExtension",["dojo/aspect","dojo/_base/array","dojo/_base/lang","dijit/_WidgetBase","./_atBindingMixin","dijit/registry"],function(e,t,i,a,o){return function(a){return t.forEach(arguments,function(t){t.dataBindAttr||(i._mixin(t,o.mixin),e.before(t,"postscript",function(e,t){this._dbpostscript(e,t)}),e.before(t,"startup",function(){this._started||this._startAtWatchHandles()}),e.before(t,"destroy",function(){this._stopAtWatchHandles()}),e.around(t,"set",function(e){return function(t,a){return t==o.prototype.dataBindAttr?this._setBind(a):"dojox.mvc.at"==(a||{}).atsignature?this._setAtWatchHandle(t,a):e.apply(this,i._toArray(arguments))}}))}),arguments}});//# sourceMappingURL=atBindingExtension.js.map