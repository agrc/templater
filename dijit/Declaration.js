//>>built
define("dijit/Declaration",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser","dojo/query","./_Widget","./_TemplatedMixin","./_WidgetsInTemplateMixin","dojo/NodeList-dom"],function(t,e,o,a,i,d,n,r,s){return o("dijit.Declaration",n,{_noScript:!0,stopParser:!0,widgetClass:"",defaults:null,mixins:[],buildRendering:function(){var c=this.srcNodeRef.parentNode.removeChild(this.srcNodeRef),p=d("> script[type='dojo/method']",c).orphan(),j=d("> script[type='dojo/connect']",c).orphan(),u=d("> script[type='dojo/aspect']",c).orphan(),h=c.nodeName,l=this.defaults||{};t.forEach(p,function(t){var e=t.getAttribute("event")||t.getAttribute("data-dojo-event"),o=i._functionFromScript(t,"data-dojo-");e?l[e]=o:u.push(t)}),this.mixins.length?this.mixins=t.map(this.mixins,function(t){return a.getObject(t)}):this.mixins=[n,r,s],l._skipNodeCache=!0,l.templateString="<"+h+" class='"+c.className+"' data-dojo-attach-point='"+(c.getAttribute("data-dojo-attach-point")||c.getAttribute("dojoAttachPoint")||"")+"' data-dojo-attach-event='"+(c.getAttribute("data-dojo-attach-event")||c.getAttribute("dojoAttachEvent")||"")+"' >"+c.innerHTML.replace(/\%7B/g,"{").replace(/\%7D/g,"}")+"</"+h+">";var g=o(this.widgetClass,this.mixins,l);t.forEach(u,function(t){var o=(t.getAttribute("data-dojo-advice")||"after",t.getAttribute("data-dojo-method")||"postscript"),a=i._functionFromScript(t);e.after(g.prototype,o,a,!0)}),t.forEach(j,function(t){var o=t.getAttribute("event")||t.getAttribute("data-dojo-event"),a=i._functionFromScript(t);e.after(g.prototype,o,a,!0)})}})});//# sourceMappingURL=Declaration.js.map