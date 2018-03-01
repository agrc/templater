//>>built
require({cache:{"url:dojox/atom/widget/templates/FeedViewer.html":'<div class="feedViewerContainer" dojoAttachPoint="feedViewerContainerNode">\n\t<table cellspacing="0" cellpadding="0" class="feedViewerTable">\n\t\t<tbody dojoAttachPoint="feedViewerTableBody" class="feedViewerTableBody">\n\t\t</tbody>\n\t</table>\n</div>\n',"url:dojox/atom/widget/templates/FeedViewerEntry.html":'<tr class="feedViewerEntry" dojoAttachPoint="entryNode" dojoAttachEvent="onclick:onClick">\n    <td class="feedViewerEntryUpdated" dojoAttachPoint="timeNode">\n    </td>\n    <td>\n        <table border="0" width="100%" dojoAttachPoint="titleRow">\n            <tr padding="0" border="0">\n                <td class="feedViewerEntryTitle" dojoAttachPoint="titleNode">\n                </td>\n                <td class="feedViewerEntryDelete" align="right">\n                    <span dojoAttachPoint="deleteButton" dojoAttachEvent="onclick:deleteEntry" class="feedViewerDeleteButton" style="display:none;">[delete]</span>\n                </td>\n            <tr>\n        </table>\n    </td>\n</tr>',"url:dojox/atom/widget/templates/FeedViewerGrouping.html":'<tr dojoAttachPoint="groupingNode" class="feedViewerGrouping">\n\t<td colspan="2" dojoAttachPoint="titleNode" class="feedViewerGroupingTitle">\n\t</td>\n</tr>'}}),define("dojox/atom/widget/FeedViewer",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/dom-class","dijit/_Widget","dijit/_Templated","dijit/_Container","../io/Connection","dojo/text!./templates/FeedViewer.html","dojo/text!./templates/FeedViewerEntry.html","dojo/text!./templates/FeedViewerGrouping.html","dojo/i18n!./nls/FeedViewerEntry"],function(e,t,a,i,r,d,o,n,l,s,m,f,u,y){e.experimental("dojox.atom.widget.FeedViewer");var h=r("dojox.atom.widget.FeedViewer",[o,n,l],{feedViewerTableBody:null,feedViewerTable:null,entrySelectionTopic:"",url:"",xmethod:!1,localSaveOnly:!1,templateString:m,_feed:null,_currentSelection:null,_includeFilters:null,alertsEnabled:!1,postCreate:function(){this._includeFilters=[],""!==this.entrySelectionTopic&&(this._subscriptions=[e.subscribe(this.entrySelectionTopic,this,"_handleEvent")]),this.atomIO=new s,this.childWidgets=[]},startup:function(){this.containerNode=this.feedViewerTableBody;var e=this.getDescendants();for(var t in e){var a=e[t];a&&a.isFilter&&(this._includeFilters.push(new h.CategoryIncludeFilter(a.scheme,a.term,a.label)),a.destroy())}""!==this.url&&this.setFeedFromUrl(this.url)},clear:function(){this.destroyDescendants()},setFeedFromUrl:function(e){if(""!==e){if(this._isRelativeURL(e)){var a="";a="/"!==e.charAt(0)?this._calculateBaseURL(window.location.href,!0):this._calculateBaseURL(window.location.href,!1),this.url=a+e}this.atomIO.getFeed(e,t.hitch(this,this.setFeed))}},setFeed:function(e){this._feed=e,this.clear();var a=function(e,t){var a=this._displayDateForEntry(e),i=this._displayDateForEntry(t);return a>i?-1:a<i?1:0},i=function(e){var t=e.split(",");return t.pop(),t.join(",")},r=e.entries.sort(t.hitch(this,a));if(e)for(var d=null,o=0;o<r.length;o++){var n=r[o];if(this._isFilterAccepted(n)){var l=this._displayDateForEntry(n),s="";null!==l&&""===(s=i(l.toLocaleString()))&&(s=l.getMonth()+1+"/"+l.getDate()+"/"+l.getFullYear()),null!==d&&d==s||(this.appendGrouping(s),d=s),this.appendEntry(n)}}},_displayDateForEntry:function(e){return e.updated?e.updated:e.modified?e.modified:e.issued?e.issued:new Date},appendGrouping:function(e){var t=new v({});t.setText(e),this.addChild(t),this.childWidgets.push(t)},appendEntry:function(e){var t=new c({xmethod:this.xmethod});t.setTitle(e.title.value),t.setTime(this._displayDateForEntry(e).toLocaleTimeString()),t.entrySelectionTopic=this.entrySelectionTopic,t.feed=this,this.addChild(t),this.childWidgets.push(t),this.connect(t,"onClick","_rowSelected"),e.domNode=t.entryNode,e._entryWidget=t,t.entry=e},deleteEntry:function(a){this.localSaveOnly?this._removeEntry(a,!0):this.atomIO.deleteEntry(a.entry,t.hitch(this,this._removeEntry,a),null,this.xmethod),e.publish(this.entrySelectionTopic,[{action:"delete",source:this,entry:a.entry}])},_removeEntry:function(e,t){if(t){var i=a.indexOf(this.childWidgets,e),r=this.childWidgets[i-1],d=this.childWidgets[i+1];r.isInstanceOf(widget.FeedViewerGrouping)&&(void 0===d||d.isInstanceOf(widget.FeedViewerGrouping))&&r.destroy(),e.destroy()}},_rowSelected:function(t){for(var a=t.target;a&&!d.contains(a,"feedViewerEntry");)a=a.parentNode;for(var i=0;i<this._feed.entries.length;i++){var r=this._feed.entries[i];if(a===r.domNode&&this._currentSelection!==r){d.add(r.domNode,"feedViewerEntrySelected"),d.remove(r._entryWidget.timeNode,"feedViewerEntryUpdated"),d.add(r._entryWidget.timeNode,"feedViewerEntryUpdatedSelected"),this.onEntrySelected(r),""!==this.entrySelectionTopic&&e.publish(this.entrySelectionTopic,[{action:"set",source:this,feed:this._feed,entry:r}]),this._isEditable(r)&&r._entryWidget.enableDelete(),this._deselectCurrentSelection(),this._currentSelection=r;break}if(a===r.domNode&&this._currentSelection===r){e.publish(this.entrySelectionTopic,[{action:"delete",source:this,entry:r}]),this._deselectCurrentSelection();break}}},_deselectCurrentSelection:function(){this._currentSelection&&(d.add(this._currentSelection._entryWidget.timeNode,"feedViewerEntryUpdated"),d.remove(this._currentSelection.domNode,"feedViewerEntrySelected"),d.remove(this._currentSelection._entryWidget.timeNode,"feedViewerEntryUpdatedSelected"),this._currentSelection._entryWidget.disableDelete(),this._currentSelection=null)},_isEditable:function(e){var t=!1;if(e&&null!==e&&e.links&&null!==e.links)for(var a in e.links)if(e.links[a].rel&&"edit"==e.links[a].rel){t=!0;break}return t},onEntrySelected:function(e){},_isRelativeURL:function(e){var t=function(e){var t=!1;return 0===e.indexOf("file://")&&(t=!0),t},a=function(e){var t=!1;return 0===e.indexOf("http://")&&(t=!0),t},i=!1;return null!==e&&(t(e)||a(e)||(i=!0)),i},_calculateBaseURL:function(e,t){var a=null;if(null!==e){var i=e.indexOf("?");if(-1!=i&&(e=e.substring(0,i)),t)i=e.lastIndexOf("/"),a=i>0&&i<e.length&&i!==e.length-1?e.substring(0,i+1):e;else if((i=e.indexOf("://"))>0){i+=3;var r=e.substring(0,i),d=e.substring(i,e.length);i=d.indexOf("/"),a=i<d.length&&i>0?r+d.substring(0,i):r+d}}return a},_isFilterAccepted:function(e){var t=!1;if(this._includeFilters&&this._includeFilters.length>0)for(var a=0;a<this._includeFilters.length;a++){var i=this._includeFilters[a];if(i.match(e)){t=!0;break}}else t=!0;return t},addCategoryIncludeFilter:function(e){if(e){var t=e.scheme,a=e.term,i=e.label,r=!0;if(t||(t=null),a||(t=null),i||(t=null),this._includeFilters&&this._includeFilters.length>0)for(var d=0;d<this._includeFilters.length;d++){var o=this._includeFilters[d];if(o.term===a&&o.scheme===t&&o.label===i){r=!1;break}}r&&this._includeFilters.push(widget.FeedViewer.CategoryIncludeFilter(t,a,i))}},removeCategoryIncludeFilter:function(e){if(e){var t=e.scheme,a=e.term,i=e.label;t||(t=null),a||(t=null),i||(t=null);var r=[];if(this._includeFilters&&this._includeFilters.length>0){for(var d=0;d<this._includeFilters.length;d++){var o=this._includeFilters[d];o.term===a&&o.scheme===t&&o.label===i||r.push(o)}this._includeFilters=r}}},_handleEvent:function(e){if(e.source!=this)if("update"==e.action&&e.entry){var a=e;this.localSaveOnly||this.atomIO.updateEntry(a.entry,t.hitch(a.source,a.callback),null,!0),this._currentSelection._entryWidget.setTime(this._displayDateForEntry(a.entry).toLocaleTimeString()),this._currentSelection._entryWidget.setTitle(a.entry.title.value)}else"post"==e.action&&e.entry&&(this.localSaveOnly?this._addEntry(e.entry):this.atomIO.addEntry(e.entry,this.url,t.hitch(this,this._addEntry)))},_addEntry:function(t){this._feed.addEntry(t),this.setFeed(this._feed),e.publish(this.entrySelectionTopic,[{action:"set",source:this,feed:this._feed,entry:t}])},destroy:function(){this.clear(),a.forEach(this._subscriptions,e.unsubscribe)}}),c=h.FeedViewerEntry=r("dojox.atom.widget.FeedViewerEntry",[o,n],{templateString:f,entryNode:null,timeNode:null,deleteButton:null,entry:null,feed:null,postCreate:function(){var e=y;this.deleteButton.innerHTML=e.deleteButton},setTitle:function(e){this.titleNode.lastChild&&this.titleNode.removeChild(this.titleNode.lastChild);var t=document.createElement("div");t.innerHTML=e,this.titleNode.appendChild(t)},setTime:function(e){this.timeNode.lastChild&&this.timeNode.removeChild(this.timeNode.lastChild);var t=document.createTextNode(e);this.timeNode.appendChild(t)},enableDelete:function(){null!==this.deleteButton&&(this.deleteButton.style.display="inline")},disableDelete:function(){null!==this.deleteButton&&(this.deleteButton.style.display="none")},deleteEntry:function(e){e.preventDefault(),e.stopPropagation(),this.feed.deleteEntry(this)},onClick:function(e){}}),v=h.FeedViewerGrouping=r("dojox.atom.widget.FeedViewerGrouping",[o,n],{templateString:u,groupingNode:null,titleNode:null,setText:function(e){this.titleNode.lastChild&&this.titleNode.removeChild(this.titleNode.lastChild);var t=document.createTextNode(e);this.titleNode.appendChild(t)}});return h.AtomEntryCategoryFilter=r("dojox.atom.widget.AtomEntryCategoryFilter",null,{scheme:"",term:"",label:"",isFilter:!0}),h.CategoryIncludeFilter=r("dojox.atom.widget.FeedViewer.CategoryIncludeFilter",null,{constructor:function(e,t,a){this.scheme=e,this.term=t,this.label=a},match:function(e){var t=!1;if(null!==e){var a=e.categories;if(null!==a)for(var i=0;i<a.length;i++){var r=a[i];if(""!==this.scheme&&this.scheme!==r.scheme)break;if(""!==this.term&&this.term!==r.term)break;if(""!==this.label&&this.label!==r.label)break;t=!0}}return t}}),h});//# sourceMappingURL=FeedViewer.js.map