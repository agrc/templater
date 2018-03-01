//>>built
define("dojox/mobile/TabBar",["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./TabBarButton","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TabBar"],function(e,t,i,a,o,n,r,s,l,d,u,c,h,m){var f=t(h("dojo-bidi")?"dojox.mobile.NonBidiTabBar":"dojox.mobile.TabBar",[u,d,l],{iconBase:"",iconPos:"",barType:"tabBar",closable:!1,center:!0,syncWithViews:!1,tag:"ul",fill:"auto",selectOne:!0,baseClass:"mblTabBar",_fixedButtonWidth:76,_fixedButtonMargin:17,_largeScreenWidth:500,buildRendering:function(){this.domNode=this.srcNodeRef||o.create(this.tag),s.set(this.domNode,"role","tablist"),this.reset(),this.inherited(arguments)},postCreate:function(){if(this.syncWithViews){var t=function(t,i,a,o,n,r){var s=e.filter(this.getChildren(),function(e){return e.moveTo==="#"+t.id||e.moveTo===t.id})[0];s&&s.set("selected",!0)};this.subscribe("/dojox/mobile/afterTransitionIn",t),this.subscribe("/dojox/mobile/startView",t)}},startup:function(){this._started||(this.inherited(arguments),this.resize())},reset:function(){var e=this._barType;if("object"==typeof this.barType){this._barType=this.barType["*"];for(var t in this.barType)if(a.contains(i.doc.documentElement,t)){this._barType=this.barType[t];break}}else this._barType=this.barType;var o=function(e){return e.charAt(0).toUpperCase()+e.substring(1)};e&&a.remove(this.domNode,this.baseClass+o(e)),a.add(this.domNode,this.baseClass+o(this._barType))},resize:function(t){var i,o;o=t&&t.w?t.w:n.getMarginBox(this.domNode).w;var r=this._fixedButtonWidth,s=this._fixedButtonMargin,l=e.map(this.getChildren(),function(e){return e.domNode});a.toggle(this.domNode,"mblTabBarNoIcons",!e.some(this.getChildren(),function(e){return e.iconNode1})),a.toggle(this.domNode,"mblTabBarNoText",!e.some(this.getChildren(),function(e){return e.label}));var d=0;if("tabBar"==this._barType)if(this.containerNode.style.paddingLeft="",d=Math.floor((o-(r+2*s)*l.length)/2),"always"==this.fill||"auto"==this.fill&&(o<this._largeScreenWidth||d<0))for(a.add(this.domNode,"mblTabBarFill"),i=0;i<l.length;i++)l[i].style.width=100/l.length+"%",l[i].style.margin="0";else{for(i=0;i<l.length;i++)l[i].style.width=r+"px",l[i].style.margin="0 "+s+"px";l.length>0&&(h("dojo-bidi")&&!this.isLeftToRight()?(l[0].style.marginLeft="0px",l[0].style.marginRight=d+s+"px"):l[0].style.marginLeft=d+s+"px"),this.containerNode.style.padding="0px"}else{for(i=0;i<l.length;i++)l[i].style.width=l[i].style.margin="";var u=this.getParent();if("always"==this.fill)for(a.add(this.domNode,"mblTabBarFill"),i=0;i<l.length;i++)l[i].style.width=100/l.length+"%","segmentedControl"!=this._barType&&"standardTab"!=this._barType&&(l[i].style.margin="0");else{if(this.center&&(!u||!a.contains(u.domNode,"mblHeading"))){for(d=o,i=0;i<l.length;i++)d-=n.getMarginBox(l[i]).w;d=Math.floor(d/2)}h("dojo-bidi")&&!this.isLeftToRight()?(this.containerNode.style.paddingLeft="0px",this.containerNode.style.paddingRight=d?d+"px":""):this.containerNode.style.paddingLeft=d?d+"px":""}}t&&t.w&&n.setMarginBox(this.domNode,t)},getSelectedTab:function(){return e.filter(this.getChildren(),function(e){return e.selected})[0]},onCloseButtonClick:function(e){return!0}});return h("dojo-bidi")?t("dojox.mobile.TabBar",[f,m]):f});//# sourceMappingURL=TabBar.js.map