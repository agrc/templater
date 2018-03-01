//>>built
define("dojox/dtl/contrib/dijit",["dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/query","../_base","../dom","dojo/parser","dojo/_base/sniff"],function(e,t,i,a,r,o,n,s){function d(e){var t=e.cloneNode(!0);return s("ie")&&a("script",t).forEach("item.text = this[index].text;",a("script",e)),t}var l=e.getObject("contrib.dijit",!0,r);return l.AttachNode=e.extend(function(e,t){this._keys=e,this._object=t},{render:function(e,t){if(!this._rendered){this._rendered=!0;for(var i,a=0;i=this._keys[a];a++)e.getThis()[i]=this._object||t.getParent()}return t},unrender:function(e,t){if(this._rendered){this._rendered=!1;for(var i,a=0;i=this._keys[a];a++)e.getThis()[i]===(this._object||t.getParent())&&delete e.getThis()[i]}return t},clone:function(e){return new this.constructor(this._keys,this._object)}}),l.EventNode=e.extend(function(t,i){this._command=t;for(var a,r=t.split(/\s*,\s*/),o=e.trim,n=[],s=[];a=r.pop();)if(a){var d=null;if(-1!=a.indexOf(":")){var l=a.split(":");a=o(l[0]),d=o(l.slice(1).join(":"))}else a=o(a);d||(d=a),n.push(a),s.push(d)}this._types=n,this._fns=s,this._object=i,this._rendered=[]},{_clear:!1,render:function(a,o){for(var n,s=0;n=this._types[s];s++){this._clear||this._object||(o.getParent()[n]=null);var d,l=this._fns[s];if(-1!=l.indexOf(" ")&&(this._rendered[s]&&(t.disconnect(this._rendered[s]),this._rendered[s]=!1),d=i.map(l.split(" ").slice(1),function(e){return new r._Filter(e).resolve(a)}),l=l.split(" ",2)[0]),!this._rendered[s])if(this._object){e.isArray(d)&&function(e){this[l].apply(this,[e].concat(d))},this._rendered[s]=t.connect(this._object,n,a.getThis(),l)}else this._rendered[s]=o.addEvent(a,n,l,d)}return this._clear=!0,o},unrender:function(e,i){for(;this._rendered.length;)t.disconnect(this._rendered.pop());return i},clone:function(){return new this.constructor(this._command,this._object)}}),l.DojoTypeNode=e.extend(function(t,i){this._node=t,this._parsed=i;var a=t.getAttribute("dojoAttachEvent")||t.getAttribute("data-dojo-attach-event");a&&(this._events=new l.EventNode(e.trim(a)));var o=t.getAttribute("dojoAttachPoint")||t.getAttribute("data-dojo-attach-point");if(o&&(this._attach=new l.AttachNode(e.trim(o).split(/\s*,\s*/))),i){t=d(t);var s=l.widgetsInTemplate;l.widgetsInTemplate=!1,this._template=new r.DomTemplate(t),l.widgetsInTemplate=s}else this._dijit=n.instantiate([d(t)])[0]},{render:function(e,t){if(this._parsed){var i=new r.DomBuffer;this._template.render(e,i);var a=d(i.getRootNode()),o=document.createElement("div");o.appendChild(a);var s=o.innerHTML;o.removeChild(a),s!=this._rendered&&(this._rendered=s,this._dijit&&this._dijit.destroyRecursive(),this._dijit=n.instantiate([a])[0])}var l=this._dijit.domNode;return this._events&&(this._events._object=this._dijit,this._events.render(e,t)),this._attach&&(this._attach._object=this._dijit,this._attach.render(e,t)),t.concat(l)},unrender:function(e,t){return t.remove(this._dijit.domNode)},clone:function(){return new this.constructor(this._node,this._parsed)}}),e.mixin(l,{widgetsInTemplate:!0,dojoAttachPoint:function(e,t){return new l.AttachNode(t.contents.slice(-1!==t.contents.indexOf("data-")?23:16).split(/\s*,\s*/))},dojoAttachEvent:function(e,t){return new l.EventNode(t.contents.slice(-1!==t.contents.indexOf("data-")?23:16))},dojoType:function(e,t){var i=!1;" parsed"==t.contents.slice(-7)&&(i=!0);var a=-1!==t.contents.indexOf("data-")?t.contents.slice(15):t.contents.slice(9),o=i?a.slice(0,-7):a.toString();if(l.widgetsInTemplate){var n=e.swallowNode();return n.setAttribute("data-dojo-type",o),new l.DojoTypeNode(n,i)}return new r.AttributeNode("data-dojo-type",o)},on:function(e,t){var i=t.contents.split();return new l.EventNode(i[0]+":"+i.slice(1).join(" "))}}),l["data-dojo-type"]=l.dojoType,l["data-dojo-attach-point"]=l.dojoAttachPoint,l["data-dojo-attach-event"]=l.dojoAttachEvent,r.register.tags("dojox.dtl.contrib",{dijit:["attr:dojoType","attr:data-dojo-type","attr:dojoAttachPoint","attr:data-dojo-attach-point",["attr:attach","dojoAttachPoint"],["attr:attach","data-dojo-attach-point"],"attr:dojoAttachEvent","attr:data-dojo-attach-event",[/(attr:)?on(click|key(up))/i,"on"]]}),l});//# sourceMappingURL=dijit.js.map