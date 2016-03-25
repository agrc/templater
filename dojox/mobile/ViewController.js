//>>built
define("dojox/mobile/ViewController",["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/_base/Deferred","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/on","dojo/ready","dijit/registry","./ProgressIndicator","./TransitionEvent","./viewRegistry"],function(e,t,i,a,o,n,r,s,d,l,u,h,c,m,f,g){var p=a("dojox.mobile.ViewController",null,{dataHandlerClass:"dojox/mobile/dh/DataHandler",dataSourceClass:"dojox/mobile/dh/UrlDataSource",fileTypeMapClass:"dojox/mobile/dh/SuffixFileTypeMap",constructor:function(){this.viewMap={},h(o.hitch(this,function(){u(n.body(),"startTransition",o.hitch(this,"onStartTransition"))}))},findTransitionViews:function(e){if(!e)return[];e.match(/^#?([^&?]+)(.*)/);var t=RegExp.$2,i=c.byId(RegExp.$1);if(!i)return[];for(var a=i.getParent();a;a=a.getParent())if(a.isVisible&&!a.isVisible()){var o=i.getShowingView();o&&o.id!==i.id&&i.show(),i=a}return[i.getShowingView(),i,t]},openExternalView:function(e,t){var i=new r,a=this.viewMap[e.url];if(a)return e.moveTo=a,e.noTransition?c.byId(a).hide():new f(n.body(),e).dispatch(),i.resolve(!0),i;for(var s=null,d=t.childNodes.length-1;d>=0;d--){var l=t.childNodes[d];if(1===l.nodeType){var u=l.getAttribute("fixed")||l.getAttribute("data-mobile-fixed")||c.byNode(l)&&c.byNode(l).fixed;if("bottom"===u){s=l;break}}}var h=e.dataHandlerClass||this.dataHandlerClass,m=e.dataSourceClass||this.dataSourceClass,g=e.fileTypeMapClass||this.fileTypeMapClass;return require([h,m,g],o.hitch(this,function(a,r,d){var l=new a(new r(e.data||e.url),t,s),u=e.contentType||d.getContentType(e.url)||"html";l.processData(u,o.hitch(this,function(t){t?(this.viewMap[e.url]=e.moveTo=t,e.noTransition?c.byId(t).hide():new f(n.body(),e).dispatch(),i.resolve(!0)):i.reject("Failed to load "+e.url)}))})),i},onStartTransition:function(e){if(e.preventDefault(),e.detail){var t=e.detail;if(t.moveTo||t.href||t.url||t.scene){if(t.url&&!t.moveTo){var a=t.urlTarget,o=c.byId(a),r=o&&o.containerNode||s.byId(a);r||(o=g.getEnclosingView(e.target),r=o&&o.domNode.parentNode||n.body());var d=c.getEnclosingWidget(e.target);return d&&d.callback&&(t.context=d,t.method=d.callback),void this.openExternalView(t,r)}if(t.href)if(t.hrefTarget&&"_self"!=t.hrefTarget)n.global.open(t.href,t.hrefTarget);else{for(var l,u=g.getEnclosingView(e.target);u;u=g.getParentView(u))l=u;l&&l.performTransition(null,t.transitionDir,t.transition,e.target,function(){location.href=t.href})}else{if(t.scene)return void i.publish("/dojox/mobile/app/pushScene",[t.scene]);var h=this.findTransitionViews(t.moveTo),m=h[0],f=h[1],p=h[2];location.hash||t.hashchange||(g.initialView=m),t.moveTo&&f&&(t.moveTo=("#"===t.moveTo.charAt(0)?"#"+f.id:f.id)+p),!m||t.moveTo&&m===c.byId(t.moveTo.replace(/^#?([^&?]+).*/,"$1"))||(d=c.getEnclosingWidget(e.target),d&&d.callback&&(t.context=d,t.method=d.callback),m.performTransition(t))}}}}});return p._instance=new p,p.getInstance=function(){return p._instance},p});//# sourceMappingURL=ViewController.js.map