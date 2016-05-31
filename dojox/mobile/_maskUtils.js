//>>built
define("dojox/mobile/_maskUtils",["dojo/_base/window","dojo/dom-style","./sniff"],function(e,t,i){i.add("mask-image-css",function(e,t,i){return"function"==typeof t.getCSSCanvasContext&&"undefined"!=typeof i.style.webkitMaskImage}),i.add("mask-image",function(){return i("mask-image-css")||i("svg")});var a={};return{createRoundMask:function(n,o,r,s,l,d,c,u,h,m){var f=o+d+s,p=r+c+l;if(i("mask-image-css")){var g=("DojoMobileMask"+o+r+d+c+u+h).replace(/\./g,"_");if(!a[g]){a[g]=1;var v=e.doc.getCSSCanvasContext("2d",g,f,p);if(v.beginPath(),u==h)2==u&&5==d?(v.fillStyle="rgba(0,0,0,0.5)",v.fillRect(1,0,3,2),v.fillRect(0,1,5,1),v.fillRect(0,c-2,5,1),v.fillRect(1,c-1,3,2),v.fillStyle="rgb(0,0,0)",v.fillRect(0,2,5,c-4)):2==u&&5==c?(v.fillStyle="rgba(0,0,0,0.5)",v.fillRect(0,1,2,3),v.fillRect(1,0,1,5),v.fillRect(d-2,0,1,5),v.fillRect(d-1,1,2,3),v.fillStyle="rgb(0,0,0)",v.fillRect(2,0,d-4,5)):(v.fillStyle="#000000",v.moveTo(o+u,r),v.arcTo(o,r,o,r+u,u),v.lineTo(o,r+c-u),v.arcTo(o,r+c,o+u,r+c,u),v.lineTo(o+d-u,r+c),v.arcTo(o+d,r+c,o+d,r+u,u),v.lineTo(o+d,r+u),v.arcTo(o+d,r,o+d-u,r,u));else{var y=Math.PI;v.scale(1,h/u),v.moveTo(o+u,r),v.arc(o+u,r+u,u,1.5*y,.5*y,!0),v.lineTo(o+d-u,r+2*u),v.arc(o+d-u,r+u,u,.5*y,1.5*y,!0)}v.closePath(),v.fill()}n.style.webkitMaskImage="-webkit-canvas("+g+")"}else if(i("svg")){n._svgMask&&n.removeChild(n._svgMask);for(var b=null,_=n.parentNode;_&&(b=t.getComputedStyle(_).backgroundColor,!b||"transparent"==b||b.match(/rgba\(.*,\s*0\s*\)/));_=_.parentNode);var k="http://www.w3.org/2000/svg",x=e.doc.createElementNS(k,"svg");x.setAttribute("width",f),x.setAttribute("height",p),x.style.position="absolute",x.style.pointerEvents="none",x.style.opacity="1",x.style.zIndex="2147483647";var w=e.doc.createElementNS(k,"path");m=m||0,u+=m,h+=m;var M=" M"+(o+u-m)+","+(r-m)+" a"+u+","+h+" 0 0,0 "+-u+","+h+" v"+-h+" h"+u+" Z M"+(o-m)+","+(r+c-h+m)+" a"+u+","+h+" 0 0,0 "+u+","+h+" h"+-u+" v"+-h+" z M"+(o+d-u+m)+","+(r+c+m)+" a"+u+","+h+" 0 0,0 "+u+","+-h+" v"+h+" h"+-u+" z M"+(o+d+m)+","+(r+h-m)+" a"+u+","+h+" 0 0,0 "+-u+","+-h+" h"+u+" v"+h+" z";r>0&&(M+=" M0,0 h"+f+" v"+r+" h"+-f+" z"),l>0&&(M+=" M0,"+(r+c)+" h"+f+" v"+l+" h"+-f+" z"),w.setAttribute("d",M),w.setAttribute("fill",b),w.setAttribute("stroke",b),w.style.opacity="1",x.appendChild(w),n._svgMask=x,n.appendChild(x)}}}});//# sourceMappingURL=_maskUtils.js.map