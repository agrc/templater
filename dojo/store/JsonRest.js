//>>built
define("dojo/store/JsonRest",["../_base/xhr","../_base/lang","../json","../_base/declare","./util/QueryResults"],function(e,t,r,a,i){return a("dojo.store.JsonRest",null,{constructor:function(e){this.headers={},a.safeMixin(this,e)},headers:{},target:"",idProperty:"id",ascendingPrefix:"+",descendingPrefix:"-",_getTarget:function(e){var t=this.target;return void 0!==e&&("/"==t.charAt(t.length-1)||"="==t.charAt(t.length-1)?t+=e:t+="/"+e),t},get:function(r,a){a=a||{};var i=t.mixin({Accept:this.accepts},this.headers,a.headers||a);return e("GET",{url:this._getTarget(r),handleAs:"json",headers:i})},accepts:"application/javascript, application/json",getIdentity:function(e){return e[this.idProperty]},put:function(a,i){i=i||{};var n="id"in i?i.id:this.getIdentity(a);return e(void 0===n||i.incremental?"POST":"PUT",{url:this._getTarget(n),postData:r.stringify(a),handleAs:"json",headers:t.mixin({"Content-Type":"application/json",Accept:this.accepts,"If-Match":!0===i.overwrite?"*":null,"If-None-Match":!1===i.overwrite?"*":null},this.headers,i.headers)})},add:function(e,t){return t=t||{},t.overwrite=!1,this.put(e,t)},remove:function(r,a){return a=a||{},e("DELETE",{url:this._getTarget(r),headers:t.mixin({},this.headers,a.headers)})},query:function(r,a){a=a||{};var n=t.mixin({Accept:this.accepts},this.headers,a.headers),o=this.target.indexOf("?")>-1;if(r=r||"",r&&"object"==typeof r&&(r=e.objectToQuery(r),r=r?(o?"&":"?")+r:""),(a.start>=0||a.count>=0)&&(n["X-Range"]="items="+(a.start||"0")+"-"+("count"in a&&a.count!=1/0?a.count+(a.start||0)-1:""),this.rangeParam?(r+=(r||o?"&":"?")+this.rangeParam+"="+n["X-Range"],o=!0):n.Range=n["X-Range"]),a&&a.sort){var d=this.sortParam;r+=(r||o?"&":"?")+(d?d+"=":"sort(");for(var s=0;s<a.sort.length;s++){var l=a.sort[s];r+=(s>0?",":"")+(l.descending?this.descendingPrefix:this.ascendingPrefix)+encodeURIComponent(l.attribute)}d||(r+=")")}var u=e("GET",{url:this.target+(r||""),handleAs:"json",headers:n});return u.total=u.then(function(){var e=u.ioArgs.xhr.getResponseHeader("Content-Range");return e||(e=u.ioArgs.xhr.getResponseHeader("X-Content-Range")),e&&(e=e.match(/\/(.*)/))&&+e[1]}),i(u)}})});//# sourceMappingURL=JsonRest.js.map