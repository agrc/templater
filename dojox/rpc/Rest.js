//>>built
define("dojox/rpc/Rest",["dojo","dojox"],function(e,t){function i(e,t,i,a){return e.addCallback(function(t){return e.ioArgs.xhr&&i&&(i=e.ioArgs.xhr.getResponseHeader("Content-Range"),e.fullLength=i&&(i=i.match(/\/(.*)/))&&parseInt(i[1])),t}),e}e.getObject("rpc.Rest",!0,t),t.rpc&&t.rpc.transportRegistry&&t.rpc.transportRegistry.register("REST",function(e){return"REST"==e},{getExecutor:function(e,i,a){return new t.rpc.Rest(i.name,(i.contentType||a._smd.contentType||"").match(/json|javascript/),null,function(e,t){var r=a._getRequest(i,[e]);return r.url=r.target+(r.data?"?"+r.data:""),t&&(t.start>=0||t.count>=0)&&(r.headers=r.headers||{},r.headers.Range="items="+(t.start||"0")+"-"+("count"in t&&t.count!=1/0?t.count+(t.start||0)-1:"")),r})}});var a;return a=t.rpc.Rest=function(i,r,o,n){function s(e){l[e]=function(t,i){return a._change(e,l,t,i)}}var l;return l=function(e,t){return a._get(l,e,t)},l.isJson=r,l._schema=o,l.cache={serialize:r?(t.json&&t.json.ref||e).toJson:function(e){return e}},l._getRequest=n||function(a,o){if(e.isObject(a)&&(a=e.objectToQuery(a),a=a?"?"+a:""),o&&o.sort&&!o.queryStr){a+=(a?"&":"?")+"sort(";for(var n=0;n<o.sort.length;n++){var s=o.sort[n];a+=(n>0?",":"")+(s.descending?"-":"+")+encodeURIComponent(s.attribute)}a+=")"}var l={url:i+(null==a?"":a),handleAs:r?"json":"text",contentType:r?"application/json":"text/plain",sync:t.rpc._sync,headers:{Accept:r?"application/json,application/javascript":"*/*"}};return o&&(o.start>=0||o.count>=0)&&(l.headers.Range="items="+(o.start||"0")+"-"+("count"in o&&o.count!=1/0?o.count+(o.start||0)-1:"")),t.rpc._sync=!1,l},s("put"),s("post"),s("delete"),l.servicePath=i,l},a._index={},a._timeStamps={},a._change=function(t,a,r,o){var n=a._getRequest(r);return n[t+"Data"]=o,i(e.xhr(t.toUpperCase(),n,!0),a)},a._get=function(t,a,r){return r=r||{},i(e.xhrGet(t._getRequest(a,r)),t,r.start>=0||r.count>=0,a)},a});//# sourceMappingURL=Rest.js.map