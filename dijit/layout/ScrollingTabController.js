//>>built
require({cache:{"url:dijit/layout/templates/ScrollingTabController.html":'<div class="dijitTabListContainer-${tabPosition}" style="visibility:hidden">\n	<div data-dojo-type="dijit.layout._ScrollingTabControllerMenuButton"\n		 class="tabStripButton-${tabPosition}"\n		 id="${id}_menuBtn"\n		 data-dojo-props="containerId: \'${containerId}\', iconClass: \'dijitTabStripMenuIcon\',\n					dropDownPosition: [\'below-alt\', \'above-alt\']"\n		 data-dojo-attach-point="_menuBtn" showLabel="false" title="">&#9660;</div>\n	<div data-dojo-type="dijit.layout._ScrollingTabControllerButton"\n		 class="tabStripButton-${tabPosition}"\n		 id="${id}_leftBtn"\n		 data-dojo-props="iconClass:\'dijitTabStripSlideLeftIcon\', showLabel:false, title:\'\'"\n		 data-dojo-attach-point="_leftBtn" data-dojo-attach-event="onClick: doSlideLeft">&#9664;</div>\n	<div data-dojo-type="dijit.layout._ScrollingTabControllerButton"\n		 class="tabStripButton-${tabPosition}"\n		 id="${id}_rightBtn"\n		 data-dojo-props="iconClass:\'dijitTabStripSlideRightIcon\', showLabel:false, title:\'\'"\n		 data-dojo-attach-point="_rightBtn" data-dojo-attach-event="onClick: doSlideRight">&#9654;</div>\n	<div class=\'dijitTabListWrapper\' data-dojo-attach-point=\'tablistWrapper\'>\n		<div role=\'tablist\' data-dojo-attach-event=\'onkeydown:onkeydown\'\n			 data-dojo-attach-point=\'containerNode\' class=\'nowrapTabStrip\'></div>\n	</div>\n</div>',"url:dijit/layout/templates/_ScrollingTabControllerButton.html":'<div data-dojo-attach-event="ondijitclick:_onClick" class="dijitTabInnerDiv dijitTabContent dijitButtonContents"  data-dojo-attach-point="focusNode" role="button">\n	<span role="presentation" class="dijitInline dijitTabStripIcon" data-dojo-attach-point="iconNode"></span>\n	<span data-dojo-attach-point="containerNode,titleNode" class="dijitButtonText"></span>\n</div>'}}),define("dijit/layout/ScrollingTabController",["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/fx","dojo/_base/lang","dojo/on","dojo/query","dojo/sniff","../registry","dojo/text!./templates/ScrollingTabController.html","dojo/text!./templates/_ScrollingTabControllerButton.html","./TabController","./utils","../_WidgetsInTemplateMixin","../Menu","../MenuItem","../form/Button","../_HasDropDown","dojo/NodeList-dom","../a11yclick"],function(e,t,i,o,n,r,s,a,l,d,h,c,u,f,p,g,m,_,v,b){var y=t("dijit.layout.ScrollingTabController",[f,g],{baseClass:"dijitTabController dijitScrollingTabController",templateString:c,useMenu:!0,useSlider:!0,tabStripClass:"",_minScroll:5,_setClassAttr:{node:"containerNode",type:"class"},buildRendering:function(){this.inherited(arguments);var e=this.domNode;this.scrollNode=this.tablistWrapper,this._initButtons(),this.tabStripClass||(this.tabStripClass="dijitTabContainer"+this.tabPosition.charAt(0).toUpperCase()+this.tabPosition.substr(1).replace(/-.*/,"")+"None",i.add(e,"tabStrip-disabled")),i.add(this.tablistWrapper,this.tabStripClass)},onStartup:function(){this.inherited(arguments),n.set(this.domNode,"visibility",""),this._postStartup=!0,this.own(a(this.containerNode,"attrmodified-label, attrmodified-iconclass",s.hitch(this,function(e){this._dim&&this.resize(this._dim)})))},onAddChild:function(e,t){this.inherited(arguments),n.set(this.containerNode,"width",n.get(this.containerNode,"width")+200+"px")},onRemoveChild:function(e,t){var i=this.pane2button(e.id);this._selectedTab===i.domNode&&(this._selectedTab=null),this.inherited(arguments)},_initButtons:function(){this._btnWidth=0,this._buttons=l("> .tabStripButton",this.domNode).filter(function(e){return this.useMenu&&e==this._menuBtn.domNode||this.useSlider&&(e==this._rightBtn.domNode||e==this._leftBtn.domNode)?(this._btnWidth+=o.getMarginSize(e).w,!0):(n.set(e,"display","none"),!1)},this)},_getTabsWidth:function(){var e=this.getChildren();if(e.length){var t=e[this.isLeftToRight()?0:e.length-1].domNode,i=e[this.isLeftToRight()?e.length-1:0].domNode;return i.offsetLeft+i.offsetWidth-t.offsetLeft}return 0},_enableBtn:function(e){var t=this._getTabsWidth();return e=e||n.get(this.scrollNode,"width"),t>0&&t>e},resize:function(e){this._dim=e,this.scrollNode.style.height="auto";var t=this._contentBox=p.marginBox2contentBox(this.domNode,{h:0,w:e.w});t.h=this.scrollNode.offsetHeight,o.setContentSize(this.domNode,t);var i=this._enableBtn(this._contentBox.w);return this._buttons.style("display",i?"":"none"),this._leftBtn.region="left",this._rightBtn.region="right",this._menuBtn.region=this.isLeftToRight()?"right":"left",p.layoutChildren(this.domNode,this._contentBox,[this._menuBtn,this._leftBtn,this._rightBtn,{domNode:this.scrollNode,region:"center"}]),this._selectedTab&&(this._anim&&"playing"==this._anim.status()&&this._anim.stop(),this.scrollNode.scrollLeft=this._convertToScrollLeft(this._getScrollForSelectedTab())),this._setButtonClass(this._getScroll()),this._postResize=!0,{h:this._contentBox.h,w:e.w}},_getScroll:function(){return this.isLeftToRight()||d("ie")<8||d("trident")&&d("quirks")||d("webkit")?this.scrollNode.scrollLeft:n.get(this.containerNode,"width")-n.get(this.scrollNode,"width")+(d("trident")||d("edge")?-1:1)*this.scrollNode.scrollLeft},_convertToScrollLeft:function(e){if(this.isLeftToRight()||d("ie")<8||d("trident")&&d("quirks")||d("webkit"))return e;var t=n.get(this.containerNode,"width")-n.get(this.scrollNode,"width");return(d("trident")||d("edge")?-1:1)*(e-t)},onSelectChild:function(e,t){var i=this.pane2button(e.id);if(i){var o=i.domNode;if(o!=this._selectedTab&&(this._selectedTab=o,this._postResize)){var r=this._getScroll();if(r>o.offsetLeft||r+n.get(this.scrollNode,"width")<o.offsetLeft+n.get(o,"width")){var s=this.createSmoothScroll();t&&(s.onEnd=function(){i.focus()}),s.play()}else t&&i.focus()}this.inherited(arguments)}},_getScrollBounds:function(){var e=this.getChildren(),t=n.get(this.scrollNode,"width"),i=n.get(this.containerNode,"width"),o=i-t,r=this._getTabsWidth();if(e.length&&r>t)return{min:this.isLeftToRight()?0:e[e.length-1].domNode.offsetLeft,max:this.isLeftToRight()?e[e.length-1].domNode.offsetLeft+e[e.length-1].domNode.offsetWidth-t:o};var s=this.isLeftToRight()?0:o;return{min:s,max:s}},_getScrollForSelectedTab:function(){var e=(this.scrollNode,this._selectedTab),t=n.get(this.scrollNode,"width"),i=this._getScrollBounds(),o=e.offsetLeft+n.get(e,"width")/2-t/2;return o=Math.min(Math.max(o,i.min),i.max)},createSmoothScroll:function(e){if(arguments.length>0){var t=this._getScrollBounds();e=Math.min(Math.max(e,t.min),t.max)}else e=this._getScrollForSelectedTab();this._anim&&"playing"==this._anim.status()&&this._anim.stop();var i=this,o=this.scrollNode,n=new r.Animation({beforeBegin:function(){this.curve&&delete this.curve;var t=o.scrollLeft,s=i._convertToScrollLeft(e);n.curve=new r._Line(t,s)},onAnimate:function(e){o.scrollLeft=e}});return this._anim=n,this._setButtonClass(e),n},_getBtnNode:function(e){for(var t=e.target;t&&!i.contains(t,"tabStripButton");)t=t.parentNode;return t},doSlideRight:function(e){this.doSlide(1,this._getBtnNode(e))},doSlideLeft:function(e){this.doSlide(-1,this._getBtnNode(e))},doSlide:function(e,t){if(!t||!i.contains(t,"dijitTabDisabled")){var o=n.get(this.scrollNode,"width"),r=.75*o*e,s=this._getScroll()+r;this._setButtonClass(s),this.createSmoothScroll(s).play()}},_setButtonClass:function(e){var t=this._getScrollBounds();this._leftBtn.set("disabled",e<=t.min),this._rightBtn.set("disabled",e>=t.max)}}),x=t("dijit.layout._ScrollingTabControllerButtonMixin",null,{baseClass:"dijitTab tabStripButton",templateString:u,tabIndex:"",isFocusable:function(){return!1}});return t("dijit.layout._ScrollingTabControllerButton",[v,x]),t("dijit.layout._ScrollingTabControllerMenuButton",[v,b,x],{containerId:"",tabIndex:"-1",isLoaded:function(){return!1},loadDropDown:function(t){this.dropDown=new m({id:this.containerId+"_menu",ownerDocument:this.ownerDocument,dir:this.dir,lang:this.lang,textDir:this.textDir});var i=h.byId(this.containerId);e.forEach(i.getChildren(),function(e){var t=new _({id:e.id+"_stcMi",label:e.title,iconClass:e.iconClass,disabled:e.disabled,ownerDocument:this.ownerDocument,dir:e.dir,lang:e.lang,textDir:e.textDir||i.textDir,onClick:function(){i.selectChild(e)}});this.dropDown.addChild(t)},this),t()},closeDropDown:function(e){this.inherited(arguments),this.dropDown&&(this._popupStateNode.removeAttribute("aria-owns"),this.dropDown.destroyRecursive(),delete this.dropDown)}}),y});//# sourceMappingURL=ScrollingTabController.js.map