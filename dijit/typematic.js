//>>built
define("dijit/typematic",["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/on","dojo/sniff","./main"],function(t,e,i,o,n,s){var a=s.typematic={_fireEventAndReload:function(){this._timer=null,this._callback(++this._count,this._node,this._evt),this._currentTimeout=Math.max(this._currentTimeout<0?this._initialDelay:this._subsequentDelay>1?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay),this._minDelay),this._timer=setTimeout(i.hitch(this,"_fireEventAndReload"),this._currentTimeout)},trigger:function(t,e,o,n,s,a,d,r){if(s!=this._obj){this.stop(),this._initialDelay=d||500,this._subsequentDelay=a||.9,this._minDelay=r||10,this._obj=s,this._node=o,this._currentTimeout=-1,this._count=-1,this._callback=i.hitch(e,n),this._evt={faux:!0};for(var l in t)if("layerX"!=l&&"layerY"!=l){var h=t[l];"function"!=typeof h&&"undefined"!=typeof h&&(this._evt[l]=h)}this._fireEventAndReload()}},stop:function(){this._timer&&(clearTimeout(this._timer),this._timer=null),this._obj&&(this._callback(-1,this._node,this._evt),this._obj=null)},addKeyListener:function(n,s,d,r,l,h,c){var u="keyCode"in s?"keydown":"charCode"in s?"keypress":e._keypress,p="keyCode"in s?"keyCode":"charCode"in s?"charCode":"charOrCode",_=[o(n,u,i.hitch(this,function(t){t[p]!=s[p]||void 0!==s.ctrlKey&&s.ctrlKey!=t.ctrlKey||void 0!==s.altKey&&s.altKey!=t.altKey||void 0!==s.metaKey&&s.metaKey!=(t.metaKey||!1)||void 0!==s.shiftKey&&s.shiftKey!=t.shiftKey?a._obj==s&&a.stop():(t.stopPropagation(),t.preventDefault(),a.trigger(t,d,n,r,s,l,h,c))})),o(n,"keyup",i.hitch(this,function(){a._obj==s&&a.stop()}))];return{remove:function(){t.forEach(_,function(t){t.remove()})}}},addMouseListener:function(e,s,d,r,l,h){var c=[o(e,"mousedown",i.hitch(this,function(t){t.preventDefault(),a.trigger(t,s,e,d,e,r,l,h)})),o(e,"mouseup",i.hitch(this,function(t){this._obj&&t.preventDefault(),a.stop()})),o(e,"mouseout",i.hitch(this,function(t){this._obj&&t.preventDefault(),a.stop()})),o(e,"dblclick",i.hitch(this,function(t){t.preventDefault(),n("ie")<9&&(a.trigger(t,s,e,d,e,r,l,h),setTimeout(i.hitch(this,a.stop),50))}))];return{remove:function(){t.forEach(c,function(t){t.remove()})}}},addListener:function(e,i,o,n,s,a,d,r){var l=[this.addKeyListener(i,o,n,s,a,d,r),this.addMouseListener(e,n,s,a,d,r)];return{remove:function(){t.forEach(l,function(t){t.remove()})}}}};return a});//# sourceMappingURL=typematic.js.map