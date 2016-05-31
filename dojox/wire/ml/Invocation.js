//>>built
define("dojox/wire/ml/Invocation",["dojo","dijit","dojox","dojo/require!dojox/wire/ml/Action"],function(e,t,i){e.provide("dojox.wire.ml.Invocation"),e.require("dojox.wire.ml.Action"),e.declare("dojox.wire.ml.Invocation",i.wire.ml.Action,{object:"",method:"",topic:"",parameters:"",result:"",error:"",_run:function(){if(this.topic){var t=this._getParameters(arguments);try{e.publish(this.topic,t),this.onComplete()}catch(o){this.onError(o)}}else if(this.method){var r=this.object?i.wire.ml._getValue(this.object):e.global;if(!r)return;var t=this._getParameters(arguments),n=r[this.method];if(!n){if(n=r.callMethod,!n)return;t=[this.method,t]}try{var a=!1;if(r.getFeatures){var s=r.getFeatures();if("fetch"==this.method&&s["dojo.data.api.Read"]||"save"==this.method&&s["dojo.data.api.Write"]){var l=t[0];l.onComplete||(l.onComplete=function(){}),this.connect(l,"onComplete","onComplete"),l.onError||(l.onError=function(){}),this.connect(l,"onError","onError"),a=!0}}var d=n.apply(r,t);if(!a)if(d&&d instanceof e.Deferred){var u=this;d.addCallbacks(function(e){u.onComplete(e)},function(e){u.onError(e)})}else this.onComplete(d)}catch(o){this.onError(o)}}},onComplete:function(e){this.result&&i.wire.ml._setValue(this.result,e),this.error&&i.wire.ml._setValue(this.error,"")},onError:function(e){this.error&&(e&&e.message&&(e=e.message),i.wire.ml._setValue(this.error,e))},_getParameters:function(t){if(!this.parameters)return t;var o=[],r=this.parameters.split(",");if(1==r.length){var n=i.wire.ml._getValue(e.trim(r[0]),t);e.isArray(n)?o=n:o.push(n)}else for(var a in r)o.push(i.wire.ml._getValue(e.trim(r[a]),t));return o}})});//# sourceMappingURL=Invocation.js.map