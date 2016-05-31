//>>built
define("dojox/xmpp/PresenceService",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.xmpp.PresenceService"),i.xmpp.presence={UPDATE:201,SUBSCRIPTION_REQUEST:202,SUBSCRIPTION_SUBSTATUS_NONE:204,SUBSCRIPTION_NONE:"none",SUBSCRIPTION_FROM:"from",SUBSCRIPTION_TO:"to",SUBSCRIPTION_BOTH:"both",SUBSCRIPTION_REQUEST_PENDING:"pending",STATUS_ONLINE:"online",STATUS_AWAY:"away",STATUS_CHAT:"chat",STATUS_DND:"dnd",STATUS_EXTENDED_AWAY:"xa",STATUS_OFFLINE:"offline",STATUS_INVISIBLE:"invisible"},e.declare("dojox.xmpp.PresenceService",null,{constructor:function(e){this.session=e,this.isInvisible=!1,this.avatarHash=null,this.presence=null,this.restrictedContactjids={}},publish:function(e){this.presence=e,this._setPresence()},sendAvatarHash:function(e){this.avatarHash=e,this._setPresence()},_setPresence:function(){var e=this.presence,t={xmlns:"jabber:client"};if(e&&e.to&&(t.to=e.to),e.show&&e.show==i.xmpp.presence.STATUS_OFFLINE&&(t.type="unavailable"),e.show&&e.show==i.xmpp.presence.STATUS_INVISIBLE)return this._setInvisible(),void(this.isInvisible=!0);this.isInvisible&&this._setVisible();var a=new i.string.Builder(i.xmpp.util.createElement("presence",t,!1));e.show&&e.show!=i.xmpp.presence.STATUS_OFFLINE&&(a.append(i.xmpp.util.createElement("show",{},!1)),a.append(e.show),a.append("</show>")),e.status&&(a.append(i.xmpp.util.createElement("status",{},!1)),a.append(e.status),a.append("</status>")),this.avatarHash&&(a.append(i.xmpp.util.createElement("x",{xmlns:"vcard-temp:x:update"},!1)),a.append(i.xmpp.util.createElement("photo",{},!1)),a.append(this.avatarHash),a.append("</photo>"),a.append("</x>")),e.priority&&e.show!=i.xmpp.presence.STATUS_OFFLINE&&((e.priority>127||e.priority<-128)&&(e.priority=5),a.append(i.xmpp.util.createElement("priority",{},!1)),a.append(e.priority),a.append("</priority>")),a.append("</presence>"),this.session.dispatchPacket(a.toString())},toggleBlockContact:function(e){return this.restrictedContactjids[e]||(this.restrictedContactjids[e]=this._createRestrictedJid()),this.restrictedContactjids[e].blocked=!this.restrictedContactjids[e].blocked,this._updateRestricted(),this.restrictedContactjids},toggleContactInvisiblity:function(e){return this.restrictedContactjids[e]||(this.restrictedContactjids[e]=this._createRestrictedJid()),this.restrictedContactjids[e].invisible=!this.restrictedContactjids[e].invisible,this._updateRestricted(),this.restrictedContactjids},_createRestrictedJid:function(){return{invisible:!1,blocked:!1}},_updateRestricted:function(){var e={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"},t=new i.string.Builder(i.xmpp.util.createElement("iq",e,!1));t.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),t.append(i.xmpp.util.createElement("list",{name:"iwcRestrictedContacts"},!1));var a=1;for(var n in this.restrictedContactjids){var r=this.restrictedContactjids[n];r.blocked||r.invisible?(t.append(i.xmpp.util.createElement("item",{value:i.xmpp.util.encodeJid(n),action:"deny",order:a++},!1)),r.blocked&&t.append(i.xmpp.util.createElement("message",{},!0)),r.invisible&&t.append(i.xmpp.util.createElement("presence-out",{},!0)),t.append("</item>")):delete this.restrictedContactjids[n]}t.append("</list>"),t.append("</query>"),t.append("</iq>");var o=new i.string.Builder(i.xmpp.util.createElement("iq",e,!1));o.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),o.append(i.xmpp.util.createElement("active",{name:"iwcRestrictedContacts"},!0)),o.append("</query>"),o.append("</iq>"),this.session.dispatchPacket(t.toString()),this.session.dispatchPacket(o.toString())},_setVisible:function(){var e={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"},t=new i.string.Builder(i.xmpp.util.createElement("iq",e,!1));t.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),t.append(i.xmpp.util.createElement("active",{},!0)),t.append("</query>"),t.append("</iq>"),this.session.dispatchPacket(t.toString())},_setInvisible:function(){var e={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"},t=new i.string.Builder(i.xmpp.util.createElement("iq",e,!1));t.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),t.append(i.xmpp.util.createElement("list",{name:"invisible"},!1)),t.append(i.xmpp.util.createElement("item",{action:"deny",order:"1"},!1)),t.append(i.xmpp.util.createElement("presence-out",{},!0)),t.append("</item>"),t.append("</list>"),t.append("</query>"),t.append("</iq>"),e={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"};var a=new i.string.Builder(i.xmpp.util.createElement("iq",e,!1));a.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:privacy"},!1)),a.append(i.xmpp.util.createElement("active",{name:"invisible"},!0)),a.append("</query>"),a.append("</iq>"),this.session.dispatchPacket(t.toString()),this.session.dispatchPacket(a.toString())},_manageSubscriptions:function(e,t){if(e){-1==e.indexOf("@")&&(e+="@"+this.session.domain);var a=i.xmpp.util.createElement("presence",{to:e,type:t},!0);this.session.dispatchPacket(a)}},subscribe:function(e){this._manageSubscriptions(e,"subscribe")},approveSubscription:function(e){this._manageSubscriptions(e,"subscribed")},unsubscribe:function(e){this._manageSubscriptions(e,"unsubscribe")},declineSubscription:function(e){this._manageSubscriptions(e,"unsubscribed")},cancelSubscription:function(e){this._manageSubscriptions(e,"unsubscribed")}})});//# sourceMappingURL=PresenceService.js.map