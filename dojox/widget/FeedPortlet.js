//>>built
define("dojox/widget/FeedPortlet",["dojo","dijit","dojox","dojo/require!dojox/widget/Portlet,dijit/Tooltip,dijit/form/TextBox,dijit/form/Button,dojox/data/GoogleFeedStore"],function(e,t,i){e.provide("dojox.widget.FeedPortlet"),e.require("dojox.widget.Portlet"),e.require("dijit.Tooltip"),e.require("dijit.form.TextBox"),e.require("dijit.form.Button"),e.require("dojox.data.GoogleFeedStore"),e.declare("dojox.widget.FeedPortlet",i.widget.Portlet,{local:!1,maxResults:5,url:"",openNew:!0,showFeedTitle:!0,postCreate:function(){if(this.inherited(arguments),this.local&&!i.data.AtomReadStore)throw Error(this.declaredClass+": To use local feeds, you must include dojox.data.AtomReadStore on the page.")},onFeedError:function(){this.containerNode.innerHTML="Error accessing the feed."},addChild:function(e){this.inherited(arguments);var t=e.attr("feedPortletUrl");t&&this.set("url",t)},_getTitle:function(e){var t=this.store.getValue(e,"title");return this.local?t.text:t},_getLink:function(e){var t=this.store.getValue(e,"link");return this.local?t.href:t},_getContent:function(e){var t=this.store.getValue(e,"summary");return t?(this.local&&(t=t.text),t=t.split("<script").join("<!--").split("</script>").join("-->"),t=t.split("<iframe").join("<!--").split("</iframe>").join("-->")):null},_setUrlAttr:function(e){this.url=e,this._started&&this.load()},startup:function(){if(!this.started&&!this._started){if(this.inherited(arguments),!this.url||""==this.url)throw new Error(this.id+": A URL must be specified for the feed portlet");this.url&&""!=this.url&&this.load()}},load:function(){this._resultList&&e.destroy(this._resultList);var t,a;this.local?(t=new i.data.AtomReadStore({url:this.url}),a={}):(t=new i.data.GoogleFeedStore,a={url:this.url});var o={query:a,count:this.maxResults,onComplete:e.hitch(this,function(e){if(this.showFeedTitle&&t.getFeedValue){var i=this.store.getFeedValue("title");i&&this.set("title",i.text?i.text:i)}this.generateResults(e)}),onError:e.hitch(this,"onFeedError")};this.store=t,t.fetch(o)},generateResults:function(i){var a,o=(this.store,this._resultList=e.create("ul",{"class":"dojoxFeedPortletList"},this.containerNode));e.forEach(i,e.hitch(this,function(i){var r=e.create("li",{innerHTML:'<a href="'+this._getLink(i)+'"'+(this.openNew?' target="_blank"':"")+">"+this._getTitle(i)+"</a>"},o);e.connect(r,"onmouseover",e.hitch(this,function(n){a&&clearTimeout(a),a=setTimeout(e.hitch(this,function(){a=null;var s=this._getContent(i);if(s){var d='<div class="dojoxFeedPortletPreview">'+s+"</div>";e.query("li",o).forEach(function(e){e!=n.target&&t.hideTooltip(e)}),t.showTooltip(d,r.firstChild,!this.isLeftToRight())}}),500)})),e.connect(r,"onmouseout",function(){a&&(clearTimeout(a),a=null),t.hideTooltip(r.firstChild)})})),this.resize()}}),e.declare("dojox.widget.ExpandableFeedPortlet",i.widget.FeedPortlet,{onlyOpenOne:!1,generateResults:function(t){var i=(this.store,"dojoxPortletToggleIcon"),a="dojoxPortletItemCollapsed",o="dojoxPortletItemOpen",r=this._resultList=e.create("ul",{"class":"dojoxFeedPortletExpandableList"},this.containerNode);e.forEach(t,e.hitch(this,e.hitch(this,function(t){var o=e.create("li",{"class":a},r),n=e.create("div",{style:"width: 100%;"},o);e.create("div",{"class":"dojoxPortletItemSummary",innerHTML:this._getContent(t)},o);e.create("span",{"class":i,innerHTML:"<img src='"+e.config.baseUrl+"/resources/blank.gif'>"},n);var s=e.create("a",{href:this._getLink(t),innerHTML:this._getTitle(t)},n);this.openNew&&e.attr(s,"target","_blank")}))),e.connect(r,"onclick",e.hitch(this,function(t){if(e.hasClass(t.target,i)||e.hasClass(t.target.parentNode,i)){e.stopEvent(t);for(var n=t.target.parentNode;"LI"!=n.tagName;)n=n.parentNode;this.onlyOpenOne&&e.query("li",r).filter(function(e){return e!=n}).removeClass(o).addClass(a);var s=e.hasClass(n,o);e.toggleClass(n,o,!s),e.toggleClass(n,a,s)}}))}}),e.declare("dojox.widget.PortletFeedSettings",i.widget.PortletSettings,{"class":"dojoxPortletFeedSettings",urls:null,selectedIndex:0,buildRendering:function(){var t;if(this.urls&&this.urls.length>0&&(t=e.create("select"),this.srcNodeRef&&(e.place(t,this.srcNodeRef,"before"),e.destroy(this.srcNodeRef)),this.srcNodeRef=t,e.forEach(this.urls,function(i){e.create("option",{value:i.url||i,innerHTML:i.label||i},t)})),"SELECT"==this.srcNodeRef.tagName){this.text=this.srcNodeRef;var i=e.create("div",{},this.srcNodeRef,"before");i.appendChild(this.text),this.srcNodeRef=i,e.query("option",this.text).filter("return !item.value;").forEach("item.value = item.innerHTML"),this.text.value||(this.content&&0==this.text.options.length&&this.text.appendChild(this.content),e.attr(t||this.text,"value",this.text.options[this.selectedIndex].value))}this.inherited(arguments)},_setContentAttr:function(){},postCreate:function(){if(!this.text){var i=this.text=new t.form.TextBox({});e.create("span",{innerHTML:"Choose Url: "},this.domNode),this.addChild(i)}this.addChild(new t.form.Button({label:"Load",onClick:e.hitch(this,function(){this.portlet.attr("url","SELECT"==this.text.tagName?this.text.value:this.text.attr("value")),"SELECT"==this.text.tagName&&e.some(this.text.options,e.hitch(this,function(e,t){return e.selected?(this.set("selectedIndex",t),!0):!1})),this.toggle()})})),this.addChild(new t.form.Button({label:"Cancel",onClick:e.hitch(this,"toggle")})),this.inherited(arguments)},startup:function(){if(!this._started){if(this.inherited(arguments),!this.portlet)throw Error(this.declaredClass+": A PortletFeedSettings widget cannot exist without a Portlet.");"SELECT"==this.text.tagName&&e.forEach(this.text.options,e.hitch(this,function(t,i){e.attr(t,"selected",i==this.selectedIndex)}));var t=this.portlet.attr("url");t?"SELECT"==this.text.tagName?!this.urls&&e.query("option[value='"+t+"']",this.text).length<1&&e.place(e.create("option",{value:t,innerHTML:t,selected:"true"}),this.text,"first"):this.text.attr("value",t):this.portlet.attr("url",this.get("feedPortletUrl"))}},_getFeedPortletUrlAttr:function(){return this.text.value}})});//# sourceMappingURL=FeedPortlet.js.map