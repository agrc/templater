//>>built
define("dojox/data/WikipediaStore",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/io/script","dojo/io-query","dojox/rpc/Service","dojox/data/ServiceStore"],function(e,t,i,r,a,n,o){return e.experimental("dojox.data.WikipediaStore"),i("dojox.data.WikipediaStore",o,{constructor:function(e){if(e&&e.service)this.service=e.service;else{var t=new n(require.toUrl("dojox/rpc/SMDLibrary/wikipedia.smd"));this.service=t.query}this.idAttribute=this.labelAttribute="title"},fetch:function(e){var i=t.mixin({},e.query);return!i||i.action&&"parse"!==i.action?"query"===i.action&&(i.list="search",i.srwhat="text",i.srsearch=i.text,e.start&&(i.sroffset=e.start-1),e.count&&(i.srlimit=e.count>=500?500:e.count),delete i.text):(i.action="parse",i.page=i.title,delete i.title),e.query=i,this.inherited(arguments)},_processResults:function(e,t){if(e.parse)e.parse.title=a.queryToObject(t.ioArgs.url.split("?")[1]).page,e=[e.parse];else if(e.query&&e.query.search){e=e.query.search;var i=this;for(var r in e)e[r]._loadObject=function(e){i.fetch({query:{action:"parse",title:this.title},onItem:e}),delete this._loadObject}}return this.inherited(arguments)}})});//# sourceMappingURL=WikipediaStore.js.map