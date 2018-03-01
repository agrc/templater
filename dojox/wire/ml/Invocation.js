//>>built
define("dojox/wire/ml/Invocation",["dojo","dijit","dojox","dojo/require!dojox/wire/ml/Action"],function(e,t,i){e.provide("dojox.wire.ml.Invocation"),e.require("dojox.wire.ml.Action"),e.declare("dojox.wire.ml.Invocation",i.wire.ml.Action,{object:"",method:"",topic:"",parameters:"",result:"",error:"",_run:function(){if(this.topic){var t=this._getParameters(arguments);try{e.publish(this.topic,t),this.onComplete()}catch(e){this.onError(e)}}else if(this.method){var a=this.object?i.wire.ml._getValue(this.object):e.global;if(!a)return;var t=this._getParameters(arguments),o=a[this.method];if(!o){if(!(o=a.callMethod))return;t=[this.method,t]}try{var r=!1;if(a.getFeatures){var n=a.getFeatures();if("fetch"==this.method&&n["dojo.data.api.Read"]||"save"==this.method&&n["dojo.data.api.Write"]){var s=t[0];s.onComplete||(s.onComplete=function(){}),this.connect(s,"onComplete","onComplete"),s.onError||(s.onError=function(){}),this.connect(s,"onError","onError"),r=!0}}var l=o.apply(a,t);if(!r)if(l&&l instanceof e.Deferred){var d=this;l.addCallbacks(function(e){d.onComplete(e)},function(e){d.onError(e)})}else this.onComplete(l)}catch(e){this.onError(e)}}},onComplete:function(e){this.result&&i.wire.ml._setValue(this.result,e),this.error&&i.wire.ml._setValue(this.error,"")},onError:function(e){this.error&&(e&&e.message&&(e=e.message),i.wire.ml._setValue(this.error,e))},_getParameters:function(t){if(!this.parameters)return t;var a=[],o=this.parameters.split(",");if(1==o.length){var r=i.wire.ml._getValue(e.trim(o[0]),t);e.isArray(r)?a=r:a.push(r)}else for(var n in o)a.push(i.wire.ml._getValue(e.trim(o[n]),t));return a}})});//# sourceMappingURL=Invocation.js.map