//>>built
define("dijit/popup",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","./place","./BackgroundIframe","./Viewport","./main","dojo/touch"],function(e,t,o,i,n,s,a,r,d,c,h,u,l,f,p,_){function g(){this._popupWrapper&&(s.destroy(this._popupWrapper),delete this._popupWrapper)}var m=o(null,{_stack:[],_beginZIndex:1e3,_idGen:1,_repositionAll:function(){if(this._firstAroundNode){var e=this._firstAroundPosition,t=a.position(this._firstAroundNode,!0),o=t.x-e.x,i=t.y-e.y;if(o||i){this._firstAroundPosition=t;for(var n=0;n<this._stack.length;n++){var s=this._stack[n].wrapper.style;s.top=parseFloat(s.top)+i+"px","auto"==s.right?s.left=parseFloat(s.left)+o+"px":s.right=parseFloat(s.right)-o+"px"}}this._aroundMoveListener=setTimeout(h.hitch(this,"_repositionAll"),o||i?10:50)}},_createWrapper:function(e){var o=e._popupWrapper,i=e.domNode;if(!o){o=s.create("div",{"class":"dijitPopup",style:{display:"none"},role:"region","aria-label":e["aria-label"]||e.label||e.name||e.id},e.ownerDocumentBody),o.appendChild(i);var n=i.style;n.display="",n.visibility="",n.position="",n.top="0px",e._popupWrapper=o,t.after(e,"destroy",g,!0),"ontouchend"in document&&u(o,"touchend",function(e){/^(input|button|textarea)$/i.test(e.target.tagName)||e.preventDefault()}),o.dojoClick=!0}return o},moveOffScreen:function(e){var t=this._createWrapper(e),o=a.isBodyLtr(e.ownerDocument),i={visibility:"hidden",top:"-9999px",display:""};return i[o?"left":"right"]="-9999px",i[o?"right":"left"]="auto",r.set(t,i),t},hide:function(e){var t=this._createWrapper(e);r.set(t,{display:"none",height:"auto",overflowY:"visible",border:""});var o=e.domNode;"_originalStyle"in o&&(o.style.cssText=o._originalStyle)},getTopPopup:function(){for(var e=this._stack,t=e.length-1;t>0&&e[t].parent===e[t-1].widget;t--);return e[t]},open:function(e){for(var t=this._stack,o=e.popup,s=o.domNode,_=e.orient||["below","below-alt","above","above-alt"],g=e.parent?e.parent.isLeftToRight():a.isBodyLtr(o.ownerDocument),m=e.around,v=e.around&&e.around.id?e.around.id+"_dropdown":"popup_"+this._idGen++;t.length&&(!e.parent||!i.isDescendant(e.parent.domNode,t[t.length-1].widget.domNode));)this.close(t[t.length-1].widget);var b=this.moveOffScreen(o);o.startup&&!o._started&&o.startup();var y,j=a.position(s);if("maxHeight"in e&&-1!=e.maxHeight)y=e.maxHeight||1/0;else{var C=p.getEffectiveBox(this.ownerDocument),w=m?a.position(m,!1):{y:e.y-(e.padding||0),h:2*(e.padding||0)};y=Math.floor(Math.max(w.y,C.h-(w.y+w.h)))}if(j.h>y){var x=r.getComputedStyle(s),k=x.borderLeftWidth+" "+x.borderLeftStyle+" "+x.borderLeftColor;r.set(b,{overflowY:"scroll",height:y+"px",border:k}),s._originalStyle=s.style.cssText,s.style.border="none"}n.set(b,{id:v,style:{zIndex:this._beginZIndex+t.length},"class":"dijitPopup "+(o.baseClass||o["class"]||"").split(" ")[0]+"Popup",dijitPopupParent:e.parent?e.parent.id:""}),0==t.length&&m&&(this._firstAroundNode=m,this._firstAroundPosition=a.position(m,!0),this._aroundMoveListener=setTimeout(h.hitch(this,"_repositionAll"),50)),d("config-bgIframe")&&!o.bgIframe&&(o.bgIframe=new f(b));var T=o.orient?h.hitch(o,"orient"):null,M=m?l.around(b,m,_,g,T):l.at(b,e,"R"==_?["TR","BR","TL","BL"]:["TL","BL","TR","BR"],e.padding,T);b.style.visibility="visible",s.style.visibility="visible";var N=[];return N.push(u(b,"keydown",h.hitch(this,function(t){if(t.keyCode==c.ESCAPE&&e.onCancel)t.stopPropagation(),t.preventDefault(),e.onCancel();else if(t.keyCode==c.TAB){t.stopPropagation(),t.preventDefault();var o=this.getTopPopup();o&&o.onCancel&&o.onCancel()}}))),o.onCancel&&e.onCancel&&N.push(o.on("cancel",e.onCancel)),N.push(o.on(o.onExecute?"execute":"change",h.hitch(this,function(){var e=this.getTopPopup();e&&e.onExecute&&e.onExecute()}))),t.push({widget:o,wrapper:b,parent:e.parent,onExecute:e.onExecute,onCancel:e.onCancel,onClose:e.onClose,handlers:N}),o.onOpen&&o.onOpen(M),M},close:function(t){for(var o=this._stack;t&&e.some(o,function(e){return e.widget==t})||!t&&o.length;){var i=o.pop(),n=i.widget,s=i.onClose;n.bgIframe&&(n.bgIframe.destroy(),delete n.bgIframe),n.onClose&&n.onClose();for(var a;a=i.handlers.pop();)a.remove();n&&n.domNode&&this.hide(n),s&&s()}0==o.length&&this._aroundMoveListener&&(clearTimeout(this._aroundMoveListener),this._firstAroundNode=this._firstAroundPosition=this._aroundMoveListener=null)}});return _.popup=new m});//# sourceMappingURL=popup.js.map