//>>built
define("dojox/data/restListener",["dojo","dijit","dojox"],function(e,t,a){e.provide("dojox.data.restListener"),a.data.restListener=function(e){var t=e.channel,i=a.rpc.JsonRest,r=i.getServiceAndId(t).service,o=a.json.ref.resolveJson(e.result,{defaultId:"put"==e.event&&t,index:a.rpc.Rest._index,idPrefix:r.servicePath.replace(/[^\/]*$/,""),idAttribute:i.getIdAttribute(r),schemas:i.schemas,loader:i._loader,assignAbsoluteIds:!0}),n=a.rpc.Rest._index&&a.rpc.Rest._index[t],d="on"+e.event.toLowerCase(),l=r&&r._store;if(n&&n[d])return void n[d](o);if(l)switch(d){case"onpost":l.onNew(o);break;case"ondelete":l.onDelete(n)}}});//# sourceMappingURL=restListener.js.map