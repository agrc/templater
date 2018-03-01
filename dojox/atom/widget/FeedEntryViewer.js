//>>built
require({cache:{"url:dojox/atom/widget/templates/FeedEntryViewer.html":'<div class="feedEntryViewer">\n    <table border="0" width="100%" class="feedEntryViewerMenuTable" dojoAttachPoint="feedEntryViewerMenu" style="display: none;">\n        <tr width="100%"  dojoAttachPoint="entryCheckBoxDisplayOptions">\n            <td align="right">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="displayOptions" dojoAttachEvent="onclick:_toggleOptions"></span>\n            </td>\n        </tr>\n        <tr class="feedEntryViewerDisplayCheckbox" dojoAttachPoint="entryCheckBoxRow" width="100%" style="display: none;">\n            <td dojoAttachPoint="feedEntryCelltitle">\n                <input type="checkbox" name="title" value="Title" dojoAttachPoint="feedEntryCheckBoxTitle" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelTitle"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellauthors">\n                <input type="checkbox" name="authors" value="Authors" dojoAttachPoint="feedEntryCheckBoxAuthors" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelAuthors"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellcontributors">\n                <input type="checkbox" name="contributors" value="Contributors" dojoAttachPoint="feedEntryCheckBoxContributors" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelContributors"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellid">\n                <input type="checkbox" name="id" value="Id" dojoAttachPoint="feedEntryCheckBoxId" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelId"></label>\n            </td>\n            <td rowspan="2" align="right">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="close" dojoAttachEvent="onclick:_toggleOptions"></span>\n            </td>\n\t\t</tr>\n\t\t<tr class="feedEntryViewerDisplayCheckbox" dojoAttachPoint="entryCheckBoxRow2" width="100%" style="display: none;">\n            <td dojoAttachPoint="feedEntryCellupdated">\n                <input type="checkbox" name="updated" value="Updated" dojoAttachPoint="feedEntryCheckBoxUpdated" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelUpdated"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellsummary">\n                <input type="checkbox" name="summary" value="Summary" dojoAttachPoint="feedEntryCheckBoxSummary" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelSummary"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellcontent">\n                <input type="checkbox" name="content" value="Content" dojoAttachPoint="feedEntryCheckBoxContent" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelContent"></label>\n            </td>\n        </tr>\n    </table>\n    \n    <table class="feedEntryViewerContainer" border="0" width="100%">\n        <tr class="feedEntryViewerTitle" dojoAttachPoint="entryTitleRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryTitleHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryTitleNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n        <tr class="feedEntryViewerAuthor" dojoAttachPoint="entryAuthorRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryAuthorHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryAuthorNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n        <tr class="feedEntryViewerContributor" dojoAttachPoint="entryContributorRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryContributorHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryContributorNode" class="feedEntryViewerContributorNames">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n        \n        <tr class="feedEntryViewerId" dojoAttachPoint="entryIdRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryIdHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryIdNode" class="feedEntryViewerIdText">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerUpdated" dojoAttachPoint="entryUpdatedRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryUpdatedHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryUpdatedNode" class="feedEntryViewerUpdatedText">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerSummary" dojoAttachPoint="entrySummaryRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entrySummaryHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entrySummaryNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerContent" dojoAttachPoint="entryContentRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryContentHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryContentNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    </table>\n</div>\n',"url:dojox/atom/widget/templates/EntryHeader.html":'<span dojoAttachPoint="entryHeaderNode" class="entryHeaderNode"></span>\n'}}),define("dojox/atom/widget/FeedEntryViewer",["dojo/_base/kernel","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/array","dojo/dom-style","dojo/dom-construct","dijit/_Widget","dijit/_Templated","dijit/_Container","dijit/layout/ContentPane","../io/Connection","dojo/text!./templates/FeedEntryViewer.html","dojo/text!./templates/EntryHeader.html","dojo/i18n!./nls/FeedEntryViewer"],function(e,t,a,i,r,d,n,o,l,s,m,u,f,h,y){e.experimental("dojox.atom.widget.FeedEntryViewer");var c=a("dojox.atom.widget.FeedEntryViewer",[o,l,s],{entrySelectionTopic:"",_validEntryFields:{},displayEntrySections:"",_displayEntrySections:null,enableMenu:!1,enableMenuFade:!1,_optionButtonDisplayed:!0,templateString:f,_entry:null,_feed:null,_editMode:!1,postCreate:function(){""!==this.entrySelectionTopic&&(this._subscriptions=[e.subscribe(this.entrySelectionTopic,this,"_handleEvent")]);var t=y;this.displayOptions.innerHTML=t.displayOptions,this.feedEntryCheckBoxLabelTitle.innerHTML=t.title,this.feedEntryCheckBoxLabelAuthors.innerHTML=t.authors,this.feedEntryCheckBoxLabelContributors.innerHTML=t.contributors,this.feedEntryCheckBoxLabelId.innerHTML=t.id,this.close.innerHTML=t.close,this.feedEntryCheckBoxLabelUpdated.innerHTML=t.updated,this.feedEntryCheckBoxLabelSummary.innerHTML=t.summary,this.feedEntryCheckBoxLabelContent.innerHTML=t.content},startup:function(){""===this.displayEntrySections?this._displayEntrySections=["title","authors","contributors","summary","content","id","updated"]:this._displayEntrySections=this.displayEntrySections.split(","),this._setDisplaySectionsCheckboxes(),this.enableMenu&&(d.set(this.feedEntryViewerMenu,"display",""),this.entryCheckBoxRow&&this.entryCheckBoxRow2&&this.enableMenuFade&&(i.fadeOut({node:this.entryCheckBoxRow,duration:250}).play(),i.fadeOut({node:this.entryCheckBoxRow2,duration:250}).play()))},clear:function(){this.destroyDescendants(),this._entry=null,this._feed=null,this.clearNodes()},clearNodes:function(){r.forEach(["entryTitleRow","entryAuthorRow","entryContributorRow","entrySummaryRow","entryContentRow","entryIdRow","entryUpdatedRow"],function(e){d.set(this[e],"display","none")},this),r.forEach(["entryTitleNode","entryTitleHeader","entryAuthorHeader","entryContributorHeader","entryContributorNode","entrySummaryHeader","entrySummaryNode","entryContentHeader","entryContentNode","entryIdNode","entryIdHeader","entryUpdatedHeader","entryUpdatedNode"],function(e){for(;this[e].firstChild;)n.destroy(this[e].firstChild)},this)},setEntry:function(e,t,a){this.clear(),this._validEntryFields={},this._entry=e,this._feed=t,null!==e&&(this.entryTitleHeader&&this.setTitleHeader(this.entryTitleHeader,e),this.entryTitleNode&&this.setTitle(this.entryTitleNode,this._editMode,e),this.entryAuthorHeader&&this.setAuthorsHeader(this.entryAuthorHeader,e),this.entryAuthorNode&&this.setAuthors(this.entryAuthorNode,this._editMode,e),this.entryContributorHeader&&this.setContributorsHeader(this.entryContributorHeader,e),this.entryContributorNode&&this.setContributors(this.entryContributorNode,this._editMode,e),this.entryIdHeader&&this.setIdHeader(this.entryIdHeader,e),this.entryIdNode&&this.setId(this.entryIdNode,this._editMode,e),this.entryUpdatedHeader&&this.setUpdatedHeader(this.entryUpdatedHeader,e),this.entryUpdatedNode&&this.setUpdated(this.entryUpdatedNode,this._editMode,e),this.entrySummaryHeader&&this.setSummaryHeader(this.entrySummaryHeader,e),this.entrySummaryNode&&this.setSummary(this.entrySummaryNode,this._editMode,e),this.entryContentHeader&&this.setContentHeader(this.entryContentHeader,e),this.entryContentNode&&this.setContent(this.entryContentNode,this._editMode,e)),this._displaySections()},setTitleHeader:function(e,t){if(t.title&&t.title.value&&null!==t.title.value){var a=y,i=new v({title:a.title});e.appendChild(i.domNode)}},setTitle:function(e,t,a){if(a.title&&a.title.value&&null!==a.title.value){if("text"==a.title.type){var i=document.createTextNode(a.title.value);e.appendChild(i)}else{var r=document.createElement("span"),d=new m({refreshOnShow:!0,executeScripts:!1},r);d.attr("content",a.title.value),e.appendChild(d.domNode)}this.setFieldValidity("title",!0)}},setAuthorsHeader:function(e,t){if(t.authors&&t.authors.length>0){var a=y,i=new v({title:a.authors});e.appendChild(i.domNode)}},setAuthors:function(e,t,a){if(e.innerHTML="",a.authors&&a.authors.length>0)for(var i in a.authors)if(a.authors[i].name){var r=e;if(a.authors[i].uri){var d=document.createElement("a");r.appendChild(d),d.href=a.authors[i].uri,r=d}var n=a.authors[i].name;a.authors[i].email&&(n=n+" ("+a.authors[i].email+")");var o=document.createTextNode(n);r.appendChild(o);var l=document.createElement("br");e.appendChild(l),this.setFieldValidity("authors",!0)}},setContributorsHeader:function(e,t){if(t.contributors&&t.contributors.length>0){var a=y,i=new v({title:a.contributors});e.appendChild(i.domNode)}},setContributors:function(e,t,a){if(a.contributors&&a.contributors.length>0)for(var i in a.contributors){var r=document.createTextNode(a.contributors[i].name);e.appendChild(r);var d=document.createElement("br");e.appendChild(d),this.setFieldValidity("contributors",!0)}},setIdHeader:function(e,t){if(t.id&&null!==t.id){var a=y,i=new v({title:a.id});e.appendChild(i.domNode)}},setId:function(e,t,a){if(a.id&&null!==a.id){var i=document.createTextNode(a.id);e.appendChild(i),this.setFieldValidity("id",!0)}},setUpdatedHeader:function(e,t){if(t.updated&&null!==t.updated){var a=y,i=new v({title:a.updated});e.appendChild(i.domNode)}},setUpdated:function(e,t,a){if(a.updated&&null!==a.updated){var i=document.createTextNode(a.updated);e.appendChild(i),this.setFieldValidity("updated",!0)}},setSummaryHeader:function(e,t){if(t.summary&&t.summary.value&&null!==t.summary.value){var a=y,i=new v({title:a.summary});e.appendChild(i.domNode)}},setSummary:function(e,t,a){if(a.summary&&a.summary.value&&null!==a.summary.value){var i=document.createElement("span"),r=new m({refreshOnShow:!0,executeScripts:!1},i);r.attr("content",a.summary.value),e.appendChild(r.domNode),this.setFieldValidity("summary",!0)}},setContentHeader:function(e,t){if(t.content&&t.content.value&&null!==t.content.value){var a=y,i=new v({title:a.content});e.appendChild(i.domNode)}},setContent:function(e,t,a){if(a.content&&a.content.value&&null!==a.content.value){var i=document.createElement("span"),r=new m({refreshOnShow:!0,executeScripts:!1},i);r.attr("content",a.content.value),e.appendChild(r.domNode),this.setFieldValidity("content",!0)}},_displaySections:function(){d.set(this.entryTitleRow,"display","none"),d.set(this.entryAuthorRow,"display","none"),d.set(this.entryContributorRow,"display","none"),d.set(this.entrySummaryRow,"display","none"),d.set(this.entryContentRow,"display","none"),d.set(this.entryIdRow,"display","none"),d.set(this.entryUpdatedRow,"display","none");for(var e in this._displayEntrySections){var t=this._displayEntrySections[e].toLowerCase();"title"===t&&this.isFieldValid("title")&&d.set(this.entryTitleRow,"display",""),"authors"===t&&this.isFieldValid("authors")&&d.set(this.entryAuthorRow,"display",""),"contributors"===t&&this.isFieldValid("contributors")&&d.set(this.entryContributorRow,"display",""),"summary"===t&&this.isFieldValid("summary")&&d.set(this.entrySummaryRow,"display",""),"content"===t&&this.isFieldValid("content")&&d.set(this.entryContentRow,"display",""),"id"===t&&this.isFieldValid("id")&&d.set(this.entryIdRow,"display",""),"updated"===t&&this.isFieldValid("updated")&&d.set(this.entryUpdatedRow,"display","")}},setDisplaySections:function(e){null!==e?(this._displayEntrySections=e,this._displaySections()):this._displayEntrySections=["title","authors","contributors","summary","content","id","updated"]},_setDisplaySectionsCheckboxes:function(){var e=["title","authors","contributors","summary","content","id","updated"];for(var t in e)-1==r.indexOf(this._displayEntrySections,e[t])?d.set(this["feedEntryCell"+e[t]],"display","none"):this["feedEntryCheckBox"+e[t].substring(0,1).toUpperCase()+e[t].substring(1)].checked=!0},_readDisplaySections:function(){var e=[];this.feedEntryCheckBoxTitle.checked&&e.push("title"),this.feedEntryCheckBoxAuthors.checked&&e.push("authors"),this.feedEntryCheckBoxContributors.checked&&e.push("contributors"),this.feedEntryCheckBoxSummary.checked&&e.push("summary"),this.feedEntryCheckBoxContent.checked&&e.push("content"),this.feedEntryCheckBoxId.checked&&e.push("id"),this.feedEntryCheckBoxUpdated.checked&&e.push("updated"),this._displayEntrySections=e},_toggleCheckbox:function(e){e.checked?e.checked=!1:e.checked=!0,this._readDisplaySections(),this._displaySections()},_toggleOptions:function(e){if(this.enableMenu){var a,r;this._optionButtonDisplayed?(this.enableMenuFade?(a=i.fadeOut({node:this.entryCheckBoxDisplayOptions,duration:250}),t.connect(a,"onEnd",this,function(){d.set(this.entryCheckBoxDisplayOptions,"display","none"),d.set(this.entryCheckBoxRow,"display",""),d.set(this.entryCheckBoxRow2,"display",""),i.fadeIn({node:this.entryCheckBoxRow,duration:250}).play(),i.fadeIn({node:this.entryCheckBoxRow2,duration:250}).play()}),a.play()):(d.set(this.entryCheckBoxDisplayOptions,"display","none"),d.set(this.entryCheckBoxRow,"display",""),d.set(this.entryCheckBoxRow2,"display","")),this._optionButtonDisplayed=!1):(this.enableMenuFade?(a=i.fadeOut({node:this.entryCheckBoxRow,duration:250}),r=i.fadeOut({node:this.entryCheckBoxRow2,duration:250}),t.connect(a,"onEnd",this,function(){d.set(this.entryCheckBoxRow,"display","none"),d.set(this.entryCheckBoxRow2,"display","none"),d.set(this.entryCheckBoxDisplayOptions,"display",""),i.fadeIn({node:this.entryCheckBoxDisplayOptions,duration:250}).play()}),a.play(),r.play()):(d.set(this.entryCheckBoxRow,"display","none"),d.set(this.entryCheckBoxRow2,"display","none"),d.set(this.entryCheckBoxDisplayOptions,"display","")),this._optionButtonDisplayed=!0)}},_handleEvent:function(e){e.source!=this&&("set"==e.action&&e.entry?this.setEntry(e.entry,e.feed):"delete"==e.action&&e.entry&&e.entry==this._entry&&this.clear())},setFieldValidity:function(e,t){if(e){e.toLowerCase();this._validEntryFields[e]=t}},isFieldValid:function(e){return this._validEntryFields[e.toLowerCase()]},getEntry:function(){return this._entry},getFeed:function(){return this._feed},destroy:function(){this.clear(),r.forEach(this._subscriptions,e.unsubscribe)}}),v=c.EntryHeader=a("dojox.atom.widget.EntryHeader",[o,l,s],{title:"",templateString:h,postCreate:function(){this.setListHeader()},setListHeader:function(e){this.clear(),e&&(this.title=e);var t=document.createTextNode(this.title);this.entryHeaderNode.appendChild(t)},clear:function(){if(this.destroyDescendants(),this.entryHeaderNode)for(var e=0;e<this.entryHeaderNode.childNodes.length;e++)this.entryHeaderNode.removeChild(this.entryHeaderNode.childNodes[e])},destroy:function(){this.clear()}});return c});//# sourceMappingURL=FeedEntryViewer.js.map