//>>built
define("dojox/data/FlickrStore",["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/data/util/simpleFetch","dojo/io/script","dojo/_base/connect","dojo/date/stamp","dojo/AdapterRegistry"],function(e,t,a,i,r,n,o,d){var l=t("dojox.data.FlickrStore",null,{constructor:function(e){e&&e.label&&(this.label=e.label),e&&"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache)},_storeRef:"_S",label:"title",urlPreventCache:!0,_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojox.data.FlickrStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojox.data.FlickrStore: a function was passed an attribute argument that was not an attribute name string")},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(e,t,a){var i=this.getValues(e,t);return i&&i.length>0?i[0]:a},getAttributes:function(e){return["title","description","author","datePublished","dateTaken","imageUrl","imageUrlSmall","imageUrlMedium","tags","link"]},hasAttribute:function(e,t){var a=this.getValue(e,t);return!(!a&&""!==a&&a!==!1)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){},getLabel:function(e){return this.getValue(e,this.label)},getLabelAttributes:function(e){return[this.label]},containsValue:function(e,t,a){for(var i=this.getValues(e,t),r=0;r<i.length;r++)if(i[r]===a)return!0;return!1},getValues:function(t,a){this._assertIsItem(t),this._assertIsAttribute(a);var i=e.hitch(this,"_unescapeHtml"),r=e.hitch(o,"fromISOString");switch(a){case"title":return[i(t.title)];case"author":return[i(t.author)];case"datePublished":return[r(t.published)];case"dateTaken":return[r(t.date_taken)];case"imageUrlSmall":return[t.media.m.replace(/_m\./,"_s.")];case"imageUrl":return[t.media.m.replace(/_m\./,".")];case"imageUrlMedium":return[t.media.m];case"link":return[t.link];case"tags":return t.tags.split(" ");case"description":return[i(t.description)];default:return[]}},isItem:function(e){return!(!e||e[this._storeRef]!==this)},close:function(e){},_fetchItems:function(t,i,o){var d=t.query=t.query||{},l={format:"json",tagmode:"any"};a.forEach(["tags","tagmode","lang","id","ids"],function(e){d[e]&&(l[e]=d[e])}),l.id=d.id||d.userid||d.groupid,d.userids&&(l.ids=d.userids);var s=null,u={url:dojox.data.FlickrStore.urlRegistry.match(t),preventCache:this.urlPreventCache,content:l},h=e.hitch(this,function(e){s&&n.disconnect(s),i(this._processFlickrData(e),t)});s=n.connect("jsonFlickrFeed",h);var m=r.get(u);m.addErrback(function(e){n.disconnect(s),o(e,t)})},_processFlickrData:function(e){var t=[];if(e.items){t=e.items;for(var a=0;a<e.items.length;a++){var i=e.items[a];i[this._storeRef]=this}}return t},_unescapeHtml:function(e){return e.replace(/&amp;/gm,"&").replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"').replace(/&#39;/gm,"'")}});e.extend(l,i);var s="https://api.flickr.com/services/feeds/",u=l.urlRegistry=new d(!0);if(u.register("group pool",function(e){return!!e.query.groupid},s+"groups_pool.gne"),u.register("default",function(e){return!0},s+"photos_public.gne"),!h)var h=function(e){};return l});//# sourceMappingURL=FlickrStore.js.map