//>>built
define("dojox/widget/PlaceholderMenuItem",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/_base/kernel","dojo/query","dijit/registry","dijit/Menu","dijit/MenuItem"],function(e,t,i,a,o,n,r,s,l){o.experimental("dojox.widget.PlaceholderMenuItem");var d=t("dojox.widget.PlaceholderMenuItem",l,{_replaced:!1,_replacedWith:null,_isPlaceholder:!0,postCreate:function(){a.set(this.domNode,"display","none"),this._replacedWith=[],this.label||(this.label=this.containerNode.innerHTML),this.inherited(arguments)},replace:function(t){if(this._replaced)return!1;var i=this.getIndexInParent();if(i<0)return!1;var a=this.getParent();return e.forEach(t,function(e){a.addChild(e,i++)}),this._replacedWith=t,this._replaced=!0,!0},unReplace:function(t){if(!this._replaced)return[];var i=this.getParent();if(!i)return[];var a=this._replacedWith;return e.forEach(this._replacedWith,function(e){i.removeChild(e),t&&e.destroyRecursive()}),this._replacedWith=[],this._replaced=!1,a}});return i.extend(s,{getPlaceholders:function(t){var i=[],a=this.getChildren();return e.forEach(a,function(e){if(!e._isPlaceholder||t&&e.label!=t){if(e._started&&e.popup&&e.popup.getPlaceholders)i=i.concat(e.popup.getPlaceholders(t));else if(!e._started&&e.dropDownContainer){var a=n("[widgetId]",e.dropDownContainer)[0],o=r.byNode(a);o.getPlaceholders&&(i=i.concat(o.getPlaceholders(t)))}}else i.push(e)},this),i}}),d});//# sourceMappingURL=PlaceholderMenuItem.js.map