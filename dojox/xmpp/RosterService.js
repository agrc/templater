//>>built
define("dojox/xmpp/RosterService",["dojo","dijit","dojox"],function(e,t,i){e.provide("dojox.xmpp.RosterService"),i.xmpp.roster={ADDED:101,CHANGED:102,REMOVED:103},e.declare("dojox.xmpp.RosterService",null,{constructor:function(e){this.session=e},addRosterItem:function(e,t,o){if(!e)throw new Error("Roster::addRosterItem() - User ID is null");var a=this.session.getNextIqId(),n={id:a,from:this.session.jid+"/"+this.session.resource,type:"set"},r=new i.string.Builder(i.xmpp.util.createElement("iq",n,!1));if(r.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!1)),e=i.xmpp.util.encodeJid(e),-1==e.indexOf("@")&&(e=e+"@"+this.session.domain),r.append(i.xmpp.util.createElement("item",{jid:e,name:i.xmpp.util.xmlEncode(t)},!1)),o)for(var s=0;s<o.length;s++)r.append("<group>"),r.append(o[s]),r.append("</group>");r.append("</item></query></iq>");var d=this.session.dispatchPacket(r.toString(),"iq",n.id);return d.addCallback(this,"verifyRoster"),d},updateRosterItem:function(e,t,o){-1==e.indexOf("@")&&(e+=e+"@"+this.session.domain);var a={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"},n=new i.string.Builder(i.xmpp.util.createElement("iq",a,!1));n.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!1));var r=this.session.getRosterIndex(e);if(-1!=r){var s={jid:e};t?s.name=t:this.session.roster[r].name&&(s.name=this.session.roster[r].name),s.name&&(s.name=i.xmpp.util.xmlEncode(s.name)),n.append(i.xmpp.util.createElement("item",s,!1));var d=o?o:this.session.roster[r].groups;if(d)for(var l=0;l<d.length;l++)n.append("<group>"),n.append(d[l]),n.append("</group>");n.append("</item></query></iq>");var h=this.session.dispatchPacket(n.toString(),"iq",a.id);return h.addCallback(this,"verifyRoster"),h}},verifyRoster:function(e){if("result"==e.getAttribute("type"));else{var t=this.session.processXmppError(e);this.onAddRosterItemFailed(t)}return e},addRosterItemToGroup:function(e,t){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");if(!t)throw new Error("Roster::addRosterItemToGroup() group is null or undefined");var o=this.session.getRosterIndex(e);if(-1!=o){for(var a=this.session.roster[o],n=!1,r=0;a<a.groups.length&&!n;r++)a.groups[r]==t&&(n=!0);return n?i.xmpp.xmpp.INVALID_ID:this.updateRosterItem(e,a.name,a.groups.concat(t),o)}},removeRosterGroup:function(e){for(var t=this.session.roster,i=0;i<t.length;i++){var o=t[i];if(o.groups.length>0)for(var a=0;a<o.groups.length;a++)o.groups[a]==e&&(o.groups.splice(a,1),this.updateRosterItem(o.jid,o.name,o.groups))}},renameRosterGroup:function(e,t){for(var i=this.session.roster,o=0;o<i.length;o++){var a=i[o];if(a.groups.length>0)for(var n=0;n<a.groups.length;n++)a.groups[n]==e&&(a.groups[n]=t,this.updateRosterItem(a.jid,a.name,a.groups))}},removeRosterItemFromGroup:function(e,t){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");if(!t)throw new Error("Roster::addRosterItemToGroup() group is null or undefined");var o=this.session.getRosterIndex(e);if(-1!=o){for(var a=this.session.roster[o],n=!1,r=0;r<a.groups.length&&!n;r++)a.groups[r]==t&&(n=!0,o=r);return 1==n?(a.groups.splice(o,1),this.updateRosterItem(e,a.name,a.groups)):i.xmpp.xmpp.INVALID_ID}},rosterItemRenameGroup:function(e,t,o){if(!e)throw new Error("Roster::rosterItemRenameGroup() JID is null or undefined");if(!o)throw new Error("Roster::rosterItemRenameGroup() group is null or undefined");var a=this.session.getRosterIndex(e);if(-1!=a){for(var n=this.session.roster[a],r=!1,s=0;s<n.groups.length&&!r;s++)n.groups[s]==t&&(n.groups[s]=o,r=!0);return 1==r?this.updateRosterItem(e,n.name,n.groups):i.xmpp.xmpp.INVALID_ID}},renameRosterItem:function(e,t){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");if(!t)throw new Error("Roster::addRosterItemToGroup() New Name is null or undefined");var i=this.session.getRosterIndex(e);if(-1!=i)return this.updateRosterItem(e,t,this.session.roster.groups,i)},removeRosterItem:function(e){if(!e)throw new Error("Roster::addRosterItemToGroup() JID is null or undefined");var t={id:this.session.getNextIqId(),from:this.session.jid+"/"+this.session.resource,type:"set"},o=new i.string.Builder(i.xmpp.util.createElement("iq",t,!1));o.append(i.xmpp.util.createElement("query",{xmlns:"jabber:iq:roster"},!1)),-1==e.indexOf("@")&&(e+=e+"@"+this.session.domain),o.append(i.xmpp.util.createElement("item",{jid:e,subscription:"remove"},!0)),o.append("</query></iq>");var a=this.session.dispatchPacket(o.toString(),"iq",t.id);return a.addCallback(this,"verifyRoster"),a},getAvatar:function(e){},publishAvatar:function(e,t){},onVerifyRoster:function(e){},onVerifyRosterFailed:function(e){}})});//# sourceMappingURL=RosterService.js.map