//>>built
define("dojox/xml/DomParser",["dojo/_base/kernel","dojo/_base/array"],function(e){return e.getObject("xml",!0,dojox),dojox.xml.DomParser=new function(){function t(){return new function(){var e={};this.nodeType=f.DOCUMENT,this.nodeName="#document",this.namespaces={},this._nsPaths={},this.childNodes=[],this.documentElement=null,this._add=function(t){"undefined"!=typeof t.id&&(e[t.id]=t)},this._remove=function(t){e[t]&&delete e[t]},this.byId=this.getElementById=function(t){return e[t]},this.byName=this.getElementsByTagName=i,this.byNameNS=this.getElementsByTagNameNS=r,this.childrenByName=o,this.childrenByNameNS=a}}function i(t){function i(t,r,o){e.forEach(t.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==r?o.push(e):e.nodeName==r&&o.push(e),i(e,r,o))})}var r=[];return i(this,t,r),r}function r(t,i){function r(t,i,o,a){e.forEach(t.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==i&&e.ownerDocument._nsPaths[o]==e.namespace?a.push(e):e.localName==i&&e.ownerDocument._nsPaths[o]==e.namespace&&a.push(e),r(e,i,o,a))})}i||(i=C);var o=[];return r(this,t,i,o),o}function o(t){var i=[];return e.forEach(this.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==t?i.push(e):e.nodeName==t&&i.push(e))}),i}function a(t,i){var r=[];return e.forEach(this.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==t&&e.ownerDocument._nsPaths[i]==e.namespace?r.push(e):e.localName==t&&e.ownerDocument._nsPaths[i]==e.namespace&&r.push(e))}),r}function n(e){return{nodeType:f.TEXT,nodeName:"#text",nodeValue:e.replace(_," ").replace(x,">").replace(w,"<").replace(M,"'").replace(j,'"').replace(k,"&")}}function s(e){for(var t=0;t<this.attributes.length;t++)if(this.attributes[t].nodeName==e)return this.attributes[t].nodeValue;return null}function l(e,t){for(var i=0;i<this.attributes.length;i++)if(this.ownerDocument._nsPaths[t]==this.attributes[i].namespace&&this.attributes[i].localName==e)return this.attributes[i].nodeValue;return null}function d(e,t){for(var i=null,r=0;r<this.attributes.length;r++)if(this.attributes[r].nodeName==e){i=this.attributes[r].nodeValue,this.attributes[r].nodeValue=t;break}"id"==e&&(null!=i&&this.ownerDocument._remove(i),this.ownerDocument._add(this))}function u(e,t,i){for(var r=0;r<this.attributes.length;r++)if(this.ownerDocument._nsPaths[i]==this.attributes[r].namespace&&this.attributes[r].localName==e)return void(this.attributes[r].nodeValue=t)}function c(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t>0)return e.childNodes[t-1];return null}function h(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t+1<e.childNodes.length)return e.childNodes[t+1];return null}var f={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9},m=/<([^>\/\s+]*)([^>]*)>([^<]*)/g,p=/([^=]*)=(("([^"]*)")|('([^']*)'))/g,g=/<!ENTITY\s+([^"]*)\s+"([^"]*)">/g,v=/<!\[CDATA\[([\u0001-\uFFFF]*?)\]\]>/g,y=/<!--([\u0001-\uFFFF]*?)-->/g,b=/^\s+|\s+$/g,_=/\s+/g,x=/\&gt;/g,w=/\&lt;/g,j=/\&quot;/g,M=/\&apos;/g,k=/\&amp;/g,C="_def_";this.parse=function(e){var T=t();if(null==e)return T;if(0==e.length)return T;if(e.indexOf("<!ENTITY")>0){var S,I=[];if(g.test(e)){for(g.lastIndex=0;null!=(S=g.exec(e));)I.push({entity:"&"+S[1].replace(b,"")+";",expression:S[2]});for(var A=0;A<I.length;A++)e=e.replace(new RegExp(I[A].entity,"g"),I[A].expression)}}for(var N,E=[];null!=(N=v.exec(e));)E.push(N[1]);for(var A=0;A<E.length;A++)e=e.replace(E[A],A);for(var F,L=[];null!=(F=y.exec(e));)L.push(F[1]);for(A=0;A<L.length;A++)e=e.replace(L[A],A);for(var P,z=T;null!=(P=m.exec(e));)if("/"==P[2].charAt(0)&&P[2].replace(b,"").length>1){z.parentNode&&(z=z.parentNode);var D=(P[3]||"").replace(b,"");D.length>0&&z.childNodes.push(n(D))}else if(P[1].length>0)if("?"==P[1].charAt(0)){var R=P[1].substr(1),B=P[2].substr(0,P[2].length-2);z.childNodes.push({nodeType:f.PROCESSING_INSTRUCTION,nodeName:R,nodeValue:B})}else if("!"==P[1].charAt(0)){if(0==P[1].indexOf("![CDATA[")){var H=parseInt(P[1].replace("![CDATA[","").replace("]]",""));z.childNodes.push({nodeType:f.CDATA_SECTION,nodeName:"#cdata-section",nodeValue:E[H]})}else if("!--"==P[1].substr(0,3)){var H=parseInt(P[1].replace("!--","").replace("--",""));z.childNodes.push({nodeType:f.COMMENT,nodeName:"#comment",nodeValue:L[H]})}}else{var R=P[1].replace(b,""),G={nodeType:f.ELEMENT,nodeName:R,localName:R,namespace:C,ownerDocument:T,attributes:[],parentNode:null,childNodes:[]};if(R.indexOf(":")>-1){var O=R.split(":");G.namespace=O[0],G.localName=O[1]}G.byName=G.getElementsByTagName=i,G.byNameNS=G.getElementsByTagNameNS=r,G.childrenByName=o,G.childrenByNameNS=a,G.getAttribute=s,G.getAttributeNS=l,G.setAttribute=d,G.setAttributeNS=u,G.previous=G.previousSibling=c,G.next=G.nextSibling=h;for(var q;null!=(q=p.exec(P[2]));)if(q.length>0){var R=q[1].replace(b,""),H=(q[4]||q[6]||"").replace(_," ").replace(x,">").replace(w,"<").replace(M,"'").replace(j,'"').replace(k,"&");if(0==R.indexOf("xmlns"))if(R.indexOf(":")>0){var V=R.split(":");T.namespaces[V[1]]=H,T._nsPaths[H]=V[1]}else T.namespaces[C]=H,T._nsPaths[H]=C;else{var W=R,V=C;if(R.indexOf(":")>0){var O=R.split(":");W=O[1],V=O[0]}G.attributes.push({nodeType:f.ATTRIBUTE,nodeName:R,localName:W,namespace:V,nodeValue:H}),"id"==W&&(G.id=H)}}T._add(G),z&&(z.childNodes.push(G),G.parentNode=z,"/"!=P[2].charAt(P[2].length-1)&&(z=G));var D=P[3];D.length>0&&z.childNodes.push(n(D))}for(var A=0;A<T.childNodes.length;A++){var Y=T.childNodes[A];if(Y.nodeType==f.ELEMENT){T.documentElement=Y;break}}return T}},dojox.xml.DomParser});//# sourceMappingURL=DomParser.js.map