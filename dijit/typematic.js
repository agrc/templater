//>>built
define("dijit/typematic",["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/on","dojo/sniff","./main"],function(t,e,i,o,n,a){var s=a.typematic={_fireEventAndReload:function(){this._timer=null,this._callback(++this._count,this._node,this._evt),this._currentTimeout=Math.max(this._currentTimeout<0?this._initialDelay:this._subsequentDelay>1?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay),this._minDelay),this._timer=setTimeout(i.hitch(this,"_fireEventAndReload"),this._currentTimeout)},trigger:function(t,e,o,n,a,s,r,d){if(a!=this._obj){this.stop(),this._initialDelay=r||500,this._subsequentDelay=s||.9,this._minDelay=d||10,this._obj=a,this._node=o,this._currentTimeout=-1,this._count=-1,this._callback=i.hitch(e,n),this._evt={faux:!0};for(var l in t)if("layerX"!=l&&"layerY"!=l){var h=t[l];"function"!=typeof h&&void 0!==h&&(this._evt[l]=h)}this._fireEventAndReload()}},stop:function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._obj&&(this._callback(-1,this._node,this._evt),this._obj=null)},addKeyListener:function(n,a,r,d,l,h,c){var u="keyCode"in a?"keydown":"charCode"in a?"keypress":e._keypress,p="keyCode"in a?"keyCode":"charCode"in a?"charCode":"charOrCode",f=[o(n,u,i.hitch(this,function(t){t[p]!=a[p]||void 0!==a.ctrlKey&&a.ctrlKey!=t.ctrlKey||void 0!==a.altKey&&a.altKey!=t.altKey||void 0!==a.metaKey&&a.metaKey!=(t.metaKey||!1)||void 0!==a.shiftKey&&a.shiftKey!=t.shiftKey?s._obj==a&&s.stop():(t.stopPropagation(),t.preventDefault(),s.trigger(t,r,n,d,a,l,h,c))})),o(n,"keyup",i.hitch(this,function(){s._obj==a&&s.stop()}))];return{remove:function(){t.forEach(f,function(t){t.remove()})}}},addMouseListener:function(e,a,r,d,l,h){var c=[o(e,"mousedown",i.hitch(this,function(t){t.preventDefault(),s.trigger(t,a,e,r,e,d,l,h)})),o(e,"mouseup",i.hitch(this,function(t){this._obj&&t.preventDefault(),s.stop()})),o(e,"mouseout",i.hitch(this,function(t){this._obj&&t.preventDefault(),s.stop()})),o(e,"dblclick",i.hitch(this,function(t){t.preventDefault(),n("ie")<9&&(s.trigger(t,a,e,r,e,d,l,h),setTimeout(i.hitch(this,s.stop),50))}))];return{remove:function(){t.forEach(c,function(t){t.remove()})}}},addListener:function(e,i,o,n,a,s,r,d){var l=[this.addKeyListener(i,o,n,a,s,r,d),this.addMouseListener(e,n,a,s,r,d)];return{remove:function(){t.forEach(l,function(t){t.remove()})}}}};return s});//# sourceMappingURL=typematic.js.map