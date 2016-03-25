//>>built
define("dojox/rpc/Rest",["dojo","dojox"],function(e,t){function i(e,t,i,o){return e.addCallback(function(t){return e.ioArgs.xhr&&i&&(i=e.ioArgs.xhr.getResponseHeader("Content-Range"),e.fullLength=i&&(i=i.match(/\/(.*)/))&&parseInt(i[1])),t}),e}e.getObject("rpc.Rest",!0,t),t.rpc&&t.rpc.transportRegistry&&t.rpc.transportRegistry.register("REST",function(e){return"REST"==e},{getExecutor:function(e,i,o){return new t.rpc.Rest(i.name,(i.contentType||o._smd.contentType||"").match(/json|javascript/),null,function(e,t){var a=o._getRequest(i,[e]);return a.url=a.target+(a.data?"?"+a.data:""),t&&(t.start>=0||t.count>=0)&&(a.headers=a.headers||{},a.headers.Range="items="+(t.start||"0")+"-"+("count"in t&&t.count!=1/0?t.count+(t.start||0)-1:"")),a})}});var o;return o=t.rpc.Rest=function(i,a,r,n){function s(e){l[e]=function(t,i){return o._change(e,l,t,i)}}var l;return l=function(e,t){return o._get(l,e,t)},l.isJson=a,l._schema=r,l.cache={serialize:a?(t.json&&t.json.ref||e).toJson:function(e){return e}},l._getRequest=n||function(o,r){if(e.isObject(o)&&(o=e.objectToQuery(o),o=o?"?"+o:""),r&&r.sort&&!r.queryStr){o+=(o?"&":"?")+"sort(";for(var n=0;n<r.sort.length;n++){var s=r.sort[n];o+=(n>0?",":"")+(s.descending?"-":"+")+encodeURIComponent(s.attribute)}o+=")"}var l={url:i+(null==o?"":o),handleAs:a?"json":"text",contentType:a?"application/json":"text/plain",sync:t.rpc._sync,headers:{Accept:a?"application/json,application/javascript":"*/*"}};return r&&(r.start>=0||r.count>=0)&&(l.headers.Range="items="+(r.start||"0")+"-"+("count"in r&&r.count!=1/0?r.count+(r.start||0)-1:"")),t.rpc._sync=!1,l},s("put"),s("post"),s("delete"),l.servicePath=i,l},o._index={},o._timeStamps={},o._change=function(t,o,a,r){var n=o._getRequest(a);return n[t+"Data"]=r,i(e.xhr(t.toUpperCase(),n,!0),o)},o._get=function(t,o,a){return a=a||{},i(e.xhrGet(t._getRequest(o,a)),t,a.start>=0||a.count>=0,o)},o});//# sourceMappingURL=Rest.js.map