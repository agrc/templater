//>>built
define("dijit/_base/popup",["dojo/dom-class","dojo/_base/window","../popup","../BackgroundIframe"],function(t,e,i){var o=i._createWrapper;i._createWrapper=function(i){return i.declaredClass||(i={_popupWrapper:i.parentNode&&t.contains(i.parentNode,"dijitPopup")?i.parentNode:null,domNode:i,destroy:function(){},ownerDocument:i.ownerDocument,ownerDocumentBody:e.body(i.ownerDocument)}),o.call(this,i)};var n=i.open;return i.open=function(t){if(t.orient&&"string"!=typeof t.orient&&!("length"in t.orient)){var e=[];for(var i in t.orient)e.push({aroundCorner:i,corner:t.orient[i]});t.orient=e}return n.call(this,t)},i});//# sourceMappingURL=popup.js.map