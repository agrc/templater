//>>built
define("dojox/mvc/_DataBindingExtension",["dojo/_base/array","dojo/aspect","dojo/_base/lang","dijit/_WidgetBase","./_DataBindingMixin"],function(e,t,i,a,o){i.extend(a,new o),t.before(a.prototype,"startup",function(){this._dbstartup()}),t.before(a.prototype,"destroy",function(){this._modelWatchHandles&&e.forEach(this._modelWatchHandles,function(e){e.unwatch()}),this._viewWatchHandles&&e.forEach(this._viewWatchHandles,function(e){e.unwatch()})})});//# sourceMappingURL=_DataBindingExtension.js.map