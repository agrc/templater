//>>built
define("dojox/io/scriptFrame",["dojo/main","dojo/io/script","dojo/io/iframe"],function(e,t,a){e.deprecated("dojox.io.scriptFrame","dojo.io.script now supports parallel requests without dojox.io.scriptFrame","2.0"),e.getObject("io.scriptFrame",!0,dojox),dojox.io.scriptFrame={_waiters:{},_loadedIds:{},_getWaiters:function(e){return this._waiters[e]||(this._waiters[e]=[])},_fixAttachUrl:function(e){},_loaded:function(i){var r=this._getWaiters(i);this._loadedIds[i]=!0,this._waiters[i]=null;for(var o=0;o<r.length;o++){var n=r[o];n.frameDoc=a.doc(e.byId(i)),t.attach(n.id,n.url,n.frameDoc)}}};var i=t._canAttach,r=dojox.io.scriptFrame;return t._canAttach=function(t){var o=t.args.frameDoc;if(o&&e.isString(o)){var n=e.byId(o),s=r._getWaiters(o);return n?r._loadedIds[o]?(t.frameDoc=a.doc(n),this.attach(t.id,t.url,t.frameDoc)):s.push(t):(s.push(t),a.create(o,dojox._scopeName+".io.scriptFrame._loaded('"+o+"');")),!1}return i.apply(this,arguments)},dojox.io.scriptFrame});//# sourceMappingURL=scriptFrame.js.map