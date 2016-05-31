//>>built
define("dojox/rpc/JsonRest",["dojo","dojox","dojox/json/ref","dojox/rpc/Rest"],function(e,t){function i(e,i,n,o){var s=i.ioArgs&&i.ioArgs.xhr&&i.ioArgs.xhr.getResponseHeader("Last-Modified");s&&r._timeStamps&&(r._timeStamps[o]=s);var l=e._schema&&e._schema.hrefProperty;return l&&(t.json.ref.refAttribute=l),n=n&&t.json.ref.resolveJson(n,{defaultId:o,index:r._index,timeStamps:s&&r._timeStamps,time:s,idPrefix:e._store.allowNoTrailingSlash?e.servicePath+"/":e.servicePath.replace(/[^\/]*$/,""),idAttribute:a.getIdAttribute(e),schemas:a.schemas,loader:a._loader,idAsRef:e.idAsRef,assignAbsoluteIds:!0}),t.json.ref.refAttribute="$ref",n}var a,n=[],r=t.rpc.Rest;return a=t.rpc.JsonRest={serviceClass:t.rpc.Rest,conflictDateHeader:"If-Unmodified-Since",commit:function(t){t=t||{};for(var i=[],o={},s=[],l=0;l<n.length;l++){var d=n[l],u=d.object,c=d.old;if((!t.service||!u&&!c||!(u||c).__id.indexOf(t.service.servicePath))&&d.save){if(delete u.__isDirty,u)if(c){var h;if((h=u.__id.match(/(.*)#.*/))&&(u=r._index[h[1]]),!(u.__id in o)){if(o[u.__id]=u,t.incrementalUpdates&&!h)var m=("function"==typeof t.incrementalUpdates?t.incrementalUpdates:function(){m={};for(var e in u)if(u.hasOwnProperty(e))u[e]!==c[e]&&(m[e]=u[e]);else if(c.hasOwnProperty(e))return null;return m})(u,c);m?i.push({method:"post",target:u,content:m}):i.push({method:"put",target:u,content:u})}}else{var f=a.getServiceAndId(u.__id).service,p=a.getIdAttribute(f);p in u&&!t.alwaysPostNewItems?i.push({method:"put",target:u,content:u}):i.push({method:"post",target:{__id:f.servicePath},content:u})}else c&&i.push({method:"delete",target:c});s.push(d),n.splice(l--,1)}}return e.connect(t,"onError",function(){if(t.revertOnError!==!1){var i=n;n=s;a.revert(),n=i}else e.forEach(s,function(e){a.changing(e.object,!e.object)})}),a.sendToServer(i,t),i},sendToServer:function(n,o){var s,l,d,u=e.xhr,c=n.length,h=this.conflictDateHeader;for(e.xhr=function(t,i){return i.headers=i.headers||{},i.headers.Transaction=n.length-1==s?"commit":"open",h&&d&&(i.headers[h]=d),l&&(i.headers["Content-ID"]="<"+l+">"),u.apply(e,arguments)},s=0;s<n.length;s++){var m=n[s];t.rpc.JsonRest._contentId=m.content&&m.content.__id;var f="post"==m.method;d="put"==m.method&&r._timeStamps[m.content.__id],d&&(r._timeStamps[m.content.__id]=new Date+""),l=f&&t.rpc.JsonRest._contentId;var p=a.getServiceAndId(m.target.__id),g=p.service,y=m.deferred=g[m.method](p.id.replace(/#/,""),t.json.ref.toJson(m.content,!1,g.servicePath,!0));!function(e,t,a){t.addCallback(function(s){try{var l=t.ioArgs.xhr&&t.ioArgs.xhr.getResponseHeader("Location");if(l){var d=l.match(/(^\w+:\/\/)/)&&l.indexOf(a.servicePath);l=d>0?l.substring(d):(a.servicePath+l).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3"),e.__id=l,r._index[l]=e}s=i(a,t,s,e&&e.__id)}catch(u){}return--c||o.onComplete&&o.onComplete.call(o.scope,n),s})}(m.content,y,g),y.addErrback(function(e){c=-1,o.onError.call(o.scope,e)})}e.xhr=u},getDirtyObjects:function(){return n},revert:function(e){for(var i=n.length;i>0;){i--;var a=n[i],r=a.object,o=a.old,s=t.data._getStoreForItem(r||o);if(!e||!r&&!o||!(r||o).__id.indexOf(e.servicePath)){if(r&&o){for(var l in o)o.hasOwnProperty(l)&&r[l]!==o[l]&&(s&&s.onSet(r,l,r[l],o[l]),r[l]=o[l]);for(l in r)o.hasOwnProperty(l)||(s&&s.onSet(r,l,r[l]),delete r[l])}else o?s&&s.onNew(o):s&&s.onDelete(r);delete(r||o).__isDirty,n.splice(i,1)}}},changing:function(e,t){if(e.__id){e.__isDirty=!0;for(var i=0;i<n.length;i++){var a=n[i];if(e==a.object)return void(t&&(a.object=!1,this._saveNotNeeded||(a.save=!0)))}var r=e instanceof Array?[]:{};for(i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);n.push({object:!t&&e,old:r,save:!this._saveNotNeeded})}},deleteObject:function(e){this.changing(e,!0)},getConstructor:function(i,o){if("string"==typeof i){var s=i;i=new t.rpc.Rest(i,!0),this.registerService(i,s,o)}return i._constructor?i._constructor:(i._constructor=function(o){function s(e){if(e){s(e["extends"]),l=e.properties;for(var t in l){var i=l[t];i&&"object"==typeof i&&"default"in i&&(u[t]=i["default"])}}e&&e.prototype&&e.prototype.initialize&&(d=!0,e.prototype.initialize.apply(u,c))}var l,d,u=this,c=arguments;s(i._schema),!d&&o&&"object"==typeof o&&e.mixin(u,o);var h=a.getIdAttribute(i);r._index[this.__id=this.__clientId=i.servicePath+(this[h]||Math.random().toString(16).substring(2,14)+"@"+(t.rpc.Client&&t.rpc.Client.clientId||"client"))]=this,t.json.schema&&l&&t.json.schema.mustBeValid(t.json.schema.validate(this,i._schema)),n.push({object:this,save:!0})},e.mixin(i._constructor,i._schema,{load:i}))},fetch:function(e){var t=a.getServiceAndId(e);return this.byId(t.service,t.id)},getIdAttribute:function(e){var t,i=e._schema;if(i&&!(t=i._idAttr))for(var a in i.properties)(i.properties[a].identity||"self"==i.properties[a].link)&&(i._idAttr=t=a);return t||"id"},getServiceAndId:function(e){var t="";for(var i in a.services)e.substring(0,i.length)==i&&i.length>=t.length&&(t=i);if(t)return{service:a.services[t],id:e.substring(t.length)};var n=e.match(/^(.*\/)([^\/]*)$/);return{service:new a.serviceClass(n[1],!0),id:n[2]}},services:{},schemas:{},registerService:function(e,t,i){t=e.servicePath=t||e.servicePath,e._schema=a.schemas[t]=i||e._schema||{},a.services[t]=e},byId:function(t,i){var a,n=r._index[(t.servicePath||"")+i];return n&&!n._loadObject?(a=new e.Deferred,a.callback(n),a):this.query(t,i)},query:function(e,t,a){var n=e(t,a);return n.addCallback(function(r){return r.nodeType&&r.cloneNode?r:i(e,n,r,"string"!=typeof t||a&&(a.start||a.count)?void 0:t)}),n},_loader:function(e){var t=a.getServiceAndId(this.__id),i=this;a.query(t.service,t.id).addBoth(function(t){t==i?(delete t.$ref,delete t._loadObject):i._loadObject=function(e){e(t)},e(t)})},isDirty:function(i,a){return i?i.__isDirty:a?e.some(n,function(e){return t.data._getStoreForItem(e.object||e.old)==a}):!!n.length}},t.rpc.JsonRest});//# sourceMappingURL=JsonRest.js.map