//>>built
define("dojo/data/util/simpleFetch",["../../_base/lang","../../_base/kernel","./sorter"],function(e,t,a){var i={};return e.setObject("dojo.data.util.simpleFetch",i),i.errorHandler=function(e,a){if(a.onError){var i=a.scope||t.global;a.onError.call(i,e,a)}},i.fetchHandler=function(e,i){var r=i.abort||null,d=!1,o=i.start?i.start:0,n=i.count&&i.count!==1/0?o+i.count:e.length;i.abort=function(){d=!0,r&&r.call(i)};var l=i.scope||t.global;if(i.store||(i.store=this),i.onBegin&&i.onBegin.call(l,e.length,i),i.sort&&e.sort(a.createSortFunction(i.sort,this)),i.onItem)for(var s=o;s<e.length&&n>s;++s){var m=e[s];d||i.onItem.call(l,m,i)}if(i.onComplete&&!d){var f=null;i.onItem||(f=e.slice(o,n)),i.onComplete.call(l,f,i)}},i.fetch=function(t){return t=t||{},t.store||(t.store=this),this._fetchItems(t,e.hitch(this,"fetchHandler"),e.hitch(this,"errorHandler")),t},i});//# sourceMappingURL=simpleFetch.js.map