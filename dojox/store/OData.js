//>>built
define("dojox/store/OData",["dojo/io-query","dojo/request","dojo/_base/lang","dojo/json","dojo/_base/declare","dojo/store/util/QueryResults"],function(e,t,i,a,o,r){return o(null,{headers:{MaxDataServiceVersion:"2.0"},target:"",idProperty:"id",accepts:"application/json;odata=verbose",childAttr:"children",constructor:function(e){o.safeMixin(this,e)},get:function(e,a){a=a||{};var o=i.mixin({Accept:this.accepts},this.headers,a.headers||a);return t(this.target+"("+e+")",{handleAs:"json",headers:o}).then(function(e){return e.d})},getIdentity:function(e){return e[this.idProperty]},put:function(e,o){o=o||{};var r=this.getIdentity(e)||o[this.idProperty],n=r?this.target+"("+r+")":this.target,s=i.mixin({"Content-Type":"application/json;odata=verbose",Accept:this.accepts},this.headers,o.headers);return r&&(s["X-HTTP-Method"]=o.overwrite?"PUT":"MERGE",s["IF-MATCH"]=o.overwrite?"*":o.etag||"*"),t.post(n,{handleAs:"json",data:a.stringify(e),headers:s})},add:function(e,t){return t=t||{},t.overwrite=!1,this.put(e,t)},remove:function(e,a){return a=a||{},t.post(this.target+"("+e+")",{headers:i.mixin({"IF-MATCH":"*","X-HTTP-Method":"DELETE"},this.headers,a.headers)})},getFormDigest:function(){var e=this.target.indexOf("_vti_bin"),i=this.target.slice(0,e)+"_api/contextinfo";return t.post(i).then(function(e){return e.substring(e.indexOf("<d:FormDigestValue>")+19,e.indexOf("</d:FormDigestValue>"))})},getChildren:function(e,t){var i=this.getIdentity(object)||t[this.idProperty];return this.query({$filter:this.idProperty+" eq "+i,$expand:this.childAttr},t)},query:function(e,a){a=a||{};var o=i.mixin({Accept:this.accepts},this.headers,a.headers);if(a&&a.sort){e.$orderby="";var n,s,l;for(s=0,l=a.sort.length;s<l;s++)n=a.sort[s],e.$orderby+=(s>0?",":"")+encodeURIComponent(n.attribute)+(n.descending?" desc":" asc")}(a.start>=0||a.count>=0)&&(e.$skip=a.start||0,e.$inlinecount="allpages","count"in a&&a.count!=1/0&&(e.$top=a.count)),e=this.buildQueryString(e);var d=t(this.target+(e||""),{handleAs:"json",headers:o}),h=d.then(function(e){return e.d.results});return h=r(h),h.total=d.then(function(e){return e.d.__count}),h},buildQueryString:function(t){var i="";for(var a in t)if(t.hasOwnProperty(a)&&-1==a.indexOf("$")){var o=t[a]+"",r=o.indexOf("*");-1!=r&&(o=o.slice(0!=r?0:1,o.length-(0!=r?1:0)),o.length>0&&(i+=0==i.length?"":"and ",i+=(0==r?"endswith":"startswith")+"("+a+",'"+o+"')"))}i.length>0&&(t.$filter=t.$filter&&t.$filter.length>0?t.$filter+" and "+i:i);var n=this.target.indexOf("?")>-1;return t&&"object"==typeof t&&(t=e.objectToQuery(t),t=t?(n?"&":"?")+t:""),t}})});//# sourceMappingURL=OData.js.map