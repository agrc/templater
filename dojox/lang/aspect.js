//>>built
define("dojox/lang/aspect",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.lang.aspect"),function(){var t,a=e,o=i.lang.aspect,r=Array.prototype,n=[],s=function(){this.next_before=this.prev_before=this.next_around=this.prev_around=this.next_afterReturning=this.prev_afterReturning=this.next_afterThrowing=this.prev_afterThrowing=this,this.counter=0};a.extend(s,{add:function(e){var t=a.isFunction(e),i={advice:e,dynamic:t};return this._add(i,"before","",t,e),this._add(i,"around","",t,e),this._add(i,"after","Returning",t,e),this._add(i,"after","Throwing",t,e),++this.counter,i},_add:function(e,t,i,a,o){var r=t+i;if(a||o[t]||i&&o[r]){var n="next_"+r,s="prev_"+r;(e[s]=this[s])[n]=e,(e[n]=this)[s]=e}},remove:function(e){this._remove(e,"before"),this._remove(e,"around"),this._remove(e,"afterReturning"),this._remove(e,"afterThrowing"),--this.counter},_remove:function(e,t){var i="next_"+t,a="prev_"+t;e[i]&&(e[i][a]=e[a],e[a][i]=e[i])},isEmpty:function(){return!this.counter}});var l=function(){return function(){var e,i,a,s,l,d=arguments.callee,u=d.advices;t&&n.push(t),t={instance:this,joinPoint:d,depth:n.length,around:u.prev_around,dynAdvices:[],dynIndex:0};try{for(i=u.prev_before;i!=u;i=i.prev_before)i.dynamic?(t.dynAdvices.push(a=new i.advice(t)),(l=a.before)&&l.apply(a,arguments)):(l=i.advice,l.before.apply(l,arguments));try{e=(u.prev_around==u?d.target:o.proceed).apply(this,arguments)}catch(s){for(t.dynIndex=t.dynAdvices.length,i=u.next_afterThrowing;i!=u;i=i.next_afterThrowing)a=i.dynamic?t.dynAdvices[--t.dynIndex]:i.advice,(l=a.afterThrowing)&&l.call(a,s),(l=a.after)&&l.call(a);throw s}for(t.dynIndex=t.dynAdvices.length,i=u.next_afterReturning;i!=u;i=i.next_afterReturning)a=i.dynamic?t.dynAdvices[--t.dynIndex]:i.advice,(l=a.afterReturning)&&l.call(a,e),(l=a.after)&&l.call(a);var h=d._listeners;for(i in h)i in r||h[i].apply(this,arguments)}finally{for(i=0;i<t.dynAdvices.length;++i)a=t.dynAdvices[i],a.destroy&&a.destroy();t=n.length?n.pop():null}return e}};o.advise=function(e,t,i){"object"!=typeof e&&(e=e.prototype);var r=[];t instanceof Array||(t=[t]);for(var n=0;n<t.length;++n){var s=t[n];if(s instanceof RegExp)for(var l in e)a.isFunction(e[l])&&s.test(l)&&r.push(l);else a.isFunction(e[s])&&r.push(s)}return a.isArray(i)||(i=[i]),o.adviseRaw(e,r,i)},o.adviseRaw=function(e,t,i){if(!t.length||!i.length)return null;for(var a={},o=i.length,r=t.length-1;r>=0;--r){var n=t[r],d=e[n],u=new Array(o),h=d.advices;if(!h){var c=e[n]=l();c.target=d.target||d,c.targetName=n,c._listeners=d._listeners||[],c.advices=new s,h=c.advices}for(var m=0;o>m;++m)u[m]=h.add(i[m]);a[n]=u}return[e,a]},o.unadvise=function(e){if(e){var t=e[0],i=e[1];for(var o in i){for(var n=t[o],s=n.advices,l=i[o],d=l.length-1;d>=0;--d)s.remove(l[d]);if(s.isEmpty()){var u=!0,h=n._listeners;if(h.length)for(d in h)if(!(d in r)){u=!1;break}if(u)t[o]=n.target;else{var c=t[o]=a._listener.getDispatcher();c.target=n.target,c._listeners=h}}}}},o.getContext=function(){return t},o.getContextStack=function(){return n},o.proceed=function(){for(var e=t.joinPoint,i=e.advices,a=t.around;a!=i;a=t.around){if(t.around=a.prev_around,!a.dynamic)return a.advice.around.apply(a.advice,arguments);var o=t.dynAdvices[t.dynIndex++],r=o.around;if(r)return r.apply(o,arguments)}return e.target.apply(t.instance,arguments)}}()});//# sourceMappingURL=aspect.js.map