//>>built
require({cache:{"url:dijit/templates/MenuItem.html":'<tr class="dijitReset" data-dojo-attach-point="focusNode" role="menuitem" tabIndex="-1">\n\t<td class="dijitReset dijitMenuItemIconCell" role="presentation">\n\t\t<span role="presentation" class="dijitInline dijitIcon dijitMenuItemIcon" data-dojo-attach-point="iconNode"></span>\n\t</td>\n\t<td class="dijitReset dijitMenuItemLabel" colspan="2" data-dojo-attach-point="containerNode,textDirNode"\n\t\trole="presentation"></td>\n\t<td class="dijitReset dijitMenuItemAccelKey" style="display: none" data-dojo-attach-point="accelKeyNode"></td>\n\t<td class="dijitReset dijitMenuArrowCell" role="presentation">\n\t\t<span data-dojo-attach-point="arrowWrapper" style="visibility: hidden">\n\t\t\t<span class="dijitInline dijitIcon dijitMenuExpand"></span>\n\t\t\t<span class="dijitMenuExpandA11y">+</span>\n\t\t</span>\n\t</td>\n</tr>\n'}}),define("dijit/MenuItem",["dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/_base/kernel","dojo/sniff","dojo/_base/lang","./_Widget","./_TemplatedMixin","./_Contained","./_CssStateMixin","dojo/text!./templates/MenuItem.html"],function(t,e,a,i,s,d,n,o,l,r,c,h){var u=t("dijit.MenuItem"+(d("dojo-bidi")?"_NoBidi":""),[o,l,r,c],{templateString:h,baseClass:"dijitMenuItem",label:"",_setLabelAttr:function(t){this._set("label",t);var e,a="",i=t.search(/{\S}/);if(i>=0){a=t.charAt(i+1);var s=t.substr(0,i),d=t.substr(i+3);e=s+a+d,t=s+'<span class="dijitMenuItemShortcutKey">'+a+"</span>"+d}else e=t;this.domNode.setAttribute("aria-label",e+" "+this.accelKey),this.containerNode.innerHTML=t,this._set("shortcutKey",a)},iconClass:"dijitNoIcon",_setIconClassAttr:{node:"iconNode",type:"class"},accelKey:"",disabled:!1,_fillContent:function(t){!t||"label"in this.params||this._set("label",t.innerHTML)},buildRendering:function(){this.inherited(arguments);var t=this.id+"_text";a.set(this.containerNode,"id",t),this.accelKeyNode&&a.set(this.accelKeyNode,"id",this.id+"_accel"),e.setSelectable(this.domNode,!1)},onClick:function(){},focus:function(){try{8==d("ie")&&this.containerNode.focus(),this.focusNode.focus()}catch(t){}},_setSelected:function(t){i.toggle(this.domNode,"dijitMenuItemSelected",t)},setLabel:function(t){s.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.","","2.0"),this.set("label",t)},setDisabled:function(t){s.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.","","2.0"),this.set("disabled",t)},_setDisabledAttr:function(t){this.focusNode.setAttribute("aria-disabled",t?"true":"false"),this._set("disabled",t)},_setAccelKeyAttr:function(t){this.accelKeyNode&&(this.accelKeyNode.style.display=t?"":"none",this.accelKeyNode.innerHTML=t,a.set(this.containerNode,"colSpan",t?"1":"2")),this._set("accelKey",t)}});return d("dojo-bidi")&&(u=t("dijit.MenuItem",u,{_setLabelAttr:function(t){this.inherited(arguments),"auto"===this.textDir&&this.applyTextDir(this.textDirNode)}})),u});//# sourceMappingURL=MenuItem.js.map