//>>built
define("dojox/data/PicasaStore",["dojo/_base/lang","dojo/_base/declare","dojo/_base/connect","dojo/io/script","dojo/data/util/simpleFetch","dojo/date/stamp"],function(e,t,i,a,r,o){var n=t("dojox.data.PicasaStore",null,{constructor:function(e){e&&e.label&&(this.label=e.label),e&&"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache),e&&"maxResults"in e&&(this.maxResults=parseInt(e.maxResults),this.maxResults||(this.maxResults=20))},_picasaUrl:"http://picasaweb.google.com/data/feed/api/all",_storeRef:"_S",label:"title",urlPreventCache:!1,maxResults:20,_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojox.data.PicasaStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojox.data.PicasaStore: a function was passed an attribute argument that was not an attribute name string")},getFeatures:function(){return{"dojo.data.api.Read":!0}},getValue:function(e,t,i){var a=this.getValues(e,t);return a&&a.length>0?a[0]:i},getAttributes:function(e){return["id","published","updated","category","title$type","title","summary$type","summary","rights$type","rights","link","author","gphoto$id","gphoto$name","location","imageUrlSmall","imageUrlMedium","imageUrl","datePublished","dateTaken","description"]},hasAttribute:function(e,t){return!!this.getValue(e,t)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){},getLabel:function(e){return this.getValue(e,this.label)},getLabelAttributes:function(e){return[this.label]},containsValue:function(e,t,i){for(var a=this.getValues(e,t),r=0;r<a.length;r++)if(a[r]===i)return!0;return!1},getValues:function(e,t){return this._assertIsItem(e),this._assertIsAttribute(t),"title"===t?[this._unescapeHtml(e.title)]:"author"===t?[this._unescapeHtml(e.author[0].name)]:"datePublished"===t?[dateAtamp.fromISOString(e.published)]:"dateTaken"===t?[o.fromISOString(e.published)]:"updated"===t?[o.fromISOString(e.updated)]:"imageUrlSmall"===t?[e.media.thumbnail[1].url]:"imageUrl"===t?[e.content$src]:"imageUrlMedium"===t?[e.media.thumbnail[2].url]:"link"===t?[e.link[1]]:"tags"===t?e.tags.split(" "):"description"===t?[this._unescapeHtml(e.summary)]:[]},isItem:function(e){return!(!e||e[this._storeRef]!==this)},close:function(e){},_fetchItems:function(e,t,r){e.query||(e.query={});var o={alt:"jsonm",pp:"1",psc:"G"};o["start-index"]="1",e.query.start&&(o["start-index"]=e.query.start),e.query.tags&&(o.q=e.query.tags),e.query.userid&&(o.uname=e.query.userid),e.query.userids&&(o.ids=e.query.userids),e.query.lang&&(o.hl=e.query.lang),o["max-results"]=this.maxResults;var n=this,d=null,s=function(a){null!==d&&i.disconnect(d),t(n._processPicasaData(a),e)},l={url:this._picasaUrl,preventCache:this.urlPreventCache,content:o,callbackParamName:"callback",handle:s},m=a.get(l);m.addErrback(function(t){i.disconnect(d),r(t,e)})},_processPicasaData:function(e){var t=[];if(e.feed){t=e.feed.entry;for(var i=0;i<t.length;i++){var a=t[i];a[this._storeRef]=this}}return t},_unescapeHtml:function(e){return e&&(e=e.replace(/&amp;/gm,"&").replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"'),e=e.replace(/&#39;/gm,"'")),e}});return e.extend(n,r),n});//# sourceMappingURL=PicasaStore.js.map