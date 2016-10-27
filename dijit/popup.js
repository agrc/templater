//>>built
define("dijit/popup",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","./place","./BackgroundIframe","./Viewport","./main","dojo/touch"],function(e,t,i,o,n,s,a,r,d,l,c,h,u,p,f,_){function g(){this._popupWrapper&&(s.destroy(this._popupWrapper),delete this._popupWrapper)}var v=i(null,{_stack:[],_beginZIndex:1e3,_idGen:1,_repositionAll:function(){if(this._firstAroundNode){var e=this._firstAroundPosition,t=a.position(this._firstAroundNode,!0),i=t.x-e.x,o=t.y-e.y;if(i||o){this._firstAroundPosition=t;for(var n=0;n<this._stack.length;n++){var s=this._stack[n].wrapper.style;s.top=parseFloat(s.top)+o+"px","auto"==s.right?s.left=parseFloat(s.left)+i+"px":s.right=parseFloat(s.right)-i+"px"}}this._aroundMoveListener=setTimeout(c.hitch(this,"_repositionAll"),i||o?10:50)}},_createWrapper:function(e){var i=e._popupWrapper,o=e.domNode;if(!i){i=s.create("div",{"class":"dijitPopup",style:{display:"none"},role:"region","aria-label":e["aria-label"]||e.label||e.name||e.id},e.ownerDocumentBody),i.appendChild(o);var n=o.style;n.display="",n.visibility="",n.position="",n.top="0px",e._popupWrapper=i,t.after(e,"destroy",g,!0),"ontouchend"in document&&h(i,"touchend",function(e){/^(input|button|textarea)$/i.test(e.target.tagName)||e.preventDefault()}),i.dojoClick=!0}return i},moveOffScreen:function(e){var t=this._createWrapper(e),i=a.isBodyLtr(e.ownerDocument),o={visibility:"hidden",top:"-9999px",display:""};return o[i?"left":"right"]="-9999px",o[i?"right":"left"]="auto",r.set(t,o),t},hide:function(e){var t=this._createWrapper(e);r.set(t,{display:"none",height:"auto",overflowY:"visible",border:""});var i=e.domNode;"_originalStyle"in i&&(i.style.cssText=i._originalStyle)},getTopPopup:function(){for(var e=this._stack,t=e.length-1;t>0&&e[t].parent===e[t-1].widget;t--);return e[t]},open:function(e){for(var t=this._stack,i=e.popup,s=i.domNode,_=e.orient||["below","below-alt","above","above-alt"],g=e.parent?e.parent.isLeftToRight():a.isBodyLtr(i.ownerDocument),v=e.around,m=e.around&&e.around.id?e.around.id+"_dropdown":"popup_"+this._idGen++;t.length&&(!e.parent||!o.isDescendant(e.parent.domNode,t[t.length-1].widget.domNode));)this.close(t[t.length-1].widget);var b=this.moveOffScreen(i);i.startup&&!i._started&&i.startup();var y,j=a.position(s);if("maxHeight"in e&&-1!=e.maxHeight)y=e.maxHeight||1/0;else{var C=f.getEffectiveBox(this.ownerDocument),w=v?a.position(v,!1):{y:e.y-(e.padding||0),h:2*(e.padding||0)};y=Math.floor(Math.max(w.y,C.h-(w.y+w.h)))}if(j.h>y){var x=r.getComputedStyle(s),N=x.borderLeftWidth+" "+x.borderLeftStyle+" "+x.borderLeftColor;r.set(b,{overflowY:"scroll",height:y+"px",border:N}),s._originalStyle=s.style.cssText,s.style.border="none"}n.set(b,{id:m,style:{zIndex:this._beginZIndex+t.length},"class":"dijitPopup "+(i.baseClass||i["class"]||"").split(" ")[0]+"Popup",dijitPopupParent:e.parent?e.parent.id:""}),0==t.length&&v&&(this._firstAroundNode=v,this._firstAroundPosition=a.position(v,!0),this._aroundMoveListener=setTimeout(c.hitch(this,"_repositionAll"),50)),d("config-bgIframe")&&!i.bgIframe&&(i.bgIframe=new p(b));var T=i.orient?c.hitch(i,"orient"):null,k=v?u.around(b,v,_,g,T):u.at(b,e,"R"==_?["TR","BR","TL","BL"]:["TL","BL","TR","BR"],e.padding,T);b.style.visibility="visible",s.style.visibility="visible";var D=[];return D.push(h(b,"keydown",c.hitch(this,function(t){if(t.keyCode==l.ESCAPE&&e.onCancel)t.stopPropagation(),t.preventDefault(),e.onCancel();else if(t.keyCode==l.TAB){t.stopPropagation(),t.preventDefault();var i=this.getTopPopup();i&&i.onCancel&&i.onCancel()}}))),i.onCancel&&e.onCancel&&D.push(i.on("cancel",e.onCancel)),D.push(i.on(i.onExecute?"execute":"change",c.hitch(this,function(){var e=this.getTopPopup();e&&e.onExecute&&e.onExecute()}))),t.push({widget:i,wrapper:b,parent:e.parent,onExecute:e.onExecute,onCancel:e.onCancel,onClose:e.onClose,handlers:D}),i.onOpen&&i.onOpen(k),k},close:function(t){for(var i=this._stack;t&&e.some(i,function(e){return e.widget==t})||!t&&i.length;){var o=i.pop(),n=o.widget,s=o.onClose;n.bgIframe&&(n.bgIframe.destroy(),delete n.bgIframe),n.onClose&&n.onClose();for(var a;a=o.handlers.pop();)a.remove();n&&n.domNode&&this.hide(n),s&&s()}0==i.length&&this._aroundMoveListener&&(clearTimeout(this._aroundMoveListener),this._firstAroundNode=this._firstAroundPosition=this._aroundMoveListener=null)}});return _.popup=new v});//# sourceMappingURL=popup.js.map