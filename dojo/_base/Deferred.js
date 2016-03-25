//>>built
define("dojo/_base/Deferred",["./kernel","../Deferred","../promise/Promise","../errors/CancelError","../has","./lang","../when"],function(e,t,i,o,n,r,s){var a=function(){},d=Object.freeze||function(){},l=e.Deferred=function(e){function s(e){if(u)throw new Error("This deferred has already been resolved");c=e,u=!0,h()}function h(){for(var e;!e&&v;){var i=v;v=v.next,(e=i.progress==a)&&(u=!1);var o=g?i.error:i.resolved;if(n("config-useDeferredInstrumentation")&&g&&t.instrumentRejected&&t.instrumentRejected(c,!!o),o)try{var s=o(c);if(s&&"function"==typeof s.then){s.then(r.hitch(i.deferred,"resolve"),r.hitch(i.deferred,"reject"),r.hitch(i.deferred,"progress"));continue}var d=e&&void 0===s;e&&!d&&(g=s instanceof Error),i.deferred[d&&g?"reject":"resolve"](d?c:s)}catch(l){i.deferred.reject(l)}else g?i.deferred.reject(c):i.deferred.resolve(c)}}var c,u,f,p,g,m,v,b=this.promise=new i;this.isResolved=b.isResolved=function(){return 0==p},this.isRejected=b.isRejected=function(){return 1==p},this.isFulfilled=b.isFulfilled=function(){return p>=0},this.isCanceled=b.isCanceled=function(){return f},this.resolve=this.callback=function(e){this.fired=p=0,this.results=[e,null],s(e)},this.reject=this.errback=function(e){g=!0,this.fired=p=1,n("config-useDeferredInstrumentation")&&t.instrumentRejected&&t.instrumentRejected(e,!!v),s(e),this.results=[null,e]},this.progress=function(e){for(var t=v;t;){var i=t.progress;i&&i(e),t=t.next}},this.addCallbacks=function(e,t){return this.then(e,t,a),this},b.then=this.then=function(e,t,i){var o=i==a?this:new l(b.cancel),n={resolved:e,error:t,progress:i,deferred:o};return v?m=m.next=n:v=m=n,u&&h(),o.promise};var _=this;b.cancel=this.cancel=function(){if(!u){var t=e&&e(_);u||(t instanceof Error||(t=new o(t)),t.log=!1,_.reject(t))}f=!0},d(b)};return r.extend(l,{addCallback:function(t){return this.addCallbacks(r.hitch.apply(e,arguments))},addErrback:function(t){return this.addCallbacks(null,r.hitch.apply(e,arguments))},addBoth:function(t){var i=r.hitch.apply(e,arguments);return this.addCallbacks(i,i)},fired:-1}),l.when=e.when=s,l});//# sourceMappingURL=Deferred.js.map