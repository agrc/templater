//>>built
define("dojox/mobile/TabBar",["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./TabBarButton","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TabBar"],function(e,t,i,a,r,o,n,s,d,l,h,c,u,m){var f=t(u("dojo-bidi")?"dojox.mobile.NonBidiTabBar":"dojox.mobile.TabBar",[h,l,d],{iconBase:"",iconPos:"",barType:"tabBar",closable:!1,center:!0,syncWithViews:!1,tag:"ul",fill:"auto",selectOne:!0,baseClass:"mblTabBar",_fixedButtonWidth:76,_fixedButtonMargin:17,_largeScreenWidth:500,buildRendering:function(){this.domNode=this.srcNodeRef||r.create(this.tag),s.set(this.domNode,"role","tablist"),this.reset(),this.inherited(arguments)},postCreate:function(){if(this.syncWithViews){var t=function(t,i,a,r,o,n){var s=e.filter(this.getChildren(),function(e){return e.moveTo==="#"+t.id||e.moveTo===t.id})[0];s&&s.set("selected",!0)};this.subscribe("/dojox/mobile/afterTransitionIn",t),this.subscribe("/dojox/mobile/startView",t)}},startup:function(){this._started||(this.inherited(arguments),this.resize())},reset:function(){var e=this._barType;if("object"==typeof this.barType){this._barType=this.barType["*"];for(var t in this.barType)if(a.contains(i.doc.documentElement,t)){this._barType=this.barType[t];break}}else this._barType=this.barType;var r=function(e){return e.charAt(0).toUpperCase()+e.substring(1)};e&&a.remove(this.domNode,this.baseClass+r(e)),a.add(this.domNode,this.baseClass+r(this._barType))},resize:function(t){var i,r;r=t&&t.w?t.w:o.getMarginBox(this.domNode).w;var n=this._fixedButtonWidth,s=this._fixedButtonMargin,d=e.map(this.getChildren(),function(e){return e.domNode});a.toggle(this.domNode,"mblTabBarNoIcons",!e.some(this.getChildren(),function(e){return e.iconNode1})),a.toggle(this.domNode,"mblTabBarNoText",!e.some(this.getChildren(),function(e){return e.label}));var l=0;if("tabBar"==this._barType)if(this.containerNode.style.paddingLeft="",l=Math.floor((r-(n+2*s)*d.length)/2),"always"==this.fill||"auto"==this.fill&&(r<this._largeScreenWidth||0>l))for(a.add(this.domNode,"mblTabBarFill"),i=0;i<d.length;i++)d[i].style.width=100/d.length+"%",d[i].style.margin="0";else{for(i=0;i<d.length;i++)d[i].style.width=n+"px",d[i].style.margin="0 "+s+"px";d.length>0&&(u("dojo-bidi")&&!this.isLeftToRight()?(d[0].style.marginLeft="0px",d[0].style.marginRight=l+s+"px"):d[0].style.marginLeft=l+s+"px"),this.containerNode.style.padding="0px"}else{for(i=0;i<d.length;i++)d[i].style.width=d[i].style.margin="";var h=this.getParent();if("always"==this.fill)for(a.add(this.domNode,"mblTabBarFill"),i=0;i<d.length;i++)d[i].style.width=100/d.length+"%","segmentedControl"!=this._barType&&"standardTab"!=this._barType&&(d[i].style.margin="0");else{if(this.center&&(!h||!a.contains(h.domNode,"mblHeading"))){for(l=r,i=0;i<d.length;i++)l-=o.getMarginBox(d[i]).w;l=Math.floor(l/2)}u("dojo-bidi")&&!this.isLeftToRight()?(this.containerNode.style.paddingLeft="0px",this.containerNode.style.paddingRight=l?l+"px":""):this.containerNode.style.paddingLeft=l?l+"px":""}}t&&t.w&&o.setMarginBox(this.domNode,t)},getSelectedTab:function(){return e.filter(this.getChildren(),function(e){return e.selected})[0]},onCloseButtonClick:function(e){return!0}});return u("dojo-bidi")?t("dojox.mobile.TabBar",[f,m]):f});//# sourceMappingURL=TabBar.js.map