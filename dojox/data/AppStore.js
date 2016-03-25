//>>built
define("dojox/data/AppStore",["dojo","dojox","dojo/data/util/simpleFetch","dojo/data/util/filter","dojox/atom/io/Connection"],function(e,t){e.experimental("dojox.data.AppStore");var a=e.declare("dojox.data.AppStore",null,{url:"",urlPreventCache:!1,xmethod:!1,_atomIO:null,_feed:null,_requests:null,_processing:null,_updates:null,_adds:null,_deletes:null,constructor:function(e){if(e&&e.url&&(this.url=e.url),e&&e.urlPreventCache&&(this.urlPreventCache=e.urlPreventCache),!this.url)throw new Error("A URL is required to instantiate an APP Store object")},_setFeed:function(e,t){this._feed=e;var a;for(a=0;a<this._feed.entries.length;a++)this._feed.entries[a].store=this;if(this._requests)for(a=0;a<this._requests.length;a++){var i=this._requests[a];i.request&&i.fh&&i.eh?this._finishFetchItems(i.request,i.fh,i.eh):i.clear?this._feed=null:i.add?this._feed.addEntry(i.add):i.remove&&this._feed.removeEntry(i.remove)}this._requests=null},_getAllItems:function(){for(var e=[],t=0;t<this._feed.entries.length;t++)e.push(this._feed.entries[t]);return e},_assertIsItem:function(e){if(!this.isItem(e))throw new Error("This error message is provided when a function is called in the following form: getAttribute(argument, attributeName).  The argument variable represents the member or owner of the object. The error is created when an item that does not belong to this store is specified as an argument.")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("The attribute argument must be a string. The error is created when a different type of variable is specified such as an array or object.");for(var a in t.atom.io.model._actions)if(a==e)return!0;return!1},_addUpdate:function(e){this._updates?this._updates.push(e):this._updates=[e]},getValue:function(e,t,a){var i=this.getValues(e,t);return i.length>0?i[0]:a},getValues:function(e,t){this._assertIsItem(e);var a=this._assertIsAttribute(t);if(a){if(("author"===t||"contributor"===t||"link"===t)&&e[t+"s"])return e[t+"s"];if("category"===t&&e.categories)return e.categories;if(e[t])return e=e[t],"Content"==e.nodeType?[e.value]:[e]}return[]},getAttributes:function(e){this._assertIsItem(e);var a=[];for(var i in t.atom.io.model._actions)this.hasAttribute(e,i)&&a.push(i);return a},hasAttribute:function(e,t){return this.getValues(e,t).length>0},containsValue:function(t,a,i){var r=void 0;return"string"==typeof i&&(r=e.data.util.filter.patternToRegExp(i,!1)),this._containsValue(t,a,i,r)},_containsValue:function(e,t,a,i,r){for(var o=this.getValues(e,t),n=0;n<o.length;++n){var d=o[n];if("string"==typeof d&&i)return r&&(d=d.replace(new RegExp(/^\s+/),""),d=d.replace(new RegExp(/\s+$/),"")),d=d.replace(/\r|\n|\r\n/g,""),null!==d.match(i);if(a===d)return!0}return!1},isItem:function(e){return e&&e.store&&e.store===this},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item)},_fetchItems:function(e,a,i){if(this._feed)this._finishFetchItems(e,a,i);else{var r=!1;this._requests||(this._requests=[],r=!0),this._requests.push({request:e,fh:a,eh:i}),r&&(this._atomIO=new t.atom.io.Connection(!1,this.urlPreventCache),this._atomIO.getFeed(this.url,this._setFeed,null,this))}},_finishFetchItems:function(t,a,i){var r=null,o=this._getAllItems();if(t.query){var n=t.queryOptions?t.queryOptions.ignoreCase:!1;r=[];var d,s,l={};for(d in t.query)s=t.query[d]+"","string"==typeof s&&(l[d]=e.data.util.filter.patternToRegExp(s,n));for(var m=0;m<o.length;++m){var h=!0,u=o[m];for(d in t.query)s=t.query[d]+"",this._containsValue(u,d,s,l[d],t.trim)||(h=!1);h&&r.push(u)}}else o.length>0&&(r=o.slice(0,o.length));try{a(r,t)}catch(f){i(f,t)}},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Write":!0,"dojo.data.api.Identity":!0}},close:function(e){this._feed=null},getLabel:function(e){return this.isItem(e)?this.getValue(e,"title","No Title"):void 0},getLabelAttributes:function(e){return["title"]},getIdentity:function(e){return this._assertIsItem(e),this.getValue(e,"id")},getIdentityAttributes:function(e){return["id"]},fetchItemByIdentity:function(t){this._fetchItems({query:{id:t.identity},onItem:t.onItem,scope:t.scope},function(t,a){var i=a.scope;i||(i=e.global),t.length<1?a.onItem.call(i,null):a.onItem.call(i,t[0])},t.onError)},newItem:function(a){var i,r=new t.atom.io.model.Entry,o=null,n=null;for(var d in a)if(this._assertIsAttribute(d))switch(o=a[d],d){case"link":for(i in o)n=o[i],r.addLink(n.href,n.rel,n.hrefLang,n.title,n.type);break;case"author":for(i in o)n=o[i],r.addAuthor(n.name,n.email,n.uri);break;case"contributor":for(i in o)n=o[i],r.addContributor(n.name,n.email,n.uri);break;case"category":for(i in o)n=o[i],r.addCategory(n.scheme,n.term,n.label);break;case"icon":case"id":case"logo":case"xmlBase":case"rights":r[d]=o;break;case"updated":case"published":case"issued":case"modified":r[d]=t.atom.io.model.util.createDate(o);break;case"content":case"summary":case"title":case"subtitle":r[d]=new t.atom.io.model.Content(d),r[d].value=o;break;default:r[d]=o}return r.store=this,r.isDirty=!0,this._adds?this._adds.push(r):this._adds=[r],this._feed?this._feed.addEntry(r):this._requests?this._requests.push({add:r}):(this._requests=[{add:r}],this._atomIO=new t.atom.io.Connection(!1,this.urlPreventCache),this._atomIO.getFeed(this.url,e.hitch(this,this._setFeed))),!0},deleteItem:function(a){return this._assertIsItem(a),this._deletes?this._deletes.push(a):this._deletes=[a],this._feed?this._feed.removeEntry(a):this._requests?this._requests.push({remove:a}):(this._requests=[{remove:a}],this._atomIO=new t.atom.io.Connection(!1,this.urlPreventCache),this._atomIO.getFeed(this.url,e.hitch(this,this._setFeed))),a=null,!0},setValue:function(e,a,i){this._assertIsItem(e);var r={item:e};if(this._assertIsAttribute(a))switch(a){case"link":return r.links=e.links,this._addUpdate(r),e.links=null,e.addLink(i.href,i.rel,i.hrefLang,i.title,i.type),e.isDirty=!0,!0;case"author":return r.authors=e.authors,this._addUpdate(r),e.authors=null,e.addAuthor(i.name,i.email,i.uri),e.isDirty=!0,!0;case"contributor":return r.contributors=e.contributors,this._addUpdate(r),e.contributors=null,e.addContributor(i.name,i.email,i.uri),e.isDirty=!0,!0;case"category":return r.categories=e.categories,this._addUpdate(r),e.categories=null,e.addCategory(i.scheme,i.term,i.label),e.isDirty=!0,!0;case"icon":case"id":case"logo":case"xmlBase":case"rights":return r[a]=e[a],this._addUpdate(r),e[a]=i,e.isDirty=!0,!0;case"updated":case"published":case"issued":case"modified":return r[a]=e[a],this._addUpdate(r),e[a]=t.atom.io.model.util.createDate(i),e.isDirty=!0,!0;case"content":case"summary":case"title":case"subtitle":return r[a]=e[a],this._addUpdate(r),e[a]=new t.atom.io.model.Content(a),e[a].value=i,e.isDirty=!0,!0;default:return r[a]=e[a],this._addUpdate(r),e[a]=i,e.isDirty=!0,!0}return!1},setValues:function(e,a,i){if(0===i.length)return this.unsetAttribute(e,a);this._assertIsItem(e);var r,o,n={item:e};if(this._assertIsAttribute(a))switch(a){case"link":n.links=e.links,e.links=null;for(o in i)r=i[o],e.addLink(r.href,r.rel,r.hrefLang,r.title,r.type);return e.isDirty=!0,!0;case"author":n.authors=e.authors,e.authors=null;for(o in i)r=i[o],e.addAuthor(r.name,r.email,r.uri);return e.isDirty=!0,!0;case"contributor":n.contributors=e.contributors,e.contributors=null;for(o in i)r=i[o],e.addContributor(r.name,r.email,r.uri);return e.isDirty=!0,!0;case"categories":n.categories=e.categories,e.categories=null;for(o in i)r=i[o],e.addCategory(r.scheme,r.term,r.label);return e.isDirty=!0,!0;case"icon":case"id":case"logo":case"xmlBase":case"rights":return n[a]=e[a],e[a]=i[0],e.isDirty=!0,!0;case"updated":case"published":case"issued":case"modified":return n[a]=e[a],e[a]=t.atom.io.model.util.createDate(i[0]),e.isDirty=!0,!0;case"content":case"summary":case"title":case"subtitle":return n[a]=e[a],e[a]=new t.atom.io.model.Content(a),e[a].values[0]=i[0],e.isDirty=!0,!0;default:return n[a]=e[a],e[a]=i[0],e.isDirty=!0,!0}return this._addUpdate(n),!1},unsetAttribute:function(e,t){if(this._assertIsItem(e),this._assertIsAttribute(t)&&null!==e[t]){var a={item:e};switch(t){case"author":case"contributor":case"link":a[t+"s"]=e[t+"s"];break;case"category":a.categories=e.categories;break;default:a[t]=e[t]}return e.isDirty=!0,e[t]=null,this._addUpdate(a),!0}return!1},save:function(t){var a;for(a in this._adds)this._atomIO.addEntry(this._adds[a],null,function(){},t.onError,!1,t.scope);this._adds=null;for(a in this._updates)this._atomIO.updateEntry(this._updates[a].item,function(){},t.onError,!1,this.xmethod,t.scope);this._updates=null;for(a in this._deletes)this._atomIO.removeEntry(this._deletes[a],function(){},t.onError,this.xmethod,t.scope);if(this._deletes=null,this._atomIO.getFeed(this.url,e.hitch(this,this._setFeed)),t.onComplete){var i=t.scope||e.global;t.onComplete.call(i)}},revert:function(){var e;for(e in this._adds)this._feed.removeEntry(this._adds[e]);this._adds=null;var t,a,i;for(e in this._updates){t=this._updates[e],a=t.item;for(i in t)"item"!==i&&(a[i]=t[i])}this._updates=null;for(e in this._deletes)this._feed.addEntry(this._deletes[e]);return this._deletes=null,!0},isDirty:function(e){return e?(this._assertIsItem(e),!!e.isDirty):null!==this._adds||null!==this._updates}});return e.extend(a,e.data.util.simpleFetch),a});//# sourceMappingURL=AppStore.js.map