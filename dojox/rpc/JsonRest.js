//>>built
define("dojox/rpc/JsonRest",["dojo","dojox","dojox/json/ref","dojox/rpc/Rest"],function(e,t){function i(e,i,o,r){var s=i.ioArgs&&i.ioArgs.xhr&&i.ioArgs.xhr.getResponseHeader("Last-Modified");s&&n._timeStamps&&(n._timeStamps[r]=s);var l=e._schema&&e._schema.hrefProperty;return l&&(t.json.ref.refAttribute=l),o=o&&t.json.ref.resolveJson(o,{defaultId:r,index:n._index,timeStamps:s&&n._timeStamps,time:s,idPrefix:e._store.allowNoTrailingSlash?e.servicePath+"/":e.servicePath.replace(/[^\/]*$/,""),idAttribute:a.getIdAttribute(e),schemas:a.schemas,loader:a._loader,idAsRef:e.idAsRef,assignAbsoluteIds:!0}),t.json.ref.refAttribute="$ref",o}var a,o=[],n=t.rpc.Rest;return a=t.rpc.JsonRest={serviceClass:t.rpc.Rest,conflictDateHeader:"If-Unmodified-Since",commit:function(t){t=t||{};for(var i=[],r={},s=[],l=0;l<o.length;l++){var d=o[l],c=d.object,u=d.old;if((!t.service||!c&&!u||!(c||u).__id.indexOf(t.service.servicePath))&&d.save){if(delete c.__isDirty,c)if(u){var h;if((h=c.__id.match(/(.*)#.*/))&&(c=n._index[h[1]]),!(c.__id in r)){if(r[c.__id]=c,t.incrementalUpdates&&!h)var m=("function"==typeof t.incrementalUpdates?t.incrementalUpdates:function(){m={};for(var e in c)if(c.hasOwnProperty(e))c[e]!==u[e]&&(m[e]=c[e]);else if(u.hasOwnProperty(e))return null;return m})(c,u);m?i.push({method:"post",target:c,content:m}):i.push({method:"put",target:c,content:c})}}else{var f=a.getServiceAndId(c.__id).service,p=a.getIdAttribute(f);p in c&&!t.alwaysPostNewItems?i.push({method:"put",target:c,content:c}):i.push({method:"post",target:{__id:f.servicePath},content:c})}else u&&i.push({method:"delete",target:u});s.push(d),o.splice(l--,1)}}return e.connect(t,"onError",function(){if(!1!==t.revertOnError){var i=o;o=s;a.revert(),o=i}else e.forEach(s,function(e){a.changing(e.object,!e.object)})}),a.sendToServer(i,t),i},sendToServer:function(o,r){var s,l,d,c=e.xhr,u=o.length,h=this.conflictDateHeader;for(e.xhr=function(t,i){return i.headers=i.headers||{},i.headers.Transaction=o.length-1==s?"commit":"open",h&&d&&(i.headers[h]=d),l&&(i.headers["Content-ID"]="<"+l+">"),c.apply(e,arguments)},s=0;s<o.length;s++){var m=o[s];t.rpc.JsonRest._contentId=m.content&&m.content.__id;var f="post"==m.method;d="put"==m.method&&n._timeStamps[m.content.__id],d&&(n._timeStamps[m.content.__id]=new Date+""),l=f&&t.rpc.JsonRest._contentId;var p=a.getServiceAndId(m.target.__id),g=p.service,v=m.deferred=g[m.method](p.id.replace(/#/,""),t.json.ref.toJson(m.content,!1,g.servicePath,!0));!function(e,t,a){t.addCallback(function(s){try{var l=t.ioArgs.xhr&&t.ioArgs.xhr.getResponseHeader("Location");if(l){var d=l.match(/(^\w+:\/\/)/)&&l.indexOf(a.servicePath);l=d>0?l.substring(d):(a.servicePath+l).replace(/^(.*\/)?(\w+:\/\/)|[^\/\.]+\/\.\.\/|^.*\/(\/)/,"$2$3"),e.__id=l,n._index[l]=e}s=i(a,t,s,e&&e.__id)}catch(e){}return--u||r.onComplete&&r.onComplete.call(r.scope,o),s})}(m.content,v,g),v.addErrback(function(e){u=-1,r.onError.call(r.scope,e)})}e.xhr=c},getDirtyObjects:function(){return o},revert:function(e){for(var i=o.length;i>0;){i--;var a=o[i],n=a.object,r=a.old,s=t.data._getStoreForItem(n||r);if(!e||!n&&!r||!(n||r).__id.indexOf(e.servicePath)){if(n&&r){for(var l in r)r.hasOwnProperty(l)&&n[l]!==r[l]&&(s&&s.onSet(n,l,n[l],r[l]),n[l]=r[l]);for(l in n)r.hasOwnProperty(l)||(s&&s.onSet(n,l,n[l]),delete n[l])}else r?s&&s.onNew(r):s&&s.onDelete(n);delete(n||r).__isDirty,o.splice(i,1)}}},changing:function(e,t){if(e.__id){e.__isDirty=!0;for(var i=0;i<o.length;i++){var a=o[i];if(e==a.object)return void(t&&(a.object=!1,this._saveNotNeeded||(a.save=!0)))}var n=e instanceof Array?[]:{};for(i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);o.push({object:!t&&e,old:n,save:!this._saveNotNeeded})}},deleteObject:function(e){this.changing(e,!0)},getConstructor:function(i,r){if("string"==typeof i){var s=i;i=new t.rpc.Rest(i,!0),this.registerService(i,s,r)}return i._constructor?i._constructor:(i._constructor=function(r){function s(e){if(e){s(e.extends),l=e.properties;for(var t in l){var i=l[t];i&&"object"==typeof i&&"default"in i&&(c[t]=i.default)}}e&&e.prototype&&e.prototype.initialize&&(d=!0,e.prototype.initialize.apply(c,u))}var l,d,c=this,u=arguments;s(i._schema),!d&&r&&"object"==typeof r&&e.mixin(c,r);var h=a.getIdAttribute(i);n._index[this.__id=this.__clientId=i.servicePath+(this[h]||Math.random().toString(16).substring(2,14)+"@"+(t.rpc.Client&&t.rpc.Client.clientId||"client"))]=this,t.json.schema&&l&&t.json.schema.mustBeValid(t.json.schema.validate(this,i._schema)),o.push({object:this,save:!0})},e.mixin(i._constructor,i._schema,{load:i}))},fetch:function(e){var t=a.getServiceAndId(e);return this.byId(t.service,t.id)},getIdAttribute:function(e){var t,i=e._schema;if(i&&!(t=i._idAttr))for(var a in i.properties)(i.properties[a].identity||"self"==i.properties[a].link)&&(i._idAttr=t=a);return t||"id"},getServiceAndId:function(e){var t="";for(var i in a.services)e.substring(0,i.length)==i&&i.length>=t.length&&(t=i);if(t)return{service:a.services[t],id:e.substring(t.length)};var o=e.match(/^(.*\/)([^\/]*)$/);return{service:new a.serviceClass(o[1],!0),id:o[2]}},services:{},schemas:{},registerService:function(e,t,i){t=e.servicePath=t||e.servicePath,e._schema=a.schemas[t]=i||e._schema||{},a.services[t]=e},byId:function(t,i){var a,o=n._index[(t.servicePath||"")+i];return o&&!o._loadObject?(a=new e.Deferred,a.callback(o),a):this.query(t,i)},query:function(e,t,a){var o=e(t,a);return o.addCallback(function(n){return n.nodeType&&n.cloneNode?n:i(e,o,n,"string"!=typeof t||a&&(a.start||a.count)?void 0:t)}),o},_loader:function(e){var t=a.getServiceAndId(this.__id),i=this;a.query(t.service,t.id).addBoth(function(t){t==i?(delete t.$ref,delete t._loadObject):i._loadObject=function(e){e(t)},e(t)})},isDirty:function(i,a){return i?i.__isDirty:a?e.some(o,function(e){return t.data._getStoreForItem(e.object||e.old)==a}):!!o.length}},t.rpc.JsonRest});//# sourceMappingURL=JsonRest.js.map