//>>built
define("dojox/mobile/IconMenu",["dojo/_base/declare","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has!dojo-bidi?dojox/mobile/bidi/IconMenu","./IconMenuItem"],function(e,t,i,a,o,r,n,s,d,l){var h=e(t("dojo-bidi")?"dojox.mobile.NonBidiIconMenu":"dojox.mobile.IconMenu",[d,s,n],{transition:"slide",iconBase:"",iconPos:"",cols:3,tag:"ul",selectOne:!1,baseClass:"mblIconMenu",childItemClass:"mblIconMenuItem",_createTerminator:!1,buildRendering:function(){if(this.domNode=this.containerNode=this.srcNodeRef||a.create(this.tag),r.set(this.domNode,"role","menu"),this.inherited(arguments),this._createTerminator){var e=this._terminator=a.create("br");e.className=this.childItemClass+"Terminator",this.domNode.appendChild(e)}},startup:function(){this._started||(this.refresh(),this.inherited(arguments))},refresh:function(){var e=this.getParent();e&&i.remove(e.domNode,"mblSimpleDialogDecoration");var a=this.getChildren();if(this.cols){var r=Math.ceil(a.length/this.cols),n=Math.floor(100/this.cols),s=100-n*this.cols,d=Math.floor(100/r),l=100-d*r;t("ie")&&(s--,l--)}for(var h=0;h<a.length;h++){var u=a[h];if(this.cols){var c=h%this.cols===0,m=(h+1)%this.cols===0,f=Math.floor(h/this.cols);o.set(u.domNode,{width:n+(m?s:0)+"%",height:d+(f+1===r?l:0)+"%"}),i.toggle(u.domNode,this.childItemClass+"FirstColumn",c),i.toggle(u.domNode,this.childItemClass+"LastColumn",m),i.toggle(u.domNode,this.childItemClass+"FirstRow",0===f),i.toggle(u.domNode,this.childItemClass+"LastRow",f+1===r)}}},addChild:function(e,t){this.inherited(arguments),this.refresh()},hide:function(){var e=this.getParent();e&&e.hide&&e.hide()}});return t("dojo-bidi")?e("dojox.mobile.IconMenu",[h,l]):h});//# sourceMappingURL=IconMenu.js.map