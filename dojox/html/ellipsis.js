//>>built
define("dojox/html/ellipsis",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/colors"],function(e){if(e.isFF<7){var t=1;"dojoxFFEllipsisDelay"in e.config&&(t=Number(e.config.dojoxFFEllipsisDelay),isNaN(t)&&(t=1));try{var i=function(){var e="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",t=document.createElementNS(e,"window"),i=document.createElementNS(e,"description");return i.setAttribute("crop","end"),t.appendChild(i),function(e){var i=t.cloneNode(!0);i.firstChild.setAttribute("value",e.textContent),e.innerHTML="",e.appendChild(i)}}()}catch(e){}var a,r,n,o=e.create,s=e.doc,l=e.place,d=o("iframe",{className:"dojoxEllipsisIFrame",src:"javascript:'<html><head><script>if(\"loadFirebugConsole\" in window){window.loadFirebugConsole();}<\/script></head><body></body></html>'",style:{display:"none"}}),u=function(e,t){if(!e.collapsed)if(t>0)do{u(e),t--}while(t);else if(3==e.endContainer.nodeType&&e.endOffset>0)e.setEnd(e.endContainer,e.endOffset-1);else{if(3==e.endContainer.nodeType)return e.setEndBefore(e.endContainer),void u(e);if(!(e.endOffset&&e.endContainer.childNodes.length>=e.endOffset))return e.setEndBefore(e.endContainer),void u(e);var i=e.endContainer.childNodes[e.endOffset-1];if(3!=i.nodeType)return i.childNodes.length?(e.setEnd(i,i.childNodes.length),void u(e)):(e.setEndBefore(i),void u(e));e.setEnd(i,i.length-1)}},c=function(e){var t=o("div",{className:"dojoxEllipsisContainer"}),i=o("div",{className:"dojoxEllipsisShown",style:{display:"none"}});e.parentNode.replaceChild(t,e),t.appendChild(e),t.appendChild(i);var a=d.cloneNode(!0),r=e.style,n=i.style,c=function(){if(r.display="",n.display="none",!(e.scrollWidth<=e.offsetWidth)){var t=s.createRange();t.selectNodeContents(e),r.display="none",n.display="";var a=!1;do{var o=1;l(t.cloneContents(),i,"only");var d=i.scrollWidth,c=i.offsetWidth;a=d<=c;var h=1-1*c/d;h>0&&(o=Math.max(Math.round(i.textContent.length*h)-1,1)),u(t,o)}while(!t.collapsed&&!a)}};a.onload=function(){a.contentWindow.onresize=c,c()},t.appendChild(a)},h=e.hasClass,m=e.doc;m.querySelectorAll?(a=m,r="querySelectorAll",n=".dojoxEllipsis"):m.getElementsByClassName?(a=m,r="getElementsByClassName",n="dojoxEllipsis"):(a=e,r="query",n=".dojoxEllipsis"),fx=function(){e.forEach(a[r].apply(a,[n]),function(e){e&&!e._djx_ellipsis_done&&(e._djx_ellipsis_done=!0,i&&e.textContent==e.innerHTML&&!h(e,"dojoxEllipsisSelectable")?i(e):c(e))})},e.addOnLoad(function(){var i=null,a=null,r=function(){a&&(e.disconnect(a),a=null),i&&clearTimeout(i),i=setTimeout(function(){i=null,fx(),a=e.connect(e.body(),"DOMSubtreeModified",r)},t)};r()})}});//# sourceMappingURL=ellipsis.js.map