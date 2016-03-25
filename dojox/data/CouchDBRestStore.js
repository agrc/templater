//>>built
define("dojox/data/CouchDBRestStore",["dojo","dojox","dojox/data/JsonRestStore"],function(e,t){var a=e.declare("dojox.data.CouchDBRestStore",t.data.JsonRestStore,{save:function(e){for(var t=this.inherited(arguments),a=this.service.servicePath,i=0;i<t.length;i++)!function(e,t){t.addCallback(function(t){return t&&(e.__id=a+t.id,e._rev=t.rev),t})}(t[i].content,t[i].deferred)},fetch:function(e){return e.query=e.query||"_all_docs?",e.start&&(e.query=(e.query?e.query+"&":"")+"skip="+e.start,delete e.start),e.count&&(e.query=(e.query?e.query+"&":"")+"limit="+e.count,delete e.count),this.inherited(arguments)},_processResults:function(e){var a=e.rows;if(a){for(var i=this.service.servicePath,r=0;r<a.length;r++){var o=a[r].value;o.__id=i+a[r].id,o._id=a[r].id,o._loadObject=t.rpc.JsonRest._loader,a[r]=o}return{totalCount:e.total_rows,items:e.rows}}return{items:e}}});return a.getStores=function(a){var i=e.xhrGet({url:a+"_all_dbs",handleAs:"json",sync:!0}),r={};return i.addBoth(function(e){for(var i=0;i<e.length;i++)r[e[i]]=new t.data.CouchDBRestStore({target:a+e[i],idAttribute:"_id"});return r}),r},a});//# sourceMappingURL=CouchDBRestStore.js.map