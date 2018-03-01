//>>built
define("dojox/drawing/manager/keys",["dojo","../util/common"],function(e,t){var a=!1,i=!0,r="abcdefghijklmnopqrstuvwxyz",o={arrowIncrement:1,arrowShiftIncrement:10,shift:!1,ctrl:!1,alt:!1,cmmd:!1,meta:!1,onDelete:function(e){},onEsc:function(e){},onEnter:function(e){},onArrow:function(e){},onKeyDown:function(e){},onKeyUp:function(e){},listeners:[],register:function(e){var a=t.uid("listener");this.listeners.push({handle:a,scope:e.scope||window,callback:e.callback,keyCode:e.keyCode})},_getLetter:function(e){return!e.meta&&e.keyCode>=65&&e.keyCode<=90?r.charAt(e.keyCode-65):null},_mixin:function(e){return e.meta=this.meta,e.shift=this.shift,e.alt=this.alt,e.cmmd=this.cmmd,e.ctrl=this.ctrl,e.letter=this._getLetter(e),e},editMode:function(e){a=e},enable:function(e){i=e},scanForFields:function(){this._fieldCons&&e.forEach(this._fieldCons,e.disconnect,e),this._fieldCons=[],e.query("input").forEach(function(t){var a=e.connect(t,"focus",this,function(e){this.enable(!1)}),i=e.connect(t,"blur",this,function(e){this.enable(!0)});this._fieldCons.push(a),this._fieldCons.push(i)},this)},init:function(){setTimeout(e.hitch(this,"scanForFields"),500),e.connect(document,"blur",this,function(e){this.meta=this.shift=this.ctrl=this.cmmd=this.alt=!1}),e.connect(document,"keydown",this,function(t){i&&(16==t.keyCode&&(this.shift=!0),17==t.keyCode&&(this.ctrl=!0),18==t.keyCode&&(this.alt=!0),224==t.keyCode&&(this.cmmd=!0),this.meta=this.shift||this.ctrl||this.cmmd||this.alt,a||(this.onKeyDown(this._mixin(t)),8!=t.keyCode&&46!=t.keyCode||e.stopEvent(t)))}),e.connect(document,"keyup",this,function(t){if(i){var r=!1;16==t.keyCode&&(this.shift=!1),17==t.keyCode&&(this.ctrl=!1),18==t.keyCode&&(this.alt=!1),224==t.keyCode&&(this.cmmd=!1),this.meta=this.shift||this.ctrl||this.cmmd||this.alt,!a&&this.onKeyUp(this._mixin(t)),13==t.keyCode&&(this.onEnter(t),r=!0),27==t.keyCode&&(this.onEsc(t),r=!0),8!=t.keyCode&&46!=t.keyCode||(this.onDelete(t),r=!0),r&&!a&&e.stopEvent(t)}}),e.connect(document,"keypress",this,function(t){if(i){var r=this.shift?this.arrowIncrement*this.arrowShiftIncrement:this.arrowIncrement,o=t.alt||this.cmmd,n=0,d=0;32!=t.keyCode||a||e.stopEvent(t),37!=t.keyCode||o||(n=-r),38!=t.keyCode||o||(d=-r),39!=t.keyCode||o||(n=r),40!=t.keyCode||o||(d=r),(n||d)&&(t.x=n,t.y=d,t.shift=this.shift,a||(this.onArrow(t),e.stopEvent(t)))}})}};return e.addOnLoad(o,"init"),o});//# sourceMappingURL=keys.js.map