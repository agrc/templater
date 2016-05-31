//>>built
define("dojox/mobile/ComboBox",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dojo/window","dojo/touch","dijit/form/_AutoCompleterMixin","dijit/popup","./_ComboBoxMenu","./TextBox","./sniff"],function(e,t,i,a,o,r,n,s,l,d,h,u,c,m){return e.experimental("dojox.mobile.ComboBox"),t("dojox.mobile.ComboBox",[c,d],{dropDownClass:"dojox.mobile._ComboBoxMenu",selectOnClick:!1,autoComplete:!1,dropDown:null,maxHeight:-1,dropDownPosition:["below","above"],_throttleOpenClose:function(){this._throttleHandler&&this._throttleHandler.remove(),this._throttleHandler=this.defer(function(){this._throttleHandler=null},500)},_onFocus:function(){this.inherited(arguments),this._opened||this._throttleHandler||this._startSearchAll(),m("windows-theme")&&this.domNode.blur()},onInput:function(e){e&&0===e.charCode||(this._onKey(e),this.inherited(arguments))},_setListAttr:function(e){this._set("list",e)},closeDropDown:function(){this._throttleOpenClose(),this.endHandler&&(this.disconnect(this.startHandler),this.disconnect(this.endHandler),this.disconnect(this.moveHandler),clearInterval(this.repositionTimer),this.repositionTimer=this.endHandler=null),this.inherited(arguments),n.remove(this.domNode,"aria-owns"),n.set(this.domNode,"aria-expanded","false"),h.close(this.dropDown),this._opened=!1,m("windows-theme")&&this.domNode.disabled&&this.defer(function(){this.domNode.removeAttribute("disabled")},300)},openDropDown:function(){var e=!this._opened,t=this.dropDown,d=t.domNode,u=this.domNode,c=this;n.set(t.domNode,"role","listbox"),n.set(this.domNode,"aria-expanded","true"),t.id&&n.set(this.domNode,"aria-owns",t.id),m("touch")&&(!m("ios")||m("ios")<8)&&a.global.scrollBy(0,o.position(u,!1).y),this._preparedNode||(this._preparedNode=!0,d.style.width&&(this._explicitDDWidth=!0),d.style.height&&(this._explicitDDHeight=!0));var f={display:"",overflow:"hidden",visibility:"hidden"};this._explicitDDWidth||(f.width=""),this._explicitDDHeight||(f.height=""),r.set(d,f);var p=this.maxHeight;if(-1==p){var g=s.getBox(),y=o.position(u,!1);p=Math.floor(Math.max(y.y,g.h-(y.y+y.h)))}h.moveOffScreen(t),t.startup&&!t._started&&t.startup();var v=o.position(this.dropDown.containerNode,!1),b=p&&v.h>p;b&&(v.h=p),v.w=Math.max(v.w,u.offsetWidth),o.setMarginBox(d,v);var _=h.open({parent:this,popup:t,around:u,orient:m("windows-theme")?["above"]:this.dropDownPosition,onExecute:function(){c.closeDropDown()},onCancel:function(){c.closeDropDown()},onClose:function(){c._opened=!1}});if(this._opened=!0,e){var x=!1,k=!1,w=!1,M=t.domNode.parentNode,j=o.position(u,!1),T=o.position(M,!1),C=T.x-j.x,S=T.y-j.y,I=-1,A=-1;this.startHandler=this.connect(a.doc.documentElement,l.press,function(e){k=!0,w=!0,x=!1,I=e.clientX,A=e.clientY}),this.moveHandler=this.connect(a.doc.documentElement,l.move,function(e){k=!0,e.touches?w=x=!0:!w||e.clientX==I&&e.clientY==A||(x=!0)}),this.clickHandler=this.connect(t.domNode,"onclick",function(){k=!0,w=x=!1}),this.endHandler=this.connect(a.doc.documentElement,l.release,function(){this.defer(function(){k=!0,!x&&w&&this.closeDropDown(),w=!1})}),this.repositionTimer=setInterval(i.hitch(this,function(){if(k)return void(k=!1);var e=o.position(u,!1),t=o.position(M,!1),i=t.x-e.x,a=t.y-e.y;(Math.abs(i-C)>=1||Math.abs(a-S)>=1)&&r.set(M,{left:parseInt(r.get(M,"left"))+C-i+"px",top:parseInt(r.get(M,"top"))+S-a+"px"})}),50)}return m("windows-theme")&&this.domNode.setAttribute("disabled",!0),_},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onclick","_onClick"),n.set(this.domNode,"role","combobox"),n.set(this.domNode,"aria-expanded","false")},destroy:function(){this.repositionTimer&&clearInterval(this.repositionTimer),this.inherited(arguments)},_onClick:function(e){this._throttleHandler||(this.opened?this.closeDropDown():this._startSearchAll())}})});//# sourceMappingURL=ComboBox.js.map