//>>built
define("dojox/xml/DomParser",["dojo/_base/kernel","dojo/_base/array"],function(e){return e.getObject("xml",!0,dojox),dojox.xml.DomParser=new function(){function t(){return new function(){var e={};this.nodeType=f.DOCUMENT,this.nodeName="#document",this.namespaces={},this._nsPaths={},this.childNodes=[],this.documentElement=null,this._add=function(t){"undefined"!=typeof t.id&&(e[t.id]=t)},this._remove=function(t){e[t]&&delete e[t]},this.byId=this.getElementById=function(t){return e[t]},this.byName=this.getElementsByTagName=i,this.byNameNS=this.getElementsByTagNameNS=o,this.childrenByName=r,this.childrenByNameNS=n}}function i(t){function i(t,o,r){e.forEach(t.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==o?r.push(e):e.nodeName==o&&r.push(e),i(e,o,r))})}var o=[];return i(this,t,o),o}function o(t,i){function o(t,i,r,n){e.forEach(t.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==i&&e.ownerDocument._nsPaths[r]==e.namespace?n.push(e):e.localName==i&&e.ownerDocument._nsPaths[r]==e.namespace&&n.push(e),o(e,i,r,n))})}i||(i=C);var r=[];return o(this,t,i,r),r}function r(t){var i=[];return e.forEach(this.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==t?i.push(e):e.nodeName==t&&i.push(e))}),i}function n(t,i){var o=[];return e.forEach(this.childNodes,function(e){e.nodeType==f.ELEMENT&&("*"==t&&e.ownerDocument._nsPaths[i]==e.namespace?o.push(e):e.localName==t&&e.ownerDocument._nsPaths[i]==e.namespace&&o.push(e))}),o}function a(e){return{nodeType:f.TEXT,nodeName:"#text",nodeValue:e.replace(_," ").replace(x,">").replace(M,"<").replace(w,"'").replace(j,'"').replace(k,"&")}}function s(e){for(var t=0;t<this.attributes.length;t++)if(this.attributes[t].nodeName==e)return this.attributes[t].nodeValue;return null}function d(e,t){for(var i=0;i<this.attributes.length;i++)if(this.ownerDocument._nsPaths[t]==this.attributes[i].namespace&&this.attributes[i].localName==e)return this.attributes[i].nodeValue;return null}function l(e,t){for(var i=null,o=0;o<this.attributes.length;o++)if(this.attributes[o].nodeName==e){i=this.attributes[o].nodeValue,this.attributes[o].nodeValue=t;break}"id"==e&&(null!=i&&this.ownerDocument._remove(i),this.ownerDocument._add(this))}function c(e,t,i){for(var o=0;o<this.attributes.length;o++)if(this.ownerDocument._nsPaths[i]==this.attributes[o].namespace&&this.attributes[o].localName==e)return void(this.attributes[o].nodeValue=t)}function u(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t>0)return e.childNodes[t-1];return null}function h(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t+1<e.childNodes.length)return e.childNodes[t+1];return null}var f={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9},m=/<([^>\/\s+]*)([^>]*)>([^<]*)/g,p=/([^=]*)=(("([^"]*)")|('([^']*)'))/g,g=/<!ENTITY\s+([^"]*)\s+"([^"]*)">/g,v=/<!\[CDATA\[([\u0001-\uFFFF]*?)\]\]>/g,y=/<!--([\u0001-\uFFFF]*?)-->/g,b=/^\s+|\s+$/g,_=/\s+/g,x=/\&gt;/g,M=/\&lt;/g,j=/\&quot;/g,w=/\&apos;/g,k=/\&amp;/g,C="_def_";this.parse=function(e){var I=t();if(null==e)return I;if(0==e.length)return I;if(e.indexOf("<!ENTITY")>0){var T,S=[];if(g.test(e)){for(g.lastIndex=0;null!=(T=g.exec(e));)S.push({entity:"&"+T[1].replace(b,"")+";",expression:T[2]});for(var N=0;N<S.length;N++)e=e.replace(new RegExp(S[N].entity,"g"),S[N].expression)}}for(var A,F=[];null!=(A=v.exec(e));)F.push(A[1]);for(var N=0;N<F.length;N++)e=e.replace(F[N],N);for(var E,D=[];null!=(E=y.exec(e));)D.push(E[1]);for(N=0;N<D.length;N++)e=e.replace(D[N],N);for(var P,z=I;null!=(P=m.exec(e));)if("/"==P[2].charAt(0)&&P[2].replace(b,"").length>1){z.parentNode&&(z=z.parentNode);var L=(P[3]||"").replace(b,"");L.length>0&&z.childNodes.push(a(L))}else if(P[1].length>0)if("?"==P[1].charAt(0)){var R=P[1].substr(1),B=P[2].substr(0,P[2].length-2);z.childNodes.push({nodeType:f.PROCESSING_INSTRUCTION,nodeName:R,nodeValue:B})}else if("!"==P[1].charAt(0)){if(0==P[1].indexOf("![CDATA[")){var H=parseInt(P[1].replace("![CDATA[","").replace("]]",""));z.childNodes.push({nodeType:f.CDATA_SECTION,nodeName:"#cdata-section",nodeValue:F[H]})}else if("!--"==P[1].substr(0,3)){var H=parseInt(P[1].replace("!--","").replace("--",""));z.childNodes.push({nodeType:f.COMMENT,nodeName:"#comment",nodeValue:D[H]})}}else{var R=P[1].replace(b,""),G={nodeType:f.ELEMENT,nodeName:R,localName:R,namespace:C,ownerDocument:I,attributes:[],parentNode:null,childNodes:[]};if(R.indexOf(":")>-1){var O=R.split(":");G.namespace=O[0],G.localName=O[1]}G.byName=G.getElementsByTagName=i,G.byNameNS=G.getElementsByTagNameNS=o,G.childrenByName=r,G.childrenByNameNS=n,G.getAttribute=s,G.getAttributeNS=d,G.setAttribute=l,G.setAttributeNS=c,G.previous=G.previousSibling=u,G.next=G.nextSibling=h;for(var q;null!=(q=p.exec(P[2]));)if(q.length>0){var R=q[1].replace(b,""),H=(q[4]||q[6]||"").replace(_," ").replace(x,">").replace(M,"<").replace(w,"'").replace(j,'"').replace(k,"&");if(0==R.indexOf("xmlns"))if(R.indexOf(":")>0){var V=R.split(":");I.namespaces[V[1]]=H,I._nsPaths[H]=V[1]}else I.namespaces[C]=H,I._nsPaths[H]=C;else{var W=R,V=C;if(R.indexOf(":")>0){var O=R.split(":");W=O[1],V=O[0]}G.attributes.push({nodeType:f.ATTRIBUTE,nodeName:R,localName:W,namespace:V,nodeValue:H}),"id"==W&&(G.id=H)}}I._add(G),z&&(z.childNodes.push(G),G.parentNode=z,"/"!=P[2].charAt(P[2].length-1)&&(z=G));var L=P[3];L.length>0&&z.childNodes.push(a(L))}for(var N=0;N<I.childNodes.length;N++){var U=I.childNodes[N];if(U.nodeType==f.ELEMENT){I.documentElement=U;break}}return I}},dojox.xml.DomParser});//# sourceMappingURL=DomParser.js.map