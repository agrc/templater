//>>built
define("dojo/dom-form",["./_base/lang","./dom","./io-query","./json"],function(e,t,i,n){function o(t,i,n){if(null!==n){var o=t[i];"string"==typeof o?t[i]=[o,n]:e.isArray(o)?o.push(n):t[i]=n}}var r="file|submit|image|reset|button",s={fieldToObject:function(e){var i=null;if(e=t.byId(e)){var n=e.name,o=(e.type||"").toLowerCase();if(n&&o&&!e.disabled)if("radio"==o||"checkbox"==o)e.checked&&(i=e.value);else if(e.multiple){i=[];for(var r=[e.firstChild];r.length;)for(var s=r.pop();s;s=s.nextSibling){if(1!=s.nodeType||"option"!=s.tagName.toLowerCase()){s.nextSibling&&r.push(s.nextSibling),s.firstChild&&r.push(s.firstChild);break}s.selected&&i.push(s.value)}}else i=e.value}return i},toObject:function(e){for(var i={},n=t.byId(e).elements,a=0,d=n.length;d>a;++a){var l=n[a],c=l.name,u=(l.type||"").toLowerCase();c&&u&&r.indexOf(u)<0&&!l.disabled&&(o(i,c,s.fieldToObject(l)),"image"==u&&(i[c+".x"]=i[c+".y"]=i[c].x=i[c].y=0))}return i},toQuery:function(e){return i.objectToQuery(s.toObject(e))},toJson:function(e,t){return n.stringify(s.toObject(e),null,t?4:0)}};return s});//# sourceMappingURL=dom-form.js.map