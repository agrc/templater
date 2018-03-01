//>>built
define("dojox/dtl/contrib/dijit",["dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/query","../_base","../dom","dojo/parser","dojo/_base/sniff"],function(e,t,i,r,a,n,o,s){function d(e){var t=e.cloneNode(!0);return s("ie")&&r("script",t).forEach("item.text = this[index].text;",r("script",e)),t}var l=e.getObject("contrib.dijit",!0,a);return l.AttachNode=e.extend(function(e,t){this._keys=e,this._object=t},{render:function(e,t){if(!this._rendered){this._rendered=!0;for(var i,r=0;i=this._keys[r];r++)e.getThis()[i]=this._object||t.getParent()}return t},unrender:function(e,t){if(this._rendered){this._rendered=!1;for(var i,r=0;i=this._keys[r];r++)e.getThis()[i]===(this._object||t.getParent())&&delete e.getThis()[i]}return t},clone:function(e){return new this.constructor(this._keys,this._object)}}),l.EventNode=e.extend(function(t,i){this._command=t;for(var r,a=t.split(/\s*,\s*/),n=e.trim,o=[],s=[];r=a.pop();)if(r){var d=null;if(-1!=r.indexOf(":")){var l=r.split(":");r=n(l[0]),d=n(l.slice(1).join(":"))}else r=n(r);d||(d=r),o.push(r),s.push(d)}this._types=o,this._fns=s,this._object=i,this._rendered=[]},{_clear:!1,render:function(r,n){for(var o,s=0;o=this._types[s];s++){this._clear||this._object||(n.getParent()[o]=null);var d,l=this._fns[s];if(-1!=l.indexOf(" ")&&(this._rendered[s]&&(t.disconnect(this._rendered[s]),this._rendered[s]=!1),d=i.map(l.split(" ").slice(1),function(e){return new a._Filter(e).resolve(r)}),l=l.split(" ",2)[0]),!this._rendered[s])if(this._object){e.isArray(d)&&function(e){this[l].apply(this,[e].concat(d))},this._rendered[s]=t.connect(this._object,o,r.getThis(),l)}else this._rendered[s]=n.addEvent(r,o,l,d)}return this._clear=!0,n},unrender:function(e,i){for(;this._rendered.length;)t.disconnect(this._rendered.pop());return i},clone:function(){return new this.constructor(this._command,this._object)}}),l.DojoTypeNode=e.extend(function(t,i){this._node=t,this._parsed=i;var r=t.getAttribute("dojoAttachEvent")||t.getAttribute("data-dojo-attach-event");r&&(this._events=new l.EventNode(e.trim(r)));var n=t.getAttribute("dojoAttachPoint")||t.getAttribute("data-dojo-attach-point");if(n&&(this._attach=new l.AttachNode(e.trim(n).split(/\s*,\s*/))),i){t=d(t);var s=l.widgetsInTemplate;l.widgetsInTemplate=!1,this._template=new a.DomTemplate(t),l.widgetsInTemplate=s}else this._dijit=o.instantiate([d(t)])[0]},{render:function(e,t){if(this._parsed){var i=new a.DomBuffer;this._template.render(e,i);var r=d(i.getRootNode()),n=document.createElement("div");n.appendChild(r);var s=n.innerHTML;n.removeChild(r),s!=this._rendered&&(this._rendered=s,this._dijit&&this._dijit.destroyRecursive(),this._dijit=o.instantiate([r])[0])}var l=this._dijit.domNode;return this._events&&(this._events._object=this._dijit,this._events.render(e,t)),this._attach&&(this._attach._object=this._dijit,this._attach.render(e,t)),t.concat(l)},unrender:function(e,t){return t.remove(this._dijit.domNode)},clone:function(){return new this.constructor(this._node,this._parsed)}}),e.mixin(l,{widgetsInTemplate:!0,dojoAttachPoint:function(e,t){return new l.AttachNode(t.contents.slice(-1!==t.contents.indexOf("data-")?23:16).split(/\s*,\s*/))},dojoAttachEvent:function(e,t){return new l.EventNode(t.contents.slice(-1!==t.contents.indexOf("data-")?23:16))},dojoType:function(e,t){var i=!1;" parsed"==t.contents.slice(-7)&&(i=!0);var r=-1!==t.contents.indexOf("data-")?t.contents.slice(15):t.contents.slice(9),n=i?r.slice(0,-7):r.toString();if(l.widgetsInTemplate){var o=e.swallowNode();return o.setAttribute("data-dojo-type",n),new l.DojoTypeNode(o,i)}return new a.AttributeNode("data-dojo-type",n)},on:function(e,t){var i=t.contents.split();return new l.EventNode(i[0]+":"+i.slice(1).join(" "))}}),l["data-dojo-type"]=l.dojoType,l["data-dojo-attach-point"]=l.dojoAttachPoint,l["data-dojo-attach-event"]=l.dojoAttachEvent,a.register.tags("dojox.dtl.contrib",{dijit:["attr:dojoType","attr:data-dojo-type","attr:dojoAttachPoint","attr:data-dojo-attach-point",["attr:attach","dojoAttachPoint"],["attr:attach","data-dojo-attach-point"],"attr:dojoAttachEvent","attr:data-dojo-attach-event",[/(attr:)?on(click|key(up))/i,"on"]]}),l});//# sourceMappingURL=dijit.js.map