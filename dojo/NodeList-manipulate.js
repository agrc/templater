//>>built
define("dojo/NodeList-manipulate",["./query","./_base/lang","./_base/array","./dom-construct","./dom-attr","./NodeList-dom"],function(e,t,i,n,o){function s(e){for(;e.childNodes[0]&&1==e.childNodes[0].nodeType;)e=e.childNodes[0];return e}function r(e,t){return"string"==typeof e?(e=n.toDom(e,t&&t.ownerDocument),11==e.nodeType&&(e=e.childNodes[0])):1==e.nodeType&&e.parentNode&&(e=e.cloneNode(!1)),e}var a=e.NodeList;return t.extend(a,{_placeMultiple:function(t,i){for(var o="string"==typeof t||t.nodeType?e(t):t,s=[],r=0;r<o.length;r++)for(var a,d=o[r],l=this.length,h=l-1;a=this[h];h--)r>0&&(a=this._cloneNode(a),s.unshift(a)),h==l-1?n.place(a,d,i):d.parentNode.insertBefore(a,d),d=a;return s.length&&(s.unshift(0),s.unshift(this.length-1),Array.prototype.splice.apply(this,s)),this},innerHTML:function(e){return arguments.length?this.addContent(e,"only"):this[0].innerHTML},text:function(e){if(arguments.length){for(var t,i=0;t=this[i];i++)1==t.nodeType&&o.set(t,"textContent",e);return this}var n="";for(i=0;t=this[i];i++)n+=o.get(t,"textContent");return n},val:function(e){if(arguments.length){for(var n,o=t.isArray(e),s=0;n=this[s];s++){var r=n.nodeName.toUpperCase(),a=n.type,d=o?e[s]:e;if("SELECT"==r)for(var l=n.options,h=0;h<l.length;h++){var c=l[h];n.multiple?c.selected=-1!=i.indexOf(e,c.value):c.selected=c.value==d}else"checkbox"==a||"radio"==a?n.checked=n.value==d:n.value=d}return this}if((n=this[0])&&1==n.nodeType){if(e=n.value||"","SELECT"==n.nodeName.toUpperCase()&&n.multiple){for(e=[],l=n.options,h=0;h<l.length;h++)c=l[h],c.selected&&e.push(c.value);e.length||(e=null)}return e}},append:function(e){return this.addContent(e,"last")},appendTo:function(e){return this._placeMultiple(e,"last")},prepend:function(e){return this.addContent(e,"first")},prependTo:function(e){return this._placeMultiple(e,"first")},after:function(e){return this.addContent(e,"after")},insertAfter:function(e){return this._placeMultiple(e,"after")},before:function(e){return this.addContent(e,"before")},insertBefore:function(e){return this._placeMultiple(e,"before")},remove:a.prototype.orphan,wrap:function(e){if(this[0]){e=r(e,this[0]);for(var t,i=0;t=this[i];i++){var n=this._cloneNode(e);t.parentNode&&t.parentNode.replaceChild(n,t);s(n).appendChild(t)}}return this},wrapAll:function(e){if(this[0]){e=r(e,this[0]),this[0].parentNode.replaceChild(e,this[0]);for(var t,i=s(e),n=0;t=this[n];n++)i.appendChild(t)}return this},wrapInner:function(e){if(this[0]){e=r(e,this[0]);for(var i=0;i<this.length;i++){var n=this._cloneNode(e);this._wrap(t._toArray(this[i].childNodes),null,this._NodeListCtor).wrapAll(n)}}return this},replaceWith:function(e){e=this._normalize(e,this[0]);for(var t,i=0;t=this[i];i++)this._place(e,t,"before",i>0),t.parentNode.removeChild(t);return this},replaceAll:function(t){for(var i,n=e(t),o=this._normalize(this,this[0]),s=0;i=n[s];s++)this._place(o,i,"before",s>0),i.parentNode.removeChild(i);return this},clone:function(){for(var e=[],t=0;t<this.length;t++)e.push(this._cloneNode(this[t]));return this._wrap(e,this,this._NodeListCtor)}}),a.prototype.html||(a.prototype.html=a.prototype.innerHTML),a});//# sourceMappingURL=NodeList-manipulate.js.map