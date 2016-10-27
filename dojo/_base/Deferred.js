//>>built
define("dojo/_base/Deferred",["./kernel","../Deferred","../promise/Promise","../errors/CancelError","../has","./lang","../when"],function(e,t,i,n,o,r,s){var a=function(){},d=Object.freeze||function(){},l=e.Deferred=function(e){function s(e){if(u)throw new Error("This deferred has already been resolved");h=e,u=!0,c()}function c(){for(var e;!e&&v;){var i=v;v=v.next,(e=i.progress==a)&&(u=!1);var n=g?i.error:i.resolved;if(o("config-useDeferredInstrumentation")&&g&&t.instrumentRejected&&t.instrumentRejected(h,!!n),n)try{var s=n(h);if(s&&"function"==typeof s.then){s.then(r.hitch(i.deferred,"resolve"),r.hitch(i.deferred,"reject"),r.hitch(i.deferred,"progress"));continue}var d=e&&void 0===s;e&&!d&&(g=s instanceof Error),i.deferred[d&&g?"reject":"resolve"](d?h:s)}catch(l){i.deferred.reject(l)}else g?i.deferred.reject(h):i.deferred.resolve(h)}}var h,u,f,p,g,m,v,b=this.promise=new i;this.isResolved=b.isResolved=function(){return 0==p},this.isRejected=b.isRejected=function(){return 1==p},this.isFulfilled=b.isFulfilled=function(){return p>=0},this.isCanceled=b.isCanceled=function(){return f},this.resolve=this.callback=function(e){this.fired=p=0,this.results=[e,null],s(e)},this.reject=this.errback=function(e){g=!0,this.fired=p=1,o("config-useDeferredInstrumentation")&&t.instrumentRejected&&t.instrumentRejected(e,!!v),s(e),this.results=[null,e]},this.progress=function(e){for(var t=v;t;){var i=t.progress;i&&i(e),t=t.next}},this.addCallbacks=function(e,t){return this.then(e,t,a),this},b.then=this.then=function(e,t,i){var n=i==a?this:new l(b.cancel),o={resolved:e,error:t,progress:i,deferred:n};return v?m=m.next=o:v=m=o,u&&c(),n.promise};var _=this;b.cancel=this.cancel=function(){if(!u){var t=e&&e(_);u||(t instanceof Error||(t=new n(t)),t.log=!1,_.reject(t))}f=!0},d(b)};return r.extend(l,{addCallback:function(t){return this.addCallbacks(r.hitch.apply(e,arguments))},addErrback:function(t){return this.addCallbacks(null,r.hitch.apply(e,arguments))},addBoth:function(t){var i=r.hitch.apply(e,arguments);return this.addCallbacks(i,i)},fired:-1}),l.when=e.when=s,l});//# sourceMappingURL=Deferred.js.map