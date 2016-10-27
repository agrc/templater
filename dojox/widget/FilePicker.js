//>>built
define("dojox/widget/FilePicker",["dojo","dijit","dojox","dojo/i18n!dojox/widget/nls/FilePicker","dojo/require!dojox/widget/RollingList,dojo/i18n"],function(e,t,i){e.provide("dojox.widget.FilePicker"),e.require("dojox.widget.RollingList"),e.require("dojo.i18n"),e.requireLocalization("dojox.widget","FilePicker"),e.declare("dojox.widget._FileInfoPane",[i.widget._RollingListPane],{templateString:"",templateString:e.cache("dojox.widget","FilePicker/_FileInfoPane.html",'<div class="dojoxFileInfoPane">\n	<table>\n		<tbody>\n			<tr>\n				<td class="dojoxFileInfoLabel dojoxFileInfoNameLabel">${_messages.name}</td>\n				<td class="dojoxFileInfoName" dojoAttachPoint="nameNode"></td>\n			</tr>\n			<tr>\n				<td class="dojoxFileInfoLabel dojoxFileInfoPathLabel">${_messages.path}</td>\n				<td class="dojoxFileInfoPath" dojoAttachPoint="pathNode"></td>\n			</tr>\n			<tr>\n				<td class="dojoxFileInfoLabel dojoxFileInfoSizeLabel">${_messages.size}</td>\n				<td class="dojoxFileInfoSize" dojoAttachPoint="sizeNode"></td>\n			</tr>\n		</tbody>\n	</table>\n	<div dojoAttachPoint="containerNode" style="display:none;"></div>\n</div>'),postMixInProperties:function(){this._messages=e.i18n.getLocalization("dojox.widget","FilePicker",this.lang),this.inherited(arguments)},onItems:function(){var e=this.store,t=this.items[0];t?(this.nameNode.innerHTML=e.getLabel(t),this.pathNode.innerHTML=e.getIdentity(t),this.sizeNode.innerHTML=e.getValue(t,"size"),this.parentWidget.scrollIntoView(this),this.inherited(arguments)):this._onError("Load",new Error("No item defined"))}}),e.declare("dojox.widget.FilePicker",i.widget.RollingList,{className:"dojoxFilePicker",pathSeparator:"",topDir:"",parentAttr:"parentDir",pathAttr:"path",preloadItems:50,selectDirectories:!0,selectFiles:!0,_itemsMatch:function(t,i){if(!t&&!i)return!0;if(!t||!i)return!1;if(t==i)return!0;if(this._isIdentity){var a=[this.store.getIdentity(t),this.store.getIdentity(i)];return e.forEach(a,function(e,t){e.lastIndexOf(this.pathSeparator)==e.length-1&&(a[t]=e.substring(0,e.length-1))},this),a[0]==a[1]}return!1},startup:function(){if(!this._started){this.inherited(arguments);var t,i=this.getChildren()[0],a=e.hitch(this,function(){t&&this.disconnect(t),delete t;var e=i.items[0];if(e){var a=this.store,n=a.getValue(e,this.parentAttr),o=a.getValue(e,this.pathAttr);this.pathSeparator=this.pathSeparator||a.pathSeparator,this.pathSeparator||(this.pathSeparator=o.substring(n.length,n.length+1)),this.topDir||(this.topDir=n,this.topDir.lastIndexOf(this.pathSeparator)!=this.topDir.length-1&&(this.topDir+=this.pathSeparator))}});this.pathSeparator&&this.topDir||(i.items?a():t=this.connect(i,"onItems",a))}},getChildItems:function(e){var t=this.inherited(arguments);return!t&&this.store.getValue(e,"directory")&&(t=[]),t},getMenuItemForItem:function(e,i,a){var n={iconClass:"dojoxDirectoryItemIcon"};if(!this.store.getValue(e,"directory")){n.iconClass="dojoxFileItemIcon";var o=this.store.getLabel(e),r=o.lastIndexOf(".");r>=0&&(n.iconClass+=" dojoxFileItemIcon_"+o.substring(r+1)),this.selectFiles||(n.disabled=!0)}var s=new t.MenuItem(n);return s},getPaneForItem:function(e,t,a){var n=null;return!e||this.store.isItem(e)&&this.store.getValue(e,"directory")?n=new i.widget._RollingListGroupPane({}):this.store.isItem(e)&&!this.store.getValue(e,"directory")&&(n=new i.widget._FileInfoPane({})),n},_setPathValueAttr:function(e,t,i){return e?(e.lastIndexOf(this.pathSeparator)==e.length-1&&(e=e.substring(0,e.length-1)),void this.store.fetchItemByIdentity({identity:e,onItem:function(e){t&&(this._lastExecutedValue=e),this.set("value",e),i&&i()},scope:this})):void this.set("value",null)},_getPathValueAttr:function(e){return e||(e=this.value),e&&this.store.isItem(e)?this.store.getValue(e,this.pathAttr):""},_setValue:function(e){delete this._setInProgress;var t=this.store;if(e&&t.isItem(e)){var i=this.store.getValue(e,"directory");if(i&&!this.selectDirectories||!i&&!this.selectFiles)return}else e=null;this._itemsMatch(this.value,e)||(this.value=e,this._onChange(e))}})});//# sourceMappingURL=FilePicker.js.map