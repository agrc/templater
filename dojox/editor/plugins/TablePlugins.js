//>>built
require({cache:{"url:dojox/editor/plugins/resources/insertTable.html":'<div class="dijitDialog" tabindex="-1" role="dialog" aria-labelledby="${id}_title">\n	<div dojoAttachPoint="titleBar" class="dijitDialogTitleBar">\n	<span dojoAttachPoint="titleNode" class="dijitDialogTitle" id="${id}_title">${insertTableTitle}</span>\n	<span dojoAttachPoint="closeButtonNode" class="dijitDialogCloseIcon" dojoAttachEvent="onclick: onCancel" title="${buttonCancel}">\n		<span dojoAttachPoint="closeText" class="closeText" title="${buttonCancel}">x</span>\n	</span>\n	</div>\n    <div dojoAttachPoint="containerNode" class="dijitDialogPaneContent">\n        <table class="etdTable"><tr>\n            <td>\n                <label>${rows}</label>\n			</td><td>\n                <span dojoAttachPoint="selectRow" dojoType="dijit.form.TextBox" value="2"></span>\n            </td><td><table><tr><td class="inner">\n                <label>${columns}</label>\n			</td><td class="inner">\n                <span dojoAttachPoint="selectCol" dojoType="dijit.form.TextBox" value="2"></span>\n            </td></tr></table></td></tr>		\n			<tr><td>\n                <label>${tableWidth}</label>\n            </td><td>\n                <span dojoAttachPoint="selectWidth" dojoType="dijit.form.TextBox" value="100"></span>\n			</td><td>\n                <select dojoAttachPoint="selectWidthType" hasDownArrow="true" dojoType="dijit.form.FilteringSelect">\n                  <option value="percent">${percent}</option>\n                  <option value="pixels">${pixels}</option>\n                </select></td></tr>	\n            <tr><td>\n                <label>${borderThickness}</label>\n            </td><td>\n                <span dojoAttachPoint="selectBorder" dojoType="dijit.form.TextBox" value="1"></span>\n            </td><td>\n                ${pixels}\n            </td></tr><tr><td>\n                <label>${cellPadding}</label>\n            </td><td>\n                <span dojoAttachPoint="selectPad" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellpad"></td></tr><tr><td>\n                <label>${cellSpacing}</label>\n            </td><td>\n                <span dojoAttachPoint="selectSpace" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellspace"></td></tr></table>\n        <div class="dialogButtonContainer">\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onInsert">${buttonInsert}</div>\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onCancel">${buttonCancel}</div>\n        </div>\n	</div>\n</div>\n',"url:dojox/editor/plugins/resources/modifyTable.html":'<div class="dijitDialog" tabindex="-1" role="dialog" aria-labelledby="${id}_title">\n	<div dojoAttachPoint="titleBar" class="dijitDialogTitleBar">\n	<span dojoAttachPoint="titleNode" class="dijitDialogTitle" id="${id}_title">${modifyTableTitle}</span>\n	<span dojoAttachPoint="closeButtonNode" class="dijitDialogCloseIcon" dojoAttachEvent="onclick: onCancel" title="${buttonCancel}">\n		<span dojoAttachPoint="closeText" class="closeText" title="${buttonCancel}">x</span>\n	</span>\n	</div>\n    <div dojoAttachPoint="containerNode" class="dijitDialogPaneContent">\n        <table class="etdTable">\n          <tr><td>\n                <label>${backgroundColor}</label>\n            </td><td colspan="2">\n                <span class="colorSwatchBtn" dojoAttachPoint="backgroundCol"></span>\n            </td></tr><tr><td>\n                <label>${borderColor}</label>\n            </td><td colspan="2">\n                <span class="colorSwatchBtn" dojoAttachPoint="borderCol"></span>\n            </td></tr><tr><td>\n                <label>${align}</label>\n            </td><td colspan="2">	\n                <select dojoAttachPoint="selectAlign" dojoType="dijit.form.FilteringSelect">\n                  <option value="default">${default}</option>\n                  <option value="left">${left}</option>\n                  <option value="center">${center}</option>\n                  <option value="right">${right}</option>\n                </select>\n            </td></tr>\n            <tr><td>\n                <label>${tableWidth}</label>\n            </td><td>\n                <span dojoAttachPoint="selectWidth" dojoType="dijit.form.TextBox" value="100"></span>\n            </td><td>\n                <select dojoAttachPoint="selectWidthType" hasDownArrow="true" dojoType="dijit.form.FilteringSelect">\n                  <option value="percent">${percent}</option>\n                  <option value="pixels">${pixels}</option>\n                </select></td></tr>	\n            <tr><td>\n                <label>${borderThickness}</label>\n            </td><td>\n                <span dojoAttachPoint="selectBorder" dojoType="dijit.form.TextBox" value="1"></span>\n            </td><td>\n                ${pixels}\n            </td></tr><tr><td>\n                <label>${cellPadding}</label>\n            </td><td>\n                <span dojoAttachPoint="selectPad" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellpad"></td></tr><tr><td>\n                <label>${cellSpacing}</label>\n            </td><td>\n                <span dojoAttachPoint="selectSpace" dojoType="dijit.form.TextBox" value="0"></span>\n            </td><td class="cellspace"></td></tr>\n        </table>\n        <div class="dialogButtonContainer">\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onSet">${buttonSet}</div>\n            <div dojoType="dijit.form.Button" dojoAttachEvent="onClick: onCancel">${buttonCancel}</div>\n        </div>\n	</div>\n</div>\n'}}),define("dojox/editor/plugins/TablePlugins",["dojo/_base/declare","dojo/_base/array","dojo/_base/Color","dojo/aspect","dojo/dom-attr","dojo/dom-style","dijit/_editor/_Plugin","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/Dialog","dijit/Menu","dijit/MenuItem","dijit/MenuSeparator","dijit/ColorPalette","dojox/widget/ColorPicker","dojo/text!./resources/insertTable.html","dojo/text!./resources/modifyTable.html","dojo/i18n!./nls/TableDialog","dijit/_base/popup","dijit/popup","dojo/_base/connect","dijit/TooltipDialog","dijit/form/Button","dijit/form/DropDownButton","dijit/form/TextBox","dijit/form/FilteringSelect"],function(e,t,i,a,r,o,n,s,d,l,h,u,m,c,f,y,p,g,v){function b(e){return new k(e)}dojo.experimental("dojox.editor.plugins.TablePlugins");var M=e(n,{tablesConnected:!1,currentlyAvailable:!1,alwaysAvailable:!1,availableCurrentlySet:!1,initialized:!1,tableData:null,shiftKeyDown:!1,editorDomNode:null,undoEnabled:!0,refCount:0,doMixins:function(){dojo.mixin(this.editor,{getAncestorElement:function(e){return this._sCall("getAncestorElement",[e])},hasAncestorElement:function(e){return this._sCall("hasAncestorElement",[e])},selectElement:function(e){this._sCall("selectElement",[e])},byId:function(e){return dojo.byId(e,this.document)},query:function(e,t,i){var a=dojo.query(e,t||this.document);return i?a[0]:a}})},initialize:function(e){this.refCount++,e.customUndo=!0,this.initialized||(this.initialized=!0,this.editor=e,this.editor._tablePluginHandler=this,e.onLoadDeferred.addCallback(dojo.hitch(this,function(){this.editorDomNode=this.editor.editNode||this.editor.iframe.document.body.firstChild,this._myListeners=[dojo.connect(this.editorDomNode,"mouseup",this.editor,"onClick"),dojo.connect(this.editor,"onDisplayChanged",this,"checkAvailable"),dojo.connect(this.editor,"onBlur",this,"checkAvailable"),dojo.connect(this.editor,"_saveSelection",this,function(){this._savedTableInfo=this.getTableInfo()}),dojo.connect(this.editor,"_restoreSelection",this,function(){delete this._savedTableInfo})],this.doMixins(),this.connectDraggable()})))},getTableInfo:function(e){if(this._savedTableInfo)return this._savedTableInfo;if(e&&this._tempStoreTableData(!1),this.tableData)return this.tableData;var t,i,a,r,o,n,s,d,l;return a=this.editor.getAncestorElement("td"),a&&(t=a.parentNode),o=this.editor.getAncestorElement("table"),o?(r=dojo.query("td",o),r.forEach(function(e,t){a==e&&(s=t)}),i=dojo.query("tr",o),i.forEach(function(e,i){t==e&&(d=i)}),n=r.length/i.length,l={tbl:o,td:a,tr:t,trs:i,tds:r,rows:i.length,cols:n,tdIndex:s,trIndex:d,colIndex:s%n}):l={},this.tableData=l,this._tempStoreTableData(500),this.tableData},connectDraggable:function(){dojo.isIE&&(this.editorDomNode.ondragstart=dojo.hitch(this,"onDragStart"),this.editorDomNode.ondragend=dojo.hitch(this,"onDragEnd"))},onDragStart:function(){var e=window.event;e.srcElement.id||(e.srcElement.id="tbl_"+(new Date).getTime())},onDragEnd:function(){var e=window.event,t=e.srcElement,i=t.id,a=this.editor.document;"table"==t.tagName.toLowerCase()&&setTimeout(function(){var e=dojo.byId(i,a);dojo.removeAttr(e,"align")},100)},checkAvailable:function(){return this.availableCurrentlySet?this.currentlyAvailable:this.editor?this.alwaysAvailable?!0:(this.currentlyAvailable=this.editor.focused&&(this._savedTableInfo?this._savedTableInfo.tbl:this.editor.hasAncestorElement("table")),this.currentlyAvailable?this.connectTableKeys():this.disconnectTableKeys(),this._tempAvailability(500),dojo.publish(this.editor.id+"_tablePlugins",[this.currentlyAvailable]),this.currentlyAvailable):!1},_prepareTable:function(e){var t=this.editor.query("td",e);return t[0].id||t.forEach(function(e,t){e.id||(e.id="tdid"+t+this.getTimeStamp())},this),t},getTimeStamp:function(){return(new Date).getTime()},_tempStoreTableData:function(e){e===!0||(e===!1?this.tableData=null:void 0===e||setTimeout(dojo.hitch(this,function(){this.tableData=null}),e))},_tempAvailability:function(e){e===!0?this.availableCurrentlySet=!0:e===!1?this.availableCurrentlySet=!1:void 0===e||(this.availableCurrentlySet=!0,setTimeout(dojo.hitch(this,function(){this.availableCurrentlySet=!1}),e))},connectTableKeys:function(){if(!this.tablesConnected){this.tablesConnected=!0;var e=this.editor.iframe?this.editor.document:this.editor.editNode;this.cnKeyDn=dojo.connect(e,"onkeydown",this,"onKeyDown"),this.cnKeyUp=dojo.connect(e,"onkeyup",this,"onKeyUp"),this._myListeners.push(dojo.connect(e,"onkeypress",this,"onKeyUp"))}},disconnectTableKeys:function(){dojo.disconnect(this.cnKeyDn),dojo.disconnect(this.cnKeyUp),this.tablesConnected=!1},onKeyDown:function(e){var t=e.keyCode;if(16==t&&(this.shiftKeyDown=!0),9==t){var i=this.getTableInfo();i.tdIndex=this.shiftKeyDown?i.tdIndex-1:tabTo=i.tdIndex+1,i.tdIndex>=0&&i.tdIndex<i.tds.length?(this.editor.selectElement(i.tds[i.tdIndex]),this.currentlyAvailable=!0,this._tempAvailability(!0),this._tempStoreTableData(!0),this.stopEvent=!0):(this.stopEvent=!1,this.onDisplayChanged()),this.stopEvent&&dojo.stopEvent(e)}},onKeyUp:function(e){var t=e.keyCode;16==t&&(this.shiftKeyDown=!1),37!=t&&38!=t&&39!=t&&40!=t||this.onDisplayChanged(),9==t&&this.stopEvent&&dojo.stopEvent(e)},onDisplayChanged:function(){this.currentlyAvailable=!1,this._tempStoreTableData(!1),this._tempAvailability(!1),this.checkAvailable()},uninitialize:function(e){this.editor==e&&(this.refCount--,!this.refCount&&this.initialized&&(this.tablesConnected&&this.disconnectTableKeys(),this.initialized=!1,dojo.forEach(this._myListeners,function(e){dojo.disconnect(e)}),delete this._myListeners,delete this.editor._tablePluginHandler,delete this.editor),this.inherited(arguments))}}),k=e("dojox.editor.plugins.TablePlugins",n,{iconClassPrefix:"editorIcon",useDefaultCommand:!1,buttonClass:dijit.form.Button,commandName:"",label:"",alwaysAvailable:!1,undoEnabled:!0,onDisplayChanged:function(e){this.alwaysAvailable||(this.available=e,this.button.set("disabled",!this.available))},setEditor:function(e){this.editor=e,this.editor.customUndo=!0,this.inherited(arguments),this._availableTopic=dojo.subscribe(this.editor.id+"_tablePlugins",this,"onDisplayChanged"),this.onEditorLoaded()},onEditorLoaded:function(){if(this.editor._tablePluginHandler)this.editor._tablePluginHandler.initialize(this.editor);else{var e=new M;e.initialize(this.editor)}},selectTable:function(){var e=this.getTableInfo();e&&e.tbl&&this.editor._sCall("selectElement",[e.tbl])},_initButton:function(){this.command=this.name,this.label=this.editor.commands[this.command]=this._makeTitle(this.command),this.inherited(arguments),delete this.command,this.connect(this.button,"onClick","modTable"),this.onDisplayChanged(!1)},modTable:function(e,t){dojo.isIE&&this.editor.focus(),this.begEdit();var i,a,r,o=this.getTableInfo(),n=dojo.isString(e)?e:this.name,s=!1;switch(n){case"insertTableRowBefore":for(i=o.tbl.insertRow(o.trIndex),r=0;r<o.cols;r++)a=i.insertCell(-1),a.innerHTML="&nbsp;";break;case"insertTableRowAfter":for(i=o.tbl.insertRow(o.trIndex+1),r=0;r<o.cols;r++)a=i.insertCell(-1),a.innerHTML="&nbsp;";break;case"insertTableColumnBefore":o.trs.forEach(function(e){a=e.insertCell(o.colIndex),a.innerHTML="&nbsp;"}),s=!0;break;case"insertTableColumnAfter":o.trs.forEach(function(e){a=e.insertCell(o.colIndex+1),a.innerHTML="&nbsp;"}),s=!0;break;case"deleteTableRow":o.tbl.deleteRow(o.trIndex);break;case"deleteTableColumn":o.trs.forEach(function(e){e.deleteCell(o.colIndex)}),s=!0;break;case"modifyTable":break;case"insertTable":}s&&this.makeColumnsEven(),this.endEdit()},begEdit:function(){this.editor._tablePluginHandler.undoEnabled&&(this.editor.customUndo?this.editor.beginEditing():this.valBeforeUndo=this.editor.getValue())},endEdit:function(){if(this.editor._tablePluginHandler.undoEnabled){if(this.editor.customUndo)this.editor.endEditing();else{var e=this.editor.getValue();this.editor.setValue(this.valBeforeUndo),this.editor.replaceValue(e)}this.editor.onDisplayChanged()}},makeColumnsEven:function(){setTimeout(dojo.hitch(this,function(){var e=this.getTableInfo(!0),t=Math.floor(100/e.cols);e.tds.forEach(function(e){dojo.attr(e,"width",t+"%")})}),10)},getTableInfo:function(e){return this.editor._tablePluginHandler.getTableInfo(e)},_makeTitle:function(e){this._strings=dojo.i18n.getLocalization("dojox.editor.plugins","TableDialog");var t=this._strings[e+"Title"]||this._strings[e+"Label"]||e;return t},getSelectedCells:function(){var e=[],t=this.getTableInfo().tbl;this.editor._tablePluginHandler._prepareTable(t);var i=this.editor,a=i._sCall("getSelectedHtml",[null]),r=a.match(/id="*\w*"*/g);if(dojo.forEach(r,function(t){var a=t.substring(3,t.length);'"'==a.charAt(0)&&'"'==a.charAt(a.length-1)&&(a=a.substring(1,a.length-1));var r=i.byId(a);r&&"td"==r.tagName.toLowerCase()&&e.push(r)},this),!e.length){var o=dijit.range.getSelection(i.window);if(o.rangeCount)for(var n=o.getRangeAt(0),s=n.startContainer;s&&s!=i.editNode&&s!=i.document;){if(1===s.nodeType){var d=s.tagName?s.tagName.toLowerCase():"";if("td"===d)return[s]}s=s.parentNode}}return e},updateState:function(){this.button&&(!this.available&&!this.alwaysAvailable||this.get("disabled")?this.button.set("disabled",!0):this.button.set("disabled",!1))},destroy:function(){this.inherited(arguments),dojo.unsubscribe(this._availableTopic),this.editor._tablePluginHandler.uninitialize(this.editor)}}),w=e(k,{constructor:function(){this.connect(this,"setEditor",function(e){e.onLoadDeferred.addCallback(dojo.hitch(this,function(){this._createContextMenu()})),this.button.domNode.style.display="none"})},destroy:function(){this.menu&&(this.menu.destroyRecursive(),delete this.menu),this.inherited(arguments)},_initButton:function(){this.inherited(arguments),"tableContextMenu"===this.name&&(this.button.domNode.display="none")},_createContextMenu:function(){var e=new u({targetNodeIds:[this.editor.iframe]}),t=v;e.addChild(new m({label:t.selectTableLabel,onClick:dojo.hitch(this,"selectTable")})),e.addChild(new c),e.addChild(new m({label:t.insertTableRowBeforeLabel,onClick:dojo.hitch(this,"modTable","insertTableRowBefore")})),e.addChild(new m({label:t.insertTableRowAfterLabel,onClick:dojo.hitch(this,"modTable","insertTableRowAfter")})),e.addChild(new m({label:t.insertTableColumnBeforeLabel,onClick:dojo.hitch(this,"modTable","insertTableColumnBefore")})),e.addChild(new m({label:t.insertTableColumnAfterLabel,onClick:dojo.hitch(this,"modTable","insertTableColumnAfter")})),e.addChild(new c),e.addChild(new m({label:t.deleteTableRowLabel,onClick:dojo.hitch(this,"modTable","deleteTableRow")})),e.addChild(new m({label:t.deleteTableColumnLabel,onClick:dojo.hitch(this,"modTable","deleteTableColumn")})),this.menu=e}}),_=e("dojox.editor.plugins.EditorTableDialog",[h,d,l],{baseClass:"EditorTableDialog",templateString:p,postMixInProperties:function(){dojo.mixin(this,v),this.inherited(arguments)},postCreate:function(){dojo.addClass(this.domNode,this.baseClass),this.inherited(arguments)},onInsert:function(){for(var e=this.selectRow.get("value")||1,t=this.selectCol.get("value")||1,i=this.selectWidth.get("value"),a=this.selectWidthType.get("value"),r=this.selectBorder.get("value"),o=this.selectPad.get("value"),n=this.selectSpace.get("value"),s="tbl_"+(new Date).getTime(),d='<table id="'+s+'"width="'+i+("percent"==a?"%":"")+'" border="'+r+'" cellspacing="'+n+'" cellpadding="'+o+'">\n',l=0;e>l;l++){d+="	<tr>\n";for(var h=0;t>h;h++)d+='		<td width="'+Math.floor(100/t)+'%">&nbsp;</td>\n';d+="	</tr>\n"}d+="</table><br />";var u=dojo.connect(this,"onHide",function(){dojo.disconnect(u);var e=this;setTimeout(function(){e.destroyRecursive()},10)});this.hide(),this.onBuildTable({htmlText:d,id:s})},onCancel:function(){var e=dojo.connect(this,"onHide",function(){dojo.disconnect(e);var t=this;setTimeout(function(){t.destroyRecursive()},10)})},onBuildTable:function(e){}}),x=e("dojox.editor.plugins.InsertTable",k,{alwaysAvailable:!0,modTable:function(){var e=new _({});e.show();var t=dojo.connect(e,"onBuildTable",this,function(e){dojo.disconnect(t),this.editor.focus();this.editor.execCommand("inserthtml",e.htmlText)})}}),j=e([h,d,l],{baseClass:"EditorTableDialog",table:null,tableAtts:{},templateString:g,postMixInProperties:function(){dojo.mixin(this,v),this.inherited(arguments)},postCreate:function(){dojo.addClass(this.domNode,this.baseClass),this.inherited(arguments);var e=new this.colorPicker({params:this.params});this.connect(e,"onChange",function(t){this._started&&(dijit.popup.close(e),this.setBrdColor(t))}),this.connect(e,"onBlur",function(){dijit.popup.close(e)}),this.connect(this.borderCol,"click",function(){e.set("value",this.brdColor,!1),dijit.popup.open({popup:e,around:this.borderCol}),e.focus()});var t=new this.colorPicker({params:this.params});this.connect(t,"onChange",function(e){this._started&&(dijit.popup.close(t),this.setBkColor(e))}),this.connect(t,"onBlur",function(){dijit.popup.close(t)}),this.connect(this.backgroundCol,"click",function(){t.set("value",this.bkColor,!1),dijit.popup.open({popup:t,around:this.backgroundCol}),t.focus()}),this.own(e,t),this.pickers=[e,t],this.setBrdColor(o.get(this.table,"borderColor")),this.setBkColor(o.get(this.table,"backgroundColor"));var i=r.get(this.table,"width");i||(i=this.table.style.width);var a="pixels";dojo.isString(i)&&i.indexOf("%")>-1&&(a="percent",i=i.replace(/%/,"")),i?(this.selectWidth.set("value",i),this.selectWidthType.set("value",a)):(this.selectWidth.set("value",""),this.selectWidthType.set("value","percent")),this.selectBorder.set("value",r.get(this.table,"border")),this.selectPad.set("value",r.get(this.table,"cellPadding")),this.selectSpace.set("value",r.get(this.table,"cellSpacing")),this.selectAlign.set("value",r.get(this.table,"align"))},startup:function(){t.forEach(this.pickers,function(e){e.startup()}),this.inherited(arguments)},setBrdColor:function(e){this.brdColor=e,o.set(this.borderCol,"backgroundColor",e)},setBkColor:function(e){this.bkColor=e,o.set(this.backgroundCol,"backgroundColor",e)},onSet:function(){o.set(this.table,"borderColor",this.brdColor),o.set(this.table,"backgroundColor",this.bkColor),this.selectWidth.get("value")&&(o.set(this.table,"width",""),r.set(this.table,"width",this.selectWidth.get("value")+("pixels"==this.selectWidthType.get("value")?"":"%"))),r.set(this.table,"border",this.selectBorder.get("value")),r.set(this.table,"cellPadding",this.selectPad.get("value")),r.set(this.table,"cellSpacing",this.selectSpace.get("value")),r.set(this.table,"align",this.selectAlign.get("value"));var e=dojo.connect(this,"onHide",function(){dojo.disconnect(e);var t=this;setTimeout(function(){t.destroyRecursive()},10)});this.hide()},onCancel:function(){var e=dojo.connect(this,"onHide",function(){dojo.disconnect(e);var t=this;setTimeout(function(){t.destroyRecursive()},10)})},onSetTable:function(e){}}),F=e("dojox.editor.plugins.ModifyTable",k,{colorPicker:f,modTable:function(){if(this.editor._tablePluginHandler.checkAvailable()){var e=this.getTableInfo(),t=new j({table:e.tbl,colorPicker:"string"==typeof this.colorPicker?require(this.colorPicker):this.colorPicker,params:this.params});t.show(),this.connect(t,"onSetTable",function(e){var t=this.getTableInfo();o.set(t.td,"backgroundColor",e)})}}}),I=e([s,d,l],{colorPicker:y,templateString:"<div style='display: none; position: absolute; top: -10000; z-index: -10000'><div dojoType='dijit.TooltipDialog' dojoAttachPoint='dialog' class='dojoxEditorColorPicker'><div dojoAttachPoint='_colorPicker'></div><div style='margin: 0.5em 0em 0em 0em'><button dojoType='dijit.form.Button' type='submit' dojoAttachPoint='_setButton'>${buttonSet}</button>&nbsp;<button dojoType='dijit.form.Button' type='button' dojoAttachPoint='_cancelButton'>${buttonCancel}</button></div></div></div>",widgetsInTemplate:!0,constructor:function(){dojo.mixin(this,v)},postCreate:function(){var e="string"==typeof this.colorPicker?require(this.colorPicker):this.colorPicker;this._colorPicker=new e({params:this.params},this._colorPicker)},startup:function(){this._started||(this.inherited(arguments),this.connect(this.dialog,"execute",function(){this.onChange(this.get("value"))}),this.connect(this._cancelButton,"onClick",function(){dijit.popup.close(this.dialog)}),this.connect(this.dialog,"onCancel","onCancel"),dojo.style(this.domNode,"display","block"))},_setValueAttr:function(e,t){this._colorPicker.set("value",e,t)},_getValueAttr:function(){return this._colorPicker.get("value")},onChange:function(e){},onCancel:function(){}}),T=e("dojox.editor.plugins.ColorTableCell",k,{colorPicker:y,constructor:function(){this.closable=!0,this.buttonClass=dijit.form.DropDownButton;var e,t=this,r={colorPicker:this.colorPicker,params:this.params};this.dropDown?(e=this.dropDown,e.set(r)):(e=new I(r),e.startup(),this.dropDown=e.dialog),this.connect(e,"onChange",function(e){this.editor.focus(),this.modTable(null,e)}),this.connect(e,"onCancel",function(){this.editor.focus()}),a.before(this.dropDown,"onOpen",function(){var a=t.getTableInfo(),r=t.getSelectedCells(a.tbl);if(r&&r.length>0){for(var o,n=r[0]===t.lastObject?r[0]:r[r.length-1];n&&n!==t.editor.document&&("transparent"===(o=dojo.style(n,"backgroundColor"))||0===o.indexOf("rgba"));)n=n.parentNode;"transparent"!==o&&0!==o.indexOf("rgba")&&e.set("value",i.fromString(o).toHex())}}),this.connect(this,"setEditor",function(e){e.onLoadDeferred.addCallback(dojo.hitch(this,function(){this.connect(this.editor.editNode,"onmouseup",function(e){this.lastObject=e.target})}))})},_initButton:function(){this.command=this.name,this.label=this.editor.commands[this.command]=this._makeTitle(this.command),this.inherited(arguments),delete this.command,this.onDisplayChanged(!1)},modTable:function(e,t){this.begEdit();var i=this.getTableInfo(),a=this.getSelectedCells(i.tbl);dojo.forEach(a,function(e){dojo.style(e,"backgroundColor",t)}),this.endEdit()}});return n.registry.insertTableRowBefore=b,n.registry.insertTableRowAfter=b,n.registry.insertTableColumnBefore=b,n.registry.insertTableColumnAfter=b,n.registry.deleteTableRow=b,n.registry.deleteTableColumn=b,n.registry.colorTableCell=function(e){return new T(e)},n.registry.modifyTable=function(e){return new F(e)},n.registry.insertTable=function(e){return new x(e)},n.registry.tableContextMenu=function(e){return new w(e)},k});//# sourceMappingURL=TablePlugins.js.map