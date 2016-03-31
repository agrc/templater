//>>built
define("dijit/form/_ComboBoxMenu",["dojo/_base/declare","dojo/dom-class","dojo/dom-style","dojo/keys","../_WidgetBase","../_TemplatedMixin","./_ComboBoxMenuMixin","./_ListMouseMixin"],function(t,e,i,o,n,s,r,a){return t("dijit.form._ComboBoxMenu",[n,s,a,r],{templateString:"<div class='dijitReset dijitMenu' data-dojo-attach-point='containerNode' style='overflow: auto; overflow-x: hidden;' role='listbox'><div class='dijitMenuItem dijitMenuPreviousButton' data-dojo-attach-point='previousButton' role='option'></div><div class='dijitMenuItem dijitMenuNextButton' data-dojo-attach-point='nextButton' role='option'></div></div>",baseClass:"dijitComboBoxMenu",postCreate:function(){this.inherited(arguments),this.isLeftToRight()||(e.add(this.previousButton,"dijitMenuItemRtl"),e.add(this.nextButton,"dijitMenuItemRtl")),this.containerNode.setAttribute("role","listbox")},_createMenuItem:function(){var t=this.ownerDocument.createElement("div");return t.className="dijitReset dijitMenuItem"+(this.isLeftToRight()?"":" dijitMenuItemRtl"),t.setAttribute("role","option"),t},onHover:function(t){e.add(t,"dijitMenuItemHover")},onUnhover:function(t){e.remove(t,"dijitMenuItemHover")},onSelect:function(t){e.add(t,"dijitMenuItemSelected")},onDeselect:function(t){e.remove(t,"dijitMenuItemSelected")},_page:function(t){var e=0,o=this.domNode.scrollTop,n=i.get(this.domNode,"height");for(this.getHighlightedOption()||this.selectNextNode();n>e;){var s=this.getHighlightedOption();if(t){if(!s.previousSibling||"none"==s.previousSibling.style.display)break;this.selectPreviousNode()}else{if(!s.nextSibling||"none"==s.nextSibling.style.display)break;this.selectNextNode()}var r=this.domNode.scrollTop;e+=(r-o)*(t?-1:1),o=r}},handleKey:function(t){switch(t.keyCode){case o.DOWN_ARROW:return this.selectNextNode(),!1;case o.PAGE_DOWN:return this._page(!1),!1;case o.UP_ARROW:return this.selectPreviousNode(),!1;case o.PAGE_UP:return this._page(!0),!1;default:return!0}}})});//# sourceMappingURL=_ComboBoxMenu.js.map