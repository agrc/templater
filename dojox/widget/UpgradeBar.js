//>>built
require({cache:{"url:dojox/widget/UpgradeBar/UpgradeBar.html":'<div class="dojoxUpgradeBar">\n	<div class="dojoxUpgradeBarMessage" dojoAttachPoint="messageNode">message</div>\n	<div class="dojoxUpgradeBarReminderButton" dojoAttachPoint="dontRemindButtonNode" dojoAttachEvent="onclick:_onDontRemindClick">${noRemindButton}</div>\n	<span dojoAttachPoint="closeButtonNode" class="dojoxUpgradeBarCloseIcon" dojoAttachEvent="onclick: hide, onmouseenter: _onCloseEnter, onmouseleave: _onCloseLeave" title="${buttonCancel}"></span>\n</div>'}}),define("dojox/widget/UpgradeBar",["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/fx","dojo/_base/lang","dojo/_base/sniff","dojo/_base/window","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/cookie","dojo/domReady","dojo/fx","dojo/window","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./UpgradeBar/UpgradeBar.html"],function(e,t,i,a,r,n,o,s,l,d,u,c,h,m,f,g,p,y,v,b){e.experimental("dojox.widget.UpgradeBar");var k=a("dojox.widget.UpgradeBar",[y,v],{notifications:[],buttonCancel:"Close for now",noRemindButton:"Don't Remind Me Again",templateString:b,constructor:function(i,a){!i.notifications&&a&&t.forEach(a.childNodes,function(t){if(1==t.nodeType){var i=l.get(t,"validate");this.notifications.push({message:t.innerHTML,validate:function(){var t=!0;try{t=e.eval(i)}catch(a){}return t}})}},this)},checkNotifications:function(){if(this.notifications.length)for(var e=0;e<this.notifications.length;e++){var t=this.notifications[e].validate();if(t){this.notify(this.notifications[e].message);break}}},postCreate:function(){if(this.inherited(arguments),this.domNode.parentNode&&h.set(this.domNode,"display","none"),n.mixin(this.attributeMap,{message:{node:"messageNode",type:"innerHTML"}}),this.noRemindButton||u.destroy(this.dontRemindButtonNode),6==o("ie")){var e=this,t=function(){var t=p.getBox();h.set(e.domNode,"width",t.w+"px")};this.connect(window,"resize",function(){t()}),t()}f(n.hitch(this,"checkNotifications"))},notify:function(e){m("disableUpgradeReminders")||(this.domNode.parentNode&&this.domNode.parentNode.innerHTML||document.body.appendChild(this.domNode),h.set(this.domNode,"display",""),e&&this.set("message",e))},show:function(){this._bodyMarginTop=h.get(s.body(),"marginTop"),this._size=c.getContentBox(this.domNode).h,h.set(this.domNode,{display:"block",height:0,opacity:0}),this._showAnim||(this._showAnim=g.combine([r.animateProperty({node:s.body(),duration:500,properties:{marginTop:this._bodyMarginTop+this._size}}),r.animateProperty({node:this.domNode,duration:500,properties:{height:this._size,opacity:1}})])),this._showAnim.play()},hide:function(){this._hideAnim||(this._hideAnim=g.combine([r.animateProperty({node:s.body(),duration:500,properties:{marginTop:this._bodyMarginTop}}),r.animateProperty({node:this.domNode,duration:500,properties:{height:0,opacity:0}})]),i.connect(this._hideAnim,"onEnd",this,function(){h.set(this.domNode,{display:"none",opacity:1})})),this._hideAnim.play()},_onDontRemindClick:function(){m("disableUpgradeReminders",!0,{expires:3650}),this.hide()},_onCloseEnter:function(){d.add(this.closeButtonNode,"dojoxUpgradeBarCloseIcon-hover")},_onCloseLeave:function(){d.remove(this.closeButtonNode,"dojoxUpgradeBarCloseIcon-hover")}});return k});//# sourceMappingURL=UpgradeBar.js.map