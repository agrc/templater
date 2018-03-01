//>>built
define("dojox/mobile/Accordion",["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./iconUtils","./lazyLoadUtils","./_css3","./common","require","dojo/has!dojo-bidi?dojox/mobile/bidi/Accordion"],function(e,t,i,a,r,o,n,s,l,d,u,h,c,m,f,p){var g=t([d,s],{label:"Label",icon1:"",icon2:"",iconPos1:"",iconPos2:"",selected:!1,baseClass:"mblAccordionTitle",buildRendering:function(){this.inherited(arguments);var e=this.anchorNode=o.create("a",{className:"mblAccordionTitleAnchor",role:"presentation"},this.domNode);this.textBoxNode=o.create("div",{className:"mblAccordionTitleTextBox"},e),this.labelNode=o.create("span",{className:"mblAccordionTitleLabel",innerHTML:this._cv?this._cv(this.label):this.label},this.textBoxNode),this._isOnLine=this.inheritParams(),n.set(this.textBoxNode,"role","tab"),n.set(this.textBoxNode,"tabindex","0")},postCreate:function(){this.connect(this.domNode,"onclick","_onClick"),m.setSelectable(this.domNode,!1)},inheritParams:function(){var e=this.getParent();return e&&(this.icon1&&e.iconBase&&"/"===e.iconBase.charAt(e.iconBase.length-1)&&(this.icon1=e.iconBase+this.icon1),this.icon1||(this.icon1=e.iconBase),this.iconPos1||(this.iconPos1=e.iconPos),this.icon2&&e.iconBase&&"/"===e.iconBase.charAt(e.iconBase.length-1)&&(this.icon2=e.iconBase+this.icon2),this.icon2||(this.icon2=e.iconBase||this.icon1),this.iconPos2||(this.iconPos2=e.iconPos||this.iconPos1)),!!e},_setIcon:function(e,t){this.getParent()&&(this._set("icon"+t,e),this["iconParentNode"+t]||(this["iconParentNode"+t]=o.create("div",{className:"mblAccordionIconParent mblAccordionIconParent"+t},this.anchorNode,"first")),this["iconNode"+t]=u.setIcon(e,this["iconPos"+t],this["iconNode"+t],this.alt,this["iconParentNode"+t]),this["icon"+t]=e,r.toggle(this.domNode,"mblAccordionHasIcon",e&&"none"!==e),a("dojo-bidi")&&!this.getParent().isLeftToRight()&&this.getParent()._setIconDir(this["iconParentNode"+t]))},_setIcon1Attr:function(e){this._setIcon(e,1)},_setIcon2Attr:function(e){this._setIcon(e,2)},startup:function(){this._started||(this._isOnLine||this.inheritParams(),this._isOnLine||this.set({icon1:this.icon1,icon2:this.icon2}),this.inherited(arguments))},_onClick:function(e){if(!1!==this.onClick(e)){var t=this.getParent();t.fixedHeight||"none"===this.contentWidget.domNode.style.display?t.expand(this.contentWidget,!t.animation):t.collapse(this.contentWidget,!t.animation)}},onClick:function(){},_setSelectedAttr:function(e){r.toggle(this.domNode,"mblAccordionTitleSelected",e),this._set("selected",e)}}),y=t(a("dojo-bidi")?"dojox.mobile.NonBidiAccordion":"dojox.mobile.Accordion",[d,l,s],{iconBase:"",iconPos:"",fixedHeight:!1,singleOpen:!1,animation:!0,roundRect:!1,duration:.3,baseClass:"mblAccordion",_openSpace:1,buildRendering:function(){this.inherited(arguments),n.set(this.domNode,"role","tablist"),n.set(this.domNode,"aria-multiselectable",!this.singleOpen)},startup:function(){if(!this._started){r.contains(this.domNode,"mblAccordionRoundRect")?this.roundRect=!0:this.roundRect&&r.add(this.domNode,"mblAccordionRoundRect"),this.fixedHeight&&(this.singleOpen=!0);var t=this.getChildren();e.forEach(t,this._setupChild,this);var i,a=1;e.forEach(t,function(e){e.startup(),e._at.startup(),this.collapse(e,!0),n.set(e._at.textBoxNode,"aria-setsize",t.length),n.set(e._at.textBoxNode,"aria-posinset",a++),e.selected&&(i=e)},this),!i&&this.fixedHeight&&(i=t[t.length-1]),i?this.expand(i,!0):this._updateLast(),this.defer(function(){this.resize()}),this._started=!0}},_setupChild:function(e){"hidden"!=e.domNode.style.overflow&&(e.domNode.style.overflow=this.fixedHeight?"auto":"hidden"),e._at=new g({label:e.label,alt:e.alt,icon1:e.icon1,icon2:e.icon2,iconPos1:e.iconPos1,iconPos2:e.iconPos2,contentWidget:e}),o.place(e._at.domNode,e.domNode,"before"),r.add(e.domNode,"mblAccordionPane"),n.set(e._at.textBoxNode,"aria-controls",e.domNode.id),n.set(e.domNode,"role","tabpanel"),n.set(e.domNode,"aria-labelledby",e._at.id)},addChild:function(e,t){this.inherited(arguments),this._started&&(this._setupChild(e),e._at.startup(),e.selected?(this.expand(e,!0),this.defer(function(){e.domNode.style.height=""})):this.collapse(e),this._addChildAriaAttrs())},removeChild:function(e){"number"==typeof e&&(e=this.getChildren()[e]),e&&e._at.destroy(),this.inherited(arguments),this._addChildAriaAttrs()},_addChildAriaAttrs:function(){var t=1,i=this.getChildren();e.forEach(i,function(e){n.set(e._at.textBoxNode,"aria-posinset",t++),n.set(e._at.textBoxNode,"aria-setsize",i.length)})},getChildren:function(){return e.filter(this.inherited(arguments),function(e){return!(e instanceof g)})},getSelectedPanes:function(){return e.filter(this.getChildren(),function(e){return"none"!=e.domNode.style.display})},resize:function(){if(this.fixedHeight){var t=e.filter(this.getChildren(),function(e){return"none"!=e._at.domNode.style.display}),i=this.domNode.clientHeight;e.forEach(t,function(e){i-=e._at.domNode.offsetHeight}),this._openSpace=i>0?i:0;var a=this.getSelectedPanes()[0];a.domNode.style[c.name("transition")]="",a.domNode.style.height=this._openSpace+"px"}},_updateLast:function(){var t=this.getChildren();e.forEach(t,function(e,i){r.toggle(e._at.domNode,"mblAccordionTitleLast",i===t.length-1&&!r.contains(e._at.domNode,"mblAccordionTitleSelected"))},this)},expand:function(t,i){t.lazy&&(h.instantiateLazyWidgets(t.containerNode,t.requires),t.lazy=!1);var a=this.getChildren();e.forEach(a,function(e,a){if(e.domNode.style[c.name("transition")]=i?"":"height "+this.duration+"s linear",e===t){e.domNode.style.display="";var r;this.fixedHeight?r=this._openSpace:(r=parseInt(e.height||e.domNode.getAttribute("height")))||(e.domNode.style.height="",r=e.domNode.offsetHeight,e.domNode.style.height="0px"),this.defer(function(){e.domNode.style.height=r+"px"}),this.select(t)}else this.singleOpen&&this.collapse(e,i)},this),this._updateLast(),n.set(t.domNode,"aria-expanded","true"),n.set(t.domNode,"aria-hidden","false")},collapse:function(e,t){if("none"!==e.domNode.style.display){if(e.domNode.style[c.name("transition")]=t?"":"height "+this.duration+"s linear",e.domNode.style.height="0px",!a("css3-animations")||t)e.domNode.style.display="none",this._updateLast();else{var i=this;i.defer(function(){if(e.domNode.style.display="none",i._updateLast(),!i.fixedHeight&&i.singleOpen)for(var t=i.getParent();t;t=t.getParent())if(r.contains(t.domNode,"mblView")){t&&t.resize&&t.resize();break}},1e3*this.duration)}this.deselect(e),n.set(e.domNode,"aria-expanded","false"),n.set(e.domNode,"aria-hidden","true")}},select:function(e){e._at.set("selected",!0),n.set(e._at.textBoxNode,"aria-selected","true")},deselect:function(e){e._at.set("selected",!1),n.set(e._at.textBoxNode,"aria-selected","false")}});return y.ChildWidgetProperties={alt:"",label:"",icon1:"",icon2:"",iconPos1:"",iconPos2:"",selected:!1,lazy:!1},i.extend(d,y.ChildWidgetProperties),a("dojo-bidi")?t("dojox.mobile.Accordion",[y,p]):y});//# sourceMappingURL=Accordion.js.map