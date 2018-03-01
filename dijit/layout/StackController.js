//>>built
define("dijit/layout/StackController",["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/keys","dojo/_base/lang","dojo/on","dojo/topic","../focus","../registry","../_Widget","../_TemplatedMixin","../_Container","../form/ToggleButton","dojo/touch"],function(e,t,i,n,o,s,a,r,d,l,c,u,h,f){var p=t("dijit.layout._StackButton",f,{tabIndex:"-1",closeButton:!1,_aria_attr:"aria-selected",buildRendering:function(e){this.inherited(arguments),(this.focusNode||this.domNode).setAttribute("role","tab")}}),m=t("dijit.layout.StackController",[c,u,h],{baseClass:"dijitStackController",templateString:"<span role='tablist' data-dojo-attach-event='onkeydown'></span>",containerId:"",buttonWidget:p,buttonWidgetCloseClass:"dijitStackCloseButton",pane2button:function(e){return l.byId(this.id+"_"+e)},postCreate:function(){this.inherited(arguments),this.own(r.subscribe(this.containerId+"-startup",s.hitch(this,"onStartup")),r.subscribe(this.containerId+"-addChild",s.hitch(this,"onAddChild")),r.subscribe(this.containerId+"-removeChild",s.hitch(this,"onRemoveChild")),r.subscribe(this.containerId+"-selectChild",s.hitch(this,"onSelectChild")),r.subscribe(this.containerId+"-containerKeyDown",s.hitch(this,"onContainerKeyDown"))),this.containerNode.dojoClick=!0,this.own(a(this.containerNode,"click",s.hitch(this,function(e){var t=l.getEnclosingWidget(e.target);if(t!=this.containerNode&&!t.disabled&&t.page)for(var n=e.target;n!==this.containerNode;n=n.parentNode){if(i.contains(n,this.buttonWidgetCloseClass)){this.onCloseButtonClick(t.page);break}if(n==t.domNode){this.onButtonClick(t.page);break}}})))},onStartup:function(t){this.textDir=t.textDir,e.forEach(t.children,this.onAddChild,this),t.selected&&this.onSelectChild(t.selected);var i=l.byId(this.containerId).containerNode,n=s.hitch(this,"pane2button"),o={title:"label",showtitle:"showLabel",iconclass:"iconClass",closable:"closeButton",tooltip:"title",disabled:"disabled",textdir:"textdir"},r=function(e,t){return a(i,"attrmodified-"+e,function(e){var i=n(e.detail&&e.detail.widget&&e.detail.widget.id);i&&i.set(t,e.detail.newValue)})};for(var d in o)this.own(r(d,o[d]))},destroy:function(e){this.destroyDescendants(e),this.inherited(arguments)},onAddChild:function(e,t){var i=s.isString(this.buttonWidget)?s.getObject(this.buttonWidget):this.buttonWidget,n=new i({id:this.id+"_"+e.id,name:this.id+"_"+e.id,label:e.title,disabled:e.disabled,ownerDocument:this.ownerDocument,dir:e.dir,lang:e.lang,textDir:e.textDir||this.textDir,showLabel:e.showTitle,iconClass:e.iconClass,closeButton:e.closable,title:e.tooltip,page:e});this.addChild(n,t),e.controlButton=n,this._currentChild||this.onSelectChild(e);var o=e._wrapper.getAttribute("aria-labelledby")?e._wrapper.getAttribute("aria-labelledby")+" "+n.id:n.id;e._wrapper.removeAttribute("aria-label"),e._wrapper.setAttribute("aria-labelledby",o)},onRemoveChild:function(e){this._currentChild===e&&(this._currentChild=null);var t=this.pane2button(e.id);t&&(this.removeChild(t),t.destroy()),delete e.controlButton},onSelectChild:function(e){if(e){if(this._currentChild){var t=this.pane2button(this._currentChild.id);t.set("checked",!1),t.focusNode.setAttribute("tabIndex","-1")}var i=this.pane2button(e.id);i.set("checked",!0),this._currentChild=e,i.focusNode.setAttribute("tabIndex","0");l.byId(this.containerId)}},onButtonClick:function(e){var t=this.pane2button(e.id);d.focus(t.focusNode),this._currentChild&&this._currentChild.id===e.id&&t.set("checked",!0),l.byId(this.containerId).selectChild(e)},onCloseButtonClick:function(e){if(l.byId(this.containerId).closeChild(e),this._currentChild){var t=this.pane2button(this._currentChild.id);t&&d.focus(t.focusNode||t.domNode)}},adjacent:function(t){this.isLeftToRight()||this.tabPosition&&!/top|bottom/.test(this.tabPosition)||(t=!t);var i,n=this.getChildren(),o=e.indexOf(n,this.pane2button(this._currentChild.id)),s=n[o];do{o=(o+(t?1:n.length-1))%n.length,i=n[o]}while(i.disabled&&i!=s);return i},onkeydown:function(e,t){if(!this.disabled&&!e.altKey){var i=null;if(e.ctrlKey||!e._djpage){switch(e.keyCode){case o.LEFT_ARROW:case o.UP_ARROW:e._djpage||(i=!1);break;case o.PAGE_UP:e.ctrlKey&&(i=!1);break;case o.RIGHT_ARROW:case o.DOWN_ARROW:e._djpage||(i=!0);break;case o.PAGE_DOWN:e.ctrlKey&&(i=!0);break;case o.HOME:for(var n=this.getChildren(),s=0;s<n.length;s++){var a=n[s];if(!a.disabled){this.onButtonClick(a.page);break}}e.stopPropagation(),e.preventDefault();break;case o.END:for(var n=this.getChildren(),s=n.length-1;s>=0;s--){var a=n[s];if(!a.disabled){this.onButtonClick(a.page);break}}e.stopPropagation(),e.preventDefault();break;case o.DELETE:case"W".charCodeAt(0):this._currentChild.closable&&(e.keyCode==o.DELETE||e.ctrlKey)&&(this.onCloseButtonClick(this._currentChild),e.stopPropagation(),e.preventDefault());break;case o.TAB:e.ctrlKey&&(this.onButtonClick(this.adjacent(!e.shiftKey).page),e.stopPropagation(),e.preventDefault())}null!==i&&(this.onButtonClick(this.adjacent(i).page),e.stopPropagation(),e.preventDefault())}}},onContainerKeyDown:function(e){e.e._djpage=e.page,this.onkeydown(e.e)}});return m.StackButton=p,m});//# sourceMappingURL=StackController.js.map