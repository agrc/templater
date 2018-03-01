//>>built
require({cache:{"url:dojox/atom/widget/templates/FeedEntryEditor.html":'<div class="feedEntryViewer">\n    <table border="0" width="100%" class="feedEntryViewerMenuTable" dojoAttachPoint="feedEntryViewerMenu" style="display: none;">\n        <tr width="100%"  dojoAttachPoint="entryCheckBoxDisplayOptions">\n        \t<td align="left" dojoAttachPoint="entryNewButton">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="doNew" dojoAttachEvent="onclick:_toggleNew"></span>\n        \t</td>\n            <td align="left" dojoAttachPoint="entryEditButton" style="display: none;">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="edit" dojoAttachEvent="onclick:_toggleEdit"></span>\n            </td>\n            <td align="left" dojoAttachPoint="entrySaveCancelButtons" style="display: none;">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="save" dojoAttachEvent="onclick:saveEdits"></span>\n                <span class="feedEntryViewerMenu" dojoAttachPoint="cancel" dojoAttachEvent="onclick:cancelEdits"></span>\n            </td>\n            <td align="right">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="displayOptions" dojoAttachEvent="onclick:_toggleOptions"></span>\n            </td>\n        </tr>\n        <tr class="feedEntryViewerDisplayCheckbox" dojoAttachPoint="entryCheckBoxRow" width="100%" style="display: none;">\n            <td dojoAttachPoint="feedEntryCelltitle">\n                <input type="checkbox" name="title" value="Title" dojoAttachPoint="feedEntryCheckBoxTitle" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelTitle"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellauthors">\n                <input type="checkbox" name="authors" value="Authors" dojoAttachPoint="feedEntryCheckBoxAuthors" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelAuthors"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellcontributors">\n                <input type="checkbox" name="contributors" value="Contributors" dojoAttachPoint="feedEntryCheckBoxContributors" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelContributors"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellid">\n                <input type="checkbox" name="id" value="Id" dojoAttachPoint="feedEntryCheckBoxId" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelId"></label>\n            </td>\n            <td rowspan="2" align="right">\n                <span class="feedEntryViewerMenu" dojoAttachPoint="close" dojoAttachEvent="onclick:_toggleOptions"></span>\n            </td>\n\t\t</tr>\n\t\t<tr class="feedEntryViewerDisplayCheckbox" dojoAttachPoint="entryCheckBoxRow2" width="100%" style="display: none;">\n            <td dojoAttachPoint="feedEntryCellupdated">\n                <input type="checkbox" name="updated" value="Updated" dojoAttachPoint="feedEntryCheckBoxUpdated" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelUpdated"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellsummary">\n                <input type="checkbox" name="summary" value="Summary" dojoAttachPoint="feedEntryCheckBoxSummary" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelSummary"></label>\n            </td>\n            <td dojoAttachPoint="feedEntryCellcontent">\n                <input type="checkbox" name="content" value="Content" dojoAttachPoint="feedEntryCheckBoxContent" dojoAttachEvent="onclick:_toggleCheckbox"/>\n\t\t\t\t<label for="title" dojoAttachPoint="feedEntryCheckBoxLabelContent"></label>\n            </td>\n        </tr>\n    </table>\n    \n    <table class="feedEntryViewerContainer" border="0" width="100%">\n        <tr class="feedEntryViewerTitle" dojoAttachPoint="entryTitleRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryTitleHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td>\n                        \t<select dojoAttachPoint="entryTitleSelect" dojoAttachEvent="onchange:_switchEditor" style="display: none">\n                        \t\t<option value="text">Text</option>\n\t\t\t\t\t\t\t\t<option value="html">HTML</option>\n\t\t\t\t\t\t\t\t<option value="xhtml">XHTML</option>\n                        \t</select>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td colspan="2" dojoAttachPoint="entryTitleNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n        <tr class="feedEntryViewerAuthor" dojoAttachPoint="entryAuthorRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryAuthorHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryAuthorNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n        <tr class="feedEntryViewerContributor" dojoAttachPoint="entryContributorRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryContributorHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryContributorNode" class="feedEntryViewerContributorNames">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n        \n        <tr class="feedEntryViewerId" dojoAttachPoint="entryIdRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryIdHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryIdNode" class="feedEntryViewerIdText">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerUpdated" dojoAttachPoint="entryUpdatedRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryUpdatedHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryUpdatedNode" class="feedEntryViewerUpdatedText">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerSummary" dojoAttachPoint="entrySummaryRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2" colspan="2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entrySummaryHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td>\n                        \t<select dojoAttachPoint="entrySummarySelect" dojoAttachEvent="onchange:_switchEditor" style="display: none">\n                        \t\t<option value="text">Text</option>\n\t\t\t\t\t\t\t\t<option value="html">HTML</option>\n\t\t\t\t\t\t\t\t<option value="xhtml">XHTML</option>\n                        \t</select>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entrySummaryNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    \n        <tr class="feedEntryViewerContent" dojoAttachPoint="entryContentRow" style="display: none;">\n            <td>\n                <table width="100%" cellpadding="0" cellspacing="0" border="0">\n                    <tr class="graphic-tab-lgray">\n\t\t\t\t\t\t<td class="lp2">\n\t\t\t\t\t\t\t<span class="lp" dojoAttachPoint="entryContentHeader"></span>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td>\n                        \t<select dojoAttachPoint="entryContentSelect" dojoAttachEvent="onchange:_switchEditor" style="display: none">\n                        \t\t<option value="text">Text</option>\n\t\t\t\t\t\t\t\t<option value="html">HTML</option>\n\t\t\t\t\t\t\t\t<option value="xhtml">XHTML</option>\n                        \t</select>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td dojoAttachPoint="entryContentNode">\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    </table>\n</div>\n',"url:dojox/atom/widget/templates/PeopleEditor.html":'<div class="peopleEditor">\n\t<table style="width: 100%">\n\t\t<tbody dojoAttachPoint="peopleEditorEditors"></tbody>\n\t</table>\n\t<span class="peopleEditorButton" dojoAttachPoint="peopleEditorButton" dojoAttachEvent="onclick:_add"></span>\n</div>'}}),define("dojox/atom/widget/FeedEntryEditor",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/sniff","dojo/dom","dojo/dom-style","dojo/dom-construct","dijit/_Widget","dijit/_Templated","dijit/_Container","dijit/Editor","dijit/form/TextBox","dijit/form/SimpleTextarea","./FeedEntryViewer","../io/model","dojo/text!./templates/FeedEntryEditor.html","dojo/text!./templates/PeopleEditor.html","dojo/i18n!./nls/FeedEntryViewer","dojo/i18n!./nls/FeedEntryEditor","dojo/i18n!./nls/PeopleEditor"],function(e,t,a,i,r,d,o,n,l,s,m,u,f,y,h,c,M,v,p,g,b,w){e.experimental("dojox.atom.widget.FeedEntryEditor");var k=i("dojox.atom.widget.FeedEntryEditor",c,{_contentEditor:null,_oldContent:null,_setObject:null,enableEdit:!1,_contentEditorCreator:null,_editors:{},entryNewButton:null,_editable:!1,templateString:v,postCreate:function(){""!==this.entrySelectionTopic&&(this._subscriptions=[e.subscribe(this.entrySelectionTopic,this,"_handleEvent")]);var t=g;this.displayOptions.innerHTML=t.displayOptions,this.feedEntryCheckBoxLabelTitle.innerHTML=t.title,this.feedEntryCheckBoxLabelAuthors.innerHTML=t.authors,this.feedEntryCheckBoxLabelContributors.innerHTML=t.contributors,this.feedEntryCheckBoxLabelId.innerHTML=t.id,this.close.innerHTML=t.close,this.feedEntryCheckBoxLabelUpdated.innerHTML=t.updated,this.feedEntryCheckBoxLabelSummary.innerHTML=t.summary,this.feedEntryCheckBoxLabelContent.innerHTML=t.content,t=b,this.doNew.innerHTML=t.doNew,this.edit.innerHTML=t.edit,this.save.innerHTML=t.save,this.cancel.innerHTML=t.cancel},setEntry:function(e,t,a){this._entry!==e?(this._editMode=!1,a=!1):a=!0,k.superclass.setEntry.call(this,e,t),this._editable=this._isEditable(e),a||this._editable||(n.set(this.entryEditButton,"display","none"),n.set(this.entrySaveCancelButtons,"display","none")),this._editable&&this.enableEdit&&(a||(n.set(this.entryEditButton,"display",""),this.enableMenuFade&&this.entrySaveCancelButton&&r.fadeOut({node:this.entrySaveCancelButton,duration:250}).play()))},_toggleEdit:function(){this._editable&&this.enableEdit&&(n.set(this.entryEditButton,"display","none"),n.set(this.entrySaveCancelButtons,"display",""),this._editMode=!0,this.setEntry(this._entry,this._feed,!0))},_handleEvent:function(e){e.source!=this&&"delete"==e.action&&e.entry&&e.entry==this._entry&&n.set(this.entryEditButton,"display","none"),k.superclass._handleEvent.call(this,e)},_isEditable:function(e){var t=!1;if(e&&null!==e&&e.links&&null!==e.links)for(var a in e.links)if(e.links[a].rel&&"edit"==e.links[a].rel){t=!0;break}return t},setTitle:function(e,t,a){if(t){if(a.title&&a.title.value&&null!==a.title.value){this._toLoad||(this._toLoad=[]),this.entryTitleSelect.value=a.title.type;var i=this._createEditor(e,a.title,!0,"html"===a.title.type||"xhtml"===a.title.type);i.name="title",this._toLoad.push(i),this.setFieldValidity("titleedit",!0),this.setFieldValidity("title",!0)}}else k.superclass.setTitle.call(this,e,t,a),a.title&&a.title.value&&null!==a.title.value&&this.setFieldValidity("title",!0)},setAuthors:function(e,t,a){t?a.authors&&a.authors.length>0&&(this._editors.authors=this._createPeopleEditor(this.entryAuthorNode,{data:a.authors,name:"Author"}),this.setFieldValidity("authors",!0)):(k.superclass.setAuthors.call(this,e,t,a),a.authors&&a.authors.length>0&&this.setFieldValidity("authors",!0))},setContributors:function(e,t,a){t?a.contributors&&a.contributors.length>0&&(this._editors.contributors=this._createPeopleEditor(this.entryContributorNode,{data:a.contributors,name:"Contributor"}),this.setFieldValidity("contributors",!0)):(k.superclass.setContributors.call(this,e,t,a),a.contributors&&a.contributors.length>0&&this.setFieldValidity("contributors",!0))},setId:function(e,t,a){t?a.id&&null!==a.id&&(this._editors.id=this._createEditor(e,a.id),this.setFieldValidity("id",!0)):(k.superclass.setId.call(this,e,t,a),a.id&&null!==a.id&&this.setFieldValidity("id",!0))},setUpdated:function(e,t,a){t?a.updated&&null!==a.updated&&(this._editors.updated=this._createEditor(e,a.updated),this.setFieldValidity("updated",!0)):(k.superclass.setUpdated.call(this,e,t,a),a.updated&&null!==a.updated&&this.setFieldValidity("updated",!0))},setSummary:function(e,t,a){if(t){if(a.summary&&a.summary.value&&null!==a.summary.value){this._toLoad||(this._toLoad=[]),this.entrySummarySelect.value=a.summary.type;var i=this._createEditor(e,a.summary,!0,"html"===a.summary.type||"xhtml"===a.summary.type);i.name="summary",this._toLoad.push(i),this.setFieldValidity("summaryedit",!0),this.setFieldValidity("summary",!0)}}else k.superclass.setSummary.call(this,e,t,a),a.summary&&a.summary.value&&null!==a.summary.value&&this.setFieldValidity("summary",!0)},setContent:function(e,t,a){if(t){if(a.content&&a.content.value&&null!==a.content.value){this._toLoad||(this._toLoad=[]),this.entryContentSelect.value=a.content.type;var i=this._createEditor(e,a.content,!0,"html"===a.content.type||"xhtml"===a.content.type);i.name="content",this._toLoad.push(i),this.setFieldValidity("contentedit",!0),this.setFieldValidity("content",!0)}}else k.superclass.setContent.call(this,e,t,a),a.content&&a.content.value&&null!==a.content.value&&this.setFieldValidity("content",!0)},_createEditor:function(e,t,a,i){var r,d;if(!t)return i?{anchorNode:e,entryValue:"",editor:null,generateEditor:function(){var e=document.createElement("div");e.innerHTML=this.entryValue,this.anchorNode.appendChild(e);var t=new f({},e);return this.editor=t,t}}:(a?(r=document.createElement("textarea"),e.appendChild(r),n.set(r,"width","90%"),d=new h({},r)):(r=document.createElement("input"),e.appendChild(r),n.set(r,"width","95%"),d=new y({},r)),d.attr("value",""),d);var o;return o=void 0!==t.value?t.value:t.attr?t.attr("value"):t,i?(-1!=o.indexOf("<")&&(o=o.replace(/</g,"&lt;")),{anchorNode:e,entryValue:o,editor:null,generateEditor:function(){var e=document.createElement("div");e.innerHTML=this.entryValue,this.anchorNode.appendChild(e);var t=new f({},e);return this.editor=t,t}}):(a?(r=document.createElement("textarea"),e.appendChild(r),n.set(r,"width","90%"),d=new h({},r)):(r=document.createElement("input"),e.appendChild(r),n.set(r,"width","95%"),d=new y({},r)),d.attr("value",o),d)},_switchEditor:function(e){var a=null,i=null,r=null;i=d("ie")?e.srcElement:e.target,i===this.entryTitleSelect?(r=this.entryTitleNode,a="title"):i===this.entrySummarySelect?(r=this.entrySummaryNode,a="summary"):(r=this.entryContentNode,a="content");var o,n,s=this._editors[a];if("text"===i.value){if(s.isInstanceOf(f)){for(n=s.attr("value",!1),s.close(!1,!0),s.destroy();r.firstChild;)l.destroy(r.firstChild);o=this._createEditor(r,{value:n},!0,!1),this._editors[a]=o}}else if(!s.isInstanceOf(f)){for(n=s.attr("value"),s.destroy();r.firstChild;)l.destroy(r.firstChild);o=this._createEditor(r,{value:n},!0,!0),o=t.hitch(o,o.generateEditor)(),this._editors[a]=o}},_createPeopleEditor:function(e,t){var a=document.createElement("div");return e.appendChild(a),new F(t,a)},saveEdits:function(){n.set(this.entrySaveCancelButtons,"display","none"),n.set(this.entryEditButton,"display",""),n.set(this.entryNewButton,"display","");var t,a,i,r,d,o,l=!1;if(this._new){this._new=!1,r=new M.Entry,t=this._editors.title.attr("value"),"xhtml"===this.entryTitleSelect.value&&(t=this._enforceXhtml(t),t='<div xmlns="http://www.w3.org/1999/xhtml">'+t+"</div>"),r.setTitle(t,this.entryTitleSelect.value),r.id=this._editors.id.attr("value"),d=this._editors.authors.getValues();for(a in d)(d[a].name||d[a].email||d[a].uri)&&r.addAuthor(d[a].name,d[a].email,d[a].uri);o=this._editors.contributors.getValues();for(a in o)(o[a].name||o[a].email||o[a].uri)&&r.addContributor(o[a].name,o[a].email,o[a].uri);t=this._editors.summary.attr("value"),"xhtml"===this.entrySummarySelect.value&&(t=this._enforceXhtml(t),t='<div xmlns="http://www.w3.org/1999/xhtml">'+t+"</div>"),r.summary=new M.Content("summary",t,null,this.entrySummarySelect.value),t=this._editors.content.attr("value"),"xhtml"===this.entryContentSelect.value&&(t=this._enforceXhtml(t),t='<div xmlns="http://www.w3.org/1999/xhtml">'+t+"</div>"),r.content=new M.Content("content",t,null,this.entryContentSelect.value),n.set(this.entryNewButton,"display",""),e.publish(this.entrySelectionTopic,[{action:"post",source:this,entry:r}])}else{if(r=this.getEntry(),!this._editors.title||this._editors.title.attr("value")==r.title.value&&this.entryTitleSelect.value==r.title.type||(t=this._editors.title.attr("value"),"xhtml"===this.entryTitleSelect.value&&(t=this._enforceXhtml(t),0!==t.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">')&&(t='<div xmlns="http://www.w3.org/1999/xhtml">'+t+"</div>")),r.title=new M.Content("title",t,null,this.entryTitleSelect.value),l=!0),this._editors.id.attr("value")!=r.id&&(r.id=this._editors.id.attr("value"),l=!0),!this._editors.summary||this._editors.summary.attr("value")==r.summary.value&&this.entrySummarySelect.value==r.summary.type||(t=this._editors.summary.attr("value"),"xhtml"===this.entrySummarySelect.value&&(t=this._enforceXhtml(t),0!==t.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">')&&(t='<div xmlns="http://www.w3.org/1999/xhtml">'+t+"</div>")),r.summary=new M.Content("summary",t,null,this.entrySummarySelect.value),l=!0),!this._editors.content||this._editors.content.attr("value")==r.content.value&&this.entryContentSelect.value==r.content.type||(t=this._editors.content.attr("value"),"xhtml"===this.entryContentSelect.value&&(t=this._enforceXhtml(t),0!==t.indexOf('<div xmlns="http://www.w3.org/1999/xhtml">')&&(t='<div xmlns="http://www.w3.org/1999/xhtml">'+t+"</div>")),r.content=new M.Content("content",t,null,this.entryContentSelect.value),l=!0),this._editors.authors)if(l){r.authors=[],d=this._editors.authors.getValues();for(a in d)(d[a].name||d[a].email||d[a].uri)&&r.addAuthor(d[a].name,d[a].email,d[a].uri)}else{var s=r.authors,m=function(e,t,i){for(a in s)if(s[a].name===e&&s[a].email===t&&s[a].uri===i)return!0;return!1};d=this._editors.authors.getValues(),i=!1;for(a in d)if(!m(d[a].name,d[a].email,d[a].uri)){i=!0;break}if(i){r.authors=[];for(a in d)(d[a].name||d[a].email||d[a].uri)&&r.addAuthor(d[a].name,d[a].email,d[a].uri);l=!0}}if(this._editors.contributors)if(l){r.contributors=[],o=this._editors.contributors.getValues();for(a in o)(o[a].name||o[a].email||o[a].uri)&&r.addAuthor(o[a].name,o[a].email,o[a].uri)}else{var u=r.contributors,f=function(e,t,i){for(a in u)if(u[a].name===e&&u[a].email===t&&u[a].uri===i)return!0;return!1};o=this._editors.contributors.getValues(),i=!1;for(a in o)if(f(o[a].name,o[a].email,o[a].uri)){i=!0;break}if(i){r.contributors=[];for(a in o)(o[a].name||o[a].email||o[a].uri)&&r.addContributor(o[a].name,o[a].email,o[a].uri);l=!0}}l&&e.publish(this.entrySelectionTopic,[{action:"update",source:this,entry:r,callback:this._handleSave}])}this._editMode=!1,this.setEntry(r,this._feed,!0)},_handleSave:function(e,t){this._editMode=!1,this.clear(),this.setEntry(e,this.getFeed(),!0)},cancelEdits:function(){this._new=!1,n.set(this.entrySaveCancelButtons,"display","none"),this._editable&&n.set(this.entryEditButton,"display",""),n.set(this.entryNewButton,"display",""),this._editMode=!1,this.clearEditors(),this.setEntry(this.getEntry(),this.getFeed(),!0)},clear:function(){this._editable=!1,this.clearEditors(),k.superclass.clear.apply(this),this._contentEditor&&(this._contentEditor=this._setObject=this._oldContent=this._contentEditorCreator=null,this._editors={})},clearEditors:function(){for(var e in this._editors)this._editors[e].isInstanceOf(f)&&this._editors[e].close(!1,!0),this._editors[e].destroy();this._editors={}},_enforceXhtml:function(e){var t=null;if(e){var a=/<br>/g;t=e.replace(a,"<br/>"),t=this._closeTag(t,"hr"),t=this._closeTag(t,"img")}return t},_closeTag:function(e,t){var a="<"+t,i=e.indexOf(a);if(-1!==i)for(;-1!==i;){for(var r="",d=!1,o=0;o<e.length;o++){var n=e.charAt(o);o<=i||d?r+=n:(">"===n&&(r+="/",d=!0),r+=n)}e=r,i=e.indexOf(a,i+1)}return e},_toggleNew:function(){n.set(this.entryNewButton,"display","none"),n.set(this.entryEditButton,"display","none"),n.set(this.entrySaveCancelButtons,"display",""),this.entrySummarySelect.value="text",this.entryContentSelect.value="text",this.entryTitleSelect.value="text",this.clearNodes(),this._new=!0;var e=g,t=new c.EntryHeader({title:e.title});this.entryTitleHeader.appendChild(t.domNode),this._editors.title=this._createEditor(this.entryTitleNode,null),this.setFieldValidity("title",!0);var a=new c.EntryHeader({title:e.authors});this.entryAuthorHeader.appendChild(a.domNode),this._editors.authors=this._createPeopleEditor(this.entryAuthorNode,{name:"Author"}),this.setFieldValidity("authors",!0);var i=new c.EntryHeader({title:e.contributors});this.entryContributorHeader.appendChild(i.domNode),this._editors.contributors=this._createPeopleEditor(this.entryContributorNode,{name:"Contributor"}),this.setFieldValidity("contributors",!0);var r=new c.EntryHeader({title:e.id});this.entryIdHeader.appendChild(r.domNode),this._editors.id=this._createEditor(this.entryIdNode,null),this.setFieldValidity("id",!0);var d=new c.EntryHeader({title:e.updated});this.entryUpdatedHeader.appendChild(d.domNode),this._editors.updated=this._createEditor(this.entryUpdatedNode,null),this.setFieldValidity("updated",!0);var o=new c.EntryHeader({title:e.summary});this.entrySummaryHeader.appendChild(o.domNode),this._editors.summary=this._createEditor(this.entrySummaryNode,null,!0),this.setFieldValidity("summaryedit",!0),this.setFieldValidity("summary",!0);var l=new c.EntryHeader({title:e.content});this.entryContentHeader.appendChild(l.domNode),this._editors.content=this._createEditor(this.entryContentNode,null,!0),this.setFieldValidity("contentedit",!0),this.setFieldValidity("content",!0),this._displaySections()},_displaySections:function(){if(n.set(this.entrySummarySelect,"display","none"),n.set(this.entryContentSelect,"display","none"),n.set(this.entryTitleSelect,"display","none"),this.isFieldValid("contentedit")&&n.set(this.entryContentSelect,"display",""),this.isFieldValid("summaryedit")&&n.set(this.entrySummarySelect,"display",""),this.isFieldValid("titleedit")&&n.set(this.entryTitleSelect,"display",""),k.superclass._displaySections.apply(this),this._toLoad){for(var e in this._toLoad){var a;a=this._toLoad[e].generateEditor?t.hitch(this._toLoad[e],this._toLoad[e].generateEditor)():this._toLoad[e],this._editors[this._toLoad[e].name]=a,this._toLoad[e]=null}this._toLoad=null}}}),F=i("dojox.atom.widget.PeopleEditor",[s,m,u],{templateString:p,_rows:[],_editors:[],_index:0,_numRows:0,postCreate:function(){var e=w;if(this.name?"Author"==this.name?this.peopleEditorButton.appendChild(document.createTextNode("["+e.addAuthor+"]")):"Contributor"==this.name&&this.peopleEditorButton.appendChild(document.createTextNode("["+e.addContributor+"]")):this.peopleEditorButton.appendChild(document.createTextNode("["+e.add+"]")),this._editors=[],this.data&&0!==this.data.length)for(var t in this.data)this._createEditors(this.data[t].name,this.data[t].email,this.data[t].uri,t),this._index++,this._numRows++;else this._createEditors(null,null,null,0,this.name),this._index=1},destroy:function(){for(var e in this._editors)for(var t in this._editors[e])this._editors[e][t].destroy();this._editors=[]},_createEditors:function(e,t,i,r,d){var o=document.createElement("tr");this.peopleEditorEditors.appendChild(o),o.id="removeRow"+r;var l=document.createElement("td");if(l.setAttribute("align","right"),o.appendChild(l),l.colSpan=2,this._numRows>0){var s=document.createElement("hr");l.appendChild(s),s.id="hr"+r}o=document.createElement("span"),l.appendChild(o),o.className="peopleEditorButton",n.set(o,"font-size","x-small"),a.connect(o,"onclick",this,"_removeEditor"),o.id="remove"+r,l=document.createTextNode("[X]"),o.appendChild(l),o=document.createElement("tr"),this.peopleEditorEditors.appendChild(o),o.id="editorsRow"+r;var m=document.createElement("td");o.appendChild(m),n.set(m,"width","20%"),l=document.createElement("td"),o.appendChild(l),o=document.createElement("table"),m.appendChild(o),n.set(o,"width","100%"),m=document.createElement("tbody"),o.appendChild(m),o=document.createElement("table"),l.appendChild(o),n.set(o,"width","100%"),l=document.createElement("tbody"),o.appendChild(l),this._editors[r]=[],this._editors[r].push(this._createEditor(e,d+"name"+r,"Name:",m,l)),this._editors[r].push(this._createEditor(t,d+"email"+r,"Email:",m,l)),this._editors[r].push(this._createEditor(i,d+"uri"+r,"URI:",m,l))},_createEditor:function(e,t,a,i,r){var d=document.createElement("tr");i.appendChild(d);var o=document.createElement("label");o.setAttribute("for",t),o.appendChild(document.createTextNode(a)),i=document.createElement("td"),i.appendChild(o),d.appendChild(i),d=document.createElement("tr"),r.appendChild(d),r=document.createElement("td"),d.appendChild(r);var l=document.createElement("input");l.setAttribute("id",t),r.appendChild(l),n.set(l,"width","95%");var s=new y({},l);return s.attr("value",e),s},_removeEditor:function(e){var t=null;t=d("ie")?e.srcElement:e.target;var a=t.id;a=a.substring(6);for(var i in this._editors[a])this._editors[a][i].destroy();var r=o.byId("editorsRow"+a),n=r.parentNode;n.removeChild(r),r=o.byId("removeRow"+a),n=r.parentNode,n.removeChild(r),this._numRows--,1===this._numRows&&"hr"===n.firstChild.firstChild.firstChild.tagName.toLowerCase()&&(r=n.firstChild.firstChild,r.removeChild(r.firstChild)),this._editors[a]=null},_add:function(){this._createEditors(null,null,null,this._index),this._index++,this._numRows++},getValues:function(){var e=[];for(var t in this._editors)this._editors[t]&&e.push({name:this._editors[t][0].attr("value"),email:this._editors[t][1].attr("value"),uri:this._editors[t][2].attr("value")});return e}});return k});//# sourceMappingURL=FeedEntryEditor.js.map