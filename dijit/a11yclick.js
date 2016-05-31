//>>built
define("dijit/a11yclick",["dojo/keys","dojo/mouse","dojo/on","dojo/touch"],function(t,e,i,o){function n(e){if((e.keyCode===t.ENTER||e.keyCode===t.SPACE)&&!/input|button|textarea/i.test(e.target.nodeName))for(var i=e.target;i;i=i.parentNode)if(i.dojoClick)return!0}var s;i(document,"keydown",function(t){n(t)?(s=t.target,t.preventDefault()):s=null}),i(document,"keyup",function(t){n(t)&&t.target==s&&(s=null,i.emit(t.target,"click",{cancelable:!0,bubbles:!0,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,altKey:t.altKey,_origType:t.type}))});var a=function(t,e){return t.dojoClick=!0,i(t,"click",e)};return a.click=a,a.press=function(n,s){var a=i(n,o.press,function(t){("mousedown"!=t.type||e.isLeft(t))&&s(t)}),r=i(n,"keydown",function(e){e.keyCode!==t.ENTER&&e.keyCode!==t.SPACE||s(e)});return{remove:function(){a.remove(),r.remove()}}},a.release=function(n,s){var a=i(n,o.release,function(t){("mouseup"!=t.type||e.isLeft(t))&&s(t)}),r=i(n,"keyup",function(e){e.keyCode!==t.ENTER&&e.keyCode!==t.SPACE||s(e)});return{remove:function(){a.remove(),r.remove()}}},a.move=o.move,a});//# sourceMappingURL=a11yclick.js.map