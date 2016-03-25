//>>built
define("dojox/data/HtmlTableStore",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/dom","dojo/_base/array","dojo/_base/xhr","dojo/_base/sniff","dojo/data/util/simpleFetch","dojo/data/util/filter","dojox/xml/parser"],function(e,t,a,i,r,o,n,d,s,l){var m=t("dojox.data.HtmlTableStore",null,{constructor:function(t){if(e.deprecated("dojox.data.HtmlTableStore","Please use dojox.data.HtmlStore"),t.url){if(!t.tableId)throw new Error("dojo.data.HtmlTableStore: Cannot instantiate using url without an id!");this.url=t.url,this.tableId=t.tableId}else{t.tableId?(this._rootNode=i.byId(t.tableId),this.tableId=this._rootNode.id):this._rootNode=i.byId(this.tableId),this._getHeadings();for(var a=0;a<this._rootNode.rows.length;a++)this._rootNode.rows[a].store=this}},url:"",tableId:"",_getHeadings:function(){this._headings=[],r.forEach(this._rootNode.tHead.rows[0].cells,a.hitch(this,function(e){this._headings.push(l.textContent(e))}))},_getAllItems:function(){for(var e=[],t=1;t<this._rootNode.rows.length;t++)e.push(this._rootNode.rows[t]);return e},_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojo.data.HtmlTableStore: a function was passed an item argument that was not an item")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojo.data.HtmlTableStore: a function was passed an attribute argument that was not an attribute name string");return r.indexOf(this._headings,e)},getValue:function(e,t,a){var i=this.getValues(e,t);return i.length>0?i[0]:a},getValues:function(e,t){this._assertIsItem(e);var a=this._assertIsAttribute(t);return a>-1?[l.textContent(e.cells[a])]:[]},getAttributes:function(e){this._assertIsItem(e);for(var t=[],a=0;a<this._headings.length;a++)this.hasAttribute(e,this._headings[a])&&t.push(this._headings[a]);return t},hasAttribute:function(e,t){return this.getValues(e,t).length>0},containsValue:function(e,t,a){var i=void 0;return"string"==typeof a&&(i=s.patternToRegExp(a,!1)),this._containsValue(e,t,a,i)},_containsValue:function(e,t,a,i){for(var r=this.getValues(e,t),o=0;o<r.length;++o){var n=r[o];if("string"==typeof n&&i)return null!==n.match(i);if(a===n)return!0}return!1},isItem:function(e){return!(!e||!e.store||e.store!==this)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){this._assertIsItem(e.item)},_fetchItems:function(e,t,a){if(this._rootNode)this._finishFetchItems(e,t,a);else if(this.url){var r={url:this.url,handleAs:"text"},n=this,d=o.get(r);d.addCallback(function(i){var r=function(e,t){if(e.id==t)return e;if(e.childNodes)for(var a=0;a<e.childNodes.length;a++){var i=r(e.childNodes[a],t);if(i)return i}return null},o=document.createElement("div");o.innerHTML=i,n._rootNode=r(o,n.tableId),n._getHeadings.call(n);for(var d=0;d<n._rootNode.rows.length;d++)n._rootNode.rows[d].store=n;n._finishFetchItems(e,t,a)}),d.addErrback(function(t){a(t,e)})}else{this._rootNode=i.byId(this.tableId),this._getHeadings();for(var s=0;s<this._rootNode.rows.length;s++)this._rootNode.rows[s].store=this}},_finishFetchItems:function(e,t,a){var i=null,r=this._getAllItems();if(e.query){var o=e.queryOptions?e.queryOptions.ignoreCase:!1;i=[];var n,d,l={};for(d in e.query)n=e.query[d]+"","string"==typeof n&&(l[d]=s.patternToRegExp(n,o));for(var m=0;m<r.length;++m){var u=!0,h=r[m];for(d in e.query)n=e.query[d]+"",this._containsValue(h,d,n,l[d])||(u=!1);u&&i.push(h)}t(i,e)}else r.length>0&&(i=r.slice(0,r.length)),t(i,e)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0}},close:function(e){},getLabel:function(e){return this.isItem(e)?"Table Row #"+this.getIdentity(e):void 0},getLabelAttributes:function(e){return null},getIdentity:function(e){return this._assertIsItem(e),n("opera")?r.indexOf(this._rootNode.rows,e)-1:e.sectionRowIndex},getIdentityAttributes:function(e){return null},fetchItemByIdentity:function(t){var a=t.identity,r=this,n=null,d=null;if(this._rootNode)this._rootNode.rows[a+1]&&(n=this._rootNode.rows[a+1],t.onItem&&(d=t.scope?t.scope:e.global,t.onItem.call(d,n)));else if(this.url){var s={url:this.url,handleAs:"text"},l=o.get(s);l.addCallback(function(i){var o=function(e,t){if(e.id==t)return e;if(e.childNodes)for(var a=0;a<e.childNodes.length;a++){var i=o(e.childNodes[a],t);if(i)return i}return null},s=document.createElement("div");s.innerHTML=i,r._rootNode=o(s,r.tableId),r._getHeadings.call(r);for(var l=0;l<r._rootNode.rows.length;l++)r._rootNode.rows[l].store=r;n=r._rootNode.rows[a+1],t.onItem&&(d=t.scope?t.scope:e.global,t.onItem.call(d,n))}),l.addErrback(function(a){t.onError&&(d=t.scope?t.scope:e.global,t.onError.call(d,a))})}else{this._rootNode=i.byId(this.tableId),this._getHeadings();for(var m=0;m<this._rootNode.rows.length;m++)this._rootNode.rows[m].store=this;n=this._rootNode.rows[a+1],t.onItem&&(d=t.scope?t.scope:e.global,t.onItem.call(d,n))}}});return a.extend(m,d),m});//# sourceMappingURL=HtmlTableStore.js.map