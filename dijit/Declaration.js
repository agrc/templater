//>>built
define("dijit/Declaration",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser","dojo/query","./_Widget","./_TemplatedMixin","./_WidgetsInTemplateMixin","dojo/NodeList-dom"],function(t,e,o,i,a,n,r,s,d){return o("dijit.Declaration",r,{_noScript:!0,stopParser:!0,widgetClass:"",defaults:null,mixins:[],buildRendering:function(){var c=this.srcNodeRef.parentNode.removeChild(this.srcNodeRef),p=n("> script[type='dojo/method']",c).orphan(),u=n("> script[type='dojo/connect']",c).orphan(),j=n("> script[type='dojo/aspect']",c).orphan(),h=c.nodeName,f=this.defaults||{};t.forEach(p,function(t){var e=t.getAttribute("event")||t.getAttribute("data-dojo-event"),o=a._functionFromScript(t,"data-dojo-");e?f[e]=o:j.push(t)}),this.mixins.length?this.mixins=t.map(this.mixins,function(t){return i.getObject(t)}):this.mixins=[r,s,d],f._skipNodeCache=!0,f.templateString="<"+h+" class='"+c.className+"' data-dojo-attach-point='"+(c.getAttribute("data-dojo-attach-point")||c.getAttribute("dojoAttachPoint")||"")+"' data-dojo-attach-event='"+(c.getAttribute("data-dojo-attach-event")||c.getAttribute("dojoAttachEvent")||"")+"' >"+c.innerHTML.replace(/\%7B/g,"{").replace(/\%7D/g,"}")+"</"+h+">";var g=o(this.widgetClass,this.mixins,f);t.forEach(j,function(t){var o=(t.getAttribute("data-dojo-advice"),t.getAttribute("data-dojo-method")||"postscript"),i=a._functionFromScript(t);e.after(g.prototype,o,i,!0)}),t.forEach(u,function(t){var o=t.getAttribute("event")||t.getAttribute("data-dojo-event"),i=a._functionFromScript(t);e.after(g.prototype,o,i,!0)})}})});//# sourceMappingURL=Declaration.js.map