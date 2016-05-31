//>>built
define("dojox/xmpp/UserService",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.xmpp.UserService"),e.declare("dojox.xmpp.UserService",null,{constructor:function(e){this.session=e},getPersonalProfile:function(){var e={id:this.session.getNextIqId(),type:"get"},t=new i.string.Builder(i.xmpp.util.createElement("iq",e,!1));t.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:private"},!1)),t.append(i.xmpp.util.createElement("sunmsgr",{xmlsns:"sun:xmpp:properties"},!0)),t.append("</query></iq>");var o=this.session.dispatchPacket(t.toString(),"iq",e.id);o.addCallback(this,"_onGetPersonalProfile")},setPersonalProfile:function(e){var t={id:this.session.getNextIqId(),type:"set"},o=new i.string.Builder(i.xmpp.util.createElement("iq",t,!1));o.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:private"},!1)),o.append(i.xmpp.util.createElement("sunmsgr",{xmlsns:"sun:xmpp:properties"},!1));for(var r in e)o.append(i.xmpp.util.createElement("property",{name:r},!1)),o.append(i.xmpp.util.createElement("value",{},!1)),o.append(e[r]),o.append("</value></props>");o.append("</sunmsgr></query></iq>");var n=this.session.dispatchPacket(o.toString(),"iq",t.id);n.addCallback(this,"_onSetPersonalProfile")},_onSetPersonalProfile:function(e){if("result"==e.getAttribute("type"))this.onSetPersonalProfile(e.getAttribute("id"));else if("error"==e.getAttribute("type")){var t=this.session.processXmppError(e);this.onSetPersonalProfileFailure(t)}},onSetPersonalProfile:function(e){},onSetPersonalProfileFailure:function(e){},_onGetPersonalProfile:function(e){if("result"==e.getAttribute("type")){var t={};if(e.hasChildNodes()){var i=e.firstChild;if("query"==i.nodeName&&"jabber:iq:private"==i.getAttribute("xmlns")){var o=i.firstChild;if("query"==o.nodeName&&"sun:xmpp:properties"==o.getAttributes("xmlns"))for(var r=0;r<o.childNodes.length;r++){var n=o.childNodes[r];if("property"==n.nodeName){var a=n.getAttribute("name"),s=n.firstChild||"";t[a]=s}}}this.onGetPersonalProfile(t)}}else if("error"==e.getAttribute("type")){var d=this.session.processXmppError(e);this.onGetPersonalProfileFailure(d)}return e},onGetPersonalProfile:function(e){},onGetPersonalProfileFailure:function(e){}})});//# sourceMappingURL=UserService.js.map