//>>built
define("dojox/xmpp/widget/ChatSession",["dojo","dijit","dojox","dojo/require!dijit/layout/LayoutContainer,dijit/_Templated"],function(e,t,i){e.provide("dojox.xmpp.widget.ChatSession"),e.require("dijit.layout.LayoutContainer"),e.require("dijit._Templated"),e.declare("dojox.xmpp.widget.ChatSession",[t.layout.LayoutContainer,t._Templated],{templateString:e.cache("dojox.xmpp.widget","templates/ChatSession.html",'<div>\n<div dojoAttachPoint="messages" dojoType="dijit.layout.ContentPane" layoutAlign="client" style="overflow:auto">\n</div>\n<div dojoType="dijit.layout.ContentPane" layoutAlign="bottom" style="border-top: 2px solid #333333; height: 35px;"><input dojoAttachPoint="chatInput" dojoAttachEvent="onkeypress: onKeyPress" style="width: 100%;height: 35px;" /></div>\n</div>'),enableSubWidgets:!0,widgetsInTemplate:!0,widgetType:"ChatSession",chatWith:null,instance:null,postCreate:function(){},displayMessage:function(e,t){if(e){var i=e.from?this.chatWith:"me";this.messages.domNode.innerHTML+="<b>"+i+":</b> "+e.body+"<br/>",this.goToLastMessage()}},goToLastMessage:function(){this.messages.domNode.scrollTop=this.messages.domNode.scrollHeight},onKeyPress:function(t){(t.keyCode||t.charCode)==e.keys.ENTER&&""!=this.chatInput.value&&(this.instance.sendMessage({body:this.chatInput.value}),this.displayMessage({body:this.chatInput.value},"out"),this.chatInput.value="")}})});//# sourceMappingURL=ChatSession.js.map