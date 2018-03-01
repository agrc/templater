//>>built
define("dojox/layout/Dock",["dojo/_base/lang","dojo/_base/window","dojo/_base/declare","dojo/_base/fx","dojo/on","dojo/_base/array","dojo/_base/sniff","dojo/window","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dijit/_TemplatedMixin","dijit/_WidgetBase"],function(e,t,i,a,r,o,n,s,d,l,u,c,h,m){var f=i("dojox.layout.Dock",[m,h],{templateString:'<div class="dojoxDock"><ul data-dojo-attach-point="containerNode" class="dojoxDockList"></ul></div>',_docked:[],_inPositioning:!1,autoPosition:!1,addNode:function(e){var t=c.create("li",null,this.containerNode),i=new g({title:e.title,paneRef:e},t);return i.startup(),i},startup:function(){("dojoxGlobalFloatingDock"==this.id||this.isFixedDock)&&(this.own(r(window,"resize",e.hitch(this,"_positionDock")),r(window,"scroll",e.hitch(this,"_positionDock"))),n("ie")&&this.own(r(this.domNode,"resize",e.hitch(this,"_positionDock")))),this._positionDock(null),this.inherited(arguments)},_positionDock:function(e){this._inPositioning||"south"==this.autoPosition&&this.defer(function(){this._inPositiononing=!0;var e=s.getBox(),t=this.domNode.style;t.left=e.l+"px",t.width=e.w-2+"px",t.top=e.h+e.t-this.domNode.offsetHeight+"px",this._inPositioning=!1},125)}}),g=i("dojox.layout._DockNode",[m,h],{title:"",paneRef:null,templateString:'<li data-dojo-attach-event="onclick: restore" class="dojoxDockNode"><span data-dojo-attach-point="restoreNode" class="dojoxDockRestoreButton" data-dojo-attach-event="onclick: restore"></span><span class="dojoxDockTitleNode" data-dojo-attach-point="titleNode">${title}</span></li>',restore:function(){this.paneRef.show(),this.paneRef.bringToTop(),this.destroy()}});return f});//# sourceMappingURL=Dock.js.map