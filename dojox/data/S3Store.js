//>>built
define("dojox/data/S3Store",["dojo/_base/declare","dojox/data/JsonRestStore","dojox/rpc/ProxiedPath"],function(e,t,a){return e("dojox.data.S3Store",t,{_processResults:function(e){for(var t=e.getElementsByTagName("Key"),a=[],i=this,r=0;r<t.length;r++){var o=t[r],n={_loadObject:function(e,t){return function(t){delete this._loadObject,i.service(e).addCallback(t)}}(o.firstChild.nodeValue,n)};a.push(n)}return{totalCount:a.length,items:a}}})});//# sourceMappingURL=S3Store.js.map