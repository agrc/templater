//>>built
define("dojox/widget/PlaceholderMenuItem",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/_base/kernel","dojo/query","dijit/registry","dijit/Menu","dijit/MenuItem"],function(e,t,i,o,r,n,a,s,l){r.experimental("dojox.widget.PlaceholderMenuItem");var d=t("dojox.widget.PlaceholderMenuItem",l,{_replaced:!1,_replacedWith:null,_isPlaceholder:!0,postCreate:function(){o.set(this.domNode,"display","none"),this._replacedWith=[],this.label||(this.label=this.containerNode.innerHTML),this.inherited(arguments)},replace:function(t){if(this._replaced)return!1;var i=this.getIndexInParent();if(0>i)return!1;var o=this.getParent();return e.forEach(t,function(e){o.addChild(e,i++)}),this._replacedWith=t,this._replaced=!0,!0},unReplace:function(t){if(!this._replaced)return[];var i=this.getParent();if(!i)return[];var o=this._replacedWith;return e.forEach(this._replacedWith,function(e){i.removeChild(e),t&&e.destroyRecursive()}),this._replacedWith=[],this._replaced=!1,o}});return i.extend(s,{getPlaceholders:function(t){var i=[],o=this.getChildren();return e.forEach(o,function(e){if(!e._isPlaceholder||t&&e.label!=t){if(e._started&&e.popup&&e.popup.getPlaceholders)i=i.concat(e.popup.getPlaceholders(t));else if(!e._started&&e.dropDownContainer){var o=n("[widgetId]",e.dropDownContainer)[0],r=a.byNode(o);r.getPlaceholders&&(i=i.concat(r.getPlaceholders(t)))}}else i.push(e)},this),i}}),d});//# sourceMappingURL=PlaceholderMenuItem.js.map