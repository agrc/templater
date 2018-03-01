//>>built
define("dojox/mobile/ComboBox",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dojo/window","dojo/touch","dijit/form/_AutoCompleterMixin","dijit/popup","./_ComboBoxMenu","./TextBox","./sniff"],function(e,t,i,a,o,r,n,s,l,d,u,h,c,m){return e.experimental("dojox.mobile.ComboBox"),t("dojox.mobile.ComboBox",[c,d],{dropDownClass:"dojox.mobile._ComboBoxMenu",selectOnClick:!1,autoComplete:!1,dropDown:null,maxHeight:-1,dropDownPosition:["below","above"],_throttleOpenClose:function(){this._throttleHandler&&this._throttleHandler.remove(),this._throttleHandler=this.defer(function(){this._throttleHandler=null},500)},_onFocus:function(){this.inherited(arguments),this._opened||this._throttleHandler||this._startSearchAll(),m("windows-theme")&&this.domNode.blur()},onInput:function(e){e&&0===e.charCode||(this._onKey(e),this.inherited(arguments))},_setListAttr:function(e){this._set("list",e)},closeDropDown:function(){this._throttleOpenClose(),this.endHandler&&(this.disconnect(this.startHandler),this.disconnect(this.endHandler),this.disconnect(this.moveHandler),clearInterval(this.repositionTimer),this.repositionTimer=this.endHandler=null),this.inherited(arguments),n.remove(this.domNode,"aria-owns"),n.set(this.domNode,"aria-expanded","false"),u.close(this.dropDown),this._opened=!1,m("windows-theme")&&this.domNode.disabled&&this.defer(function(){this.domNode.removeAttribute("disabled")},300)},openDropDown:function(){var e=!this._opened,t=this.dropDown,d=t.domNode,h=this.domNode,c=this;n.set(t.domNode,"role","listbox"),n.set(this.domNode,"aria-expanded","true"),t.id&&n.set(this.domNode,"aria-owns",t.id),m("touch")&&(!m("ios")||m("ios")<8)&&a.global.scrollBy(0,o.position(h,!1).y),this._preparedNode||(this._preparedNode=!0,d.style.width&&(this._explicitDDWidth=!0),d.style.height&&(this._explicitDDHeight=!0));var f={display:"",overflow:"hidden",visibility:"hidden"};this._explicitDDWidth||(f.width=""),this._explicitDDHeight||(f.height=""),r.set(d,f);var p=this.maxHeight;if(-1==p){var g=s.getBox(),v=o.position(h,!1);p=Math.floor(Math.max(v.y,g.h-(v.y+v.h)))}u.moveOffScreen(t),t.startup&&!t._started&&t.startup();var y=o.position(this.dropDown.containerNode,!1);p&&y.h>p&&(y.h=p),y.w=Math.max(y.w,h.offsetWidth),o.setMarginBox(d,y);var b=u.open({parent:this,popup:t,around:h,orient:m("windows-theme")?["above"]:this.dropDownPosition,onExecute:function(){c.closeDropDown()},onCancel:function(){c.closeDropDown()},onClose:function(){c._opened=!1}});if(this._opened=!0,e){var k=!1,_=!1,M=!1,x=t.domNode.parentNode,w=o.position(h,!1),j=o.position(x,!1),T=j.x-w.x,I=j.y-w.y,S=-1,C=-1;this.startHandler=this.connect(a.doc.documentElement,l.press,function(e){_=!0,M=!0,k=!1,S=e.clientX,C=e.clientY}),this.moveHandler=this.connect(a.doc.documentElement,l.move,function(e){_=!0,e.touches?M=k=!0:!M||e.clientX==S&&e.clientY==C||(k=!0)}),this.clickHandler=this.connect(t.domNode,"onclick",function(){_=!0,M=k=!1}),this.endHandler=this.connect(a.doc.documentElement,l.release,function(){this.defer(function(){_=!0,!k&&M&&this.closeDropDown(),M=!1})}),this.repositionTimer=setInterval(i.hitch(this,function(){if(_)return void(_=!1);var e=o.position(h,!1),t=o.position(x,!1),i=t.x-e.x,a=t.y-e.y;(Math.abs(i-T)>=1||Math.abs(a-I)>=1)&&r.set(x,{left:parseInt(r.get(x,"left"))+T-i+"px",top:parseInt(r.get(x,"top"))+I-a+"px"})}),50)}return m("windows-theme")&&this.domNode.setAttribute("disabled",!0),b},postCreate:function(){this.inherited(arguments),this.connect(this.domNode,"onclick","_onClick"),n.set(this.domNode,"role","combobox"),n.set(this.domNode,"aria-expanded","false")},destroy:function(){this.repositionTimer&&clearInterval(this.repositionTimer),this.inherited(arguments)},_onClick:function(e){this._throttleHandler||(this.opened?this.closeDropDown():this._startSearchAll())}})});//# sourceMappingURL=ComboBox.js.map