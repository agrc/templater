//>>built
define("dojox/fx/text",["dojo/_base/lang","./_base","dojo/_base/fx","dojo/fx","dojo/fx/easing","dojo/dom","dojo/dom-style","dojo/_base/html","dojo/_base/connect"],function(e,t,a,i,r,n,o,s,l){var d=e.getObject("dojox.fx.text",!0);return d._split=function(t){function a(i){var r=i.nextSibling;if("SPAN"==i.tagName&&1==i.childNodes.length&&3==i.firstChild.nodeType){var n=s.coords(i,!0);M++,o.set(i,{padding:0,margin:0,top:t.crop?"0px":n.t+"px",left:t.crop?"0px":n.l+"px",display:"inline"});var l=t.pieceAnimation(i,n,m,M,b);e.isArray(l)?p=p.concat(l):p[p.length]=l}else i.firstChild&&a(i.firstChild);r&&a(r)}var r=t.node=n.byId(t.node),d=r.style,u=o.getComputedStyle(r),m=s.coords(r,!0);t.duration=t.duration||1e3,t.words=t.words||!1;var c=t.text&&"string"==typeof t.text?t.text:r.innerHTML,h=d.height,f=d.width,p=[];o.set(r,{height:u.height,width:u.width});for(var g=/(<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)/g,y=t.words?/(<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)\s*|([^\s<]+\s*)/g:/(<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>)\s*|([^\s<]\s*)/g,v="string"==typeof t.text?t.text.match(y):r.innerHTML.match(y),k="",b=0,M=0,w=0;w<v.length;w++){var _=v[w];_.match(g)?k+=_:(k+="<span>"+_+"</span>",b++)}r.innerHTML=k,a(r.firstChild);var j=i.combine(p);return l.connect(j,"onEnd",j,function(){r.innerHTML=c,o.set(r,{height:h,width:f})}),t.onPlay&&l.connect(j,"onPlay",j,t.onPlay),t.onEnd&&l.connect(j,"onEnd",j,t.onEnd),j},d.explode=function(e){var t=e.node=n.byId(e.node);t.style;e.distance=e.distance||1,e.duration=e.duration||1e3,e.random=e.random||0,"undefined"==typeof e.fade&&(e.fade=!0),"undefined"==typeof e.sync&&(e.sync=!0),e.random=Math.abs(e.random),e.pieceAnimation=function(t,i,n,s,l){var d=i.h,u=i.w,m=2*e.distance,c=e.duration,h=parseFloat(t.style.top),f=parseFloat(t.style.left),p=0,g=0,y=0;if(e.random){var v=Math.random()*e.random+Math.max(1-e.random,0);m*=v,c*=v,p=e.unhide&&e.sync||!e.unhide&&!e.sync?e.duration-c:0,g=Math.random()-.5,y=Math.random()-.5}var k=(n.h-d)/2-(i.y-n.y),b=(n.w-u)/2-(i.x-n.x),M=Math.sqrt(Math.pow(b,2)+Math.pow(k,2)),w=h-k*m+M*y,_=f-b*m+M*g,j=a.animateProperty({node:t,duration:c,delay:p,easing:e.easing||(e.unhide?r.sinOut:r.circOut),beforeBegin:e.unhide?function(){e.fade&&o.set(t,"opacity",0),t.style.position=e.crop?"relative":"absolute",t.style.top=w+"px",t.style.left=_+"px"}:function(){t.style.position=e.crop?"relative":"absolute"},properties:{top:e.unhide?{start:w,end:h}:{start:h,end:w},left:e.unhide?{start:_,end:f}:{start:f,end:_}}});if(e.fade){var x=a.animateProperty({node:t,duration:c,delay:p,easing:e.fadeEasing||r.quadOut,properties:{opacity:e.unhide?{start:0,end:1}:{end:0}}});return e.unhide?[x,j]:[j,x]}return j};var i=d._split(e);return i},d.converge=function(e){return e.unhide=!0,d.explode(e)},d.disintegrate=function(e){var t=e.node=n.byId(e.node);t.style;e.duration=e.duration||1500,e.distance=e.distance||1.5,e.random=e.random||0,e.fade||(e.fade=!0);var i=Math.abs(e.random);e.pieceAnimation=function(t,n,s,l,d){var u=(n.h,n.w,e.interval||e.duration/(1.5*d)),m=e.duration-d*u,c=Math.random()*d*u,h=e.reverseOrder||e.distance<0?l*u:(d-l)*u,f=c*i+Math.max(1-i,0)*h,p={};e.unhide?(p.top={start:parseFloat(t.style.top)-s.h*e.distance,end:parseFloat(t.style.top)},e.fade&&(p.opacity={start:0,end:1})):(p.top={end:parseFloat(t.style.top)+s.h*e.distance},e.fade&&(p.opacity={end:0}));var g=a.animateProperty({node:t,duration:m,delay:f,easing:e.easing||(e.unhide?r.sinIn:r.circIn),properties:p,beforeBegin:e.unhide?function(){e.fade&&o.set(t,"opacity",0),t.style.position=e.crop?"relative":"absolute",t.style.top=p.top.start+"px"}:function(){t.style.position=e.crop?"relative":"absolute"}});return g};var s=d._split(e);return s},d.build=function(e){return e.unhide=!0,d.disintegrate(e)},d.blockFadeOut=function(e){var t=e.node=n.byId(e.node);t.style;e.duration=e.duration||1e3,e.random=e.random||0;var i=Math.abs(e.random);e.pieceAnimation=function(t,n,s,l,d){var u=e.interval||e.duration/(1.5*d),m=e.duration-d*u,c=Math.random()*d*u,h=e.reverseOrder?(d-l)*u:l*u,f=c*i+Math.max(1-i,0)*h,p=a.animateProperty({node:t,duration:m,delay:f,easing:e.easing||r.sinInOut,properties:{opacity:e.unhide?{start:0,end:1}:{end:0}},beforeBegin:e.unhide?function(){o.set(t,"opacity",0)}:void 0});return p};var s=d._split(e);return s},d.blockFadeIn=function(e){return e.unhide=!0,d.blockFadeOut(e)},d.backspace=function(e){var t=e.node=n.byId(e.node);t.style;e.words=!1,e.duration=e.duration||2e3,e.random=e.random||0;var i=Math.abs(e.random),s=10;e.pieceAnimation=function(t,n,l,d,u){var m=e.interval||e.duration/(1.5*u),c="textContent"in t?t.textContent:t.innerText,h=c.match(/\s/g);"undefined"==typeof e.wordDelay&&(e.wordDelay=2*m),e.unhide||(s=(u-d-1)*m);var f,p;if(e.fixed){if(e.unhide)var f=function(){o.set(t,"opacity",0)}}else if(e.unhide)var f=function(){t.style.display="none"},p=function(){t.style.display="inline"};else var p=function(){t.style.display="none"};var g=a.animateProperty({node:t,duration:1,delay:s,easing:e.easing||r.sinInOut,properties:{opacity:e.unhide?{start:0,end:1}:{end:0}},beforeBegin:f,onEnd:p});if(e.unhide){var y=Math.random()*c.length*m,v=y*i/2+Math.max(1-i/2,0)*e.wordDelay;s+=y*i+Math.max(1-i,0)*m*c.length+v*(h&&c.lastIndexOf(h[h.length-1])==c.length-1)}return g};var l=d._split(e);return l},d.type=function(e){return e.unhide=!0,d.backspace(e)},d});//# sourceMappingURL=text.js.map