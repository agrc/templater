//>>built
define("dojo/dom-construct",["exports","./_base/kernel","./sniff","./_base/window","./dom","./dom-attr"],function(e,t,i,n,o,r){function s(e,t){var i=t.parentNode;i&&i.insertBefore(e,t)}function a(e,t){var i=t.parentNode;i&&(i.lastChild==t?i.appendChild(e):i.insertBefore(e,t.nextSibling))}function d(e){if("innerHTML"in e)try{return void(e.innerHTML="")}catch(t){}for(var i;i=e.lastChild;)e.removeChild(i)}function l(e,t){e.firstChild&&d(e),t&&(i("ie")&&t.canHaveChildren&&"removeNode"in e?e.removeNode(!1):t.removeChild(e))}var h={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},c=/<\s*([\w\:]+)/,u={},f=0,p="__"+t._scopeName+"ToDomId";for(var g in h)if(h.hasOwnProperty(g)){var m=h[g];m.pre="option"==g?'<select multiple="multiple">':"<"+m.join("><")+">",m.post="</"+m.reverse().join("></")+">"}var b;i("ie")<=8&&(b=function(e){e.__dojo_html5_tested="yes";var t=v("div",{innerHTML:"<nav>a</nav>",style:{visibility:"hidden"}},e.body);1!==t.childNodes.length&&"abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g,function(t){e.createElement(t)}),_(t)}),e.toDom=function(e,t){t=t||n.doc;var o=t[p];o||(t[p]=o=++f+"",u[o]=t.createElement("div")),i("ie")<=8&&!t.__dojo_html5_tested&&t.body&&b(t),e+="";var r,s,a,d,l=e.match(c),g=l?l[1].toLowerCase():"",m=u[o];if(l&&h[g])for(r=h[g],m.innerHTML=r.pre+e+r.post,s=r.length;s;--s)m=m.firstChild;else m.innerHTML=e;if(1==m.childNodes.length)return m.removeChild(m.firstChild);for(d=t.createDocumentFragment();a=m.firstChild;)d.appendChild(a);return d},e.place=function(t,i,n){if(i=o.byId(i),"string"==typeof t&&(t=/^\s*</.test(t)?e.toDom(t,i.ownerDocument):o.byId(t)),"number"==typeof n){var r=i.childNodes;!r.length||r.length<=n?i.appendChild(t):s(t,r[0>n?0:n])}else switch(n){case"before":s(t,i);break;case"after":a(t,i);break;case"replace":i.parentNode.replaceChild(t,i);break;case"only":e.empty(i),i.appendChild(t);break;case"first":if(i.firstChild){s(t,i.firstChild);break}default:i.appendChild(t)}return t};var v=e.create=function(t,i,s,a){var d=n.doc;return s&&(s=o.byId(s),d=s.ownerDocument),"string"==typeof t&&(t=d.createElement(t)),i&&r.set(t,i),s&&e.place(t,s,a),t};e.empty=function(e){d(o.byId(e))};var _=e.destroy=function(e){e=o.byId(e),e&&l(e,e.parentNode)}});//# sourceMappingURL=dom-construct.js.map