//>>built
require({cache:{"url:dojox/widget/UpgradeBar/UpgradeBar.html":'<div class="dojoxUpgradeBar">\n\t<div class="dojoxUpgradeBarMessage" dojoAttachPoint="messageNode">message</div>\n\t<div class="dojoxUpgradeBarReminderButton" dojoAttachPoint="dontRemindButtonNode" dojoAttachEvent="onclick:_onDontRemindClick">${noRemindButton}</div>\n\t<span dojoAttachPoint="closeButtonNode" class="dojoxUpgradeBarCloseIcon" dojoAttachEvent="onclick: hide, onmouseenter: _onCloseEnter, onmouseleave: _onCloseLeave" title="${buttonCancel}"></span>\n</div>'}}),define("dojox/widget/UpgradeBar",["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/cookie","dojo/domReady","dojo/fx","dojo/window","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./UpgradeBar/UpgradeBar.html"],function(e,t,i,a,o,n,r,s,d,l,h,u,c,m,f,p,g,y,v,b){return e.experimental("dojox.widget.UpgradeBar"),a("dojox.widget.UpgradeBar",[y,v],{notifications:[],buttonCancel:"Close for now",noRemindButton:"Don't Remind Me Again",templateString:b,constructor:function(i,a){!i.notifications&&a&&t.forEach(a.childNodes,function(t){if(1==t.nodeType){var i=d.get(t,"validate");this.notifications.push({message:t.innerHTML,validate:function(){var t=!0;try{t=e.eval(i)}catch(e){}return t}})}},this)},checkNotifications:function(){if(this.notifications.length)for(var e=0;e<this.notifications.length;e++){var t=this.notifications[e].validate();if(t){this.notify(this.notifications[e].message);break}}},postCreate:function(){if(this.inherited(arguments),this.domNode.parentNode&&c.set(this.domNode,"display","none"),n.mixin(this.attributeMap,{message:{node:"messageNode",type:"innerHTML"}}),this.noRemindButton||h.destroy(this.dontRemindButtonNode),6==r("ie")){var e=this,t=function(){var t=g.getBox();c.set(e.domNode,"width",t.w+"px")};this.connect(window,"resize",function(){t()}),t()}f(n.hitch(this,"checkNotifications"))},notify:function(e){m("disableUpgradeReminders")||(this.domNode.parentNode&&this.domNode.parentNode.innerHTML||document.body.appendChild(this.domNode),c.set(this.domNode,"display",""),e&&this.set("message",e))},show:function(){this._bodyMarginTop=c.get(s.body(),"marginTop"),this._size=u.getContentBox(this.domNode).h,c.set(this.domNode,{display:"block",height:0,opacity:0}),this._showAnim||(this._showAnim=p.combine([o.animateProperty({node:s.body(),duration:500,properties:{marginTop:this._bodyMarginTop+this._size}}),o.animateProperty({node:this.domNode,duration:500,properties:{height:this._size,opacity:1}})])),this._showAnim.play()},hide:function(){this._hideAnim||(this._hideAnim=p.combine([o.animateProperty({node:s.body(),duration:500,properties:{marginTop:this._bodyMarginTop}}),o.animateProperty({node:this.domNode,duration:500,properties:{height:0,opacity:0}})]),i.connect(this._hideAnim,"onEnd",this,function(){c.set(this.domNode,{display:"none",opacity:1})})),this._hideAnim.play()},_onDontRemindClick:function(){m("disableUpgradeReminders",!0,{expires:3650}),this.hide()},_onCloseEnter:function(){l.add(this.closeButtonNode,"dojoxUpgradeBarCloseIcon-hover")},_onCloseLeave:function(){l.remove(this.closeButtonNode,"dojoxUpgradeBarCloseIcon-hover")}})});//# sourceMappingURL=UpgradeBar.js.map